import { Component } from '@angular/core';

 
 @Component({
    selector: 'app-person',
    templateUrl: './person.component.html',
    // template: `
    //     <h1> Person inline Component </h1>
    // `,
    styleUrls: ['./person.component.scss']
    // styles: [`
    // h1 {
    //     color: red
    // }`]
 })
 export class PersonComponent  {
    
    personName: string = 'Patric';
    age: number = 36;

    constructor() {}

    // getPersonName() {
    //     return 'Jane';
    // }

   //  getPerson() {
   //    return `Le nom de la personne est ${ this.personName } et l'age de la personne est ${ this.age }`;
   //  }
 }