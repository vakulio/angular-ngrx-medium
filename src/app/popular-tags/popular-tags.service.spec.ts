import { TestBed } from '@angular/core/testing';

import { PopularTagsService } from './popular-tags.service';

describe('PopularTagsService', () => {
  let service: PopularTagsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopularTagsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
