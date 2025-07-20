import { Injectable } from '@angular/core';
import { CardModel } from './models/card.model';
import { fruits } from './models/fruits';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  private cards: CardModel[] = [];
  private cardsStack: CardModel[] = [];
  cardsStack$ = new BehaviorSubject<CardModel[]>(this.cardsStack);

  private readonly SPRITE_SPACE = 100;

  constructor() {
    this.cards = fruits.map((fruit) => ({
      id: '',
      fruit,
      isDisabled: false,
      isFound: false,
    }));
    this.prepareCards();
    this.shuffle();
    this.cardsStack$.next(this.cardsStack);
  }

  private prepareCards() {
    const slicedCards = this.cards.slice(0, 14);
    this.cardsStack = slicedCards.concat(slicedCards).map((card, index) => ({
      ...card,
      id: `${card.fruit}-${index}`,
    }));
  }
  updateCards(cards: CardModel[]) {
    this.cardsStack = cards;
    this.cardsStack$.next(this.cardsStack);
  }
  disableCards() {
    console.log('disabled');

    this.cardsStack = this.cardsStack.map((card) => ({
      ...card,
      isDisabled: true,
    }));
    this.cardsStack$.next(this.cardsStack);
  }

  getPosition(fruit: string) {
    const index = this.cards.findIndex((card) => card.fruit === fruit);
    return `0px ${-index * this.SPRITE_SPACE}px`;
  }

  private shuffle() {
    for (let i = this.cardsStack.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cardsStack[i], this.cardsStack[j]] = [
        this.cardsStack[j],
        this.cardsStack[i],
      ];
    }
  }
}
