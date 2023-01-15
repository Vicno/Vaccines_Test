import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatBasicComponentVaccines } from './ng-material/mat-basic-vaccines/mat-basic.component';
import { MatBasicComponentPatients } from './ng-material/mat-basic-patients/mat-basic.component';
import { MatBasicComponentPatientsSecond } from './ng-material/mat-basic-patients_second/mat-basic.component';
import { VaccinesService } from './ng-material/mat-basic-vaccines/mat-basic.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Vaccines_Test';
  vaccines;
  constructor(public dialog: MatDialog, private vaccineService: VaccinesService) {}

  ngOnInit(){
    this.vaccines = this.vaccineService.getVacciness();
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
}
