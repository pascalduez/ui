// @flow

import { isNode } from './isNode';

declare function isElement(value: mixed): boolean %checks(value instanceof
  Element);

export function isElement(value) {
  return isNode(value) && value.nodeType === 1;
}
