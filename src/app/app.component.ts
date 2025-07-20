import { Component } from '@angular/core';

import { BoardComponent } from './board/board.component';
import { TimerComponent } from './timer/timer.component';
import { ScoreComponent } from './score/score.component';

@Component({
  selector: 'app-root',
  imports: [BoardComponent, TimerComponent, ScoreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ng-memory';
}
