// @flow

import { isNode } from './isNode';

export function isAnimating(node: HTMLElement): boolean {
  return (
    isNode(node) && node.getAnimations().some(a => a.playState === 'running')
  );
}
