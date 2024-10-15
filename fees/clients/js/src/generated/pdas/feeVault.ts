/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/kinobi-so/kinobi
 */

import {
  fixEncoderSize,
  getBytesEncoder,
  getProgramDerivedAddress,
  getUtf8Encoder,
  type Address,
  type ProgramDerivedAddress,
  type ReadonlyUint8Array,
} from '@solana/web3.js';

export type FeeVaultSeeds = {
  /** The shard number, 0-255 */
  shard: ReadonlyUint8Array;
};

export async function findFeeVaultPda(
  seeds: FeeVaultSeeds,
  config: { programAddress?: Address | undefined } = {}
): Promise<ProgramDerivedAddress> {
  const {
    programAddress = 'TFEEgwDP6nn1s8mMX2tTNPPz8j2VomkphLUmyxKm17A' as Address<'TFEEgwDP6nn1s8mMX2tTNPPz8j2VomkphLUmyxKm17A'>,
  } = config;
  return await getProgramDerivedAddress({
    programAddress,
    seeds: [
      getUtf8Encoder().encode('fee_vault'),
      fixEncoderSize(getBytesEncoder(), 1).encode(seeds.shard),
    ],
  });
}