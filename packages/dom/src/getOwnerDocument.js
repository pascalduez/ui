// @flow

import { isNode } from './isNode';

export function getOwnerDocument(node: any): Document {
  return (isNode(node) && node.ownerDocument) || document;
}
