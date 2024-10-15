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
import { TENSOR_WHITELIST_PROGRAM_ADDRESS } from '../programs';
import { getAccountMetaFactory, type ResolvedAccount } from '../shared';

export type CloseMintProofV2Instruction<
  TProgram extends string = typeof TENSOR_WHITELIST_PROGRAM_ADDRESS,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountSigner extends string | IAccountMeta<string> = string,
  TAccountMintProof extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TRemainingAccounts extends readonly IAccountMeta<string>[] = [],
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountPayer extends string
        ? WritableAccount<TAccountPayer>
        : TAccountPayer,
      TAccountSigner extends string
        ? WritableSignerAccount<TAccountSigner> &
            IAccountSignerMeta<TAccountSigner>
        : TAccountSigner,
      TAccountMintProof extends string
        ? WritableAccount<TAccountMintProof>
        : TAccountMintProof,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      ...TRemainingAccounts,
    ]
  >;

export type CloseMintProofV2InstructionData = {
  discriminator: ReadonlyUint8Array;
};

export type CloseMintProofV2InstructionDataArgs = {};

export function getCloseMintProofV2InstructionDataEncoder(): Encoder<CloseMintProofV2InstructionDataArgs> {
  return transformEncoder(
    getStructEncoder([['discriminator', fixEncoderSize(getBytesEncoder(), 8)]]),
    (value) => ({
      ...value,
      discriminator: new Uint8Array([237, 78, 8, 208, 47, 148, 145, 170]),
    })
  );
}

export function getCloseMintProofV2InstructionDataDecoder(): Decoder<CloseMintProofV2InstructionData> {
  return getStructDecoder([
    ['discriminator', fixDecoderSize(getBytesDecoder(), 8)],
  ]);
}

export function getCloseMintProofV2InstructionDataCodec(): Codec<
  CloseMintProofV2InstructionDataArgs,
  CloseMintProofV2InstructionData
> {
  return combineCodec(
    getCloseMintProofV2InstructionDataEncoder(),
    getCloseMintProofV2InstructionDataDecoder()
  );
}

export type CloseMintProofV2Input<
  TAccountPayer extends string = string,
  TAccountSigner extends string = string,
  TAccountMintProof extends string = string,
  TAccountSystemProgram extends string = string,
> = {
  /** Receives rent if < 100 slots after mint_proof creation. */
  payer: Address<TAccountPayer>;
  /** Signing account, will receive rent if > 100 slots after mint_proof creation. */
  signer: TransactionSigner<TAccountSigner>;
  /** The mint proof account to close. */
  mintProof: Address<TAccountMintProof>;
  /** The Solana system program account. */
  systemProgram?: Address<TAccountSystemProgram>;
};

export function getCloseMintProofV2Instruction<
  TAccountPayer extends string,
  TAccountSigner extends string,
  TAccountMintProof extends string,
  TAccountSystemProgram extends string,
>(
  input: CloseMintProofV2Input<
    TAccountPayer,
    TAccountSigner,
    TAccountMintProof,
    TAccountSystemProgram
  >
): CloseMintProofV2Instruction<
  typeof TENSOR_WHITELIST_PROGRAM_ADDRESS,
  TAccountPayer,
  TAccountSigner,
  TAccountMintProof,
  TAccountSystemProgram
> {
  // Program address.
  const programAddress = TENSOR_WHITELIST_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
    payer: { value: input.payer ?? null, isWritable: true },
    signer: { value: input.signer ?? null, isWritable: true },
    mintProof: { value: input.mintProof ?? null, isWritable: true },
    systemProgram: { value: input.systemProgram ?? null, isWritable: false },
  };
  const accounts = originalAccounts as Record<
    keyof typeof originalAccounts,
    ResolvedAccount
  >;

  // Resolve default values.
  if (!accounts.systemProgram.value) {
    accounts.systemProgram.value =
      '11111111111111111111111111111111' as Address<'11111111111111111111111111111111'>;
  }

  const getAccountMeta = getAccountMetaFactory(programAddress, 'programId');
  const instruction = {
    accounts: [
      getAccountMeta(accounts.payer),
      getAccountMeta(accounts.signer),
      getAccountMeta(accounts.mintProof),
      getAccountMeta(accounts.systemProgram),
    ],
    programAddress,
    data: getCloseMintProofV2InstructionDataEncoder().encode({}),
  } as CloseMintProofV2Instruction<
    typeof TENSOR_WHITELIST_PROGRAM_ADDRESS,
    TAccountPayer,
    TAccountSigner,
    TAccountMintProof,
    TAccountSystemProgram
  >;

  return instruction;
}

export type ParsedCloseMintProofV2Instruction<
  TProgram extends string = typeof TENSOR_WHITELIST_PROGRAM_ADDRESS,
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> = {
  programAddress: Address<TProgram>;
  accounts: {
    /** Receives rent if < 100 slots after mint_proof creation. */
    payer: TAccountMetas[0];
    /** Signing account, will receive rent if > 100 slots after mint_proof creation. */
    signer: TAccountMetas[1];
    /** The mint proof account to close. */
    mintProof: TAccountMetas[2];
    /** The Solana system program account. */
    systemProgram: TAccountMetas[3];
  };
  data: CloseMintProofV2InstructionData;
};

export function parseCloseMintProofV2Instruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedCloseMintProofV2Instruction<TProgram, TAccountMetas> {
  if (instruction.accounts.length < 4) {
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
      payer: getNextAccount(),
      signer: getNextAccount(),
      mintProof: getNextAccount(),
      systemProgram: getNextAccount(),
    },
    data: getCloseMintProofV2InstructionDataDecoder().decode(instruction.data),
  };
}
