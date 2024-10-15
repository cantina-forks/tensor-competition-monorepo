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
import { findBidStatePda } from '../pdas';
import { TENSOR_MARKETPLACE_PROGRAM_ADDRESS } from '../programs';
import {
  expectAddress,
  expectSome,
  expectTransactionSigner,
  getAccountMetaFactory,
  type ResolvedAccount,
} from '../shared';

export type CancelBidInstruction<
  TProgram extends string = typeof TENSOR_MARKETPLACE_PROGRAM_ADDRESS,
  TAccountBidState extends string | IAccountMeta<string> = string,
  TAccountOwner extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountMarketplaceProgram extends
    | string
    | IAccountMeta<string> = 'TCMPhJdwDryooaGtiocG1u3xcYbRpiJzb283XfCZsDp',
  TAccountRentDestination extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends readonly IAccountMeta<string>[] = [],
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountBidState extends string
        ? WritableAccount<TAccountBidState>
        : TAccountBidState,
      TAccountOwner extends string
        ? WritableSignerAccount<TAccountOwner> &
            IAccountSignerMeta<TAccountOwner>
        : TAccountOwner,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      TAccountMarketplaceProgram extends string
        ? ReadonlyAccount<TAccountMarketplaceProgram>
        : TAccountMarketplaceProgram,
      TAccountRentDestination extends string
        ? WritableAccount<TAccountRentDestination>
        : TAccountRentDestination,
      ...TRemainingAccounts,
    ]
  >;

export type CancelBidInstructionData = { discriminator: ReadonlyUint8Array };

export type CancelBidInstructionDataArgs = {};

export function getCancelBidInstructionDataEncoder(): Encoder<CancelBidInstructionDataArgs> {
  return transformEncoder(
    getStructEncoder([['discriminator', fixEncoderSize(getBytesEncoder(), 8)]]),
    (value) => ({
      ...value,
      discriminator: new Uint8Array([40, 243, 190, 217, 208, 253, 86, 206]),
    })
  );
}

export function getCancelBidInstructionDataDecoder(): Decoder<CancelBidInstructionData> {
  return getStructDecoder([
    ['discriminator', fixDecoderSize(getBytesDecoder(), 8)],
  ]);
}

export function getCancelBidInstructionDataCodec(): Codec<
  CancelBidInstructionDataArgs,
  CancelBidInstructionData
> {
  return combineCodec(
    getCancelBidInstructionDataEncoder(),
    getCancelBidInstructionDataDecoder()
  );
}

export type CancelBidInstructionExtraArgs = { bidId?: Address };

export type CancelBidAsyncInput<
  TAccountBidState extends string = string,
  TAccountOwner extends string = string,
  TAccountSystemProgram extends string = string,
  TAccountMarketplaceProgram extends string = string,
  TAccountRentDestination extends string = string,
> = {
  bidState?: Address<TAccountBidState>;
  owner: TransactionSigner<TAccountOwner>;
  systemProgram?: Address<TAccountSystemProgram>;
  marketplaceProgram?: Address<TAccountMarketplaceProgram>;
  rentDestination?: Address<TAccountRentDestination>;
  bidId?: CancelBidInstructionExtraArgs['bidId'];
};

export async function getCancelBidInstructionAsync<
  TAccountBidState extends string,
  TAccountOwner extends string,
  TAccountSystemProgram extends string,
  TAccountMarketplaceProgram extends string,
  TAccountRentDestination extends string,
>(
  input: CancelBidAsyncInput<
    TAccountBidState,
    TAccountOwner,
    TAccountSystemProgram,
    TAccountMarketplaceProgram,
    TAccountRentDestination
  >
): Promise<
  CancelBidInstruction<
    typeof TENSOR_MARKETPLACE_PROGRAM_ADDRESS,
    TAccountBidState,
    TAccountOwner,
    TAccountSystemProgram,
    TAccountMarketplaceProgram,
    TAccountRentDestination
  >
> {
  // Program address.
  const programAddress = TENSOR_MARKETPLACE_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
    bidState: { value: input.bidState ?? null, isWritable: true },
    owner: { value: input.owner ?? null, isWritable: true },
    systemProgram: { value: input.systemProgram ?? null, isWritable: false },
    marketplaceProgram: {
      value: input.marketplaceProgram ?? null,
      isWritable: false,
    },
    rentDestination: { value: input.rentDestination ?? null, isWritable: true },
  };
  const accounts = originalAccounts as Record<
    keyof typeof originalAccounts,
    ResolvedAccount
  >;

  // Original args.
  const args = { ...input };

  // Resolve default values.
  if (!args.bidId) {
    args.bidId =
      '11111111111111111111111111111111' as Address<'11111111111111111111111111111111'>;
  }
  if (!accounts.bidState.value) {
    accounts.bidState.value = await findBidStatePda({
      bidId: expectSome(args.bidId),
      owner: expectAddress(accounts.owner.value),
    });
  }
  if (!accounts.systemProgram.value) {
    accounts.systemProgram.value =
      '11111111111111111111111111111111' as Address<'11111111111111111111111111111111'>;
  }
  if (!accounts.marketplaceProgram.value) {
    accounts.marketplaceProgram.value =
      'TCMPhJdwDryooaGtiocG1u3xcYbRpiJzb283XfCZsDp' as Address<'TCMPhJdwDryooaGtiocG1u3xcYbRpiJzb283XfCZsDp'>;
  }
  if (!accounts.rentDestination.value) {
    accounts.rentDestination.value = expectTransactionSigner(
      accounts.owner.value
    ).address;
  }

  const getAccountMeta = getAccountMetaFactory(programAddress, 'programId');
  const instruction = {
    accounts: [
      getAccountMeta(accounts.bidState),
      getAccountMeta(accounts.owner),
      getAccountMeta(accounts.systemProgram),
      getAccountMeta(accounts.marketplaceProgram),
      getAccountMeta(accounts.rentDestination),
    ],
    programAddress,
    data: getCancelBidInstructionDataEncoder().encode({}),
  } as CancelBidInstruction<
    typeof TENSOR_MARKETPLACE_PROGRAM_ADDRESS,
    TAccountBidState,
    TAccountOwner,
    TAccountSystemProgram,
    TAccountMarketplaceProgram,
    TAccountRentDestination
  >;

  return instruction;
}

export type CancelBidInput<
  TAccountBidState extends string = string,
  TAccountOwner extends string = string,
  TAccountSystemProgram extends string = string,
  TAccountMarketplaceProgram extends string = string,
  TAccountRentDestination extends string = string,
> = {
  bidState: Address<TAccountBidState>;
  owner: TransactionSigner<TAccountOwner>;
  systemProgram?: Address<TAccountSystemProgram>;
  marketplaceProgram?: Address<TAccountMarketplaceProgram>;
  rentDestination?: Address<TAccountRentDestination>;
  bidId?: CancelBidInstructionExtraArgs['bidId'];
};

export function getCancelBidInstruction<
  TAccountBidState extends string,
  TAccountOwner extends string,
  TAccountSystemProgram extends string,
  TAccountMarketplaceProgram extends string,
  TAccountRentDestination extends string,
>(
  input: CancelBidInput<
    TAccountBidState,
    TAccountOwner,
    TAccountSystemProgram,
    TAccountMarketplaceProgram,
    TAccountRentDestination
  >
): CancelBidInstruction<
  typeof TENSOR_MARKETPLACE_PROGRAM_ADDRESS,
  TAccountBidState,
  TAccountOwner,
  TAccountSystemProgram,
  TAccountMarketplaceProgram,
  TAccountRentDestination
> {
  // Program address.
  const programAddress = TENSOR_MARKETPLACE_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
    bidState: { value: input.bidState ?? null, isWritable: true },
    owner: { value: input.owner ?? null, isWritable: true },
    systemProgram: { value: input.systemProgram ?? null, isWritable: false },
    marketplaceProgram: {
      value: input.marketplaceProgram ?? null,
      isWritable: false,
    },
    rentDestination: { value: input.rentDestination ?? null, isWritable: true },
  };
  const accounts = originalAccounts as Record<
    keyof typeof originalAccounts,
    ResolvedAccount
  >;

  // Original args.
  const args = { ...input };

  // Resolve default values.
  if (!args.bidId) {
    args.bidId =
      '11111111111111111111111111111111' as Address<'11111111111111111111111111111111'>;
  }
  if (!accounts.systemProgram.value) {
    accounts.systemProgram.value =
      '11111111111111111111111111111111' as Address<'11111111111111111111111111111111'>;
  }
  if (!accounts.marketplaceProgram.value) {
    accounts.marketplaceProgram.value =
      'TCMPhJdwDryooaGtiocG1u3xcYbRpiJzb283XfCZsDp' as Address<'TCMPhJdwDryooaGtiocG1u3xcYbRpiJzb283XfCZsDp'>;
  }
  if (!accounts.rentDestination.value) {
    accounts.rentDestination.value = expectTransactionSigner(
      accounts.owner.value
    ).address;
  }

  const getAccountMeta = getAccountMetaFactory(programAddress, 'programId');
  const instruction = {
    accounts: [
      getAccountMeta(accounts.bidState),
      getAccountMeta(accounts.owner),
      getAccountMeta(accounts.systemProgram),
      getAccountMeta(accounts.marketplaceProgram),
      getAccountMeta(accounts.rentDestination),
    ],
    programAddress,
    data: getCancelBidInstructionDataEncoder().encode({}),
  } as CancelBidInstruction<
    typeof TENSOR_MARKETPLACE_PROGRAM_ADDRESS,
    TAccountBidState,
    TAccountOwner,
    TAccountSystemProgram,
    TAccountMarketplaceProgram,
    TAccountRentDestination
  >;

  return instruction;
}

export type ParsedCancelBidInstruction<
  TProgram extends string = typeof TENSOR_MARKETPLACE_PROGRAM_ADDRESS,
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> = {
  programAddress: Address<TProgram>;
  accounts: {
    bidState: TAccountMetas[0];
    owner: TAccountMetas[1];
    systemProgram: TAccountMetas[2];
    marketplaceProgram: TAccountMetas[3];
    rentDestination: TAccountMetas[4];
  };
  data: CancelBidInstructionData;
};

export function parseCancelBidInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedCancelBidInstruction<TProgram, TAccountMetas> {
  if (instruction.accounts.length < 5) {
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
      bidState: getNextAccount(),
      owner: getNextAccount(),
      systemProgram: getNextAccount(),
      marketplaceProgram: getNextAccount(),
      rentDestination: getNextAccount(),
    },
    data: getCancelBidInstructionDataDecoder().decode(instruction.data),
  };
}