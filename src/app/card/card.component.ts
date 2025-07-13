import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',

})
export class CardComponent {
  
  @Input({required: true}) data! :{fruit:string}
}
