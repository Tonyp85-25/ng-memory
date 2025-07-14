import { Component, Input, input } from '@angular/core';

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

  isPlayed = false;

  onClick(event: MouseEvent) {
    console.log(event);
    event.stopPropagation();
    this.isPlayed = !this.isPlayed
  }

}
