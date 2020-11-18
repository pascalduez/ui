import { isElement } from 'react-is';

import { getElementChildren } from './getElementChildren';

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

    expect(getElementChildren(element.props.children).every(isElement)).toBe(
      true
    );
  });
});
