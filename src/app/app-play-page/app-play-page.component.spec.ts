import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPlayPageComponent } from './app-play-page.component';

describe('AppPlayPageComponent', () => {
  let component: AppPlayPageComponent;
  let fixture: ComponentFixture<AppPlayPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppPlayPageComponent]
    });
    fixture = TestBed.createComponent(AppPlayPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
