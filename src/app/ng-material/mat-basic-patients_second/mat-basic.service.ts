import { Injectable } from '@angular/core';
import { Init } from './init-patients';

@Injectable({ providedIn: 'root' })
export class PatientsService extends Init {

  constructor() {
    super();
    console.log('PatientsService Works');
    this.load();
   }

   getPatients() {
     let patients = JSON.parse(localStorage.getItem('patients'));
     return patients;
   }

   addPatients(newPatients) {
      let patients = this.getPatients();
      // Add New VaccinesService
      patients.push(newPatients);
      // Set New Vacciness
      localStorage.setItem('patients', JSON.stringify(patients));
   }

   deletePatients(patientsName) {
     let patients = JSON.parse(localStorage.getItem('patients'));

     for(let i = 0; i <patients.length; i++) {
      if(patients[i].name == patientsName) {
          patients.splice(i, 1);
      }
   }
      // Set New Vacciness
      localStorage.setItem('patients', JSON.stringify(patients));
   }

    updatePatients(CI,name, second, secondDate){  
        let patients = JSON.parse(localStorage.getItem('patients'));

     for(let i = 0; i <patients.length; i++) {
      if(patients[i].CI == CI) {
        patients[i].name = name;
        patients[i].second = second;
        patients[i].secondDate = secondDate;
      }
   }
      // Set New Vacciness
      localStorage.setItem('patients', JSON.stringify(patients));
   }
}

/*
CI: 88888888,
name: 'Pepe',
first: 'Pfizer',
second: '',
firstDate: 21,
daysToSecond: 22,
secondDate: 22
   */   
