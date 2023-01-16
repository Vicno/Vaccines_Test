import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatBasicComponentVaccines } from './ng-material/mat-basic-vaccines/mat-basic.component';
import { MatBasicComponentPatients } from './ng-material/mat-basic-patients/mat-basic.component';
import { MatBasicComponentPatientsSecond } from './ng-material/mat-basic-patients_second/mat-basic.component';
import { VaccinesService } from './ng-material/mat-basic-vaccines/mat-basic.service';
import { PatientsService } from './ng-material/mat-basic-patients/mat-basic.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Vaccines_Test';
  vaccines;
  patients;
  CI;
  name;
  first;
  second;
  firstDate;
  daysToSecond;
  secondDate;
  constructor(public dialog: MatDialog, private vaccineService: VaccinesService, private patientService: PatientsService) {}

  ngOnInit(){
    this.vaccines = this.vaccineService.getVacciness();
    this.patients = this.patientService.getPatients();
  }

  openDialogVaccines() {
    const dialogRef = this.dialog.open(MatBasicComponentVaccines);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openDialogPatients() {
    const dialogRef = this.dialog.open(MatBasicComponentPatients);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openDialogPatientsSecond() {
    const dialogRef = this.dialog.open(MatBasicComponentPatientsSecond);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  searchByCI(CI){
    if(isNaN(CI)){
      alert("Ingrese solo numeros en el CI");
    } else{
      this.patients = this.patientService.getPatients();
      for(let i = 0; i < this.patients.length; i++) {
        if(this.patients[i].CI == CI) {
          this.CI = this.patients[i].CI,
          this.name = this.patients[i].name,
          this.first = this.patients[i].first,
          this.second = this.patients[i].second,
          this.firstDate = this.patients[i].firstDate,
          this.daysToSecond = this.patients[i].daysToSecond,
          this.secondDate = this.patients[i].secondDate
          break;
        }
      }
      alert("El CI ingresado no existe")
    }
    
  }
}
