import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import * as moment from 'moment';
import { Subscription } from 'rxjs';
import { Person } from 'src/app/classes/person';
import { CardType } from 'src/app/enums/card-type';
import { DataStoreService } from 'src/app/service/data-store.service';

@Component({
  selector: 'app-red-card',
  templateUrl: './red-card.component.html',
  styleUrls: ['./red-card.component.scss']
})
export class RedCardComponent implements OnInit, OnDestroy {
  @Input() title: string = 'Set in parent';
  @Output() addPersonButtonClicked = new EventEmitter<Person>();
  personSubscription: Subscription;

  constructor(
    private dataStore: DataStoreService
  ) {
    this.personSubscription = new Subscription();
  }

  ngOnInit(): void {
    this.personSubscription = this.dataStore.listenToPersons().subscribe(
      // Successful call
      (persons: Person[]) => {
        console.log('RED CARD: ', persons);
      },
      // Error
      (error) => {
        console.error(error);
      }
    );
  }

  addPerson() {
    this.addPersonButtonClicked.emit(new Person(`Person-${moment().unix()}`, 25, CardType.RED));
  }

  deletePerson() {
    const persons = this.dataStore.getPersons();
    if (!persons || persons.length === 0) {
      return;
    }

    const firstPerson = this.dataStore.getPersons()[0];

    this.dataStore.deletePerson(firstPerson);
  }

  ngOnDestroy() {
    // Closed memory leak
    if (this.personSubscription) {
      this.personSubscription.unsubscribe();
    }
  }
}
