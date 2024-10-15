/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/kinobi-so/kinobi
 */

import {
  combineCodec,
  getDiscriminatedUnionDecoder,
  getDiscriminatedUnionEncoder,
  getStructDecoder,
  getStructEncoder,
  getTupleDecoder,
  getTupleEncoder,
  type Codec,
  type Decoder,
  type Encoder,
  type GetDiscriminatedUnionVariant,
  type GetDiscriminatedUnionVariantContent,
} from '@solana/web3.js';
import {
  getBuySellEventDecoder,
  getBuySellEventEncoder,
  type BuySellEvent,
  type BuySellEventArgs,
} from '.';

/** Enum for events emitted by the AMM program. */
export type TAmmEvent = {
  __kind: 'BuySellEvent';
  fields: readonly [BuySellEvent];
};

export type TAmmEventArgs = {
  __kind: 'BuySellEvent';
  fields: readonly [BuySellEventArgs];
};

export function getTAmmEventEncoder(): Encoder<TAmmEventArgs> {
  return getDiscriminatedUnionEncoder([
    [
      'BuySellEvent',
      getStructEncoder([
        ['fields', getTupleEncoder([getBuySellEventEncoder()])],
      ]),
    ],
  ]);
}

export function getTAmmEventDecoder(): Decoder<TAmmEvent> {
  return getDiscriminatedUnionDecoder([
    [
      'BuySellEvent',
      getStructDecoder([
        ['fields', getTupleDecoder([getBuySellEventDecoder()])],
      ]),
    ],
  ]);
}

export function getTAmmEventCodec(): Codec<TAmmEventArgs, TAmmEvent> {
  return combineCodec(getTAmmEventEncoder(), getTAmmEventDecoder());
}

// Data Enum Helpers.
export function tAmmEvent(
  kind: 'BuySellEvent',
  data: GetDiscriminatedUnionVariantContent<
    TAmmEventArgs,
    '__kind',
    'BuySellEvent'
  >['fields']
): GetDiscriminatedUnionVariant<TAmmEventArgs, '__kind', 'BuySellEvent'>;
export function tAmmEvent<K extends TAmmEventArgs['__kind'], Data>(
  kind: K,
  data?: Data
) {
  return Array.isArray(data)
    ? { __kind: kind, fields: data }
    : { __kind: kind, ...(data ?? {}) };
}

export function isTAmmEvent<K extends TAmmEvent['__kind']>(
  kind: K,
  value: TAmmEvent
): value is TAmmEvent & { __kind: K } {
  return value.__kind === kind;
}
