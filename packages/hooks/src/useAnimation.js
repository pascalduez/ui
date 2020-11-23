// @flow

import { useReducer } from 'react';
import { unstable_batchedUpdates as batchedUpdates } from 'react-dom';
import { useLayoutEffect } from './useLayoutEffect';
import { useEventCallback } from './useEventCallback';

declare function useAnimation(state?: {| visible: boolean |}): {|
  render: boolean,
  animating: boolean,
  animatingStart: (evt?: SyntheticAnimationEvent<>) => mixed,
  onAnimationEnd: (evt?: SyntheticAnimationEvent<>) => mixed,
|};

const initialState = {
  render: false,
  animating: false,
};

function reducer(state, action) {
  switch (action) {
    case 'show':
      return { ...state, render: true };
    case 'hide':
      return { ...state, render: false };
    case 'start':
      return { ...state, animating: true };
    case 'stop':
      return { ...state, animating: false };
    default:
      throw new Error();
  }
}

export function useAnimation(props = {}) {
  const { visible = false } = props;
  const [{ render, animating }, dispatch] = useReducer(reducer, initialState);

  useLayoutEffect(() => {
    if (visible) dispatch('show');
  }, [visible]);

  const onAnimationStart = useEventCallback(() => {
    dispatch('start');
  });

  const onAnimationEnd = useEventCallback(() => {
    batchedUpdates(() => {
      if (!visible) dispatch('hide');
      dispatch('stop');
    });
  });

  return {
    render,
    animating,
    onAnimationStart,
    onAnimationEnd,
  };
}
