import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { APP_CONFIG, AppConfig } from '@jc4f-nx/spotify-shared-app-config';
import { SpotifyApiParams } from '@jc4f-nx/spotify-shared-data-access-models';

@Injectable({ providedIn: 'root' })
export class AlbumApiService {
  constructor(
    @Inject(APP_CONFIG) private appConfig: AppConfig,
    private http: HttpClient
  ) {}

  getUserSavedAlbums(
    params: SpotifyApiParams = {
      limit: 50,
    }
  ) {
    return this.http.get<SpotifyApi.UsersSavedAlbumsResponse>(
      `${this.appConfig.baseURL}/me/albums`,
      {
        params,
      }
    );
  }

  getAlbum(albumId: string) {
    return this.http.get<SpotifyApi.AlbumObjectFull>(
      `${this.appConfig.baseURL}/albums/${albumId}`
    );
  }

  getTracks(
    albumId: string,
    params: SpotifyApiParams = {
      limit: 50,
    }
  ) {
    return this.http.get<SpotifyApi.AlbumTracksResponse>(
      `${this.appConfig.baseURL}/albums/${albumId}/tracks`,
      {
        params,
      }
    );
  }
}
