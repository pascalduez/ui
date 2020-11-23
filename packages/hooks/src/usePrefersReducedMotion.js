import { useState } from 'react';
import { canUseDOM } from '@ui/dom';
import { useLayoutEffect } from './useLayoutEffect';

/**
 * We should probably use addEventListener('change'),
 * but this is not available prior to Safari 14, so we
 * stick with AddListener, removeListener for now.
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList
 */

const QUERY = '(prefers-reduced-motion: no-preference)';

const getInitialState = () =>
  canUseDOM ? !window.matchMedia(QUERY).matches : true;

export function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    getInitialState
  );

  useLayoutEffect(() => {
    const mediaQueryList = window.matchMedia(QUERY);
    const listener = evt => {
      setPrefersReducedMotion(!evt.matches);
    };
    mediaQueryList.addListener(listener);

    return () => {
      mediaQueryList.removeListener(listener);
    };
  }, []);

  return prefersReducedMotion;
}
