import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatBasicComponentVaccines } from './mat-basic-vaccines/mat-basic.component';
import { MatBasicComponentPatients } from './mat-basic-patients/mat-basic.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select'


@NgModule({
  declarations: [
    MatBasicComponentVaccines,
    MatBasicComponentPatients
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatDatepickerModule,
    MatInputModule,
    NgxMatTimepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    NgxMatDatetimePickerModule,
    MatSelectModule
  ], exports: [
    MatDialogModule,
    MatButtonModule
  ]
})
export class NgMaterialModule { }
