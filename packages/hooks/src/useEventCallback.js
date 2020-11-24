// @flow

import { useRef, useCallback } from 'react';
import { useLayoutEffect } from './useLayoutEffect';

type PossibleEvent = Event | SyntheticEvent<>;
type Callback = (evt: PossibleEvent, ...args: $ReadOnlyArray<empty>) => mixed;

/**
 * More resiliant and performant `useCallback` for events.
 * @see https://github.com/facebook/react/issues/14099#issuecomment-440013892
 */
export function useEventCallback(callback: Callback): Callback {
  const ref = useRef(callback);

  useLayoutEffect(() => {
    ref.current = callback;
  });

  return useCallback((evt, ...args) => ref.current(evt, ...args), []);
}
