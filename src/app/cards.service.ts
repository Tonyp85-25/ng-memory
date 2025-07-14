import { Injectable } from '@angular/core';
import { CardModel } from './models/card.model';
import { fruits } from './models/fruits';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  private cards :  CardModel[] = [];

  private readonly SPRITE_SPACE = 100;

  constructor() { 
    this.cards = fruits.map(fruit => ({fruit}));
  }

  getCards() {
    const slicedCards = this.cards.slice(0,14);
    return slicedCards.concat(slicedCards);
  }

  getPosition(fruit: string) {
    const index =this.cards.findIndex(card => card.fruit === fruit);
    return `0px ${-index * this.SPRITE_SPACE}px`;
  }
}
