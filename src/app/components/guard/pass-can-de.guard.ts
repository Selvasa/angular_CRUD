import { CanDeactivateFn } from '@angular/router';

export const passCanDeGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  return false;
};
