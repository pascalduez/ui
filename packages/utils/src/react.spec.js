import * as React from 'react';
import * as ReactIs from 'react-is';

import { getElementChildren } from './react';

describe('getElementChildren', () => {
  it('should filter children and return only React Elements', () => {
    const Component = () => '';
    const element = (
      <>
        <div />
        <Component />
        {null}
        {false}
        {void 0}
      </>
    );

    expect(
      getElementChildren(element.props.children).every(ReactIs.isElement)
    ).toBe(true);
  });
});
