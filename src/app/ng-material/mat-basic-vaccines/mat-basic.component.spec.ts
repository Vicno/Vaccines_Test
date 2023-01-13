import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatBasicComponentVaccines } from './mat-basic.component';

describe('MatBasicComponent', () => {
  let component: MatBasicComponentVaccines;
  let fixture: ComponentFixture<MatBasicComponentVaccines>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatBasicComponentVaccines ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatBasicComponentVaccines);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
