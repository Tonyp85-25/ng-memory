import { Component } from '@angular/core';

import { BoardComponent } from './board/board.component';
import { TimerComponent } from './timer/timer.component';

@Component({
  selector: 'app-root',
  imports: [BoardComponent, TimerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ng-memory';
}
