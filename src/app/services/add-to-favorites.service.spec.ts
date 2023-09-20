import { TestBed } from '@angular/core/testing';

import { AddToFavoritesService } from './add-to-favorites.service';

describe('AddToFavoritesService', () => {
  let service: AddToFavoritesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddToFavoritesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
