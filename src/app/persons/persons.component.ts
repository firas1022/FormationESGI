import { Component, OnInit } from '@angular/core';
import { Person } from '../person/person.model';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss']
})
export class PersonsComponent implements OnInit {

  allowNewPerson: boolean = false
  personCreationStatus = 'Aucune personne n\'a été créée récemment';
  personName = 'Jane';
  personAge: number;
  personList: Person[] = [];
  lastUpdatedPerson: Person;
  
  constructor() {
    setTimeout(() => {
      this.allowNewPerson = true;
    }, 3000)
  }

  ngOnInit(): void {
    this.personList = [ new Person('Alice', 25), new Person('Cristophe', 18) ];
  }

  onCreatePerson() {
    this.personCreationStatus = 'une personne vient d\'être créée';
    this.personList.push(new Person(this.personName, this.personAge));
  }

  updatePersonName(event: Event) {
    console.log(event);
    this.personName = (<HTMLInputElement>event.target).value;
  }

  onUpdatePerson(event: Person) {
    console.log(event);
    this.lastUpdatedPerson = event;
  }

}
