import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { APP_CONFIG, AppConfig } from '@jc4f-nx/spotify-shared-app-config';

@Injectable({ providedIn: 'root' })
export class ArtistApiService {
  constructor(
    @Inject(APP_CONFIG) private appConfig: AppConfig,
    private http: HttpClient
  ) {}

  getArtist(artistId: string) {
    return this.http.get<SpotifyApi.ArtistObjectFull>(
      `${this.appConfig.baseURL}/artists/${artistId}`
    );
  }

  getArtistTopTracks(artistId: string, country: string) {
    return this.http.get<SpotifyApi.ArtistsTopTracksResponse>(
      `${this.appConfig.baseURL}/artists/${artistId}/top-tracks?market=${country}`
    );
  }
}
