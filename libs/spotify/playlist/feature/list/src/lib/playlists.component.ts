import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  getPlaylistsLoading,
  getPlaylistsWithRouteUrl,
} from '@jc4f-nx/spotify-playlist-data-access';
import { PlaylistListComponent } from '@jc4f-nx/spotify-shared-ui-playlist-list';
import { Store, select } from '@ngrx/store';

@Component({
  standalone: true,
  selector: 'as-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss'],
  imports: [CommonModule, PlaylistListComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaylistsComponent {
  playlists$ = this.store.pipe(select(getPlaylistsWithRouteUrl));
  isPlaylistsLoading$ = this.store.pipe(select(getPlaylistsLoading));

  constructor(private store: Store) {}
}
