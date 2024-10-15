/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/kinobi-so/kinobi
 */

import {
  getAddressEncoder,
  getProgramDerivedAddress,
  getUtf8Encoder,
  type Address,
  type ProgramDerivedAddress,
} from '@solana/web3.js';

export type BidTaSeeds = {
  mint: Address;
};

export async function findBidTaPda(
  seeds: BidTaSeeds,
  config: { programAddress?: Address | undefined } = {}
): Promise<ProgramDerivedAddress> {
  const {
    programAddress = 'TCMPhJdwDryooaGtiocG1u3xcYbRpiJzb283XfCZsDp' as Address<'TCMPhJdwDryooaGtiocG1u3xcYbRpiJzb283XfCZsDp'>,
  } = config;
  return await getProgramDerivedAddress({
    programAddress,
    seeds: [
      getUtf8Encoder().encode('nft_escrow'),
      getAddressEncoder().encode(seeds.mint),
    ],
  });
}
