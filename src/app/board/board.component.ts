import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { CardsService } from '../cards.service';

@Component({
  selector: 'app-board',
  imports: [CardComponent, AsyncPipe],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css',
})
export class BoardComponent {
  cardsService = inject(CardsService);

  cards$ = this.cardsService.cardsStack$;
}
