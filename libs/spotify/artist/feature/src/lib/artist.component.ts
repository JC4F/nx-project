import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ArtistStore } from '@jc4f-nx/spotify-artist-data-access';
import { ArtistTopTracksComponent } from '@jc4f-nx/spotify-artist-ui-artist-top-tracks';
import { TracksLoadingComponent } from '@jc4f-nx/spotify-shared-tracks-loading';
import { MediaSummaryComponent } from '@jc4f-nx/spotify-shared-ui-media-summary';

@Component({
  standalone: true,
  selector: 'as-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss'],
  imports: [
    CommonModule,
    MediaSummaryComponent,
    TracksLoadingComponent,
    ArtistTopTracksComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ArtistStore],
})
export class ArtistComponent {
  artist$ = this.artistStore.artist$;
  isArtistLoading$ = this.artistStore.isArtistLoading$;

  constructor(private artistStore: ArtistStore) {}
}
