import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ArtistTopTracksStore } from '@jc4f-nx/spotify-artist-data-access';
import { ArtistTopTrackComponent } from '@jc4f-nx/spotify-artist-ui-artist-top-track';

@Component({
  standalone: true,
  selector: 'as-artist-top-tracks',
  templateUrl: './artist-top-tracks.component.html',
  imports: [CommonModule, ArtistTopTrackComponent],
  providers: [ArtistTopTracksStore],
})
export class ArtistTopTracksComponent {
  readonly vm$ = this.store.vm$;
  constructor(private readonly store: ArtistTopTracksStore) {}
}
