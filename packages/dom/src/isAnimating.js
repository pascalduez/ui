// @flow

import { isElement } from './isElement';

export function isAnimating(node: HTMLElement): boolean {
  return (
    isElement(node) && node.getAnimations().some(a => a.playState === 'running')
  );
}
