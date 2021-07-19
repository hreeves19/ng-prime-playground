import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Person } from '../classes/person';
import * as _ from 'underscore';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {
  public observablePersons$: BehaviorSubject<Person[]>;

  constructor() {
    this.observablePersons$ = new BehaviorSubject<Person[]>([]);
  }

  public addPerson(person: Person) {
    const persons = this.getPersons();
    persons.push(person);
    this.observablePersons$.next(persons);
  }

  public deletePerson(person: Person) {
    let persons = this.getPersons();
    persons.push(person);

    persons = _.reject(persons, (currentPerson: Person) => currentPerson.id === person.id);
    this.observablePersons$.next(persons);
  }

  public getPersons(): Person[] {
    return this.observablePersons$.value;
  }

  public listenToPersons(): Observable<Person[]> {
    return this.observablePersons$.asObservable();
  }
}
