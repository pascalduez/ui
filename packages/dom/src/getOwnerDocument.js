// @flow

export function getOwnerDocument(node: any): Document {
  return (node && node.ownerDocument) || document;
}
