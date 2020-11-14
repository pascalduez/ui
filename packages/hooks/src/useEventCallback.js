import { useCallback } from 'react';
import { useLayoutEffect } from './useLayoutEffect';

/**
 * More performant `useCallback`.
 * @see https://github.com/facebook/react/issues/14099#issuecomment-440013892
 */
export function useEventCallback(callback) {
  const ref = React.useRef(callback);

  useLayoutEffect(() => {
    ref.current = callback;
  });

  return useCallback((event, ...args) => ref.current(event, ...args), []);
}
