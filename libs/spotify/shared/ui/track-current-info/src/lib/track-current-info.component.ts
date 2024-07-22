import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SpotifyTrackExtended } from '@jc4f-nx/spotify-shared-data-access-models';
import { MediaCoverComponent } from '@jc4f-nx/spotify-shared-ui-media-cover';

@Component({
  standalone: true,
  selector: 'as-track-current-info',
  templateUrl: './track-current-info.component.html',
  styleUrls: ['./track-current-info.component.css'],
  imports: [CommonModule, RouterModule, MediaCoverComponent],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrackCurrentInfoComponent {
  @Input() track: SpotifyTrackExtended | undefined;
}
