/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export interface AShuBankTInterface extends utils.Interface {
  functions: {
    "ANNUAL_INTEREST_RATE()": FunctionFragment;
    "MAX_WITHDRAWAL_PERCENTAGE()": FunctionFragment;
    "SECONDS_PER_YEAR()": FunctionFragment;
    "deposit()": FunctionFragment;
    "caculateInterest(address)": FunctionFragment;
    "withdraw(uint256)": FunctionFragment;
    "getUserBalance(address)": FunctionFragment;
    "getBalance()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "ANNUAL_INTEREST_RATE"
      | "MAX_WITHDRAWAL_PERCENTAGE"
      | "SECONDS_PER_YEAR"
      | "deposit"
      | "caculateInterest"
      | "withdraw"
      | "getUserBalance"
      | "getBalance"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "ANNUAL_INTEREST_RATE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAX_WITHDRAWAL_PERCENTAGE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "SECONDS_PER_YEAR",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "deposit", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "caculateInterest",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserBalance",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getBalance",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "ANNUAL_INTEREST_RATE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAX_WITHDRAWAL_PERCENTAGE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "SECONDS_PER_YEAR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "caculateInterest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getUserBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getBalance", data: BytesLike): Result;

  events: {
    "Deposit(address,uint256)": EventFragment;
    "InterestCaculated(address,uint256)": EventFragment;
    "Withdraw(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "InterestCaculated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}

export interface DepositEventObject {
  user: string;
  amount: BigNumber;
}
export type DepositEvent = TypedEvent<[string, BigNumber], DepositEventObject>;

export type DepositEventFilter = TypedEventFilter<DepositEvent>;

export interface InterestCaculatedEventObject {
  user: string;
  interest: BigNumber;
}
export type InterestCaculatedEvent = TypedEvent<
  [string, BigNumber],
  InterestCaculatedEventObject
>;

export type InterestCaculatedEventFilter =
  TypedEventFilter<InterestCaculatedEvent>;

export interface WithdrawEventObject {
  user: string;
  amount: BigNumber;
}
export type WithdrawEvent = TypedEvent<
  [string, BigNumber],
  WithdrawEventObject
>;

export type WithdrawEventFilter = TypedEventFilter<WithdrawEvent>;

export interface AShuBankT extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AShuBankTInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    ANNUAL_INTEREST_RATE(overrides?: CallOverrides): Promise<[BigNumber]>;

    MAX_WITHDRAWAL_PERCENTAGE(overrides?: CallOverrides): Promise<[BigNumber]>;

    SECONDS_PER_YEAR(overrides?: CallOverrides): Promise<[BigNumber]>;

    deposit(
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;

    /**
     * 计算利息
     * @param user 用户地址
     */
    caculateInterest(
      user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    /**
     * 取款
     * @param amount 要提取的金额
     */
    withdraw(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    /**
     * 查询用户的余额
     * @param user 用户地址
     */
    getUserBalance(
      user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    /**
     * 查询合约的余额
     */
    getBalance(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  ANNUAL_INTEREST_RATE(overrides?: CallOverrides): Promise<BigNumber>;

  MAX_WITHDRAWAL_PERCENTAGE(overrides?: CallOverrides): Promise<BigNumber>;

  SECONDS_PER_YEAR(overrides?: CallOverrides): Promise<BigNumber>;

  deposit(
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  /**
   * 计算利息
   * @param user 用户地址
   */
  caculateInterest(user: string, overrides?: CallOverrides): Promise<BigNumber>;

  /**
   * 取款
   * @param amount 要提取的金额
   */
  withdraw(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  /**
   * 查询用户的余额
   * @param user 用户地址
   */
  getUserBalance(user: string, overrides?: CallOverrides): Promise<BigNumber>;

  /**
   * 查询合约的余额
   */
  getBalance(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    ANNUAL_INTEREST_RATE(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_WITHDRAWAL_PERCENTAGE(overrides?: CallOverrides): Promise<BigNumber>;

    SECONDS_PER_YEAR(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(overrides?: CallOverrides): Promise<void>;

    /**
     * 计算利息
     * @param user 用户地址
     */
    caculateInterest(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * 取款
     * @param amount 要提取的金额
     */
    withdraw(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    /**
     * 查询用户的余额
     * @param user 用户地址
     */
    getUserBalance(user: string, overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * 查询合约的余额
     */
    getBalance(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "Deposit(address,uint256)"(
      user?: string | null,
      amount?: null
    ): DepositEventFilter;
    Deposit(user?: string | null, amount?: null): DepositEventFilter;

    "InterestCaculated(address,uint256)"(
      user?: string | null,
      interest?: null
    ): InterestCaculatedEventFilter;
    InterestCaculated(
      user?: string | null,
      interest?: null
    ): InterestCaculatedEventFilter;

    "Withdraw(address,uint256)"(
      user?: string | null,
      amount?: null
    ): WithdrawEventFilter;
    Withdraw(user?: string | null, amount?: null): WithdrawEventFilter;
  };

  estimateGas: {
    ANNUAL_INTEREST_RATE(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_WITHDRAWAL_PERCENTAGE(overrides?: CallOverrides): Promise<BigNumber>;

    SECONDS_PER_YEAR(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;

    /**
     * 计算利息
     * @param user 用户地址
     */
    caculateInterest(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * 取款
     * @param amount 要提取的金额
     */
    withdraw(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    /**
     * 查询用户的余额
     * @param user 用户地址
     */
    getUserBalance(user: string, overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * 查询合约的余额
     */
    getBalance(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    ANNUAL_INTEREST_RATE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    MAX_WITHDRAWAL_PERCENTAGE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    SECONDS_PER_YEAR(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deposit(
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    /**
     * 计算利息
     * @param user 用户地址
     */
    caculateInterest(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * 取款
     * @param amount 要提取的金额
     */
    withdraw(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    /**
     * 查询用户的余额
     * @param user 用户地址
     */
    getUserBalance(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * 查询合约的余额
     */
    getBalance(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
