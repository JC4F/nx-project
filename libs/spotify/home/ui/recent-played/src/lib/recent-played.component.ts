import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  getRecentPlayedTracks,
  getRecentPlayedTracksLoading,
} from '@jc4f-nx/spotify-home-data-access';
import { PlayerApiService } from '@jc4f-nx/spotify-shared-data-access-spotify-api';
import { CardComponent } from '@jc4f-nx/spotify-shared-ui-media';
import { SpinnerComponent } from '@jc4f-nx/spotify-shared-ui-spinner';
import { RouteUtil } from '@jc4f-nx/spotify-shared-utils';
import { Store, select } from '@ngrx/store';

@Component({
  standalone: true,
  selector: 'as-recent-played',
  templateUrl: './recent-played.component.html',
  styleUrls: ['./recent-played.component.scss'],
  imports: [CommonModule, CardComponent, SpinnerComponent],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecentPlayedComponent {
  recentTracks$ = this.store.pipe(select(getRecentPlayedTracks));
  isLoading$ = this.store.pipe(select(getRecentPlayedTracksLoading));

  constructor(private store: Store, private playerApi: PlayerApiService) {}

  togglePlayTrack(isPlaying: boolean, trackUri: string) {
    this.playerApi
      .togglePlay(isPlaying, {
        uris: [trackUri],
      })
      .subscribe();
  }

  getAlbumUrl(albumId: string) {
    return RouteUtil.getAlbumRouteUrl(albumId);
  }
}
