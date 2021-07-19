import { Injectable } from '@angular/core';
import { Person } from '../classes/person';
import { DataStoreService } from '../service/data-store.service';
import * as _ from 'underscore';
@Injectable({
  providedIn: 'root'
})
export class PersonService {
  public persons: Person[];

  constructor(
    private dataStoreService: DataStoreService
  ) {
    this.persons = [];
  }

  addNewPerson(person: Person): any {
    // HTTP call
    try {
      this.persons.push(person);
      this.dataStoreService.addPerson(person);
    } catch (error) {
      console.error(error);
    }
  }

  deletePerson(person: Person): void {
    try {
      // AFTER RETURN
      this.dataStoreService.deletePerson(person);
      this.persons = this.dataStoreService.getPersons();
      console.log('AFTER DELETE SERVICE: ', this.persons);
    } catch (error) {

    }
  }
}
