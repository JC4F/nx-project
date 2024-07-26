import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PlaylistStore } from '@jc4f-nx/spotify-playlist-data-access';
import { PlaylistTrackComponent } from '@jc4f-nx/spotify-playlist-ui-playlist-track';
import { TracksLoadingComponent } from '@jc4f-nx/spotify-shared-tracks-loading';
import { MediaSummaryComponent } from '@jc4f-nx/spotify-shared-ui-media-summary';
import { MediaTableHeaderComponent } from '@jc4f-nx/spotify-shared-ui-media-table';
import { PlayButtonComponent } from '@jc4f-nx/spotify-shared-ui-play-button';
import { RouteUtil } from '@jc4f-nx/spotify-shared-utils';
import { SvgIconComponent } from '@ngneat/svg-icon';

@Component({
  standalone: true,
  selector: 'as-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss'],
  imports: [
    CommonModule,
    MediaSummaryComponent,
    PlayButtonComponent,
    MediaTableHeaderComponent,
    SvgIconComponent,
    PlaylistTrackComponent,
    TracksLoadingComponent,
  ],
  providers: [PlaylistStore],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaylistComponent {
  playlistId$ = this.store.playlistId$;
  playlist$ = this.store.playlist$;
  isPlaylistPlaying$ = this.store.isPlaylistPlaying$;
  isCurrentPlaylistLoading$ = this.store.isCurrentPlaylistLoading$;
  tracks$ = this.store.tracks$;
  isPlaylistTracksLoading$ = this.store.isPlaylistTracksLoading$;

  constructor(private store: PlaylistStore) {}

  togglePlaylist(isPlaying: boolean) {
    this.store.togglePlaylist({
      isPlaying,
    });
  }

  playTrack(position: number) {
    this.store.playTrack({
      position,
    });
  }

  getPlaylistContextUri(playlistId: string | null) {
    return RouteUtil.getPlaylistContextUri(playlistId || '');
  }
}
