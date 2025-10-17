import { InjectionToken } from '@angular/core';

//  Define a custom token for dependency injection
export const BROWSER_STORAGE = new InjectionToken<Storage>(
  'Browser Storage',
  {
    providedIn: 'root',
    factory: () => localStorage
  }
);

export class Storage {}