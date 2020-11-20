// @flow

declare function isNode(node: any): boolean %checks(node instanceof Node);

export function isNode(node) {
  return !!(
    node &&
    typeof node.nodeType === 'number' &&
    typeof node.nodeName === 'string'
  );
}
