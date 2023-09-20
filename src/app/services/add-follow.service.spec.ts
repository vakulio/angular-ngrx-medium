import { TestBed } from '@angular/core/testing';

import { AddFollowService } from './add-follow.service';

describe('AddFollowService', () => {
  let service: AddFollowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddFollowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
