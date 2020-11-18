import { useRef, useCallback } from 'react';
import { useLayoutEffect } from './useLayoutEffect';

/**
 * More resiliant and performant `useCallback`.
 * @see https://github.com/facebook/react/issues/14099#issuecomment-440013892
 */
export function useEventCallback(callback) {
  const ref = useRef(callback);

  useLayoutEffect(() => {
    ref.current = callback;
  });

  return useCallback((event, ...args) => ref.current(event, ...args), []);
}
