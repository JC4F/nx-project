import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  PlaybackService,
  PlaybackStore,
} from '@jc4f-nx/spotify-shared-data-access-store';
import { DurationPipe } from '@jc4f-nx/spotify-shared-pipes-duration-pipe';
import { NzSliderModule, NzSliderValue } from 'ng-zorro-antd/slider';
import { BehaviorSubject, combineLatest, of, timer } from 'rxjs';
import { debounceTime, map, switchMap } from 'rxjs/operators';
@Component({
  standalone: true,
  selector: 'as-player-playback',
  templateUrl: './player-playback.component.html',
  styleUrls: ['./player-playback.component.scss'],
  imports: [CommonModule, DurationPipe, NzSliderModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerPlaybackComponent {
  isSliderMoving$ = new BehaviorSubject<boolean>(false);
  progress$ = combineLatest([
    this.playbackStore.playback$,
    this.isSliderMoving$,
  ]).pipe(
    debounceTime(20),
    switchMap(([{ paused, position }, isMoving]) => {
      if (paused || isMoving) {
        return of(position);
      }
      const progressTimer$ = timer(0, 1000);
      return progressTimer$.pipe(
        map((x) => x * 1000),
        map((x) => x + position)
      );
    })
  );
  max$ = this.playbackStore.playback$.pipe(map(({ duration }) => duration));

  constructor(
    private playbackStore: PlaybackStore,
    private playbackService: PlaybackService
  ) {}

  seek(positions: NzSliderValue) {
    if (Array.isArray(positions)) {
      const lastPosition = positions[positions.length - 1];
      this.playbackService.seek(lastPosition);
    }
    if (typeof positions === 'number') {
      this.playbackService.seek(positions);
    }
    this.isSliderMoving$.next(false);
  }

  onChange() {
    this.isSliderMoving$.next(true);
  }
}
