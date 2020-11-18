import { canUseDOM } from './canUseDOM';

let canUsePassiveEvents = false;

if (canUseDOM) {
  let options = {
    get passive() {
      canUsePassiveEvents = true;
    },
  };

  try {
    window.addEventListener('t', null, options);
    window.removeEventListener('t', null, options);
  } catch {
    canUsePassiveEvents = false;
  }
}

export { canUsePassiveEvents };
