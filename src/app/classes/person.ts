import { CardType } from '../enums/card-type';
import * as _ from 'underscore';

export class Person {
    id: number;
    name: string;
    age: number;
    private cardType: CardType;

    constructor(name: string, age: number, cardType: CardType) {
        this.id = _.random(1, 100_000_000);
        this.name = name;
        this.age = age;
        this.cardType = cardType;
    }

    public getCardType(): CardType {
        return this.cardType;
    }

    public setTeam(cardType: CardType): void {
        this.cardType = cardType;
    }

    public switchCardType(): void {
        this.cardType = this.cardType === CardType.BLUE ? CardType.RED : CardType.BLUE;
    }
}
