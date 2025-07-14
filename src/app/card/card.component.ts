import { Component, inject, Input, input } from '@angular/core';
import { CardsService } from '../cards.service';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  host: {
   '(click)': 'onClick($event)'
  }

})
export class CardComponent {
  
  @Input({required: true}) data! :{fruit:string}
  cardsService = inject(CardsService);
  isPlayed = false;

  fruitPosition ="" ;

  onClick(event: MouseEvent) {
    console.log(event);
    event.stopPropagation();
    this.isPlayed = !this.isPlayed
    this.fruitPosition=this.cardsService.getPosition(this.data.fruit)
  }

}
