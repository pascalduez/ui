import { Children, isValidElement } from 'react';

/**
 * Gets only valid React Element children.
 * Filter nullish or falsy children.
 */
export function getElementChildren(children) {
  return Children.toArray(children).filter(isValidElement);
}
