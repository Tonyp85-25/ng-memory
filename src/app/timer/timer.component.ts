import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-timer',
  imports: [],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css',
})
export class TimerComponent implements OnInit {
  gameTime = 60000;
  currentTime = 0;

  destroyRef = inject(DestroyRef);
  gameService = inject(GameService);

  ngOnInit() {
    const interval = setInterval(() => {
      this.currentTime += 1;
    }, this.gameTime / 100);

    const timeout = setTimeout(() => {
      this.currentTime = 100;
      clearInterval(interval);
      this.gameService.stopGame();
    }, this.gameTime);

    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
      clearTimeout(timeout);
    });
  }
}
