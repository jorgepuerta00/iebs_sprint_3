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
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface AvatarMarketplaceInterface extends ethers.utils.Interface {
  functions: {
    "cancelListing(uint256)": FunctionFragment;
    "commissionPercentage()": FunctionFragment;
    "getActiveListings()": FunctionFragment;
    "listNFT(uint256,uint256)": FunctionFragment;
    "listingId()": FunctionFragment;
    "listings(uint256)": FunctionFragment;
    "nftToken()": FunctionFragment;
    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)": FunctionFragment;
    "onERC1155Received(address,address,uint256,uint256,bytes)": FunctionFragment;
    "owner()": FunctionFragment;
    "pause()": FunctionFragment;
    "paused()": FunctionFragment;
    "purchaseNFT(uint256)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setNFTContract(address)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "totalCommissionEarned()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "unpause()": FunctionFragment;
    "updateCommissionPercentage(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "cancelListing",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "commissionPercentage",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getActiveListings",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "listNFT",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "listingId", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "listings",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "nftToken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "onERC1155BatchReceived",
    values: [string, string, BigNumberish[], BigNumberish[], BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC1155Received",
    values: [string, string, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "purchaseNFT",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setNFTContract",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "totalCommissionEarned",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "updateCommissionPercentage",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "cancelListing",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "commissionPercentage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getActiveListings",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "listNFT", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "listingId", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "listings", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nftToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155BatchReceived",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "purchaseNFT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setNFTContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalCommissionEarned",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateCommissionPercentage",
    data: BytesLike
  ): Result;

  events: {
    "CommissionPercentageUpdated(uint256)": EventFragment;
    "NFTContractUpdated(address)": EventFragment;
    "NFTListed(uint256,address,uint256,uint256,string)": EventFragment;
    "NFTListingCancelled(uint256,address,uint256,uint256,string)": EventFragment;
    "NFTPurchased(uint256,address,address,uint256,uint256,string)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Paused(address)": EventFragment;
    "SiliquaCoinUpdated(address)": EventFragment;
    "Unpaused(address)": EventFragment;
  };

  getEvent(
    nameOrSignatureOrTopic: "CommissionPercentageUpdated"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NFTContractUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NFTListed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NFTListingCancelled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NFTPurchased"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SiliquaCoinUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
}

export type CommissionPercentageUpdatedEvent = TypedEvent<
  [BigNumber] & { newCommissionPercentage: BigNumber }
>;

export type NFTContractUpdatedEvent = TypedEvent<
  [string] & { newNFTContractAddress: string }
>;

export type NFTListedEvent = TypedEvent<
  [BigNumber, string, BigNumber, BigNumber, string] & {
    listingId: BigNumber;
    seller: string;
    tokenId: BigNumber;
    price: BigNumber;
    status: string;
  }
>;

export type NFTListingCancelledEvent = TypedEvent<
  [BigNumber, string, BigNumber, BigNumber, string] & {
    listingId: BigNumber;
    seller: string;
    tokenId: BigNumber;
    price: BigNumber;
    status: string;
  }
>;

export type NFTPurchasedEvent = TypedEvent<
  [BigNumber, string, string, BigNumber, BigNumber, string] & {
    listingId: BigNumber;
    buyer: string;
    seller: string;
    tokenId: BigNumber;
    price: BigNumber;
    status: string;
  }
>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type PausedEvent = TypedEvent<[string] & { account: string }>;

export type SiliquaCoinUpdatedEvent = TypedEvent<
  [string] & { newSiliquaCoinAddress: string }
>;

export type UnpausedEvent = TypedEvent<[string] & { account: string }>;

export class AvatarMarketplace extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: AvatarMarketplaceInterface;

  functions: {
    cancelListing(
      _listingId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    commissionPercentage(overrides?: CallOverrides): Promise<[BigNumber]>;

    getActiveListings(
      overrides?: CallOverrides
    ): Promise<
      [
        ([BigNumber, string, BigNumber, BigNumber, boolean] & {
          listingId: BigNumber;
          seller: string;
          tokenId: BigNumber;
          price: BigNumber;
          isActive: boolean;
        })[]
      ] & {
        activeListings: ([BigNumber, string, BigNumber, BigNumber, boolean] & {
          listingId: BigNumber;
          seller: string;
          tokenId: BigNumber;
          price: BigNumber;
          isActive: boolean;
        })[];
      }
    >;

    listNFT(
      _tokenId: BigNumberish,
      _price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    listingId(overrides?: CallOverrides): Promise<[BigNumber]>;

    listings(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, BigNumber, BigNumber, boolean] & {
        listingId: BigNumber;
        seller: string;
        tokenId: BigNumber;
        price: BigNumber;
        isActive: boolean;
      }
    >;

    nftToken(overrides?: CallOverrides): Promise<[string]>;

    onERC1155BatchReceived(
      arg0: string,
      arg1: string,
      arg2: BigNumberish[],
      arg3: BigNumberish[],
      arg4: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    onERC1155Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    purchaseNFT(
      _listingId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setNFTContract(
      _nftContractAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    totalCommissionEarned(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateCommissionPercentage(
      _newCommissionPercentage: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  cancelListing(
    _listingId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  commissionPercentage(overrides?: CallOverrides): Promise<BigNumber>;

  getActiveListings(
    overrides?: CallOverrides
  ): Promise<
    ([BigNumber, string, BigNumber, BigNumber, boolean] & {
      listingId: BigNumber;
      seller: string;
      tokenId: BigNumber;
      price: BigNumber;
      isActive: boolean;
    })[]
  >;

  listNFT(
    _tokenId: BigNumberish,
    _price: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  listingId(overrides?: CallOverrides): Promise<BigNumber>;

  listings(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, string, BigNumber, BigNumber, boolean] & {
      listingId: BigNumber;
      seller: string;
      tokenId: BigNumber;
      price: BigNumber;
      isActive: boolean;
    }
  >;

  nftToken(overrides?: CallOverrides): Promise<string>;

  onERC1155BatchReceived(
    arg0: string,
    arg1: string,
    arg2: BigNumberish[],
    arg3: BigNumberish[],
    arg4: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  onERC1155Received(
    arg0: string,
    arg1: string,
    arg2: BigNumberish,
    arg3: BigNumberish,
    arg4: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  pause(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  purchaseNFT(
    _listingId: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setNFTContract(
    _nftContractAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  totalCommissionEarned(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unpause(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateCommissionPercentage(
    _newCommissionPercentage: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    cancelListing(
      _listingId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    commissionPercentage(overrides?: CallOverrides): Promise<BigNumber>;

    getActiveListings(
      overrides?: CallOverrides
    ): Promise<
      ([BigNumber, string, BigNumber, BigNumber, boolean] & {
        listingId: BigNumber;
        seller: string;
        tokenId: BigNumber;
        price: BigNumber;
        isActive: boolean;
      })[]
    >;

    listNFT(
      _tokenId: BigNumberish,
      _price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    listingId(overrides?: CallOverrides): Promise<BigNumber>;

    listings(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, BigNumber, BigNumber, boolean] & {
        listingId: BigNumber;
        seller: string;
        tokenId: BigNumber;
        price: BigNumber;
        isActive: boolean;
      }
    >;

    nftToken(overrides?: CallOverrides): Promise<string>;

    onERC1155BatchReceived(
      arg0: string,
      arg1: string,
      arg2: BigNumberish[],
      arg3: BigNumberish[],
      arg4: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    onERC1155Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    pause(overrides?: CallOverrides): Promise<void>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    purchaseNFT(
      _listingId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setNFTContract(
      _nftContractAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    totalCommissionEarned(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    unpause(overrides?: CallOverrides): Promise<void>;

    updateCommissionPercentage(
      _newCommissionPercentage: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "CommissionPercentageUpdated(uint256)"(
      newCommissionPercentage?: null
    ): TypedEventFilter<[BigNumber], { newCommissionPercentage: BigNumber }>;

    CommissionPercentageUpdated(
      newCommissionPercentage?: null
    ): TypedEventFilter<[BigNumber], { newCommissionPercentage: BigNumber }>;

    "NFTContractUpdated(address)"(
      newNFTContractAddress?: string | null
    ): TypedEventFilter<[string], { newNFTContractAddress: string }>;

    NFTContractUpdated(
      newNFTContractAddress?: string | null
    ): TypedEventFilter<[string], { newNFTContractAddress: string }>;

    "NFTListed(uint256,address,uint256,uint256,string)"(
      listingId?: BigNumberish | null,
      seller?: string | null,
      tokenId?: BigNumberish | null,
      price?: null,
      status?: null
    ): TypedEventFilter<
      [BigNumber, string, BigNumber, BigNumber, string],
      {
        listingId: BigNumber;
        seller: string;
        tokenId: BigNumber;
        price: BigNumber;
        status: string;
      }
    >;

    NFTListed(
      listingId?: BigNumberish | null,
      seller?: string | null,
      tokenId?: BigNumberish | null,
      price?: null,
      status?: null
    ): TypedEventFilter<
      [BigNumber, string, BigNumber, BigNumber, string],
      {
        listingId: BigNumber;
        seller: string;
        tokenId: BigNumber;
        price: BigNumber;
        status: string;
      }
    >;

    "NFTListingCancelled(uint256,address,uint256,uint256,string)"(
      listingId?: BigNumberish | null,
      seller?: string | null,
      tokenId?: BigNumberish | null,
      price?: null,
      status?: null
    ): TypedEventFilter<
      [BigNumber, string, BigNumber, BigNumber, string],
      {
        listingId: BigNumber;
        seller: string;
        tokenId: BigNumber;
        price: BigNumber;
        status: string;
      }
    >;

    NFTListingCancelled(
      listingId?: BigNumberish | null,
      seller?: string | null,
      tokenId?: BigNumberish | null,
      price?: null,
      status?: null
    ): TypedEventFilter<
      [BigNumber, string, BigNumber, BigNumber, string],
      {
        listingId: BigNumber;
        seller: string;
        tokenId: BigNumber;
        price: BigNumber;
        status: string;
      }
    >;

    "NFTPurchased(uint256,address,address,uint256,uint256,string)"(
      listingId?: BigNumberish | null,
      buyer?: string | null,
      seller?: string | null,
      tokenId?: null,
      price?: null,
      status?: null
    ): TypedEventFilter<
      [BigNumber, string, string, BigNumber, BigNumber, string],
      {
        listingId: BigNumber;
        buyer: string;
        seller: string;
        tokenId: BigNumber;
        price: BigNumber;
        status: string;
      }
    >;

    NFTPurchased(
      listingId?: BigNumberish | null,
      buyer?: string | null,
      seller?: string | null,
      tokenId?: null,
      price?: null,
      status?: null
    ): TypedEventFilter<
      [BigNumber, string, string, BigNumber, BigNumber, string],
      {
        listingId: BigNumber;
        buyer: string;
        seller: string;
        tokenId: BigNumber;
        price: BigNumber;
        status: string;
      }
    >;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    "Paused(address)"(
      account?: null
    ): TypedEventFilter<[string], { account: string }>;

    Paused(account?: null): TypedEventFilter<[string], { account: string }>;

    "SiliquaCoinUpdated(address)"(
      newSiliquaCoinAddress?: string | null
    ): TypedEventFilter<[string], { newSiliquaCoinAddress: string }>;

    SiliquaCoinUpdated(
      newSiliquaCoinAddress?: string | null
    ): TypedEventFilter<[string], { newSiliquaCoinAddress: string }>;

    "Unpaused(address)"(
      account?: null
    ): TypedEventFilter<[string], { account: string }>;

    Unpaused(account?: null): TypedEventFilter<[string], { account: string }>;
  };

  estimateGas: {
    cancelListing(
      _listingId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    commissionPercentage(overrides?: CallOverrides): Promise<BigNumber>;

    getActiveListings(overrides?: CallOverrides): Promise<BigNumber>;

    listNFT(
      _tokenId: BigNumberish,
      _price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    listingId(overrides?: CallOverrides): Promise<BigNumber>;

    listings(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    nftToken(overrides?: CallOverrides): Promise<BigNumber>;

    onERC1155BatchReceived(
      arg0: string,
      arg1: string,
      arg2: BigNumberish[],
      arg3: BigNumberish[],
      arg4: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    onERC1155Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    purchaseNFT(
      _listingId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setNFTContract(
      _nftContractAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalCommissionEarned(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateCommissionPercentage(
      _newCommissionPercentage: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    cancelListing(
      _listingId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    commissionPercentage(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getActiveListings(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    listNFT(
      _tokenId: BigNumberish,
      _price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    listingId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    listings(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nftToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    onERC1155BatchReceived(
      arg0: string,
      arg1: string,
      arg2: BigNumberish[],
      arg3: BigNumberish[],
      arg4: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    onERC1155Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    purchaseNFT(
      _listingId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setNFTContract(
      _nftContractAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalCommissionEarned(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateCommissionPercentage(
      _newCommissionPercentage: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
