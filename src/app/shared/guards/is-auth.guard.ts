import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { StorageService } from '@shared/services/storage.service';

export const isAuthGuard: CanActivateFn = (
  _route,
  _state,
  storageService = inject(StorageService),
  router= inject(Router),
): boolean => {
  const token = storageService.idToken;

  if (token === null) {
    router.navigate(['/login']).then();
    return false
  }
  return true;
};
