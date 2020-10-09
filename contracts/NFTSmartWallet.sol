// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;

library SafeMath {
	function add(uint256 a, uint256 b) internal pure returns (uint256) {
		uint256 c = a + b;
		require(c >= a, "SafeMath: addition overflow");
		return c;
	}

	function sub(uint256 a, uint256 b) internal pure returns (uint256) {
		return sub(a, b, "SafeMath: subtraction overflow");
	}

	function sub(uint256 a, uint256 b, string memory errorMessage) internal pure returns (uint256) {
		require(b <= a, errorMessage);
		uint256 c = a - b;
		return c;
	}

	function mul(uint256 a, uint256 b) internal pure returns (uint256) {
		if (a == 0) {
			return 0;
		}
		uint256 c = a * b;
		require(c / a == b, "SafeMath: multiplication overflow");
		return c;
	}

	function div(uint256 a, uint256 b) internal pure returns (uint256) {
		return div(a, b, "SafeMath: division by zero");
	}

	function div(uint256 a, uint256 b, string memory errorMessage) internal pure returns (uint256) {
		// Solidity only automatically asserts when dividing by 0
		require(b > 0, errorMessage);
		uint256 c = a / b;
		return c;
	}

	function mod(uint256 a, uint256 b) internal pure returns (uint256) {
		return mod(a, b, "SafeMath: modulo by zero");
	}

	function mod(uint256 a, uint256 b, string memory errorMessage) internal pure returns (uint256) {
		require(b != 0, errorMessage);
		return a % b;
	}
}

interface IERC20 {
	function totalSupply() external view returns (uint256);
	function balanceOf(address account) external view returns (uint256);
	function transfer(address recipient, uint256 amount) external returns (bool);
	function allowance(address owner, address spender) external view returns (uint256);
	function approve(address spender, uint256 amount) external returns (bool);
	function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
	event Transfer(address indexed from, address indexed to, uint256 value);
	event Approval(address indexed owner, address indexed spender, uint256 value);
}

interface IERC721 {
    function balanceOf(address owner) external view returns (uint256 balance);
    function ownerOf(uint256 tokenId) external view returns (address owner);
    function safeTransferFrom(address from, address to, uint256 tokenId) external;
    function transferFrom(address from, address to, uint256 tokenId) external;
    function approve(address to, uint256 tokenId) external;
    function getApproved(uint256 tokenId) external view returns (address operator);
    function setApprovalForAll(address operator, bool _approved) external;
    function isApprovedForAll(address owner, address operator) external view returns (bool);
    function safeTransferFrom(address from, address to, uint256 tokenId, bytes calldata data) external;
}

library Address {
    function isContract(address account) internal view returns (bool) {
        // This method relies on extcodesize, which returns 0 for contracts in
        // construction, since the code is only stored at the end of the
        // constructor execution.

        uint256 size;
        // solhint-disable-next-line no-inline-assembly
        assembly { size := extcodesize(account) }
        return size > 0;
    }
	function toPayable(address account) internal pure returns (address payable) {
		return address(uint160(account));
	}
	function sendValue(address payable recipient, uint256 amount) internal {
		require(address(this).balance >= amount, "Address: insufficient balance");

		// solhint-disable-next-line avoid-call-value
		(bool success, ) = recipient.call{ value: amount }("");
		require(success, "Address: unable to send value, recipient may have reverted");
	}
}

library SafeERC20 {
	using SafeMath for uint256;
	using Address for address;

	function safeTransfer(IERC20 token, address to, uint256 value) internal {
		callOptionalReturn(token, abi.encodeWithSelector(token.transfer.selector, to, value));
	}

	function safeTransferFrom(IERC20 token, address from, address to, uint256 value) internal {
		callOptionalReturn(token, abi.encodeWithSelector(token.transferFrom.selector, from, to, value));
	}

	function safeApprove(IERC20 token, address spender, uint256 value) internal {
		require((value == 0) || (token.allowance(address(this), spender) == 0),
			"SafeERC20: approve from non-zero to non-zero allowance"
		);
		callOptionalReturn(token, abi.encodeWithSelector(token.approve.selector, spender, value));
	}
	function callOptionalReturn(IERC20 token, bytes memory data) private {
		require(address(token).isContract(), "SafeERC20: call to non-contract");

		// solhint-disable-next-line avoid-low-level-calls
		(bool success, bytes memory returndata) = address(token).call(data);
		require(success, "SafeERC20: low-level call failed");

		if (returndata.length > 0) { // Return data is optional
			// solhint-disable-next-line max-line-length
			require(abi.decode(returndata, (bool)), "SafeERC20: ERC20 operation did not succeed");
		}
	}
}

abstract contract Ownable {
	address public owner;

	constructor(address _newOwner) {
		owner = _newOwner;
	}

	modifier onlyOwner() {
		require(msg.sender == owner, "Ownable: msg.sender is not the owner of this wallet");
		_;
	}

	function transferOwnership(address _newOwner) virtual public onlyOwner {
		require (_newOwner != address(0), "Ownable: Cannot be void address");
		owner = _newOwner;
	}
}

abstract contract ERC721ReceiverOld {
	function onERC721Received(address _from, uint256 _tokenId, bytes calldata _data) pure external returns (bytes4) {
		return ERC721ReceiverOld.onERC721Received.selector;
	}
}

abstract contract ERC721ReceiverNew {
	function onERC721Received(address _operator, address _from, uint256 _tokenId, bytes calldata _data) pure external returns (bytes4) {
		return ERC721ReceiverNew.onERC721Received.selector;
	}
}

interface LendingRegistry {
	function proposeAgreement(
		address _lender,
		address _borrower,
		address _nft,
		uint256 _tokenId,
		uint256 _endDate)
		external;

	function approveAgreement(
		address _lender,
		address _borrower,
		address _nft,
		uint256 _tokenId)
		external;

	function refuseAgreement(
		address _lender,
		address _borrower,
		address _nft,
		uint256 _tokenId)
		external;
	
	function cancelAgreement(
		address _lender,
		address _borrower,
		address _nft,
		uint256 _tokenId)
		external;

	function getAgreement(
		address _lender,
		address _borrower,
		address _nft,
		uint256 _tokenId)
		external view returns (uint8, uint256);

	function concludeAgreement(
		address _lender,
		address _borrower,
		address _nft,
		uint256 _tokenId)
		external;
}

contract NFTSmartWalletMVP is Ownable, ERC721ReceiverNew, ERC721ReceiverOld {
	using SafeMath for uint256;
	using SafeERC20 for IERC20;

	NFTSmartWalletAuthority public authority;
	LendingRegistry public lendingRegistry;

	mapping(address => uint256) tokensOwned;
	mapping(address => mapping(uint256 => bool)) NFTsInAgreement;

	constructor(address _newOwner, address _authority, address _lendingRegistry) Ownable(_newOwner) {
		authority = NFTSmartWalletAuthority(_authority);
		lendingRegistry = LendingRegistry(_lendingRegistry);
	}

	function transferOwnership(address _newOwner) public override onlyOwner{
		super.transferOwnership(_newOwner);
		authority.updateWalletOwner(address(this), _newOwner);
	}

	function depositToken(address _token, uint256 _amount) external onlyOwner {
		tokensOwned[_token] = tokensOwned[_token].add(_amount);
		IERC20(_token).safeTransferFrom(msg.sender, address(this), _amount);
	}

	function withdrawAllToken(address _token) external onlyOwner {
		uint _amount = tokensOwned[_token];
		withdrawToken(_token, _amount);
	}

	function withdrawToken(address _token, uint256 _amount) public onlyOwner {
		tokensOwned[_token] = tokensOwned[_token].sub(_amount);
		IERC20(_token).safeTransfer(msg.sender, _amount);
	}

	function depositNFT(address _nft, uint256 _tokenId) external onlyOwner {
		IERC721(_nft).safeTransferFrom(msg.sender, address(this), _tokenId);
	}

	function withdrawNFT(address _nft, uint256 _tokenId) external onlyOwner {
		require (!NFTsInAgreement[_nft][_tokenId], "NFTSmartWallet: NFT is in agreement, you cannot withdraw it");
		IERC721(_nft).safeTransferFrom(address(this), msg.sender, _tokenId);
	}

	function proposeNFTAgreement(address _nft, uint256 _tokenId, address _borrower, uint256 _endDate) external onlyOwner {
		require(authority.walletToOwner(_borrower) != address(0), "NFTSmartWallet: Borrower is not an NFT smart wallet.");
		require(IERC721(_nft).ownerOf(_tokenId) == address(this), "NFTSmartWallet: NFT smart wallet does not own NFT.");
		require(!NFTsInAgreement[_nft][_tokenId], "NFTSmartWallet: NFT is in agreement.");
		NFTsInAgreement[_nft][_tokenId] = true;
		lendingRegistry.proposeAgreement(address(this), _borrower, _nft, _tokenId, _endDate);
		if(!IERC721(_nft).isApprovedForAll(address(this), address(authority)))
			IERC721(_nft).setApprovalForAll(address(authority), true);
	}

	function approveNFTAgreement(address _lender, address _nft, uint256 _tokenId) external onlyOwner {
		require(authority.walletToOwner(_lender) != address(0), "NFTSmartWallet: Lender is not an NFT smart wallet.");
		NFTsInAgreement[_nft][_tokenId] = true;
		lendingRegistry.approveAgreement(_lender, address(this), _nft, _tokenId);
		if(!IERC721(_nft).isApprovedForAll(address(this), address(authority)))
			IERC721(_nft).setApprovalForAll(address(authority), true);
		authority.transferNFT(_lender, address(this), _nft, _tokenId);
	}

	function refuseNFTAgreement(address _lender, address _nft, uint256 _tokenId) external onlyOwner {
		require(authority.walletToOwner(_lender) != address(0), "NFTSmartWallet: Lender is not an NFT smart wallet.");
		lendingRegistry.refuseAgreement(_lender, address(this), _nft, _tokenId);
	}

	function cancelNFTAgreement(address _borrower, address _nft, uint256 _tokenId) external onlyOwner {
		require(authority.walletToOwner(_borrower) != address(0), "NFTSmartWallet: Borrower is not an NFT smart wallet.");
		lendingRegistry.cancelAgreement(address(this), _borrower, _nft, _tokenId);
	}

	function unlockNFT(address _nft, uint _tokenId) external {
		require(msg.sender == address(lendingRegistry) || msg.sender == address(authority), "NFTSmartWallet: Call did not originate from Lending Registry.");
		NFTsInAgreement[_nft][_tokenId] = false;
	}
}

contract NFTSmartWalletAuthority {

	LendingRegistry public lendingRegistry;
	// wallet => owner
	mapping(address => address) private _walletToOwner;

	event WalletCreated(address wallet);
	event NewWalletOwner(address indexed wallet, address indexed newOwner);

	function walletToOwner(address _wallet) public view returns (address) {
		return _walletToOwner[_wallet];
	}

	function createWallet() external returns (address) {
		NFTSmartWalletMVP newWallet = new NFTSmartWalletMVP(msg.sender, address(this), address(lendingRegistry));
		_walletToOwner[address(newWallet)] = msg.sender;
		emit WalletCreated(address(newWallet));
		return address(newWallet);
	}

	function updateWalletOwner(address _wallet, address _newOwner) external {
		require(walletToOwner(msg.sender) != address(0), "NFTSmartWalletAuthority: Function call did not originate from valid wallet.");
		_walletToOwner[_wallet] = _newOwner;
		emit NewWalletOwner(_wallet, _newOwner);
	}

	function concludeNFTAgreement(address _lender, address _borrower, address _nft, uint256 _tokenId) external {
		(uint8 state,uint endDate) = lendingRegistry.getAgreement(_lender, _borrower, _nft, _tokenId);
		require(state == 1 && endDate < block.timestamp, "NFTSmartWalletAuthority: Agreement isn't over or does not exist.");
		lendingRegistry.concludeAgreement(_lender, _borrower, _nft, _tokenId);
		NFTSmartWalletMVP(_lender).unlockNFT(_nft, _tokenId);
		NFTSmartWalletMVP(_borrower).unlockNFT(_nft, _tokenId);
		IERC721(_nft).safeTransferFrom(_borrower, _lender, _tokenId);
	}

	function transferNFT(address _lender, address _borrower, address _nft, uint256 _tokenId) external {
		(uint8 state,uint endDate) = lendingRegistry.getAgreement(_lender, _borrower, _nft, _tokenId);
		require(endDate > block.timestamp && state == 1, "NFTSmartWalletAuthority: Agreement expired or not set");
		require(msg.sender == _borrower, "NFTSmartWalletAuthority: Caller is not the NFT receiver");
		require(walletToOwner(_lender) != address (0) && walletToOwner(_borrower) != address(0), "NFTSmartWalletAuthority: Sender and receiver are not valid wallets.");
		IERC721(_nft).safeTransferFrom(_lender, _borrower, _tokenId);
	}
}