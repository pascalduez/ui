// @flow

import * as React from 'react';

export function safeCloneElement<Props>(
  element: React.Element<Props> | React.Node,
  props?: $Shape<Props> & { ... },
  ...children: React.Node
): React.Element<Props> | React.ReactNode {
  return React.isValidElement(element)
    ? React.cloneElement(element, props, ...children)
    : element;
}
