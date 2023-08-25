import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFeedComponent } from './your-feed.component';

describe('MainFeedComponent', () => {
  let component: MainFeedComponent;
  let fixture: ComponentFixture<MainFeedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainFeedComponent],
    });
    fixture = TestBed.createComponent(MainFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
