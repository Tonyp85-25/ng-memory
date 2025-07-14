import { Component, inject } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { fruits } from '../models/fruits';
import { CardsService } from '../cards.service';
import { CardModel } from '../models/card.model';

@Component({
  selector: 'app-board',
  imports: [CardComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent {
   cardsService = inject(CardsService);
    cards:CardModel[];
   constructor() {
    this.cards =this.cardsService.getCards();
   }
  

  
}
