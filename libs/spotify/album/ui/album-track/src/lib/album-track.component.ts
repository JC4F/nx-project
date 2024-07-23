import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { PlayerApiService } from '@jc4f-nx/spotify-shared-data-access-spotify-api';
import { PlaybackStore } from '@jc4f-nx/spotify-shared-data-access-store';
import { DurationPipe } from '@jc4f-nx/spotify-shared-pipes-duration-pipe';
import { TrackMainInfoComponent } from '@jc4f-nx/spotify-shared-track-main-info';
import { MediaOrderComponent } from '@jc4f-nx/spotify-shared-ui-media-order';
import { MediaTableRowComponent } from '@jc4f-nx/spotify-shared-ui-media-table';
import { SelectorUtil } from '@jc4f-nx/spotify-shared-utils';
import { LetDirective } from '@ngrx/component';
import { Observable, combineLatest, of } from 'rxjs';

@Component({
  standalone: true,
  selector: 'as-album-track',
  templateUrl: './album-track.component.html',
  styleUrls: ['./album-track.component.scss'],
  imports: [
    CommonModule,
    MediaTableRowComponent,
    MediaOrderComponent,
    TrackMainInfoComponent,
    LetDirective,
    DurationPipe,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlbumTrackComponent implements OnInit {
  @Input() track!: SpotifyApi.TrackObjectSimplified;
  @Input() contextUri!: string;
  @Input() index?: number;

  isTrackPlaying$!: Observable<boolean>;

  get trackIndex(): number {
    return this.index === undefined ? this.track.track_number : this.index;
  }

  constructor(
    private playbackStore: PlaybackStore,
    private playerApi: PlayerApiService
  ) {}

  ngOnInit(): void {
    this.isTrackPlaying$ = SelectorUtil.getTrackPlayingState(
      combineLatest([of(this.track.id), this.playbackStore.playback$])
    );
  }

  togglePlayTrack(isPlaying: boolean) {
    if (!this.contextUri) {
      return;
    }

    this.playerApi
      .togglePlay(isPlaying, {
        context_uri: this.contextUri,
        offset: {
          position: this.track.track_number - 1,
        },
      })
      .subscribe(); //TODO: Refactor with component store live stream
  }
}
