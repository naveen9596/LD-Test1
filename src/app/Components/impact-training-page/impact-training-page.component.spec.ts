import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpactTrainingPageComponent } from './impact-training-page.component';

describe('ImpactTrainingPageComponent', () => {
  let component: ImpactTrainingPageComponent;
  let fixture: ComponentFixture<ImpactTrainingPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImpactTrainingPageComponent]
    });
    fixture = TestBed.createComponent(ImpactTrainingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
