import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AlbumStore } from '@jc4f-nx/spotify-album-data-access';
import { AlbumTrackComponent } from '@jc4f-nx/spotify-album-ui-album-track';
import { TracksLoadingComponent } from '@jc4f-nx/spotify-shared-tracks-loading';
import { MediaSummaryComponent } from '@jc4f-nx/spotify-shared-ui-media-summary';
import { MediaTableHeaderComponent } from '@jc4f-nx/spotify-shared-ui-media-table';
import { PlayButtonComponent } from '@jc4f-nx/spotify-shared-ui-play-button';
import { SvgIconComponent } from '@ngneat/svg-icon';

@Component({
  standalone: true,
  selector: 'as-album',
  templateUrl: './album.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  imports: [
    CommonModule,
    MediaSummaryComponent,
    PlayButtonComponent,
    MediaTableHeaderComponent,
    SvgIconComponent,
    AlbumTrackComponent,
    TracksLoadingComponent,
  ],
  providers: [AlbumStore],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlbumComponent {
  album$ = this.store.album$;
  isAlbumLoading$ = this.store.isCurrentAlbumLoading$;
  isAlbumPlaying$ = this.store.isAlbumPlaying$;

  constructor(private store: AlbumStore) {}

  toggleAlbum(isPlaying: boolean, uri: string) {
    this.store.toggleAlbum({
      isPlaying,
      uri,
    });
  }
}
