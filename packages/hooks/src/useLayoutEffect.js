import * as React from 'react';
import { canUseDOM } from '@ui/utils/dom';

/**
 * React currently warns about useLayoutEffect in SSR.
 * To get around it, we can conditionally useEffect on the server (no-op)
 * and useLayoutEffect in the browser. Neither will run anyway.
 * @see https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85
 */
export const useLayoutEffect = canUseDOM
  ? React.useLayoutEffect
  : React.useEffect;
