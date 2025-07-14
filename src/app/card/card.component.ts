import {
  Component,
  EventEmitter,
  inject,
  Input,
  input,
  Output,
} from '@angular/core';
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

  @Output() onPlayed = new EventEmitter<CardModel>();
  cardsService = inject(CardsService);
  isPlayed = false;

  fruitPosition = '';

  onClick(event: MouseEvent) {
    this.fruitPosition = this.cardsService.getPosition(this.data.fruit);
    this.onPlayed.emit(this.data);
    this.isPlayed = !this.isPlayed;
  }
}
