import { Injectable } from '@angular/core';
import { CardModel } from './models/card.model';
import { fruits } from './models/fruits';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  private cards :  CardModel[] = [];
  private cardsStack: CardModel[] = [];

  private readonly SPRITE_SPACE = 100;

  constructor() { 
    this.cards = fruits.map(fruit => ({fruit}));
    this.prepareCards();
  }

  private prepareCards() {
     const slicedCards = this.cards.slice(0,14);
      this.cardsStack = slicedCards.concat(slicedCards);
  }

  getCards() {
    this.shuffle();
    return this.cardsStack;
  }

  getPosition(fruit: string) {
    const index =this.cards.findIndex(card => card.fruit === fruit);
    return `0px ${-index * this.SPRITE_SPACE}px`;
  }

  private shuffle(){
      for (let i = this.cardsStack.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[this.cardsStack[i], this.cardsStack[j]] = [this.cardsStack[j], this.cardsStack[i]];
	}
  }
}
