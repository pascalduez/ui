import {
  canUseDOM,
  canUseEventListeners,
  canUsePassiveEvents,
} from '@ui/utils/dom';

export function useEnvironment() {
  return {
    canUseDOM,
    canUseEventListeners,
    canUsePassiveEvents,
  };
}
