import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { APP_CONFIG, AppConfig } from '@jc4f-nx/spotify-shared-app-config';
import {
  SpotifyApiAudioAnalysisResponse,
  SpotifyApiParams,
} from '@jc4f-nx/spotify-shared-data-access-models';

@Injectable({ providedIn: 'root' })
export class TrackApiService {
  constructor(
    @Inject(APP_CONFIG) private appConfig: AppConfig,
    private http: HttpClient
  ) {}

  getAudioAnalysis(trackId: string) {
    return this.http.get<SpotifyApiAudioAnalysisResponse>(
      `${this.appConfig.baseURL}/audio-analysis/${trackId}`
    );
  }

  getAudioFeatures(trackId: string) {
    return this.http.get<SpotifyApi.AudioAnalysisResponse>(
      `${this.appConfig.baseURL}/audio-features/${trackId}`
    );
  }

  getUserSavedTracks(
    params: SpotifyApiParams = {
      limit: 50,
    }
  ) {
    return this.http.get<SpotifyApi.UsersSavedTracksResponse>(
      `${this.appConfig.baseURL}/me/tracks`,
      {
        params,
      }
    );
  }
}
