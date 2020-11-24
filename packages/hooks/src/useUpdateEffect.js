// @flow

import { useRef, useEffect } from 'react';

type MaybeCleanUpFn = void | (() => void);
type EffectCallback = () => MaybeCleanUpFn;

/**
 * A `React.useEffect` that will not run on the first render.
 */
export function useUpdateEffect(
  create: EffectCallback,
  inputs: ?$ReadOnlyArray<mixed>
): void {
  const mounted = useRef(false);

  useEffect(() => {
    if (mounted.current) {
      return create();
    }

    mounted.current = true;
    return undefined;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, inputs);
}
