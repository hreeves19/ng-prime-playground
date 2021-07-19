import { Injectable } from '@angular/core';
import { Person } from '../classes/person';
@Injectable({
  providedIn: 'root'
})
export class PersonService {
  public persons: Person[];

  constructor() {
    this.persons = [];
  }
}
