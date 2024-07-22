import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  PlaybackService,
  PlaybackStore,
} from '@jc4f-nx/spotify-shared-data-access-store';
import { PlayButtonComponent } from '@jc4f-nx/spotify-shared-ui-play-button';
import { SvgIconComponent } from '@ngneat/svg-icon';
import { startWith } from 'rxjs/operators';
@Component({
  standalone: true,
  selector: 'as-player-controls',
  templateUrl: './player-controls.component.html',
  styleUrls: ['./player-controls.component.scss'],
  imports: [AsyncPipe, SvgIconComponent, PlayButtonComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerControlsComponent {
  isPlaying$ = this.playbackStore.isPlaying$.pipe(startWith(false));

  constructor(
    private playbackStore: PlaybackStore,
    private playbackService: PlaybackService
  ) {}

  async togglePlay() {
    this.playbackService.play();
  }

  async next() {
    this.playbackService.next();
  }

  async prev() {
    this.playbackService.prev();
  }
}
