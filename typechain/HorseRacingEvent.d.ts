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

interface HorseRacingEventInterface extends ethers.utils.Interface {
  functions: {
    "createRace(uint256,uint256,uint256[])": FunctionFragment;
    "endRace(uint256,uint256[])": FunctionFragment;
    "enterHorseInRace(uint256,uint256)": FunctionFragment;
    "getIsActiveRace(uint256)": FunctionFragment;
    "getRaceResults(uint256)": FunctionFragment;
    "horsesNFTContract()": FunctionFragment;
    "nextRaceId()": FunctionFragment;
    "owner()": FunctionFragment;
    "races(uint256)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "startRace(uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "createRace",
    values: [BigNumberish, BigNumberish, BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "endRace",
    values: [BigNumberish, BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "enterHorseInRace",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getIsActiveRace",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRaceResults",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "horsesNFTContract",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "nextRaceId",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "races", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "startRace",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "createRace", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "endRace", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "enterHorseInRace",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getIsActiveRace",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRaceResults",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "horsesNFTContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "nextRaceId", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "races", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "startRace", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "HorseEnteredRace(uint256,address,uint256)": EventFragment;
    "HorseWithdrawn(uint256,address,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "RaceCreated(uint256,uint256,uint256,uint256[])": EventFragment;
    "RaceEnded(uint256,uint256[])": EventFragment;
    "RaceStarted(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "HorseEnteredRace"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "HorseWithdrawn"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RaceCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RaceEnded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RaceStarted"): EventFragment;
}

export type HorseEnteredRaceEvent = TypedEvent<
  [BigNumber, string, BigNumber] & {
    raceId: BigNumber;
    horseOwner: string;
    horseId: BigNumber;
  }
>;

export type HorseWithdrawnEvent = TypedEvent<
  [BigNumber, string, BigNumber] & {
    raceId: BigNumber;
    horseOwner: string;
    horseId: BigNumber;
  }
>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type RaceCreatedEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber, BigNumber[]] & {
    raceId: BigNumber;
    entryFee: BigNumber;
    numWinners: BigNumber;
    prizeDistribution: BigNumber[];
  }
>;

export type RaceEndedEvent = TypedEvent<
  [BigNumber, BigNumber[]] & { raceId: BigNumber; winningHorseId: BigNumber[] }
>;

export type RaceStartedEvent = TypedEvent<[BigNumber] & { raceId: BigNumber }>;

export class HorseRacingEvent extends BaseContract {
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

  interface: HorseRacingEventInterface;

  functions: {
    createRace(
      entryFee: BigNumberish,
      numWinners: BigNumberish,
      prizeDistribution: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    endRace(
      raceId: BigNumberish,
      winningHorseIds: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    enterHorseInRace(
      raceId: BigNumberish,
      horseId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getIsActiveRace(
      raceId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean] & { raceActive: boolean }>;

    getRaceResults(
      raceId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    horsesNFTContract(overrides?: CallOverrides): Promise<[string]>;

    nextRaceId(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    races(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        boolean
      ] & {
        raceId: BigNumber;
        entryFee: BigNumber;
        totalPrizePool: BigNumber;
        numWinners: BigNumber;
        minParticipants: BigNumber;
        raceActive: boolean;
        raceStarted: boolean;
      }
    >;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    startRace(
      raceId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  createRace(
    entryFee: BigNumberish,
    numWinners: BigNumberish,
    prizeDistribution: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  endRace(
    raceId: BigNumberish,
    winningHorseIds: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  enterHorseInRace(
    raceId: BigNumberish,
    horseId: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getIsActiveRace(
    raceId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  getRaceResults(
    raceId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  horsesNFTContract(overrides?: CallOverrides): Promise<string>;

  nextRaceId(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  races(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      boolean,
      boolean
    ] & {
      raceId: BigNumber;
      entryFee: BigNumber;
      totalPrizePool: BigNumber;
      numWinners: BigNumber;
      minParticipants: BigNumber;
      raceActive: boolean;
      raceStarted: boolean;
    }
  >;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  startRace(
    raceId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    createRace(
      entryFee: BigNumberish,
      numWinners: BigNumberish,
      prizeDistribution: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    endRace(
      raceId: BigNumberish,
      winningHorseIds: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    enterHorseInRace(
      raceId: BigNumberish,
      horseId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getIsActiveRace(
      raceId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getRaceResults(
      raceId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    horsesNFTContract(overrides?: CallOverrides): Promise<string>;

    nextRaceId(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    races(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        boolean
      ] & {
        raceId: BigNumber;
        entryFee: BigNumber;
        totalPrizePool: BigNumber;
        numWinners: BigNumber;
        minParticipants: BigNumber;
        raceActive: boolean;
        raceStarted: boolean;
      }
    >;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    startRace(raceId: BigNumberish, overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "HorseEnteredRace(uint256,address,uint256)"(
      raceId?: null,
      horseOwner?: null,
      horseId?: null
    ): TypedEventFilter<
      [BigNumber, string, BigNumber],
      { raceId: BigNumber; horseOwner: string; horseId: BigNumber }
    >;

    HorseEnteredRace(
      raceId?: null,
      horseOwner?: null,
      horseId?: null
    ): TypedEventFilter<
      [BigNumber, string, BigNumber],
      { raceId: BigNumber; horseOwner: string; horseId: BigNumber }
    >;

    "HorseWithdrawn(uint256,address,uint256)"(
      raceId?: null,
      horseOwner?: null,
      horseId?: null
    ): TypedEventFilter<
      [BigNumber, string, BigNumber],
      { raceId: BigNumber; horseOwner: string; horseId: BigNumber }
    >;

    HorseWithdrawn(
      raceId?: null,
      horseOwner?: null,
      horseId?: null
    ): TypedEventFilter<
      [BigNumber, string, BigNumber],
      { raceId: BigNumber; horseOwner: string; horseId: BigNumber }
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

    "RaceCreated(uint256,uint256,uint256,uint256[])"(
      raceId?: null,
      entryFee?: null,
      numWinners?: null,
      prizeDistribution?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, BigNumber, BigNumber[]],
      {
        raceId: BigNumber;
        entryFee: BigNumber;
        numWinners: BigNumber;
        prizeDistribution: BigNumber[];
      }
    >;

    RaceCreated(
      raceId?: null,
      entryFee?: null,
      numWinners?: null,
      prizeDistribution?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, BigNumber, BigNumber[]],
      {
        raceId: BigNumber;
        entryFee: BigNumber;
        numWinners: BigNumber;
        prizeDistribution: BigNumber[];
      }
    >;

    "RaceEnded(uint256,uint256[])"(
      raceId?: null,
      winningHorseId?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber[]],
      { raceId: BigNumber; winningHorseId: BigNumber[] }
    >;

    RaceEnded(
      raceId?: null,
      winningHorseId?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber[]],
      { raceId: BigNumber; winningHorseId: BigNumber[] }
    >;

    "RaceStarted(uint256)"(
      raceId?: null
    ): TypedEventFilter<[BigNumber], { raceId: BigNumber }>;

    RaceStarted(
      raceId?: null
    ): TypedEventFilter<[BigNumber], { raceId: BigNumber }>;
  };

  estimateGas: {
    createRace(
      entryFee: BigNumberish,
      numWinners: BigNumberish,
      prizeDistribution: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    endRace(
      raceId: BigNumberish,
      winningHorseIds: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    enterHorseInRace(
      raceId: BigNumberish,
      horseId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getIsActiveRace(
      raceId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRaceResults(
      raceId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    horsesNFTContract(overrides?: CallOverrides): Promise<BigNumber>;

    nextRaceId(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    races(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    startRace(
      raceId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    createRace(
      entryFee: BigNumberish,
      numWinners: BigNumberish,
      prizeDistribution: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    endRace(
      raceId: BigNumberish,
      winningHorseIds: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    enterHorseInRace(
      raceId: BigNumberish,
      horseId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getIsActiveRace(
      raceId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRaceResults(
      raceId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    horsesNFTContract(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nextRaceId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    races(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    startRace(
      raceId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
