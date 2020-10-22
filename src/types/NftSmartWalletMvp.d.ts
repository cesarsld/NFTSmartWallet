/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface NftSmartWalletMvpInterface extends ethers.utils.Interface {
  functions: {
    "approveNFTAgreement(address,address,uint256)": FunctionFragment;
    "authority()": FunctionFragment;
    "cancelNFTAgreement(address,address,uint256)": FunctionFragment;
    "depositNFT(address,uint256)": FunctionFragment;
    "depositToken(address,uint256)": FunctionFragment;
    "lendingRegistry()": FunctionFragment;
    "onERC721Received(address,address,uint256,bytes)": FunctionFragment;
    "owner()": FunctionFragment;
    "proposeNFTAgreement(address,uint256,address,uint256)": FunctionFragment;
    "refuseNFTAgreement(address,address,uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "unlockNFT(address,uint256)": FunctionFragment;
    "withdrawAllToken(address)": FunctionFragment;
    "withdrawNFT(address,uint256)": FunctionFragment;
    "withdrawToken(address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "approveNFTAgreement",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "authority", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "cancelNFTAgreement",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "depositNFT",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "depositToken",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "lendingRegistry",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "onERC721Received",
    values: [string, string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "proposeNFTAgreement",
    values: [string, BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "refuseNFTAgreement",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "unlockNFT",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawAllToken",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawNFT",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawToken",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "approveNFTAgreement",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "authority", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "cancelNFTAgreement",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "depositNFT", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "depositToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lendingRegistry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC721Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "proposeNFTAgreement",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "refuseNFTAgreement",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unlockNFT", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawAllToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawNFT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawToken",
    data: BytesLike
  ): Result;

  events: {};
}

export class NftSmartWalletMvp extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: NftSmartWalletMvpInterface;

  functions: {
    approveNFTAgreement(
      _lender: string,
      _nft: string,
      _tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "approveNFTAgreement(address,address,uint256)"(
      _lender: string,
      _nft: string,
      _tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    authority(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "authority()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    cancelNFTAgreement(
      _borrower: string,
      _nft: string,
      _tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "cancelNFTAgreement(address,address,uint256)"(
      _borrower: string,
      _nft: string,
      _tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    depositNFT(
      _nft: string,
      _tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "depositNFT(address,uint256)"(
      _nft: string,
      _tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    depositToken(
      _token: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "depositToken(address,uint256)"(
      _token: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    lendingRegistry(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "lendingRegistry()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "onERC721Received(address,address,uint256,bytes)"(
      _operator: string,
      _from: string,
      _tokenId: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "onERC721Received(address,uint256,bytes)"(
      _from: string,
      _tokenId: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    owner(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "owner()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    proposeNFTAgreement(
      _nft: string,
      _tokenId: BigNumberish,
      _borrower: string,
      _endDate: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "proposeNFTAgreement(address,uint256,address,uint256)"(
      _nft: string,
      _tokenId: BigNumberish,
      _borrower: string,
      _endDate: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    refuseNFTAgreement(
      _lender: string,
      _nft: string,
      _tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "refuseNFTAgreement(address,address,uint256)"(
      _lender: string,
      _nft: string,
      _tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    transferOwnership(
      _newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      _newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    unlockNFT(
      _nft: string,
      _tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "unlockNFT(address,uint256)"(
      _nft: string,
      _tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    withdrawAllToken(
      _token: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "withdrawAllToken(address)"(
      _token: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    withdrawNFT(
      _nft: string,
      _tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "withdrawNFT(address,uint256)"(
      _nft: string,
      _tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    withdrawToken(
      _token: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "withdrawToken(address,uint256)"(
      _token: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  approveNFTAgreement(
    _lender: string,
    _nft: string,
    _tokenId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "approveNFTAgreement(address,address,uint256)"(
    _lender: string,
    _nft: string,
    _tokenId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  authority(overrides?: CallOverrides): Promise<string>;

  "authority()"(overrides?: CallOverrides): Promise<string>;

  cancelNFTAgreement(
    _borrower: string,
    _nft: string,
    _tokenId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "cancelNFTAgreement(address,address,uint256)"(
    _borrower: string,
    _nft: string,
    _tokenId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  depositNFT(
    _nft: string,
    _tokenId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "depositNFT(address,uint256)"(
    _nft: string,
    _tokenId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  depositToken(
    _token: string,
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "depositToken(address,uint256)"(
    _token: string,
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  lendingRegistry(overrides?: CallOverrides): Promise<string>;

  "lendingRegistry()"(overrides?: CallOverrides): Promise<string>;

  "onERC721Received(address,address,uint256,bytes)"(
    _operator: string,
    _from: string,
    _tokenId: BigNumberish,
    _data: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  "onERC721Received(address,uint256,bytes)"(
    _from: string,
    _tokenId: BigNumberish,
    _data: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  proposeNFTAgreement(
    _nft: string,
    _tokenId: BigNumberish,
    _borrower: string,
    _endDate: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "proposeNFTAgreement(address,uint256,address,uint256)"(
    _nft: string,
    _tokenId: BigNumberish,
    _borrower: string,
    _endDate: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  refuseNFTAgreement(
    _lender: string,
    _nft: string,
    _tokenId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "refuseNFTAgreement(address,address,uint256)"(
    _lender: string,
    _nft: string,
    _tokenId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  transferOwnership(
    _newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    _newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  unlockNFT(
    _nft: string,
    _tokenId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "unlockNFT(address,uint256)"(
    _nft: string,
    _tokenId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  withdrawAllToken(
    _token: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "withdrawAllToken(address)"(
    _token: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  withdrawNFT(
    _nft: string,
    _tokenId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "withdrawNFT(address,uint256)"(
    _nft: string,
    _tokenId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  withdrawToken(
    _token: string,
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "withdrawToken(address,uint256)"(
    _token: string,
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    approveNFTAgreement(
      _lender: string,
      _nft: string,
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "approveNFTAgreement(address,address,uint256)"(
      _lender: string,
      _nft: string,
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    authority(overrides?: CallOverrides): Promise<string>;

    "authority()"(overrides?: CallOverrides): Promise<string>;

    cancelNFTAgreement(
      _borrower: string,
      _nft: string,
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "cancelNFTAgreement(address,address,uint256)"(
      _borrower: string,
      _nft: string,
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    depositNFT(
      _nft: string,
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "depositNFT(address,uint256)"(
      _nft: string,
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    depositToken(
      _token: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "depositToken(address,uint256)"(
      _token: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    lendingRegistry(overrides?: CallOverrides): Promise<string>;

    "lendingRegistry()"(overrides?: CallOverrides): Promise<string>;

    "onERC721Received(address,address,uint256,bytes)"(
      _operator: string,
      _from: string,
      _tokenId: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "onERC721Received(address,uint256,bytes)"(
      _from: string,
      _tokenId: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    proposeNFTAgreement(
      _nft: string,
      _tokenId: BigNumberish,
      _borrower: string,
      _endDate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "proposeNFTAgreement(address,uint256,address,uint256)"(
      _nft: string,
      _tokenId: BigNumberish,
      _borrower: string,
      _endDate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    refuseNFTAgreement(
      _lender: string,
      _nft: string,
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "refuseNFTAgreement(address,address,uint256)"(
      _lender: string,
      _nft: string,
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      _newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      _newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    unlockNFT(
      _nft: string,
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "unlockNFT(address,uint256)"(
      _nft: string,
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawAllToken(_token: string, overrides?: CallOverrides): Promise<void>;

    "withdrawAllToken(address)"(
      _token: string,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawNFT(
      _nft: string,
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "withdrawNFT(address,uint256)"(
      _nft: string,
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawToken(
      _token: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "withdrawToken(address,uint256)"(
      _token: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    approveNFTAgreement(
      _lender: string,
      _nft: string,
      _tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "approveNFTAgreement(address,address,uint256)"(
      _lender: string,
      _nft: string,
      _tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    authority(overrides?: CallOverrides): Promise<BigNumber>;

    "authority()"(overrides?: CallOverrides): Promise<BigNumber>;

    cancelNFTAgreement(
      _borrower: string,
      _nft: string,
      _tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "cancelNFTAgreement(address,address,uint256)"(
      _borrower: string,
      _nft: string,
      _tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    depositNFT(
      _nft: string,
      _tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "depositNFT(address,uint256)"(
      _nft: string,
      _tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    depositToken(
      _token: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "depositToken(address,uint256)"(
      _token: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    lendingRegistry(overrides?: CallOverrides): Promise<BigNumber>;

    "lendingRegistry()"(overrides?: CallOverrides): Promise<BigNumber>;

    "onERC721Received(address,address,uint256,bytes)"(
      _operator: string,
      _from: string,
      _tokenId: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "onERC721Received(address,uint256,bytes)"(
      _from: string,
      _tokenId: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    proposeNFTAgreement(
      _nft: string,
      _tokenId: BigNumberish,
      _borrower: string,
      _endDate: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "proposeNFTAgreement(address,uint256,address,uint256)"(
      _nft: string,
      _tokenId: BigNumberish,
      _borrower: string,
      _endDate: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    refuseNFTAgreement(
      _lender: string,
      _nft: string,
      _tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "refuseNFTAgreement(address,address,uint256)"(
      _lender: string,
      _nft: string,
      _tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    transferOwnership(
      _newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      _newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    unlockNFT(
      _nft: string,
      _tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "unlockNFT(address,uint256)"(
      _nft: string,
      _tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    withdrawAllToken(_token: string, overrides?: Overrides): Promise<BigNumber>;

    "withdrawAllToken(address)"(
      _token: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    withdrawNFT(
      _nft: string,
      _tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "withdrawNFT(address,uint256)"(
      _nft: string,
      _tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    withdrawToken(
      _token: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "withdrawToken(address,uint256)"(
      _token: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    approveNFTAgreement(
      _lender: string,
      _nft: string,
      _tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "approveNFTAgreement(address,address,uint256)"(
      _lender: string,
      _nft: string,
      _tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    authority(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "authority()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    cancelNFTAgreement(
      _borrower: string,
      _nft: string,
      _tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "cancelNFTAgreement(address,address,uint256)"(
      _borrower: string,
      _nft: string,
      _tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    depositNFT(
      _nft: string,
      _tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "depositNFT(address,uint256)"(
      _nft: string,
      _tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    depositToken(
      _token: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "depositToken(address,uint256)"(
      _token: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    lendingRegistry(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "lendingRegistry()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "onERC721Received(address,address,uint256,bytes)"(
      _operator: string,
      _from: string,
      _tokenId: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "onERC721Received(address,uint256,bytes)"(
      _from: string,
      _tokenId: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proposeNFTAgreement(
      _nft: string,
      _tokenId: BigNumberish,
      _borrower: string,
      _endDate: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "proposeNFTAgreement(address,uint256,address,uint256)"(
      _nft: string,
      _tokenId: BigNumberish,
      _borrower: string,
      _endDate: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    refuseNFTAgreement(
      _lender: string,
      _nft: string,
      _tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "refuseNFTAgreement(address,address,uint256)"(
      _lender: string,
      _nft: string,
      _tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      _newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      _newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    unlockNFT(
      _nft: string,
      _tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "unlockNFT(address,uint256)"(
      _nft: string,
      _tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    withdrawAllToken(
      _token: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "withdrawAllToken(address)"(
      _token: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    withdrawNFT(
      _nft: string,
      _tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "withdrawNFT(address,uint256)"(
      _nft: string,
      _tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    withdrawToken(
      _token: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "withdrawToken(address,uint256)"(
      _token: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
