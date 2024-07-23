import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PlaylistTrackComponent } from '@jc4f-nx/spotify-playlist-ui-playlist-track';
import { TracksLoadingComponent } from '@jc4f-nx/spotify-shared-tracks-loading';
import { MediaSummaryComponent } from '@jc4f-nx/spotify-shared-ui-media-summary';
import { MediaTableHeaderComponent } from '@jc4f-nx/spotify-shared-ui-media-table';
import { TracksStore } from '@jc4f-nx/spotify-tracks-data-access';
import { SvgIconComponent } from '@ngneat/svg-icon';

@Component({
  standalone: true,
  selector: 'as-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.scss'],
  imports: [
    CommonModule,
    MediaSummaryComponent,
    MediaTableHeaderComponent,
    SvgIconComponent,
    PlaylistTrackComponent,
    TracksLoadingComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TracksStore],
})
export class TracksComponent implements OnInit {
  vm$ = this.store.vm$;

  constructor(private store: TracksStore) {}

  ngOnInit() {
    this.store.loadTracks();
  }

  playTrack(track: SpotifyApi.TrackObjectFull) {
    this.store.playTrack({ track });
  }
}
