import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  loadFeaturedPlaylists,
  loadRecentTracks,
} from '@jc4f-nx/spotify-home-data-access';
import { FeaturedPlaylistsComponent } from '@jc4f-nx/spotify-home-ui-featured-playlists';
import { RecentPlayedComponent } from '@jc4f-nx/spotify-home-ui-recent-played';
import { Store } from '@ngrx/store';

@Component({
  standalone: true,
  selector: 'as-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [RecentPlayedComponent, FeaturedPlaylistsComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadRecentTracks());
    this.store.dispatch(loadFeaturedPlaylists());
  }
}
