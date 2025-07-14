import { Injectable } from '@angular/core';
import { CardModel } from './models/card.model';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  playedCards: CardModel[] = [];

  constructor() {}

  addPlayedCard(card: CardModel) {
    if (this.playedCards.length < 2) {
      this.playedCards.push(card);
    }
  }

  checkCards() {
    return this.playedCards[0].fruit === this.playedCards[1].fruit;
  }

  clearPlayedCards() {
    this.playedCards = [];
  }
}
