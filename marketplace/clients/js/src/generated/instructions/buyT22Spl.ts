/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/kinobi-so/kinobi
 */

import {
  AccountRole,
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
  type ReadonlySignerAccount,
  type ReadonlyUint8Array,
  type TransactionSigner,
  type WritableAccount,
  type WritableSignerAccount,
} from '@solana/web3.js';
import { resolveBuyerAta, resolveListAta } from '@tensor-foundation/resolvers';
import {
  resolveFeeVaultCurrencyAta,
  resolveFeeVaultPdaFromListState,
  resolveMakerBrokerCurrencyAta,
  resolveOwnerCurrencyAta,
  resolvePayerCurrencyAta,
  resolveTakerBrokerCurrencyAta,
} from '../../hooked';
import { findListStatePda } from '../pdas';
import { TENSOR_MARKETPLACE_PROGRAM_ADDRESS } from '../programs';
import {
  expectAddress,
  expectSome,
  expectTransactionSigner,
  getAccountMetaFactory,
  type ResolvedAccount,
} from '../shared';

export type BuyT22SplInstruction<
  TProgram extends string = typeof TENSOR_MARKETPLACE_PROGRAM_ADDRESS,
  TAccountFeeVault extends string | IAccountMeta<string> = string,
  TAccountFeeVaultCurrencyTa extends string | IAccountMeta<string> = string,
  TAccountBuyer extends string | IAccountMeta<string> = string,
  TAccountBuyerTa extends string | IAccountMeta<string> = string,
  TAccountListState extends string | IAccountMeta<string> = string,
  TAccountListTa extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountCurrency extends string | IAccountMeta<string> = string,
  TAccountOwner extends string | IAccountMeta<string> = string,
  TAccountOwnerCurrencyTa extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountPayerCurrencyTa extends string | IAccountMeta<string> = string,
  TAccountTakerBroker extends string | IAccountMeta<string> = string,
  TAccountTakerBrokerCurrencyTa extends string | IAccountMeta<string> = string,
  TAccountMakerBroker extends string | IAccountMeta<string> = string,
  TAccountMakerBrokerCurrencyTa extends string | IAccountMeta<string> = string,
  TAccountRentDestination extends string | IAccountMeta<string> = string,
  TAccountTokenProgram extends
    | string
    | IAccountMeta<string> = 'TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb',
  TAccountCurrencyTokenProgram extends
    | string
    | IAccountMeta<string> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountAssociatedTokenProgram extends
    | string
    | IAccountMeta<string> = 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL',
  TAccountMarketplaceProgram extends
    | string
    | IAccountMeta<string> = 'TCMPhJdwDryooaGtiocG1u3xcYbRpiJzb283XfCZsDp',
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountCosigner extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends readonly IAccountMeta<string>[] = [],
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountFeeVault extends string
        ? WritableAccount<TAccountFeeVault>
        : TAccountFeeVault,
      TAccountFeeVaultCurrencyTa extends string
        ? WritableAccount<TAccountFeeVaultCurrencyTa>
        : TAccountFeeVaultCurrencyTa,
      TAccountBuyer extends string
        ? ReadonlyAccount<TAccountBuyer>
        : TAccountBuyer,
      TAccountBuyerTa extends string
        ? WritableAccount<TAccountBuyerTa>
        : TAccountBuyerTa,
      TAccountListState extends string
        ? WritableAccount<TAccountListState>
        : TAccountListState,
      TAccountListTa extends string
        ? WritableAccount<TAccountListTa>
        : TAccountListTa,
      TAccountMint extends string
        ? ReadonlyAccount<TAccountMint>
        : TAccountMint,
      TAccountCurrency extends string
        ? ReadonlyAccount<TAccountCurrency>
        : TAccountCurrency,
      TAccountOwner extends string
        ? WritableAccount<TAccountOwner>
        : TAccountOwner,
      TAccountOwnerCurrencyTa extends string
        ? WritableAccount<TAccountOwnerCurrencyTa>
        : TAccountOwnerCurrencyTa,
      TAccountPayer extends string
        ? WritableSignerAccount<TAccountPayer> &
            IAccountSignerMeta<TAccountPayer>
        : TAccountPayer,
      TAccountPayerCurrencyTa extends string
        ? WritableAccount<TAccountPayerCurrencyTa>
        : TAccountPayerCurrencyTa,
      TAccountTakerBroker extends string
        ? WritableAccount<TAccountTakerBroker>
        : TAccountTakerBroker,
      TAccountTakerBrokerCurrencyTa extends string
        ? WritableAccount<TAccountTakerBrokerCurrencyTa>
        : TAccountTakerBrokerCurrencyTa,
      TAccountMakerBroker extends string
        ? WritableAccount<TAccountMakerBroker>
        : TAccountMakerBroker,
      TAccountMakerBrokerCurrencyTa extends string
        ? WritableAccount<TAccountMakerBrokerCurrencyTa>
        : TAccountMakerBrokerCurrencyTa,
      TAccountRentDestination extends string
        ? WritableAccount<TAccountRentDestination>
        : TAccountRentDestination,
      TAccountTokenProgram extends string
        ? ReadonlyAccount<TAccountTokenProgram>
        : TAccountTokenProgram,
      TAccountCurrencyTokenProgram extends string
        ? ReadonlyAccount<TAccountCurrencyTokenProgram>
        : TAccountCurrencyTokenProgram,
      TAccountAssociatedTokenProgram extends string
        ? ReadonlyAccount<TAccountAssociatedTokenProgram>
        : TAccountAssociatedTokenProgram,
      TAccountMarketplaceProgram extends string
        ? ReadonlyAccount<TAccountMarketplaceProgram>
        : TAccountMarketplaceProgram,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      TAccountCosigner extends string
        ? ReadonlySignerAccount<TAccountCosigner> &
            IAccountSignerMeta<TAccountCosigner>
        : TAccountCosigner,
      ...TRemainingAccounts,
    ]
  >;

export type BuyT22SplInstructionData = {
  discriminator: ReadonlyUint8Array;
  maxAmount: bigint;
};

export type BuyT22SplInstructionDataArgs = { maxAmount: number | bigint };

export function getBuyT22SplInstructionDataEncoder(): Encoder<BuyT22SplInstructionDataArgs> {
  return transformEncoder(
    getStructEncoder([
      ['discriminator', fixEncoderSize(getBytesEncoder(), 8)],
      ['maxAmount', getU64Encoder()],
    ]),
    (value) => ({
      ...value,
      discriminator: new Uint8Array([102, 21, 163, 39, 94, 39, 122, 94]),
    })
  );
}

export function getBuyT22SplInstructionDataDecoder(): Decoder<BuyT22SplInstructionData> {
  return getStructDecoder([
    ['discriminator', fixDecoderSize(getBytesDecoder(), 8)],
    ['maxAmount', getU64Decoder()],
  ]);
}

export function getBuyT22SplInstructionDataCodec(): Codec<
  BuyT22SplInstructionDataArgs,
  BuyT22SplInstructionData
> {
  return combineCodec(
    getBuyT22SplInstructionDataEncoder(),
    getBuyT22SplInstructionDataDecoder()
  );
}

export type BuyT22SplAsyncInput<
  TAccountFeeVault extends string = string,
  TAccountFeeVaultCurrencyTa extends string = string,
  TAccountBuyer extends string = string,
  TAccountBuyerTa extends string = string,
  TAccountListState extends string = string,
  TAccountListTa extends string = string,
  TAccountMint extends string = string,
  TAccountCurrency extends string = string,
  TAccountOwner extends string = string,
  TAccountOwnerCurrencyTa extends string = string,
  TAccountPayer extends string = string,
  TAccountPayerCurrencyTa extends string = string,
  TAccountTakerBroker extends string = string,
  TAccountTakerBrokerCurrencyTa extends string = string,
  TAccountMakerBroker extends string = string,
  TAccountMakerBrokerCurrencyTa extends string = string,
  TAccountRentDestination extends string = string,
  TAccountTokenProgram extends string = string,
  TAccountCurrencyTokenProgram extends string = string,
  TAccountAssociatedTokenProgram extends string = string,
  TAccountMarketplaceProgram extends string = string,
  TAccountSystemProgram extends string = string,
  TAccountCosigner extends string = string,
> = {
  feeVault?: Address<TAccountFeeVault>;
  feeVaultCurrencyTa?: Address<TAccountFeeVaultCurrencyTa>;
  buyer?: Address<TAccountBuyer>;
  buyerTa?: Address<TAccountBuyerTa>;
  listState?: Address<TAccountListState>;
  listTa?: Address<TAccountListTa>;
  /** T22 asset mint. */
  mint: Address<TAccountMint>;
  /** SPL token mint of the currency. */
  currency: Address<TAccountCurrency>;
  owner: Address<TAccountOwner>;
  ownerCurrencyTa?: Address<TAccountOwnerCurrencyTa>;
  payer: TransactionSigner<TAccountPayer>;
  payerCurrencyTa?: Address<TAccountPayerCurrencyTa>;
  takerBroker?: Address<TAccountTakerBroker>;
  takerBrokerCurrencyTa?: Address<TAccountTakerBrokerCurrencyTa>;
  makerBroker?: Address<TAccountMakerBroker>;
  makerBrokerCurrencyTa?: Address<TAccountMakerBrokerCurrencyTa>;
  rentDestination?: Address<TAccountRentDestination>;
  tokenProgram?: Address<TAccountTokenProgram>;
  currencyTokenProgram?: Address<TAccountCurrencyTokenProgram>;
  associatedTokenProgram?: Address<TAccountAssociatedTokenProgram>;
  marketplaceProgram?: Address<TAccountMarketplaceProgram>;
  systemProgram?: Address<TAccountSystemProgram>;
  cosigner?: TransactionSigner<TAccountCosigner>;
  maxAmount: BuyT22SplInstructionDataArgs['maxAmount'];
  creators?: Array<Address>;
  creatorAtas?: Array<Address>;
  transferHookAccounts: Array<Address>;
};

export async function getBuyT22SplInstructionAsync<
  TAccountFeeVault extends string,
  TAccountFeeVaultCurrencyTa extends string,
  TAccountBuyer extends string,
  TAccountBuyerTa extends string,
  TAccountListState extends string,
  TAccountListTa extends string,
  TAccountMint extends string,
  TAccountCurrency extends string,
  TAccountOwner extends string,
  TAccountOwnerCurrencyTa extends string,
  TAccountPayer extends string,
  TAccountPayerCurrencyTa extends string,
  TAccountTakerBroker extends string,
  TAccountTakerBrokerCurrencyTa extends string,
  TAccountMakerBroker extends string,
  TAccountMakerBrokerCurrencyTa extends string,
  TAccountRentDestination extends string,
  TAccountTokenProgram extends string,
  TAccountCurrencyTokenProgram extends string,
  TAccountAssociatedTokenProgram extends string,
  TAccountMarketplaceProgram extends string,
  TAccountSystemProgram extends string,
  TAccountCosigner extends string,
>(
  input: BuyT22SplAsyncInput<
    TAccountFeeVault,
    TAccountFeeVaultCurrencyTa,
    TAccountBuyer,
    TAccountBuyerTa,
    TAccountListState,
    TAccountListTa,
    TAccountMint,
    TAccountCurrency,
    TAccountOwner,
    TAccountOwnerCurrencyTa,
    TAccountPayer,
    TAccountPayerCurrencyTa,
    TAccountTakerBroker,
    TAccountTakerBrokerCurrencyTa,
    TAccountMakerBroker,
    TAccountMakerBrokerCurrencyTa,
    TAccountRentDestination,
    TAccountTokenProgram,
    TAccountCurrencyTokenProgram,
    TAccountAssociatedTokenProgram,
    TAccountMarketplaceProgram,
    TAccountSystemProgram,
    TAccountCosigner
  >
): Promise<
  BuyT22SplInstruction<
    typeof TENSOR_MARKETPLACE_PROGRAM_ADDRESS,
    TAccountFeeVault,
    TAccountFeeVaultCurrencyTa,
    TAccountBuyer,
    TAccountBuyerTa,
    TAccountListState,
    TAccountListTa,
    TAccountMint,
    TAccountCurrency,
    TAccountOwner,
    TAccountOwnerCurrencyTa,
    TAccountPayer,
    TAccountPayerCurrencyTa,
    TAccountTakerBroker,
    TAccountTakerBrokerCurrencyTa,
    TAccountMakerBroker,
    TAccountMakerBrokerCurrencyTa,
    TAccountRentDestination,
    TAccountTokenProgram,
    TAccountCurrencyTokenProgram,
    TAccountAssociatedTokenProgram,
    TAccountMarketplaceProgram,
    TAccountSystemProgram,
    TAccountCosigner
  >
> {
  // Program address.
  const programAddress = TENSOR_MARKETPLACE_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
    feeVault: { value: input.feeVault ?? null, isWritable: true },
    feeVaultCurrencyTa: {
      value: input.feeVaultCurrencyTa ?? null,
      isWritable: true,
    },
    buyer: { value: input.buyer ?? null, isWritable: false },
    buyerTa: { value: input.buyerTa ?? null, isWritable: true },
    listState: { value: input.listState ?? null, isWritable: true },
    listTa: { value: input.listTa ?? null, isWritable: true },
    mint: { value: input.mint ?? null, isWritable: false },
    currency: { value: input.currency ?? null, isWritable: false },
    owner: { value: input.owner ?? null, isWritable: true },
    ownerCurrencyTa: { value: input.ownerCurrencyTa ?? null, isWritable: true },
    payer: { value: input.payer ?? null, isWritable: true },
    payerCurrencyTa: { value: input.payerCurrencyTa ?? null, isWritable: true },
    takerBroker: { value: input.takerBroker ?? null, isWritable: true },
    takerBrokerCurrencyTa: {
      value: input.takerBrokerCurrencyTa ?? null,
      isWritable: true,
    },
    makerBroker: { value: input.makerBroker ?? null, isWritable: true },
    makerBrokerCurrencyTa: {
      value: input.makerBrokerCurrencyTa ?? null,
      isWritable: true,
    },
    rentDestination: { value: input.rentDestination ?? null, isWritable: true },
    tokenProgram: { value: input.tokenProgram ?? null, isWritable: false },
    currencyTokenProgram: {
      value: input.currencyTokenProgram ?? null,
      isWritable: false,
    },
    associatedTokenProgram: {
      value: input.associatedTokenProgram ?? null,
      isWritable: false,
    },
    marketplaceProgram: {
      value: input.marketplaceProgram ?? null,
      isWritable: false,
    },
    systemProgram: { value: input.systemProgram ?? null, isWritable: false },
    cosigner: { value: input.cosigner ?? null, isWritable: false },
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
  if (!accounts.listState.value) {
    accounts.listState.value = await findListStatePda({
      mint: expectAddress(accounts.mint.value),
    });
  }
  if (!accounts.feeVault.value) {
    accounts.feeVault = {
      ...accounts.feeVault,
      ...(await resolveFeeVaultPdaFromListState(resolverScope)),
    };
  }
  if (!accounts.currencyTokenProgram.value) {
    accounts.currencyTokenProgram.value =
      'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA' as Address<'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'>;
  }
  if (!accounts.feeVaultCurrencyTa.value) {
    accounts.feeVaultCurrencyTa = {
      ...accounts.feeVaultCurrencyTa,
      ...(await resolveFeeVaultCurrencyAta(resolverScope)),
    };
  }
  if (!accounts.buyer.value) {
    accounts.buyer.value = expectTransactionSigner(
      accounts.payer.value
    ).address;
  }
  if (!accounts.tokenProgram.value) {
    accounts.tokenProgram.value =
      'TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb' as Address<'TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb'>;
  }
  if (!accounts.buyerTa.value) {
    accounts.buyerTa = {
      ...accounts.buyerTa,
      ...(await resolveBuyerAta(resolverScope)),
    };
  }
  if (!accounts.listTa.value) {
    accounts.listTa = {
      ...accounts.listTa,
      ...(await resolveListAta(resolverScope)),
    };
  }
  if (!accounts.ownerCurrencyTa.value) {
    accounts.ownerCurrencyTa = {
      ...accounts.ownerCurrencyTa,
      ...(await resolveOwnerCurrencyAta(resolverScope)),
    };
  }
  if (!accounts.payerCurrencyTa.value) {
    accounts.payerCurrencyTa = {
      ...accounts.payerCurrencyTa,
      ...(await resolvePayerCurrencyAta(resolverScope)),
    };
  }
  if (!accounts.takerBrokerCurrencyTa.value) {
    accounts.takerBrokerCurrencyTa = {
      ...accounts.takerBrokerCurrencyTa,
      ...(await resolveTakerBrokerCurrencyAta(resolverScope)),
    };
  }
  if (!accounts.makerBrokerCurrencyTa.value) {
    accounts.makerBrokerCurrencyTa = {
      ...accounts.makerBrokerCurrencyTa,
      ...(await resolveMakerBrokerCurrencyAta(resolverScope)),
    };
  }
  if (!accounts.rentDestination.value) {
    accounts.rentDestination.value = expectSome(accounts.owner.value);
  }
  if (!accounts.associatedTokenProgram.value) {
    accounts.associatedTokenProgram.value =
      'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL' as Address<'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL'>;
  }
  if (!accounts.marketplaceProgram.value) {
    accounts.marketplaceProgram.value =
      'TCMPhJdwDryooaGtiocG1u3xcYbRpiJzb283XfCZsDp' as Address<'TCMPhJdwDryooaGtiocG1u3xcYbRpiJzb283XfCZsDp'>;
  }
  if (!accounts.systemProgram.value) {
    accounts.systemProgram.value =
      '11111111111111111111111111111111' as Address<'11111111111111111111111111111111'>;
  }

  // Remaining accounts.
  const remainingAccounts: IAccountMeta[] = [
    ...(args.creators ?? []).map((address) => ({
      address,
      role: AccountRole.WRITABLE,
    })),
    ...(args.creatorAtas ?? []).map((address) => ({
      address,
      role: AccountRole.WRITABLE,
    })),
    ...args.transferHookAccounts.map((address) => ({
      address,
      role: AccountRole.READONLY,
    })),
  ];

  const getAccountMeta = getAccountMetaFactory(programAddress, 'programId');
  const instruction = {
    accounts: [
      getAccountMeta(accounts.feeVault),
      getAccountMeta(accounts.feeVaultCurrencyTa),
      getAccountMeta(accounts.buyer),
      getAccountMeta(accounts.buyerTa),
      getAccountMeta(accounts.listState),
      getAccountMeta(accounts.listTa),
      getAccountMeta(accounts.mint),
      getAccountMeta(accounts.currency),
      getAccountMeta(accounts.owner),
      getAccountMeta(accounts.ownerCurrencyTa),
      getAccountMeta(accounts.payer),
      getAccountMeta(accounts.payerCurrencyTa),
      getAccountMeta(accounts.takerBroker),
      getAccountMeta(accounts.takerBrokerCurrencyTa),
      getAccountMeta(accounts.makerBroker),
      getAccountMeta(accounts.makerBrokerCurrencyTa),
      getAccountMeta(accounts.rentDestination),
      getAccountMeta(accounts.tokenProgram),
      getAccountMeta(accounts.currencyTokenProgram),
      getAccountMeta(accounts.associatedTokenProgram),
      getAccountMeta(accounts.marketplaceProgram),
      getAccountMeta(accounts.systemProgram),
      getAccountMeta(accounts.cosigner),
      ...remainingAccounts,
    ],
    programAddress,
    data: getBuyT22SplInstructionDataEncoder().encode(
      args as BuyT22SplInstructionDataArgs
    ),
  } as BuyT22SplInstruction<
    typeof TENSOR_MARKETPLACE_PROGRAM_ADDRESS,
    TAccountFeeVault,
    TAccountFeeVaultCurrencyTa,
    TAccountBuyer,
    TAccountBuyerTa,
    TAccountListState,
    TAccountListTa,
    TAccountMint,
    TAccountCurrency,
    TAccountOwner,
    TAccountOwnerCurrencyTa,
    TAccountPayer,
    TAccountPayerCurrencyTa,
    TAccountTakerBroker,
    TAccountTakerBrokerCurrencyTa,
    TAccountMakerBroker,
    TAccountMakerBrokerCurrencyTa,
    TAccountRentDestination,
    TAccountTokenProgram,
    TAccountCurrencyTokenProgram,
    TAccountAssociatedTokenProgram,
    TAccountMarketplaceProgram,
    TAccountSystemProgram,
    TAccountCosigner
  >;

  return instruction;
}

export type BuyT22SplInput<
  TAccountFeeVault extends string = string,
  TAccountFeeVaultCurrencyTa extends string = string,
  TAccountBuyer extends string = string,
  TAccountBuyerTa extends string = string,
  TAccountListState extends string = string,
  TAccountListTa extends string = string,
  TAccountMint extends string = string,
  TAccountCurrency extends string = string,
  TAccountOwner extends string = string,
  TAccountOwnerCurrencyTa extends string = string,
  TAccountPayer extends string = string,
  TAccountPayerCurrencyTa extends string = string,
  TAccountTakerBroker extends string = string,
  TAccountTakerBrokerCurrencyTa extends string = string,
  TAccountMakerBroker extends string = string,
  TAccountMakerBrokerCurrencyTa extends string = string,
  TAccountRentDestination extends string = string,
  TAccountTokenProgram extends string = string,
  TAccountCurrencyTokenProgram extends string = string,
  TAccountAssociatedTokenProgram extends string = string,
  TAccountMarketplaceProgram extends string = string,
  TAccountSystemProgram extends string = string,
  TAccountCosigner extends string = string,
> = {
  feeVault: Address<TAccountFeeVault>;
  feeVaultCurrencyTa: Address<TAccountFeeVaultCurrencyTa>;
  buyer?: Address<TAccountBuyer>;
  buyerTa: Address<TAccountBuyerTa>;
  listState: Address<TAccountListState>;
  listTa: Address<TAccountListTa>;
  /** T22 asset mint. */
  mint: Address<TAccountMint>;
  /** SPL token mint of the currency. */
  currency: Address<TAccountCurrency>;
  owner: Address<TAccountOwner>;
  ownerCurrencyTa: Address<TAccountOwnerCurrencyTa>;
  payer: TransactionSigner<TAccountPayer>;
  payerCurrencyTa: Address<TAccountPayerCurrencyTa>;
  takerBroker?: Address<TAccountTakerBroker>;
  takerBrokerCurrencyTa?: Address<TAccountTakerBrokerCurrencyTa>;
  makerBroker?: Address<TAccountMakerBroker>;
  makerBrokerCurrencyTa?: Address<TAccountMakerBrokerCurrencyTa>;
  rentDestination?: Address<TAccountRentDestination>;
  tokenProgram?: Address<TAccountTokenProgram>;
  currencyTokenProgram?: Address<TAccountCurrencyTokenProgram>;
  associatedTokenProgram?: Address<TAccountAssociatedTokenProgram>;
  marketplaceProgram?: Address<TAccountMarketplaceProgram>;
  systemProgram?: Address<TAccountSystemProgram>;
  cosigner?: TransactionSigner<TAccountCosigner>;
  maxAmount: BuyT22SplInstructionDataArgs['maxAmount'];
  creators?: Array<Address>;
  creatorAtas?: Array<Address>;
  transferHookAccounts: Array<Address>;
};

export function getBuyT22SplInstruction<
  TAccountFeeVault extends string,
  TAccountFeeVaultCurrencyTa extends string,
  TAccountBuyer extends string,
  TAccountBuyerTa extends string,
  TAccountListState extends string,
  TAccountListTa extends string,
  TAccountMint extends string,
  TAccountCurrency extends string,
  TAccountOwner extends string,
  TAccountOwnerCurrencyTa extends string,
  TAccountPayer extends string,
  TAccountPayerCurrencyTa extends string,
  TAccountTakerBroker extends string,
  TAccountTakerBrokerCurrencyTa extends string,
  TAccountMakerBroker extends string,
  TAccountMakerBrokerCurrencyTa extends string,
  TAccountRentDestination extends string,
  TAccountTokenProgram extends string,
  TAccountCurrencyTokenProgram extends string,
  TAccountAssociatedTokenProgram extends string,
  TAccountMarketplaceProgram extends string,
  TAccountSystemProgram extends string,
  TAccountCosigner extends string,
>(
  input: BuyT22SplInput<
    TAccountFeeVault,
    TAccountFeeVaultCurrencyTa,
    TAccountBuyer,
    TAccountBuyerTa,
    TAccountListState,
    TAccountListTa,
    TAccountMint,
    TAccountCurrency,
    TAccountOwner,
    TAccountOwnerCurrencyTa,
    TAccountPayer,
    TAccountPayerCurrencyTa,
    TAccountTakerBroker,
    TAccountTakerBrokerCurrencyTa,
    TAccountMakerBroker,
    TAccountMakerBrokerCurrencyTa,
    TAccountRentDestination,
    TAccountTokenProgram,
    TAccountCurrencyTokenProgram,
    TAccountAssociatedTokenProgram,
    TAccountMarketplaceProgram,
    TAccountSystemProgram,
    TAccountCosigner
  >
): BuyT22SplInstruction<
  typeof TENSOR_MARKETPLACE_PROGRAM_ADDRESS,
  TAccountFeeVault,
  TAccountFeeVaultCurrencyTa,
  TAccountBuyer,
  TAccountBuyerTa,
  TAccountListState,
  TAccountListTa,
  TAccountMint,
  TAccountCurrency,
  TAccountOwner,
  TAccountOwnerCurrencyTa,
  TAccountPayer,
  TAccountPayerCurrencyTa,
  TAccountTakerBroker,
  TAccountTakerBrokerCurrencyTa,
  TAccountMakerBroker,
  TAccountMakerBrokerCurrencyTa,
  TAccountRentDestination,
  TAccountTokenProgram,
  TAccountCurrencyTokenProgram,
  TAccountAssociatedTokenProgram,
  TAccountMarketplaceProgram,
  TAccountSystemProgram,
  TAccountCosigner
> {
  // Program address.
  const programAddress = TENSOR_MARKETPLACE_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
    feeVault: { value: input.feeVault ?? null, isWritable: true },
    feeVaultCurrencyTa: {
      value: input.feeVaultCurrencyTa ?? null,
      isWritable: true,
    },
    buyer: { value: input.buyer ?? null, isWritable: false },
    buyerTa: { value: input.buyerTa ?? null, isWritable: true },
    listState: { value: input.listState ?? null, isWritable: true },
    listTa: { value: input.listTa ?? null, isWritable: true },
    mint: { value: input.mint ?? null, isWritable: false },
    currency: { value: input.currency ?? null, isWritable: false },
    owner: { value: input.owner ?? null, isWritable: true },
    ownerCurrencyTa: { value: input.ownerCurrencyTa ?? null, isWritable: true },
    payer: { value: input.payer ?? null, isWritable: true },
    payerCurrencyTa: { value: input.payerCurrencyTa ?? null, isWritable: true },
    takerBroker: { value: input.takerBroker ?? null, isWritable: true },
    takerBrokerCurrencyTa: {
      value: input.takerBrokerCurrencyTa ?? null,
      isWritable: true,
    },
    makerBroker: { value: input.makerBroker ?? null, isWritable: true },
    makerBrokerCurrencyTa: {
      value: input.makerBrokerCurrencyTa ?? null,
      isWritable: true,
    },
    rentDestination: { value: input.rentDestination ?? null, isWritable: true },
    tokenProgram: { value: input.tokenProgram ?? null, isWritable: false },
    currencyTokenProgram: {
      value: input.currencyTokenProgram ?? null,
      isWritable: false,
    },
    associatedTokenProgram: {
      value: input.associatedTokenProgram ?? null,
      isWritable: false,
    },
    marketplaceProgram: {
      value: input.marketplaceProgram ?? null,
      isWritable: false,
    },
    systemProgram: { value: input.systemProgram ?? null, isWritable: false },
    cosigner: { value: input.cosigner ?? null, isWritable: false },
  };
  const accounts = originalAccounts as Record<
    keyof typeof originalAccounts,
    ResolvedAccount
  >;

  // Original args.
  const args = { ...input };

  // Resolve default values.
  if (!accounts.currencyTokenProgram.value) {
    accounts.currencyTokenProgram.value =
      'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA' as Address<'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'>;
  }
  if (!accounts.buyer.value) {
    accounts.buyer.value = expectTransactionSigner(
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
  if (!accounts.marketplaceProgram.value) {
    accounts.marketplaceProgram.value =
      'TCMPhJdwDryooaGtiocG1u3xcYbRpiJzb283XfCZsDp' as Address<'TCMPhJdwDryooaGtiocG1u3xcYbRpiJzb283XfCZsDp'>;
  }
  if (!accounts.systemProgram.value) {
    accounts.systemProgram.value =
      '11111111111111111111111111111111' as Address<'11111111111111111111111111111111'>;
  }

  // Remaining accounts.
  const remainingAccounts: IAccountMeta[] = [
    ...(args.creators ?? []).map((address) => ({
      address,
      role: AccountRole.WRITABLE,
    })),
    ...(args.creatorAtas ?? []).map((address) => ({
      address,
      role: AccountRole.WRITABLE,
    })),
    ...args.transferHookAccounts.map((address) => ({
      address,
      role: AccountRole.READONLY,
    })),
  ];

  const getAccountMeta = getAccountMetaFactory(programAddress, 'programId');
  const instruction = {
    accounts: [
      getAccountMeta(accounts.feeVault),
      getAccountMeta(accounts.feeVaultCurrencyTa),
      getAccountMeta(accounts.buyer),
      getAccountMeta(accounts.buyerTa),
      getAccountMeta(accounts.listState),
      getAccountMeta(accounts.listTa),
      getAccountMeta(accounts.mint),
      getAccountMeta(accounts.currency),
      getAccountMeta(accounts.owner),
      getAccountMeta(accounts.ownerCurrencyTa),
      getAccountMeta(accounts.payer),
      getAccountMeta(accounts.payerCurrencyTa),
      getAccountMeta(accounts.takerBroker),
      getAccountMeta(accounts.takerBrokerCurrencyTa),
      getAccountMeta(accounts.makerBroker),
      getAccountMeta(accounts.makerBrokerCurrencyTa),
      getAccountMeta(accounts.rentDestination),
      getAccountMeta(accounts.tokenProgram),
      getAccountMeta(accounts.currencyTokenProgram),
      getAccountMeta(accounts.associatedTokenProgram),
      getAccountMeta(accounts.marketplaceProgram),
      getAccountMeta(accounts.systemProgram),
      getAccountMeta(accounts.cosigner),
      ...remainingAccounts,
    ],
    programAddress,
    data: getBuyT22SplInstructionDataEncoder().encode(
      args as BuyT22SplInstructionDataArgs
    ),
  } as BuyT22SplInstruction<
    typeof TENSOR_MARKETPLACE_PROGRAM_ADDRESS,
    TAccountFeeVault,
    TAccountFeeVaultCurrencyTa,
    TAccountBuyer,
    TAccountBuyerTa,
    TAccountListState,
    TAccountListTa,
    TAccountMint,
    TAccountCurrency,
    TAccountOwner,
    TAccountOwnerCurrencyTa,
    TAccountPayer,
    TAccountPayerCurrencyTa,
    TAccountTakerBroker,
    TAccountTakerBrokerCurrencyTa,
    TAccountMakerBroker,
    TAccountMakerBrokerCurrencyTa,
    TAccountRentDestination,
    TAccountTokenProgram,
    TAccountCurrencyTokenProgram,
    TAccountAssociatedTokenProgram,
    TAccountMarketplaceProgram,
    TAccountSystemProgram,
    TAccountCosigner
  >;

  return instruction;
}

export type ParsedBuyT22SplInstruction<
  TProgram extends string = typeof TENSOR_MARKETPLACE_PROGRAM_ADDRESS,
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> = {
  programAddress: Address<TProgram>;
  accounts: {
    feeVault: TAccountMetas[0];
    feeVaultCurrencyTa: TAccountMetas[1];
    buyer: TAccountMetas[2];
    buyerTa: TAccountMetas[3];
    listState: TAccountMetas[4];
    listTa: TAccountMetas[5];
    /** T22 asset mint. */
    mint: TAccountMetas[6];
    /** SPL token mint of the currency. */
    currency: TAccountMetas[7];
    owner: TAccountMetas[8];
    ownerCurrencyTa: TAccountMetas[9];
    payer: TAccountMetas[10];
    payerCurrencyTa: TAccountMetas[11];
    takerBroker?: TAccountMetas[12] | undefined;
    takerBrokerCurrencyTa?: TAccountMetas[13] | undefined;
    makerBroker?: TAccountMetas[14] | undefined;
    makerBrokerCurrencyTa?: TAccountMetas[15] | undefined;
    rentDestination: TAccountMetas[16];
    tokenProgram: TAccountMetas[17];
    currencyTokenProgram: TAccountMetas[18];
    associatedTokenProgram: TAccountMetas[19];
    marketplaceProgram: TAccountMetas[20];
    systemProgram: TAccountMetas[21];
    cosigner?: TAccountMetas[22] | undefined;
  };
  data: BuyT22SplInstructionData;
};

export function parseBuyT22SplInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedBuyT22SplInstruction<TProgram, TAccountMetas> {
  if (instruction.accounts.length < 23) {
    // TODO: Coded error.
    throw new Error('Not enough accounts');
  }
  let accountIndex = 0;
  const getNextAccount = () => {
    const accountMeta = instruction.accounts![accountIndex]!;
    accountIndex += 1;
    return accountMeta;
  };
  const getNextOptionalAccount = () => {
    const accountMeta = getNextAccount();
    return accountMeta.address === TENSOR_MARKETPLACE_PROGRAM_ADDRESS
      ? undefined
      : accountMeta;
  };
  return {
    programAddress: instruction.programAddress,
    accounts: {
      feeVault: getNextAccount(),
      feeVaultCurrencyTa: getNextAccount(),
      buyer: getNextAccount(),
      buyerTa: getNextAccount(),
      listState: getNextAccount(),
      listTa: getNextAccount(),
      mint: getNextAccount(),
      currency: getNextAccount(),
      owner: getNextAccount(),
      ownerCurrencyTa: getNextAccount(),
      payer: getNextAccount(),
      payerCurrencyTa: getNextAccount(),
      takerBroker: getNextOptionalAccount(),
      takerBrokerCurrencyTa: getNextOptionalAccount(),
      makerBroker: getNextOptionalAccount(),
      makerBrokerCurrencyTa: getNextOptionalAccount(),
      rentDestination: getNextAccount(),
      tokenProgram: getNextAccount(),
      currencyTokenProgram: getNextAccount(),
      associatedTokenProgram: getNextAccount(),
      marketplaceProgram: getNextAccount(),
      systemProgram: getNextAccount(),
      cosigner: getNextOptionalAccount(),
    },
    data: getBuyT22SplInstructionDataDecoder().decode(instruction.data),
  };
}