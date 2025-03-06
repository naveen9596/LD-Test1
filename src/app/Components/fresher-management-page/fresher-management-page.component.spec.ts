import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FresherManagementPageComponent } from './fresher-management-page.component';

describe('FresherManagementPageComponent', () => {
  let component: FresherManagementPageComponent;
  let fixture: ComponentFixture<FresherManagementPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FresherManagementPageComponent]
    });
    fixture = TestBed.createComponent(FresherManagementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
