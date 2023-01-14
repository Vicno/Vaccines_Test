import { Injectable } from '@angular/core';
import { Init } from './init-vaccines';

@Injectable({ providedIn: 'root' })
export class VaccinesService extends Init {

  constructor() {
    super();
    console.log('VaccinesService Works');
    this.load();
   }

   getVacciness() {
     let vaccines = JSON.parse(localStorage.getItem('vaccines'));
     return vaccines;
   }

   addVaccines(newVaccines) {
      let vacciness = this.getVacciness();
      // Add New VaccinesService
      console.log("New Vaccines: " +  JSON.stringify(newVaccines))
      console.log("vaccines value 1: " + JSON.stringify(vacciness));
      vacciness.push(newVaccines);
      console.log("vaccines value 2: " + JSON.stringify(vacciness));
      // Set New Vacciness
      localStorage.setItem('vaccines', JSON.stringify(vacciness));
      console.log("vaccines value 3: " + JSON.stringify(vacciness));
      console.log("localstorage: " + this.getVacciness());
   }

   deleteVaccines(VaccineName) {
     let vacciness = JSON.parse(localStorage.getItem('vaccines'));

     for(let i = 0; i <vacciness.length; i++) {
      if(vacciness[i].name == VaccineName) {
          vacciness.splice(i, 1);
      }
   }
      // Set New Vacciness
      localStorage.setItem('vaccines', JSON.stringify(vacciness));
   }

     updateVaccines(oldName,name, cuantity, days){  let vacciness = JSON.parse(localStorage.getItem('vaccines'));

     for(let i = 0; i <vacciness.length; i++) {
      if(vacciness[i].name == oldName) {
        vacciness[i].name = name;
        vacciness[i].cuantity = cuantity;
        vacciness[i].days = days;
      }
   }
      // Set New Vacciness
      localStorage.setItem('vaccines', JSON.stringify(vacciness));
   }
}