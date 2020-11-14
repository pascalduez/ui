import * as React from 'react';

/**
 * Gets only valid React Element children.
 * Filter nullish or falsy children.
 */
export function getElementChildren(children) {
  return React.Children.toArray(children).filter(child =>
    React.isValidElement(child)
  );
}
