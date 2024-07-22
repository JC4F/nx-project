import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  getPlaylists,
  getPlaylistsLoading,
} from '@jc4f-nx/spotify-playlist-data-access';
import { SpinnerComponent } from '@jc4f-nx/spotify-shared-ui-spinner';
import { Store, select } from '@ngrx/store';
import { NavLinkComponent } from './nav-link/nav-link.component';

@Component({
  standalone: true,
  selector: 'as-nav-links',
  templateUrl: './nav-links.component.html',
  styleUrls: ['./nav-links.component.scss'],
  imports: [CommonModule, SpinnerComponent, NavLinkComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavLinksComponent {
  playlists$ = this.store.pipe(select(getPlaylists));
  isPlaylistsLoading$ = this.store.pipe(select(getPlaylistsLoading));

  constructor(private store: Store) {}
}
