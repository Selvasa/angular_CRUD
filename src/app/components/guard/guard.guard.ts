import { CanActivateFn, CanDeactivate } from '@angular/router';

export const passCanGuard: CanActivateFn = (route, state) => {
  return false;
};

