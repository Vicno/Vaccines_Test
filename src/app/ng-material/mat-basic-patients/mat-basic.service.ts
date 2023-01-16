import { Injectable } from '@angular/core';
import { Init } from './init-patients';

@Injectable({ providedIn: 'any' })
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
      // Add New PatientsService
      patients.push(newPatients);
      // Set New Patients
      console.log('Added new patient ' + newPatients );
      localStorage.setItem('patients',  JSON.stringify(patients));
   }

   deletePatients(patientsName) {
     let patients = JSON.parse(localStorage.getItem('patients'));

     for(let i = 0; i <patients.length; i++) {
      if(patients[i].name == patientsName) {
          patients.splice(i, 1);
      }
   }
      // Set New Patients
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
      // Set New Patients
      localStorage.setItem('patients', JSON.stringify(patients));
   }
}