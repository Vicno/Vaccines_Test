import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatBasicComponentPatientsSecond } from './mat-basic.component';

describe('MatBasicComponent', () => {
  let component: MatBasicComponentPatientsSecond;
  let fixture: ComponentFixture<MatBasicComponentPatientsSecond>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatBasicComponentPatientsSecond ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatBasicComponentPatientsSecond);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
