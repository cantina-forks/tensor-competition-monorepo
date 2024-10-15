/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/kinobi-so/kinobi
 */

import {
  combineCodec,
  getEnumDecoder,
  getEnumEncoder,
  type Codec,
  type Decoder,
  type Encoder,
} from '@solana/web3.js';

/** White list state enum. Currently only supports Frozen and Unfrozen. */
export enum State {
  Unfrozen,
  Frozen,
}

export type StateArgs = State;

export function getStateEncoder(): Encoder<StateArgs> {
  return getEnumEncoder(State);
}

export function getStateDecoder(): Decoder<State> {
  return getEnumDecoder(State);
}

export function getStateCodec(): Codec<StateArgs, State> {
  return combineCodec(getStateEncoder(), getStateDecoder());
}
