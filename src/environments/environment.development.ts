import { isDevMode } from '@angular/core';

export const environment = {
  production: !isDevMode(),
  apiUrl: '/app',
  limit: 10,
};
