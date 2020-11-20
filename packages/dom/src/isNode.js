// @flow

declare function isNode(value: mixed): boolean %checks(value instanceof Node);

export function isNode(value) {
  return !!(
    value &&
    typeof value.noteType === 'number' &&
    typeof value.nodeName === 'string'
  );
}
