import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { APP_CONFIG, AppConfig } from '@jc4f-nx/spotify-shared-app-config';
import { Observable } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class SpotifyApiService {
  constructor(
    @Inject(APP_CONFIG) private appConfig: AppConfig,
    private http: HttpClient
  ) {}

  getMe(): Observable<SpotifyApi.CurrentUsersProfileResponse> {
    return this.http.get<SpotifyApi.CurrentUsersProfileResponse>(
      `${this.appConfig.baseURL}/me`
    );
  }
}
