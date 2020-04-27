import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Person } from './person.model';

 
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
    
   editMode = false;

   // @Input()
   @Input('name')
   personName: string = 'Patric';

   @Input('age')
   personAge: number = 36;

   @Input()
   editable = false;

   @Output()
   onChangePerson = new EventEmitter<Person>();

   constructor() {}

   editPerson() {
      this.editMode = true;
   }

   savePerson() {
      this.editMode = false;
      this.onChangePerson.emit(new Person(this.personName, this.personAge));
   }

   // getPersonName() {
   //     return 'Jane';
   // }

   //  getPerson() {
   //    return `Le nom de la personne est ${ this.personName } et l'age de la personne est ${ this.age }`;
   //  }
 }