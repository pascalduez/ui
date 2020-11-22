import { isElement } from 'react-is';

import { safeCloneElement } from './safeCloneElement';

describe('safeCloneElement', () => {
  it('should clone valid React Elements', () => {
    const clone = safeCloneElement(<div />);

    expect(isElement(clone)).toBe(true);
  });

  it('should not clone falsy values', () => {
    const clone = safeCloneElement(null);

    expect(isElement(clone)).toBe(false);
  });

  it('should not clone non React Elements', () => {
    const clone = safeCloneElement('test');

    expect(isElement(clone)).toBe(false);
  });
});
