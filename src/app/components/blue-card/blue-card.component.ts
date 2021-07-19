import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Person } from 'src/app/classes/person';
import { CardType } from 'src/app/enums/card-type';
import * as moment from 'moment';

@Component({
  selector: 'app-blue-card',
  templateUrl: './blue-card.component.html',
  styleUrls: ['./blue-card.component.scss']
})
export class BlueCardComponent implements OnInit {
  @Input() title: string = 'Set title in parent component';
  @Output() addPersonButtonClicked = new EventEmitter<Person>();
  person: Person;

  constructor() {
    this.person = new Person('', 24, CardType.BLUE);
  }

  ngOnInit(): void {
  }

  addPerson() {
    this.person = new Person(`Person-${moment().unix()}`, 24, CardType.BLUE);
    this.addPersonButtonClicked.emit(this.person);
  }
}
