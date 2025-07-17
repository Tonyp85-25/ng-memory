import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { CardsService } from '../cards.service';
import { CardModel } from '../models/card.model';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  host: {
    '(click)': 'onClick($event)',
  },
})
export class CardComponent {
  @Input({ required: true }) data!: CardModel;

  @Output() onPlay = new EventEmitter<CardModel>();
  cardsService = inject(CardsService);
  isPlayed = false;

  fruitPosition = '';

  onClick(event: MouseEvent) {
    event.stopPropagation();

    this.fruitPosition = this.cardsService.getPosition(this.data.fruit);
    this.isPlayed = true;
    this.onPlay.emit(this.data);
  }
}
