import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  PlaybackService,
  PlaybackStore,
} from '@jc4f-nx/spotify-shared-data-access-store';
import {
  asStepBackwardIcon,
  asStepForwardIcon,
} from '@jc4f-nx/spotify-shared-ui-icon';
import { PlayButtonComponent } from '@jc4f-nx/spotify-shared-ui-play-button';
import { SvgIconComponent, provideSvgIcons } from '@ngneat/svg-icon';
import { startWith } from 'rxjs/operators';
@Component({
  standalone: true,
  selector: 'as-player-controls',
  templateUrl: './player-controls.component.html',
  styleUrls: ['./player-controls.component.scss'],
  imports: [AsyncPipe, SvgIconComponent, PlayButtonComponent],
  providers: [
    provideSvgIcons([
      asStepBackwardIcon,
      asStepForwardIcon,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ]) as unknown as any[],
  ],
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
