import { Component, OnInit } from '@angular/core';
import { VaccinesService } from './mat-basic.service';

@Component({
  selector: 'app-mat-basic',
  templateUrl: './mat-basic.component.html',
  styleUrls: ['./mat-basic.component.css']
})
export class MatBasicComponentVaccines /**implements OnInit**/ {

  vaccines;
  name;
  cuantity;
  days;
  oldName;
  oldCuantity;
  oldDays
  appState = 'default';

  constructor(private vaccinesService: VaccinesService) { }

  ngOnInit() {
    this.vaccines = this.vaccinesService.getVacciness();
  }

  addVaccines() {
    let newVaccine = {
      name: this.name,
      cuantity: this.cuantity,
      days: this.days
    }
    this.vaccines.push(newVaccine);

    this.vaccinesService.addVaccines(newVaccine);
  }
  
  deleteVaccines(vaccineName) {
    for(let i = 0; i < this.vaccines.length; i++) {
      if(this.vaccines[i].text == vaccineName) {
          this.vaccines.splice(i, 1);
      }
    }

    this.vaccinesService.deleteVaccines(vaccineName);
  }

  editVaccines(vaccine) {
    this.appState = 'edit';
    this.oldName = vaccine.name;
    this.name = vaccine.text;
    this.appState = 'edit';
    this.oldCuantity = vaccine.cuantity;
    this.cuantity = vaccine.cuantity;
    this.appState = 'edit';
    this.oldDays = vaccine.days;
    this.days = vaccine.days;
  }

  updateVaccine() {
    console.log(this.name);
        for(let i = 0; i < this.vaccines.length; i++) {
          if(this.vaccines[i].name == this.oldName) {
          this.vaccines[i].name = this.name;
          this.vaccines[i].cuantity = this.cuantity;
          this.vaccines[i].days = this.days;
      }
  }

  this.vaccinesService.updateVaccines(this.oldName,this.name, this.cuantity, this.days);

  }

}