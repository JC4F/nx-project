import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { PlayerApiService } from '@jc4f-nx/spotify-shared-data-access-spotify-api';
import { PlaybackStore } from '@jc4f-nx/spotify-shared-data-access-store';
import { DurationPipe } from '@jc4f-nx/spotify-shared-pipes-duration-pipe';
import { TrackMainInfoComponent } from '@jc4f-nx/spotify-shared-track-main-info';
import { MediaOrderComponent } from '@jc4f-nx/spotify-shared-ui-media-order';
import { MediaTableRowComponent } from '@jc4f-nx/spotify-shared-ui-media-table';
import { RouteUtil, SelectorUtil } from '@jc4f-nx/spotify-shared-utils';
import { LetDirective } from '@ngrx/component';
import { Observable, combineLatest, of } from 'rxjs';

@Component({
  standalone: true,
  selector: 'as-artist-top-track',
  templateUrl: './artist-top-track.component.html',
  styleUrls: ['./artist-top-track.component.scss'],
  imports: [
    RouterModule,
    MediaTableRowComponent,
    MediaOrderComponent,
    TrackMainInfoComponent,
    DurationPipe,
    LetDirective,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArtistTopTrackComponent implements OnInit {
  albumRouteUrl!: string;
  isTrackPlaying$!: Observable<boolean>;

  @Input() order!: number;
  private _track!: SpotifyApi.TrackObjectFull;
  get track(): SpotifyApi.TrackObjectFull {
    return this._track;
  }

  @Input()
  set track(value: SpotifyApi.TrackObjectFull) {
    this._track = value;
    if (value) {
      this.albumRouteUrl = RouteUtil.getAlbumRouteUrl(value.album.id);
    }
  }

  constructor(
    private playbackStore: PlaybackStore,
    private playerApi: PlayerApiService
  ) {}

  ngOnInit(): void {
    this.isTrackPlaying$ = SelectorUtil.getTrackPlayingState(
      combineLatest([of(this.track?.id), this.playbackStore.playback$])
    );
  }

  togglePlayTrack(isPlaying: boolean) {
    if (!this.track?.uri) {
      return;
    }

    this.playerApi
      .togglePlay(isPlaying, {
        context_uri: this.track.album.uri,
        offset: {
          position: this.track.track_number - 1 || 0,
        },
      })
      .subscribe(); //TODO: Refactor with component store live stream
  }
}
