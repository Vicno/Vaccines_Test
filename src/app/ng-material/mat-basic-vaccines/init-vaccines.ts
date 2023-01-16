export class Init {
    load() {
      if(localStorage.getItem('vaccines') === null || localStorage.getItem('vaccines') == undefined) {
        console.log('No vaccines Found... Creating...');
        let vaccines = [
          {
            name: 'Pfizer',
            cuantity: 500,
            days: 21
          }, 
          {
            name: 'Moderna',
            cuantity: 700,
            days: 28
          }, 
          {
            name: 'Astrazeneca',
            cuantity: 200,
            days: 28
          }
        ];
  
        localStorage.setItem('vaccines', JSON.stringify(vaccines));
        return 
      } else {
        console.log('Found Vaccines..');
      }
    }
  }