import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MediaCoverComponent } from '@jc4f-nx/spotify-shared-ui-media-cover';
import { RouteUtil } from '@jc4f-nx/spotify-shared-utils';

@Component({
  standalone: true,
  selector: 'as-track-main-info',
  templateUrl: './track-main-info.component.html',
  styleUrls: ['./track-main-info.component.scss'],
  imports: [CommonModule, RouterModule, MediaCoverComponent],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrackMainInfoComponent {
  @Input() track: SpotifyApi.TrackObjectFull | undefined;
  @Input() isPlaying!: boolean;
  @Input() isShowArtist = true;

  getArtistRouteUrl(artist: SpotifyApi.ArtistObjectSimplified) {
    return RouteUtil.getArtistRouteUrl(artist.id);
  }
}
