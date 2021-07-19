import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/classes/person';
import { CardType } from 'src/app/enums/card-type';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  blueCardTitle: string = 'Blue Card Title Parent';
  redCardTitle: string = 'Red Card Title Parent';

  constructor(
    private personService: PersonService
  ) { }

  ngOnInit(): void {
  }

  addPerson(person: Person): void {
    // more stuff todo HERE
    this.personService.addNewPerson(person);
  }
}
