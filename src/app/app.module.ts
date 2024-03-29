import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgMaterialModule } from './ng-material/ng-material.module';
import { VaccinesService } from './ng-material/mat-basic-vaccines/mat-basic.service';


import { CommonModule } from '@angular/common';
import { MatBasicComponentVaccines } from './ng-material/mat-basic-vaccines/mat-basic.component';
import { MatBasicComponentPatients } from './ng-material/mat-basic-patients/mat-basic.component';
import { MatBasicComponentPatientsSecond } from './ng-material/mat-basic-patients_second/mat-basic.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule, NgxMatNativeDateModule } from '@angular-material-components/datetime-picker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select'
import { MatNativeDateModule } from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    MatBasicComponentVaccines,
    MatBasicComponentPatients,
    MatBasicComponentPatientsSecond
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgMaterialModule,
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
    NgxMatNativeDateModule,
    MatSelectModule,MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatGridListModule
  ],exports: [
    MatDialogModule,
    MatButtonModule
  ],
  providers: [VaccinesService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
