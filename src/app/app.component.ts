import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatBasicComponentVaccines } from './ng-material/mat-basic-vaccines/mat-basic.component';
import { MatBasicComponentPatients } from './ng-material/mat-basic-patients/mat-basic.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Vaccines_Test';
  constructor(public dialog: MatDialog) {}

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
}
