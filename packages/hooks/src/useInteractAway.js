// @flow

import { useEffect } from 'react';
import { canUsePassiveEvents, getOwnerDocument, isNode } from '@ui/dom';

type PossibleEvent = MouseEvent | TouchEvent;

const options = canUsePassiveEvents ? { passive: true } : false;

export function useInteractAway<T: HTMLElement>(
  ref: { current: T | null, ... },
  handler: (evt: PossibleEvent) => mixed
) {
  useEffect(() => {
    const listener = (evt: PossibleEvent) => {
      if (isValidEvent(evt, ref)) handler(evt);
    };

    document.addEventListener('mousedown', listener, options);
    document.addEventListener('touchstart', listener, options);

    return () => {
      document.removeEventListener('mousedown', listener, options);
      document.removeEventListener('touchstart', listener, options);
    };
  }, [handler, ref]);
}

function isValidEvent(evt, ref) {
  if (typeof evt.button === 'number' && evt.button > 0) {
    return false;
  }

  if (!isNode(evt.target)) {
    return false;
  }

  // If the event target is no longer in the document.
  const { body } = getOwnerDocument(evt.target);
  if (!body || !body.contains((evt.target: any))) {
    return false;
  }

  return ref.current && !ref.current.contains((evt.target: any));
}
