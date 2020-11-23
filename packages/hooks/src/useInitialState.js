// @flow

import { useState } from 'react';

declare function useInitialState<S>(initialState: (() => S) | S): S;

/**
 * Returns the very first value passed to `initialState`,
 * even if it changes between re-renders.
 */
export function useInitialState(initialState) {
  const [state] = useState(initialState);

  return state;
}
