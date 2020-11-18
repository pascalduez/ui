import { canUseDOM, canUseEventListeners, canUsePassiveEvents } from '@ui/dom';

export function useEnvironment() {
  return {
    canUseDOM,
    canUseEventListeners,
    canUsePassiveEvents,
  };
}
