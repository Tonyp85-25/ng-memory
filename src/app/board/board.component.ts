import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-board',
  imports: [CardComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent {
   cards =[{fruit:"apple"},{fruit:"orange"},{fruit:"raspberry"}];
}
