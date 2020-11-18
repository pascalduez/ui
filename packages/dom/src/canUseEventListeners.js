import { canUseDOM } from './canUseDOM';

export const canUseEventListeners =
  canUseDOM && !!(window.addEventListener || window.attachEvent);
