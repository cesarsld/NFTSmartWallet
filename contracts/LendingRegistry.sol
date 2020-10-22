// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;

interface NFTSmartWalletAuthority {
	function walletToOwner(address _wallet) external view returns (address);
}

interface NFTSmartWalletMVP {
	function unlockNFT(address _nft, uint _tokenId) external;
}

abstract contract Ownable {
	address public owner;

	constructor() {
		owner = msg.sender;
	}

	modifier onlyOwner() {
		require(msg.sender == owner, "Ownable: msg.sender is not the owner of this wallet");
		_;
	}

	function transferOwnership(address _newOwner) external onlyOwner {
		require (_newOwner != address(0), "Ownable: Cannot be void address");
		owner = _newOwner;
	}
}

contract LendingRegistry is Ownable {

	enum State {PENDING, APPROVED}

	struct Agreement {
		State	state;
		uint256	endDate;
	}

	NFTSmartWalletAuthority public controller;

	mapping(address => mapping(address => mapping (address => mapping(uint256 => Agreement)))) private registry;
	mapping(address => mapping(uint256 => bool)) private agreementLookup;

	event AgreementProposed(address indexed lender, address indexed borrower, address nft, uint256 tokenId, uint256 endDate);
	event AgreementApproved(address indexed lender, address indexed borrower, address nft, uint256 tokenId, uint256 endDate);
	event AgreementRefused(address indexed lender, address indexed borrower, address nft, uint256 tokenId);
	event AgreementCancelled(address indexed lender, address indexed borrower, address nft, uint256 tokenId);
	event AgreementConcluded(address indexed lender, address indexed borrower, address nft, uint256 tokenId);

	constructor(address _controller) {
		controller = NFTSmartWalletAuthority(_controller);
	}

	modifier onlyController() {
		require(msg.sender == address(controller), "LendingRegistry: Function caller is not the controller");
		_;
	}

	// this modifier ensures that the caller is an NFT smart wallet. Anyother address will fail
	modifier isValidWallet() {
		require(controller.walletToOwner(msg.sender) != address(0), "LendingRegistry: Wallet is not valid");
		_;
	}

	function setController(address _newController) external onlyOwner {
		controller = NFTSmartWalletAuthority(_newController);
	}

	function checkIfAgreementExists(address _nft, uint256 _tokenId) public view returns (bool) {
		return agreementLookup[_nft][_tokenId];
	}

	function getAgreement(
		address _lender,
		address _borrower,
		address _nft,
		uint256 _tokenId)
		public view returns (uint8, uint256) {
		Agreement memory agreement = registry[_lender][_borrower][_nft][_tokenId];
		return (uint8(agreement.state), agreement.endDate);
	}

	function proposeAgreement(
		address _lender,
		address _borrower,
		address _nft,
		uint256 _tokenId,
		uint256 _endDate)
		external isValidWallet {
		require(_endDate > block.timestamp, "LendingRegistry: Agreement duration not valid.");
		registry[_lender][_borrower][_nft][_tokenId] = Agreement(State.PENDING, _endDate);
		emit AgreementProposed(_lender, _borrower, _nft, _tokenId, _endDate);
	}

	function approveAgreement(
		address _lender,
		address _borrower,
		address _nft,
		uint256 _tokenId)
		external
		isValidWallet {
		Agreement storage agreement = registry[_lender][_borrower][_nft][_tokenId];
		require(agreement.endDate > block.timestamp && agreement.state == State.PENDING, "LendingRegistry: Agreement duration has expired or not set.");
		agreement.state = State.APPROVED;
		emit AgreementApproved(_lender, _borrower, _nft, _tokenId, agreement.endDate);
	}

	function refuseAgreement(
		address _lender,
		address _borrower,
		address _nft,
		uint256 _tokenId)
		external
		isValidWallet {
		require(msg.sender == _borrower, "LendingRegistry: Caller is not borrower");
		Agreement storage agreement = registry[_lender][_borrower][_nft][_tokenId];
		require(agreement.endDate > block.timestamp && agreement.state == State.PENDING, "LendingRegistry: Agreement duration expired or not set.");
		delete registry[_lender][_borrower][_nft][_tokenId];
		NFTSmartWalletMVP(_lender).unlockNFT(_nft, _tokenId);
		emit AgreementRefused(_lender, _borrower, _nft, _tokenId);
	}

	function cancelAgreement(
		address _lender,
		address _borrower,
		address _nft,
		uint256 _tokenId)
		external
		isValidWallet {
		require(msg.sender == _lender, "LendingRegistry: Caller is not borrower");
		Agreement storage agreement = registry[_lender][_borrower][_nft][_tokenId];
		require(agreement.state == State.PENDING, "LendingRegistry: Agreement is not pending.");
		delete registry[_lender][_borrower][_nft][_tokenId];
		NFTSmartWalletMVP(_lender).unlockNFT(_nft, _tokenId);
		emit AgreementCancelled(_lender, _borrower, _nft, _tokenId);
	}

	function concludeAgreement(
		address _lender,
		address _borrower,
		address _nft,
		uint256 _tokenId)
		external
		onlyController {
			delete registry[_lender][_borrower][_nft][_tokenId];
			emit AgreementConcluded(_lender, _borrower, _nft, _tokenId);
		}
}