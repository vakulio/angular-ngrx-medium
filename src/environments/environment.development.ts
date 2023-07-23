import { isDevMode } from '@angular/core';

export const environment = {
  production: !isDevMode(),
  apiUrl: 'https://api.realworld.io/api',
  limit: 10,
};
