import { Injectable } from '@angular/core';
import { CardModel } from './models/card.model';
import { fruits } from './models/fruits';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  private cards :  CardModel[] = [];

  constructor() { 
    this.cards = fruits.map(fruit => ({fruit}));
  }

  getCards() {
    const slicedCards = this.cards.slice(0,14);
    return slicedCards.concat(slicedCards);
  }
}
