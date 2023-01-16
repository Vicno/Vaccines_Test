import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatBasicComponentPatients } from './mat-basic.component';

describe('MatBasicComponent', () => {
  let component: MatBasicComponentPatients;
  let fixture: ComponentFixture<MatBasicComponentPatients>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatBasicComponentPatients ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatBasicComponentPatients);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
