import { inject, Injectable } from '@angular/core';
import { CardModel } from './models/card.model';
import { Fruit } from './models/fruits';
import { CardsService } from './cards.service';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private playedCards: { id: string; fruit: Fruit }[] = [];
  private cardsService = inject(CardsService);
  cards$ = this.cardsService.cardsStack$;
  private message = '';

  constructor() {}

  getMessage() {
    return this.message;
  }

  get cards() {
    return this.playedCards;
  }

  addPlayedCard(card: { id: string; fruit: Fruit }) {
    if (this.cards.length < 2 && this.cards[0]?.id !== card.id) {
      this.playedCards = [...this.playedCards, card];
    }
  }

  checkCards() {
    return this.cards[0].fruit === this.cards[1].fruit;
  }

  clearPlayedCards() {
    this.playedCards = [];
  }

  turnCard(id: string, fruit: Fruit) {
    console.log(this.cards);
    this.addPlayedCard({ id, fruit });
    const oldCards = this.cards$.getValue();
    let newCards;
    if (this.playedCards.length === 2) {
      newCards = oldCards.map((card) => ({
        ...card,
        isDisabled: true,
        isFound: card.id === id ? !card.isFound : card.isFound,
      }));
      this.cardsService.updateCards(newCards);
      setTimeout(() => {
        const result = this.checkCards();

        if (result) {
          newCards = oldCards.map((card) => ({
            ...card,
            isFound: card.id === id ? true : card.isFound,
            isDisabled: card.isFound,
          }));
        } else {
          newCards = oldCards.map((card) => ({
            ...card,
            isDisabled:
              card.id === this.playedCards[0].id ||
              card.id === this.playedCards[1].id
                ? !card.isDisabled
                : card.isFound,
            isFound:
              card.id ===
              (this.playedCards[0].id || card.id === this.playedCards[1].id)
                ? false
                : card.isFound,
          }));
        }
        this.clearPlayedCards();
        this.cardsService.updateCards(newCards);
      }, 1000);
    } else {
      newCards = oldCards.map((card) => ({
        ...card,
        isDisabled: card.id === id ? true : card.isFound,
        isFound: card.id === id ? true : card.isFound,
      }));
      this.cardsService.updateCards(newCards);
    }
  }

  stopGame() {
    this.cardsService.disableCards();
    this.message = 'Game Over';
  }
}
