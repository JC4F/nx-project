import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PlaybackStore } from '@jc4f-nx/spotify-shared-data-access-store';
import { TrackCurrentInfoComponent } from '@jc4f-nx/spotify-shared-track-current-info';
import { PlayerPlaybackComponent } from '@jc4f-nx/spotify-shell-ui-player-back';
import { PlayerControlsComponent } from '@jc4f-nx/spotify-shell-ui-player-controls';
import { PlayerVolumeComponent } from '@jc4f-nx/spotify-shell-ui-player-volume';
import { VisualizationToggleComponent } from '@jc4f-nx/spotify-shell-ui-visualization-toggle';
@Component({
  standalone: true,
  selector: 'as-now-playing-bar',
  templateUrl: './now-playing-bar.component.html',
  styleUrls: ['./now-playing-bar.component.scss'],
  imports: [
    CommonModule,
    TrackCurrentInfoComponent,
    PlayerControlsComponent,
    PlayerPlaybackComponent,
    VisualizationToggleComponent,
    PlayerVolumeComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NowPlayingBarComponent {
  currentTrack$ = this.playbackStore.currentTrack$;

  constructor(private playbackStore: PlaybackStore) {}
}
