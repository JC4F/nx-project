import { CommonModule } from '@angular/common';
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
  selector: 'as-playlist-track',
  templateUrl: './playlist-track.component.html',
  styleUrls: ['./playlist-track.component.scss'],
  imports: [
    CommonModule,
    RouterModule,
    MediaTableRowComponent,
    MediaOrderComponent,
    TrackMainInfoComponent,
    DurationPipe,
    LetDirective,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaylistTrackComponent implements OnInit {
  get item(): SpotifyApi.PlaylistTrackObject {
    return this._item;
  }

  @Input()
  set item(value: SpotifyApi.PlaylistTrackObject) {
    this._item = value;
    if (value?.track) {
      this.albumRouteUrl = RouteUtil.getAlbumRouteUrl(value.track.album.id);
    }
  }

  private _item!: SpotifyApi.PlaylistTrackObject;

  @Input() index!: number;
  @Input() contextUri!: string | null | undefined;
  @Input() type: 'PLAYLIST' | 'LIKE_SONGS' = 'PLAYLIST';

  isTrackPlaying$!: Observable<boolean>;
  albumRouteUrl?: string;

  constructor(
    private playbackStore: PlaybackStore,
    private playerApi: PlayerApiService
  ) {}

  ngOnInit(): void {
    this.isTrackPlaying$ = SelectorUtil.getTrackPlayingState(
      combineLatest([of(this._item?.track?.id), this.playbackStore.playback$])
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
          position:
            this.type === 'PLAYLIST'
              ? this.index
              : // may cause error
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-non-null-asserted-optional-chain
                this.item.track?.track_number! - 1,
        },
      })
      .subscribe(); //TODO: Refactor with component store live stream
  }

  getAlbumRouteUrl(album: SpotifyApi.AlbumObjectSimplified) {
    return RouteUtil.getAlbumRouteUrl(album.id);
  }
}
