import { Component, OnInit } from '@angular/core';
import { PatientsServiceSecond} from './mat-basic.service';
import { VaccinesService} from '../mat-basic-vaccines/mat-basic.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-mat-basic',
  templateUrl: './mat-basic.component.html',
  styleUrls: ['./mat-basic.component.css']
})
/*
CI: 88888888,
name: 'Pepe',
first: 'Pfizer',
second: '',
firstDate: 21,
daysToSecond: 22,
secondDate: 22
   */  
export class MatBasicComponentPatientsSecond implements OnInit {
  
  vaccines;
  patients;
  CI;
  name;
  first;
  second;
  firstDate;
  daysToSecond;
  secondDate;
  oldName;
  oldFirst;
  oldSecond;
  selectedVaccine: String;
  appState = 'default';
  dateSelected = new FormControl(new Date());

  constructor(private patientsServiceSecond: PatientsServiceSecond, private vaccineService: VaccinesService) { }

  ngOnInit() {
    this.patients = this.patientsServiceSecond.getPatients();
    this.vaccines = this.vaccineService.getVacciness();
  }

  searchForFirstDosis(CI){
    this.patients = this.patientsServiceSecond.getPatients()
    for(let i = 0; i < this.patients.length; i++) {
      if(this.patients[i].CI == CI) {
      return true;
      }
    }
    
    return false;
  }

  addPatients(CI, name, first) {
    if(isNaN(CI)){
      alert("Ingrese solo numeros en el CI");
    }
    else {

      this.vaccines = this.vaccineService.getVacciness();
      for(let i = 0; i < this.vaccines.length; i++) {
        if(this.vaccines[i].name == first) {
        this.daysToSecond = this.vaccines[i].days;
        break;
        }
      }
      console.log("Date input" + JSON.stringify(this.dateSelected))
      let newPatient = {
        CI: CI,
        name: name,
        first: first,
        second: '',
        firstDate: this.dateSelected,
        daysToSecond: this.daysToSecond,
        secondDate: ''
      }
      this.patients.push(newPatient);

      this.patientsServiceSecond.addPatients(newPatient);
    }
  }
  
  deletePatients(patientCI) {
    for(let i = 0; i < this.patients.length; i++) {
      if(this.patients[i].CI == patientCI) {
          this.patients.splice(i, 1);
      }
    }

    this.patientsServiceSecond.deletePatients(patientCI);
  }

  /*
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
*/
  updatePatient(CI, second) {
    if(isNaN(CI)){
      alert("Ingrese solo numeros en el CI");
    }
    else if(this.searchForFirstDosis(CI)==false){
      alert("No se registro primera dosis, operacion fallida");
    }else{
    console.log(CI);
        for(let i = 0; i < this.patients.length; i++) {
          if(this.patients[i].CI == CI) {
          this.patients[i].second = second;
          this.patients[i].secondDate = this.dateSelected;
      }
    }
  }

  this.patientsServiceSecond.updatePatients(CI, second, this.dateSelected);

  }

  selectVaccine(vaccine){
    console.log("Selected: " + vaccine);
  }
}
