export class Init {
    load() {
      if(localStorage.getItem('patients') === null || localStorage.getItem('patients') == undefined) {
        console.log('No patients Found... Creating...');
        let patients = [
          {
            CI: 88888888,
            name: 'Pepe',
            first: 'Pfizer',
            second: '',
            firstDate: 21,
            daysToSecond: 22,
            secondDate: 22
          }
        ];
  
        localStorage.setItem('patients', JSON.stringify(patients));
        return 
      } else {
        console.log('Found patients...');
      }
    }
  }