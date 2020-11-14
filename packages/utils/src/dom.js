export const canUseDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

export const canUseEventListeners =
  canUseDOM && !!(window.addEventListener || window.attachEvent);

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
