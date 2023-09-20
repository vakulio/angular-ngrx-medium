import { TestBed } from '@angular/core/testing';

import { EditArticleService } from './edit-article.service';

describe('CreateArticleService', () => {
  let service: EditArticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditArticleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
