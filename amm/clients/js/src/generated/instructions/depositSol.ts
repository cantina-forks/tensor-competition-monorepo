/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/kinobi-so/kinobi
 */

import {
  combineCodec,
  fixDecoderSize,
  fixEncoderSize,
  getBytesDecoder,
  getBytesEncoder,
  getStructDecoder,
  getStructEncoder,
  getU64Decoder,
  getU64Encoder,
  transformEncoder,
  type Address,
  type Codec,
  type Decoder,
  type Encoder,
  type IAccountMeta,
  type IAccountSignerMeta,
  type IInstruction,
  type IInstructionWithAccounts,
  type IInstructionWithData,
  type ReadonlyAccount,
  type ReadonlyUint8Array,
  type TransactionSigner,
  type WritableAccount,
  type WritableSignerAccount,
} from '@solana/web3.js';
import { TENSOR_AMM_PROGRAM_ADDRESS } from '../programs';
import { getAccountMetaFactory, type ResolvedAccount } from '../shared';

export type DepositSolInstruction<
  TProgram extends string = typeof TENSOR_AMM_PROGRAM_ADDRESS,
  TAccountOwner extends string | IAccountMeta<string> = string,
  TAccountPool extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TRemainingAccounts extends readonly IAccountMeta<string>[] = [],
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountOwner extends string
        ? WritableSignerAccount<TAccountOwner> &
            IAccountSignerMeta<TAccountOwner>
        : TAccountOwner,
      TAccountPool extends string
        ? WritableAccount<TAccountPool>
        : TAccountPool,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      ...TRemainingAccounts,
    ]
  >;

export type DepositSolInstructionData = {
  discriminator: ReadonlyUint8Array;
  lamports: bigint;
};

export type DepositSolInstructionDataArgs = { lamports: number | bigint };

export function getDepositSolInstructionDataEncoder(): Encoder<DepositSolInstructionDataArgs> {
  return transformEncoder(
    getStructEncoder([
      ['discriminator', fixEncoderSize(getBytesEncoder(), 8)],
      ['lamports', getU64Encoder()],
    ]),
    (value) => ({
      ...value,
      discriminator: new Uint8Array([108, 81, 78, 117, 125, 155, 56, 200]),
    })
  );
}

export function getDepositSolInstructionDataDecoder(): Decoder<DepositSolInstructionData> {
  return getStructDecoder([
    ['discriminator', fixDecoderSize(getBytesDecoder(), 8)],
    ['lamports', getU64Decoder()],
  ]);
}

export function getDepositSolInstructionDataCodec(): Codec<
  DepositSolInstructionDataArgs,
  DepositSolInstructionData
> {
  return combineCodec(
    getDepositSolInstructionDataEncoder(),
    getDepositSolInstructionDataDecoder()
  );
}

export type DepositSolInput<
  TAccountOwner extends string = string,
  TAccountPool extends string = string,
  TAccountSystemProgram extends string = string,
> = {
  /** The owner of the pool--must sign to deposit SOL. */
  owner: TransactionSigner<TAccountOwner>;
  /** The pool to deposit the SOL into. */
  pool: Address<TAccountPool>;
  /** The Solana system program. */
  systemProgram?: Address<TAccountSystemProgram>;
  lamports: DepositSolInstructionDataArgs['lamports'];
};

export function getDepositSolInstruction<
  TAccountOwner extends string,
  TAccountPool extends string,
  TAccountSystemProgram extends string,
>(
  input: DepositSolInput<TAccountOwner, TAccountPool, TAccountSystemProgram>
): DepositSolInstruction<
  typeof TENSOR_AMM_PROGRAM_ADDRESS,
  TAccountOwner,
  TAccountPool,
  TAccountSystemProgram
> {
  // Program address.
  const programAddress = TENSOR_AMM_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
    owner: { value: input.owner ?? null, isWritable: true },
    pool: { value: input.pool ?? null, isWritable: true },
    systemProgram: { value: input.systemProgram ?? null, isWritable: false },
  };
  const accounts = originalAccounts as Record<
    keyof typeof originalAccounts,
    ResolvedAccount
  >;

  // Original args.
  const args = { ...input };

  // Resolve default values.
  if (!accounts.systemProgram.value) {
    accounts.systemProgram.value =
      '11111111111111111111111111111111' as Address<'11111111111111111111111111111111'>;
  }

  const getAccountMeta = getAccountMetaFactory(programAddress, 'programId');
  const instruction = {
    accounts: [
      getAccountMeta(accounts.owner),
      getAccountMeta(accounts.pool),
      getAccountMeta(accounts.systemProgram),
    ],
    programAddress,
    data: getDepositSolInstructionDataEncoder().encode(
      args as DepositSolInstructionDataArgs
    ),
  } as DepositSolInstruction<
    typeof TENSOR_AMM_PROGRAM_ADDRESS,
    TAccountOwner,
    TAccountPool,
    TAccountSystemProgram
  >;

  return instruction;
}

export type ParsedDepositSolInstruction<
  TProgram extends string = typeof TENSOR_AMM_PROGRAM_ADDRESS,
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> = {
  programAddress: Address<TProgram>;
  accounts: {
    /** The owner of the pool--must sign to deposit SOL. */
    owner: TAccountMetas[0];
    /** The pool to deposit the SOL into. */
    pool: TAccountMetas[1];
    /** The Solana system program. */
    systemProgram: TAccountMetas[2];
  };
  data: DepositSolInstructionData;
};

export function parseDepositSolInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedDepositSolInstruction<TProgram, TAccountMetas> {
  if (instruction.accounts.length < 3) {
    // TODO: Coded error.
    throw new Error('Not enough accounts');
  }
  let accountIndex = 0;
  const getNextAccount = () => {
    const accountMeta = instruction.accounts![accountIndex]!;
    accountIndex += 1;
    return accountMeta;
  };
  return {
    programAddress: instruction.programAddress,
    accounts: {
      owner: getNextAccount(),
      pool: getNextAccount(),
      systemProgram: getNextAccount(),
    },
    data: getDepositSolInstructionDataDecoder().decode(instruction.data),
  };
}