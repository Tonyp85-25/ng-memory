import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { CardsService } from '../cards.service';
import { CardModel } from '../models/card.model';
import { GameService } from '../game.service';

@Component({
  selector: 'app-board',
  imports: [CardComponent, AsyncPipe],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css',
})
export class BoardComponent {
  cardsService = inject(CardsService);
  gameService = inject(GameService);

  cards$ = this.cardsService.cardsStack$;

  onPlayCard(card: CardModel) {
    console.log(this.gameService.cards.length);
    this.gameService.addPlayedCard(card);
    if (this.gameService.cards.length === 2) {
      this.cardsService.disableCards();
      setTimeout(() => {
        const result = this.gameService.checkCards();
        if (!result) {
          this.cardsService.updateCards();
        }

        this.gameService.clearPlayedCards();
      }, 1000);
    }

    //this.gameService.validate(card);
  }
}
