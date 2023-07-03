import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFinishPageComponent } from './app-finish-page.component';

describe('FinishPageComponent', () => {
  let component: AppFinishPageComponent;
  let fixture: ComponentFixture<AppFinishPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppFinishPageComponent]
    });
    fixture = TestBed.createComponent(AppFinishPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
