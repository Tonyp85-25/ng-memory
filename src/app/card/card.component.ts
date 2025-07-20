import { Component, inject, Input, OnInit } from '@angular/core';
import { CardsService } from '../cards.service';
import { CardModel } from '../models/card.model';
import { GameService } from '../game.service';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent implements OnInit {
  @Input({ required: true }) data!: CardModel;

  cardsService = inject(CardsService);
  gameService = inject(GameService);

  fruitPosition = '';

  ngOnInit() {
    this.fruitPosition = this.cardsService.getPosition(this.data.fruit);
  }

  onClick() {
    this.gameService.turnCard(this.data.id, this.data.fruit);
  }
}
