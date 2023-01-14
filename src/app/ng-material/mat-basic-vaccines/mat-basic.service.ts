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
      let vacciness = JSON.parse(localStorage.getItem('vacciness'));
      // Add New VaccinesService
      vacciness.push(newVaccines);
      // Set New Vacciness
      localStorage.setItem('vacciness', JSON.stringify(vacciness));
   }

   deleteVaccines(VaccineName) {
     let vacciness = JSON.parse(localStorage.getItem('vacciness'));

     for(let i = 0; i <vacciness.length; i++) {
      if(vacciness[i].name == VaccineName) {
          vacciness.splice(i, 1);
      }
   }
      // Set New Vacciness
      localStorage.setItem('vacciness', JSON.stringify(vacciness));
   }

     updateVaccines(oldName,name, cuantity, days){  let vacciness = JSON.parse(localStorage.getItem('vacciness'));

     for(let i = 0; i <vacciness.length; i++) {
      if(vacciness[i].name == oldName) {
        vacciness[i].name = name;
        vacciness[i].cuantity = cuantity;
        vacciness[i].days = days;
      }
   }
      // Set New Vacciness
      localStorage.setItem('vacciness', JSON.stringify(vacciness));
   }
}