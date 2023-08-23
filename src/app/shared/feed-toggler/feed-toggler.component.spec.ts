import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedTogglerComponent } from './feed-toggler.component';

describe('FeedTogglerComponent', () => {
  let component: FeedTogglerComponent;
  let fixture: ComponentFixture<FeedTogglerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FeedTogglerComponent]
    });
    fixture = TestBed.createComponent(FeedTogglerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
