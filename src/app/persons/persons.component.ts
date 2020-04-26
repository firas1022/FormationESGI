import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss']
})
export class PersonsComponent implements OnInit {

  allowNewPerson: boolean = false
  personCreationStatus = 'Aucune personne n\'a été créée récemment';
  personName = 'Jane';
  
  constructor() {
    setTimeout(() => {
      this.allowNewPerson = true;
    }, 3000)
  }

  ngOnInit(): void {
  }

  onCreatePerson() {
    this.personCreationStatus = 'une personne vient d\'être créée';
  }

  updatePersonName(event: Event) {
    console.log(event);
    this.personName = (<HTMLInputElement>event.target).value;
    // this.personName = 
  }

}
