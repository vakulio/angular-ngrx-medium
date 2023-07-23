import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  range(start: number, end: number) {
    return Array.from({ length: end - start + 1 }, (_, i) => i + start);
  }
}
