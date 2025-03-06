import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TNManagementPageComponent } from './tnmanagement-page.component';

describe('TNManagementPageComponent', () => {
  let component: TNManagementPageComponent;
  let fixture: ComponentFixture<TNManagementPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TNManagementPageComponent]
    });
    fixture = TestBed.createComponent(TNManagementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
