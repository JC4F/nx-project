import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { getFeaturedPlaylistsWithRouteUrl } from '@jc4f-nx/spotify-home-data-access';
import { PlayerApiService } from '@jc4f-nx/spotify-shared-data-access-spotify-api';
import { CardComponent } from '@jc4f-nx/spotify-shared-ui-media';
import { Store, select } from '@ngrx/store';

@Component({
  standalone: true,
  selector: 'as-featured-playlists',
  templateUrl: './featured-playlists.component.html',
  imports: [CommonModule, CardComponent],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeaturedPlaylistsComponent {
  featuredPlaylists$ = this.store.pipe(
    select(getFeaturedPlaylistsWithRouteUrl)
  );

  constructor(private store: Store, private playerApi: PlayerApiService) {}

  togglePlay(isPlaying: boolean, playlistUri: string) {
    this.playerApi
      .togglePlay(isPlaying, {
        context_uri: playlistUri,
      })
      .subscribe();
  }
}
