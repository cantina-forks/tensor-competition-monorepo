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
import {
  resolveListAta,
  resolveOwnerAta,
  resolveWnsApprovePda,
  resolveWnsDistributionPda,
  resolveWnsExtraAccountMetasPda,
} from '@tensor-foundation/resolvers';
import { findListStatePda } from '../pdas';
import { TENSOR_MARKETPLACE_PROGRAM_ADDRESS } from '../programs';
import {
  expectAddress,
  expectSome,
  expectTransactionSigner,
  getAccountMetaFactory,
  type ResolvedAccount,
} from '../shared';

export type CloseExpiredListingWnsInstruction<
  TProgram extends string = typeof TENSOR_MARKETPLACE_PROGRAM_ADDRESS,
  TAccountOwner extends string | IAccountMeta<string> = string,
  TAccountOwnerTa extends string | IAccountMeta<string> = string,
  TAccountListState extends string | IAccountMeta<string> = string,
  TAccountListTa extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountRentDestination extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountTokenProgram extends
    | string
    | IAccountMeta<string> = 'TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb',
  TAccountAssociatedTokenProgram extends
    | string
    | IAccountMeta<string> = 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL',
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountMarketplaceProgram extends
    | string
    | IAccountMeta<string> = 'TCMPhJdwDryooaGtiocG1u3xcYbRpiJzb283XfCZsDp',
  TAccountApprove extends string | IAccountMeta<string> = string,
  TAccountDistribution extends string | IAccountMeta<string> = string,
  TAccountWnsProgram extends
    | string
    | IAccountMeta<string> = 'wns1gDLt8fgLcGhWi5MqAqgXpwEP1JftKE9eZnXS1HM',
  TAccountDistributionProgram extends
    | string
    | IAccountMeta<string> = 'diste3nXmK7ddDTs1zb6uday6j4etCa9RChD8fJ1xay',
  TAccountExtraMetas extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends readonly IAccountMeta<string>[] = [],
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountOwner extends string
        ? ReadonlyAccount<TAccountOwner>
        : TAccountOwner,
      TAccountOwnerTa extends string
        ? WritableAccount<TAccountOwnerTa>
        : TAccountOwnerTa,
      TAccountListState extends string
        ? WritableAccount<TAccountListState>
        : TAccountListState,
      TAccountListTa extends string
        ? WritableAccount<TAccountListTa>
        : TAccountListTa,
      TAccountMint extends string
        ? ReadonlyAccount<TAccountMint>
        : TAccountMint,
      TAccountRentDestination extends string
        ? WritableAccount<TAccountRentDestination>
        : TAccountRentDestination,
      TAccountPayer extends string
        ? WritableSignerAccount<TAccountPayer> &
            IAccountSignerMeta<TAccountPayer>
        : TAccountPayer,
      TAccountTokenProgram extends string
        ? ReadonlyAccount<TAccountTokenProgram>
        : TAccountTokenProgram,
      TAccountAssociatedTokenProgram extends string
        ? ReadonlyAccount<TAccountAssociatedTokenProgram>
        : TAccountAssociatedTokenProgram,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      TAccountMarketplaceProgram extends string
        ? ReadonlyAccount<TAccountMarketplaceProgram>
        : TAccountMarketplaceProgram,
      TAccountApprove extends string
        ? WritableAccount<TAccountApprove>
        : TAccountApprove,
      TAccountDistribution extends string
        ? WritableAccount<TAccountDistribution>
        : TAccountDistribution,
      TAccountWnsProgram extends string
        ? ReadonlyAccount<TAccountWnsProgram>
        : TAccountWnsProgram,
      TAccountDistributionProgram extends string
        ? ReadonlyAccount<TAccountDistributionProgram>
        : TAccountDistributionProgram,
      TAccountExtraMetas extends string
        ? ReadonlyAccount<TAccountExtraMetas>
        : TAccountExtraMetas,
      ...TRemainingAccounts,
    ]
  >;

export type CloseExpiredListingWnsInstructionData = {
  discriminator: ReadonlyUint8Array;
};

export type CloseExpiredListingWnsInstructionDataArgs = {};

export function getCloseExpiredListingWnsInstructionDataEncoder(): Encoder<CloseExpiredListingWnsInstructionDataArgs> {
  return transformEncoder(
    getStructEncoder([['discriminator', fixEncoderSize(getBytesEncoder(), 8)]]),
    (value) => ({
      ...value,
      discriminator: new Uint8Array([222, 31, 183, 134, 230, 207, 7, 132]),
    })
  );
}

export function getCloseExpiredListingWnsInstructionDataDecoder(): Decoder<CloseExpiredListingWnsInstructionData> {
  return getStructDecoder([
    ['discriminator', fixDecoderSize(getBytesDecoder(), 8)],
  ]);
}

export function getCloseExpiredListingWnsInstructionDataCodec(): Codec<
  CloseExpiredListingWnsInstructionDataArgs,
  CloseExpiredListingWnsInstructionData
> {
  return combineCodec(
    getCloseExpiredListingWnsInstructionDataEncoder(),
    getCloseExpiredListingWnsInstructionDataDecoder()
  );
}

export type CloseExpiredListingWnsInstructionExtraArgs = {
  collection: Address;
  paymentMint?: Address;
};

export type CloseExpiredListingWnsAsyncInput<
  TAccountOwner extends string = string,
  TAccountOwnerTa extends string = string,
  TAccountListState extends string = string,
  TAccountListTa extends string = string,
  TAccountMint extends string = string,
  TAccountRentDestination extends string = string,
  TAccountPayer extends string = string,
  TAccountTokenProgram extends string = string,
  TAccountAssociatedTokenProgram extends string = string,
  TAccountSystemProgram extends string = string,
  TAccountMarketplaceProgram extends string = string,
  TAccountApprove extends string = string,
  TAccountDistribution extends string = string,
  TAccountWnsProgram extends string = string,
  TAccountDistributionProgram extends string = string,
  TAccountExtraMetas extends string = string,
> = {
  owner?: Address<TAccountOwner>;
  ownerTa?: Address<TAccountOwnerTa>;
  listState?: Address<TAccountListState>;
  listTa?: Address<TAccountListTa>;
  mint: Address<TAccountMint>;
  rentDestination?: Address<TAccountRentDestination>;
  payer: TransactionSigner<TAccountPayer>;
  tokenProgram?: Address<TAccountTokenProgram>;
  associatedTokenProgram?: Address<TAccountAssociatedTokenProgram>;
  systemProgram?: Address<TAccountSystemProgram>;
  marketplaceProgram?: Address<TAccountMarketplaceProgram>;
  approve?: Address<TAccountApprove>;
  distribution?: Address<TAccountDistribution>;
  wnsProgram?: Address<TAccountWnsProgram>;
  distributionProgram?: Address<TAccountDistributionProgram>;
  extraMetas?: Address<TAccountExtraMetas>;
  collection: CloseExpiredListingWnsInstructionExtraArgs['collection'];
  paymentMint?: CloseExpiredListingWnsInstructionExtraArgs['paymentMint'];
};

export async function getCloseExpiredListingWnsInstructionAsync<
  TAccountOwner extends string,
  TAccountOwnerTa extends string,
  TAccountListState extends string,
  TAccountListTa extends string,
  TAccountMint extends string,
  TAccountRentDestination extends string,
  TAccountPayer extends string,
  TAccountTokenProgram extends string,
  TAccountAssociatedTokenProgram extends string,
  TAccountSystemProgram extends string,
  TAccountMarketplaceProgram extends string,
  TAccountApprove extends string,
  TAccountDistribution extends string,
  TAccountWnsProgram extends string,
  TAccountDistributionProgram extends string,
  TAccountExtraMetas extends string,
>(
  input: CloseExpiredListingWnsAsyncInput<
    TAccountOwner,
    TAccountOwnerTa,
    TAccountListState,
    TAccountListTa,
    TAccountMint,
    TAccountRentDestination,
    TAccountPayer,
    TAccountTokenProgram,
    TAccountAssociatedTokenProgram,
    TAccountSystemProgram,
    TAccountMarketplaceProgram,
    TAccountApprove,
    TAccountDistribution,
    TAccountWnsProgram,
    TAccountDistributionProgram,
    TAccountExtraMetas
  >
): Promise<
  CloseExpiredListingWnsInstruction<
    typeof TENSOR_MARKETPLACE_PROGRAM_ADDRESS,
    TAccountOwner,
    TAccountOwnerTa,
    TAccountListState,
    TAccountListTa,
    TAccountMint,
    TAccountRentDestination,
    TAccountPayer,
    TAccountTokenProgram,
    TAccountAssociatedTokenProgram,
    TAccountSystemProgram,
    TAccountMarketplaceProgram,
    TAccountApprove,
    TAccountDistribution,
    TAccountWnsProgram,
    TAccountDistributionProgram,
    TAccountExtraMetas
  >
> {
  // Program address.
  const programAddress = TENSOR_MARKETPLACE_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
    owner: { value: input.owner ?? null, isWritable: false },
    ownerTa: { value: input.ownerTa ?? null, isWritable: true },
    listState: { value: input.listState ?? null, isWritable: true },
    listTa: { value: input.listTa ?? null, isWritable: true },
    mint: { value: input.mint ?? null, isWritable: false },
    rentDestination: { value: input.rentDestination ?? null, isWritable: true },
    payer: { value: input.payer ?? null, isWritable: true },
    tokenProgram: { value: input.tokenProgram ?? null, isWritable: false },
    associatedTokenProgram: {
      value: input.associatedTokenProgram ?? null,
      isWritable: false,
    },
    systemProgram: { value: input.systemProgram ?? null, isWritable: false },
    marketplaceProgram: {
      value: input.marketplaceProgram ?? null,
      isWritable: false,
    },
    approve: { value: input.approve ?? null, isWritable: true },
    distribution: { value: input.distribution ?? null, isWritable: true },
    wnsProgram: { value: input.wnsProgram ?? null, isWritable: false },
    distributionProgram: {
      value: input.distributionProgram ?? null,
      isWritable: false,
    },
    extraMetas: { value: input.extraMetas ?? null, isWritable: false },
  };
  const accounts = originalAccounts as Record<
    keyof typeof originalAccounts,
    ResolvedAccount
  >;

  // Original args.
  const args = { ...input };

  // Resolver scope.
  const resolverScope = { programAddress, accounts, args };

  // Resolve default values.
  if (!accounts.owner.value) {
    accounts.owner.value = expectTransactionSigner(
      accounts.payer.value
    ).address;
  }
  if (!accounts.tokenProgram.value) {
    accounts.tokenProgram.value =
      'TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb' as Address<'TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb'>;
  }
  if (!accounts.ownerTa.value) {
    accounts.ownerTa = {
      ...accounts.ownerTa,
      ...(await resolveOwnerAta(resolverScope)),
    };
  }
  if (!accounts.listState.value) {
    accounts.listState.value = await findListStatePda({
      mint: expectAddress(accounts.mint.value),
    });
  }
  if (!accounts.listTa.value) {
    accounts.listTa = {
      ...accounts.listTa,
      ...(await resolveListAta(resolverScope)),
    };
  }
  if (!accounts.rentDestination.value) {
    accounts.rentDestination.value = expectSome(accounts.owner.value);
  }
  if (!accounts.associatedTokenProgram.value) {
    accounts.associatedTokenProgram.value =
      'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL' as Address<'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL'>;
  }
  if (!accounts.systemProgram.value) {
    accounts.systemProgram.value =
      '11111111111111111111111111111111' as Address<'11111111111111111111111111111111'>;
  }
  if (!accounts.marketplaceProgram.value) {
    accounts.marketplaceProgram.value =
      'TCMPhJdwDryooaGtiocG1u3xcYbRpiJzb283XfCZsDp' as Address<'TCMPhJdwDryooaGtiocG1u3xcYbRpiJzb283XfCZsDp'>;
  }
  if (!accounts.approve.value) {
    accounts.approve = {
      ...accounts.approve,
      ...(await resolveWnsApprovePda(resolverScope)),
    };
  }
  if (!args.paymentMint) {
    args.paymentMint =
      '11111111111111111111111111111111' as Address<'11111111111111111111111111111111'>;
  }
  if (!accounts.distribution.value) {
    accounts.distribution = {
      ...accounts.distribution,
      ...(await resolveWnsDistributionPda(resolverScope)),
    };
  }
  if (!accounts.wnsProgram.value) {
    accounts.wnsProgram.value =
      'wns1gDLt8fgLcGhWi5MqAqgXpwEP1JftKE9eZnXS1HM' as Address<'wns1gDLt8fgLcGhWi5MqAqgXpwEP1JftKE9eZnXS1HM'>;
  }
  if (!accounts.distributionProgram.value) {
    accounts.distributionProgram.value =
      'diste3nXmK7ddDTs1zb6uday6j4etCa9RChD8fJ1xay' as Address<'diste3nXmK7ddDTs1zb6uday6j4etCa9RChD8fJ1xay'>;
  }
  if (!accounts.extraMetas.value) {
    accounts.extraMetas = {
      ...accounts.extraMetas,
      ...(await resolveWnsExtraAccountMetasPda(resolverScope)),
    };
  }

  const getAccountMeta = getAccountMetaFactory(programAddress, 'programId');
  const instruction = {
    accounts: [
      getAccountMeta(accounts.owner),
      getAccountMeta(accounts.ownerTa),
      getAccountMeta(accounts.listState),
      getAccountMeta(accounts.listTa),
      getAccountMeta(accounts.mint),
      getAccountMeta(accounts.rentDestination),
      getAccountMeta(accounts.payer),
      getAccountMeta(accounts.tokenProgram),
      getAccountMeta(accounts.associatedTokenProgram),
      getAccountMeta(accounts.systemProgram),
      getAccountMeta(accounts.marketplaceProgram),
      getAccountMeta(accounts.approve),
      getAccountMeta(accounts.distribution),
      getAccountMeta(accounts.wnsProgram),
      getAccountMeta(accounts.distributionProgram),
      getAccountMeta(accounts.extraMetas),
    ],
    programAddress,
    data: getCloseExpiredListingWnsInstructionDataEncoder().encode({}),
  } as CloseExpiredListingWnsInstruction<
    typeof TENSOR_MARKETPLACE_PROGRAM_ADDRESS,
    TAccountOwner,
    TAccountOwnerTa,
    TAccountListState,
    TAccountListTa,
    TAccountMint,
    TAccountRentDestination,
    TAccountPayer,
    TAccountTokenProgram,
    TAccountAssociatedTokenProgram,
    TAccountSystemProgram,
    TAccountMarketplaceProgram,
    TAccountApprove,
    TAccountDistribution,
    TAccountWnsProgram,
    TAccountDistributionProgram,
    TAccountExtraMetas
  >;

  return instruction;
}

export type CloseExpiredListingWnsInput<
  TAccountOwner extends string = string,
  TAccountOwnerTa extends string = string,
  TAccountListState extends string = string,
  TAccountListTa extends string = string,
  TAccountMint extends string = string,
  TAccountRentDestination extends string = string,
  TAccountPayer extends string = string,
  TAccountTokenProgram extends string = string,
  TAccountAssociatedTokenProgram extends string = string,
  TAccountSystemProgram extends string = string,
  TAccountMarketplaceProgram extends string = string,
  TAccountApprove extends string = string,
  TAccountDistribution extends string = string,
  TAccountWnsProgram extends string = string,
  TAccountDistributionProgram extends string = string,
  TAccountExtraMetas extends string = string,
> = {
  owner?: Address<TAccountOwner>;
  ownerTa: Address<TAccountOwnerTa>;
  listState: Address<TAccountListState>;
  listTa: Address<TAccountListTa>;
  mint: Address<TAccountMint>;
  rentDestination?: Address<TAccountRentDestination>;
  payer: TransactionSigner<TAccountPayer>;
  tokenProgram?: Address<TAccountTokenProgram>;
  associatedTokenProgram?: Address<TAccountAssociatedTokenProgram>;
  systemProgram?: Address<TAccountSystemProgram>;
  marketplaceProgram?: Address<TAccountMarketplaceProgram>;
  approve: Address<TAccountApprove>;
  distribution: Address<TAccountDistribution>;
  wnsProgram?: Address<TAccountWnsProgram>;
  distributionProgram?: Address<TAccountDistributionProgram>;
  extraMetas: Address<TAccountExtraMetas>;
  collection: CloseExpiredListingWnsInstructionExtraArgs['collection'];
  paymentMint?: CloseExpiredListingWnsInstructionExtraArgs['paymentMint'];
};

export function getCloseExpiredListingWnsInstruction<
  TAccountOwner extends string,
  TAccountOwnerTa extends string,
  TAccountListState extends string,
  TAccountListTa extends string,
  TAccountMint extends string,
  TAccountRentDestination extends string,
  TAccountPayer extends string,
  TAccountTokenProgram extends string,
  TAccountAssociatedTokenProgram extends string,
  TAccountSystemProgram extends string,
  TAccountMarketplaceProgram extends string,
  TAccountApprove extends string,
  TAccountDistribution extends string,
  TAccountWnsProgram extends string,
  TAccountDistributionProgram extends string,
  TAccountExtraMetas extends string,
>(
  input: CloseExpiredListingWnsInput<
    TAccountOwner,
    TAccountOwnerTa,
    TAccountListState,
    TAccountListTa,
    TAccountMint,
    TAccountRentDestination,
    TAccountPayer,
    TAccountTokenProgram,
    TAccountAssociatedTokenProgram,
    TAccountSystemProgram,
    TAccountMarketplaceProgram,
    TAccountApprove,
    TAccountDistribution,
    TAccountWnsProgram,
    TAccountDistributionProgram,
    TAccountExtraMetas
  >
): CloseExpiredListingWnsInstruction<
  typeof TENSOR_MARKETPLACE_PROGRAM_ADDRESS,
  TAccountOwner,
  TAccountOwnerTa,
  TAccountListState,
  TAccountListTa,
  TAccountMint,
  TAccountRentDestination,
  TAccountPayer,
  TAccountTokenProgram,
  TAccountAssociatedTokenProgram,
  TAccountSystemProgram,
  TAccountMarketplaceProgram,
  TAccountApprove,
  TAccountDistribution,
  TAccountWnsProgram,
  TAccountDistributionProgram,
  TAccountExtraMetas
> {
  // Program address.
  const programAddress = TENSOR_MARKETPLACE_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
    owner: { value: input.owner ?? null, isWritable: false },
    ownerTa: { value: input.ownerTa ?? null, isWritable: true },
    listState: { value: input.listState ?? null, isWritable: true },
    listTa: { value: input.listTa ?? null, isWritable: true },
    mint: { value: input.mint ?? null, isWritable: false },
    rentDestination: { value: input.rentDestination ?? null, isWritable: true },
    payer: { value: input.payer ?? null, isWritable: true },
    tokenProgram: { value: input.tokenProgram ?? null, isWritable: false },
    associatedTokenProgram: {
      value: input.associatedTokenProgram ?? null,
      isWritable: false,
    },
    systemProgram: { value: input.systemProgram ?? null, isWritable: false },
    marketplaceProgram: {
      value: input.marketplaceProgram ?? null,
      isWritable: false,
    },
    approve: { value: input.approve ?? null, isWritable: true },
    distribution: { value: input.distribution ?? null, isWritable: true },
    wnsProgram: { value: input.wnsProgram ?? null, isWritable: false },
    distributionProgram: {
      value: input.distributionProgram ?? null,
      isWritable: false,
    },
    extraMetas: { value: input.extraMetas ?? null, isWritable: false },
  };
  const accounts = originalAccounts as Record<
    keyof typeof originalAccounts,
    ResolvedAccount
  >;

  // Original args.
  const args = { ...input };

  // Resolve default values.
  if (!accounts.owner.value) {
    accounts.owner.value = expectTransactionSigner(
      accounts.payer.value
    ).address;
  }
  if (!accounts.tokenProgram.value) {
    accounts.tokenProgram.value =
      'TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb' as Address<'TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb'>;
  }
  if (!accounts.rentDestination.value) {
    accounts.rentDestination.value = expectSome(accounts.owner.value);
  }
  if (!accounts.associatedTokenProgram.value) {
    accounts.associatedTokenProgram.value =
      'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL' as Address<'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL'>;
  }
  if (!accounts.systemProgram.value) {
    accounts.systemProgram.value =
      '11111111111111111111111111111111' as Address<'11111111111111111111111111111111'>;
  }
  if (!accounts.marketplaceProgram.value) {
    accounts.marketplaceProgram.value =
      'TCMPhJdwDryooaGtiocG1u3xcYbRpiJzb283XfCZsDp' as Address<'TCMPhJdwDryooaGtiocG1u3xcYbRpiJzb283XfCZsDp'>;
  }
  if (!args.paymentMint) {
    args.paymentMint =
      '11111111111111111111111111111111' as Address<'11111111111111111111111111111111'>;
  }
  if (!accounts.wnsProgram.value) {
    accounts.wnsProgram.value =
      'wns1gDLt8fgLcGhWi5MqAqgXpwEP1JftKE9eZnXS1HM' as Address<'wns1gDLt8fgLcGhWi5MqAqgXpwEP1JftKE9eZnXS1HM'>;
  }
  if (!accounts.distributionProgram.value) {
    accounts.distributionProgram.value =
      'diste3nXmK7ddDTs1zb6uday6j4etCa9RChD8fJ1xay' as Address<'diste3nXmK7ddDTs1zb6uday6j4etCa9RChD8fJ1xay'>;
  }

  const getAccountMeta = getAccountMetaFactory(programAddress, 'programId');
  const instruction = {
    accounts: [
      getAccountMeta(accounts.owner),
      getAccountMeta(accounts.ownerTa),
      getAccountMeta(accounts.listState),
      getAccountMeta(accounts.listTa),
      getAccountMeta(accounts.mint),
      getAccountMeta(accounts.rentDestination),
      getAccountMeta(accounts.payer),
      getAccountMeta(accounts.tokenProgram),
      getAccountMeta(accounts.associatedTokenProgram),
      getAccountMeta(accounts.systemProgram),
      getAccountMeta(accounts.marketplaceProgram),
      getAccountMeta(accounts.approve),
      getAccountMeta(accounts.distribution),
      getAccountMeta(accounts.wnsProgram),
      getAccountMeta(accounts.distributionProgram),
      getAccountMeta(accounts.extraMetas),
    ],
    programAddress,
    data: getCloseExpiredListingWnsInstructionDataEncoder().encode({}),
  } as CloseExpiredListingWnsInstruction<
    typeof TENSOR_MARKETPLACE_PROGRAM_ADDRESS,
    TAccountOwner,
    TAccountOwnerTa,
    TAccountListState,
    TAccountListTa,
    TAccountMint,
    TAccountRentDestination,
    TAccountPayer,
    TAccountTokenProgram,
    TAccountAssociatedTokenProgram,
    TAccountSystemProgram,
    TAccountMarketplaceProgram,
    TAccountApprove,
    TAccountDistribution,
    TAccountWnsProgram,
    TAccountDistributionProgram,
    TAccountExtraMetas
  >;

  return instruction;
}

export type ParsedCloseExpiredListingWnsInstruction<
  TProgram extends string = typeof TENSOR_MARKETPLACE_PROGRAM_ADDRESS,
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> = {
  programAddress: Address<TProgram>;
  accounts: {
    owner: TAccountMetas[0];
    ownerTa: TAccountMetas[1];
    listState: TAccountMetas[2];
    listTa: TAccountMetas[3];
    mint: TAccountMetas[4];
    rentDestination: TAccountMetas[5];
    payer: TAccountMetas[6];
    tokenProgram: TAccountMetas[7];
    associatedTokenProgram: TAccountMetas[8];
    systemProgram: TAccountMetas[9];
    marketplaceProgram: TAccountMetas[10];
    approve: TAccountMetas[11];
    distribution: TAccountMetas[12];
    wnsProgram: TAccountMetas[13];
    distributionProgram: TAccountMetas[14];
    extraMetas: TAccountMetas[15];
  };
  data: CloseExpiredListingWnsInstructionData;
};

export function parseCloseExpiredListingWnsInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedCloseExpiredListingWnsInstruction<TProgram, TAccountMetas> {
  if (instruction.accounts.length < 16) {
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
      ownerTa: getNextAccount(),
      listState: getNextAccount(),
      listTa: getNextAccount(),
      mint: getNextAccount(),
      rentDestination: getNextAccount(),
      payer: getNextAccount(),
      tokenProgram: getNextAccount(),
      associatedTokenProgram: getNextAccount(),
      systemProgram: getNextAccount(),
      marketplaceProgram: getNextAccount(),
      approve: getNextAccount(),
      distribution: getNextAccount(),
      wnsProgram: getNextAccount(),
      distributionProgram: getNextAccount(),
      extraMetas: getNextAccount(),
    },
    data: getCloseExpiredListingWnsInstructionDataDecoder().decode(
      instruction.data
    ),
  };
}