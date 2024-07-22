import { Injectable } from '@angular/core';
import { AuthStore } from '@jc4f-nx/spotify-auth-data-access';
import { BrowseApiService } from '@jc4f-nx/spotify-shared-data-access-spotify-api';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import {
  loadFeaturedPlaylists,
  loadFeaturedPlaylistsSuccess,
} from './feature-playlists.action';

@Injectable({ providedIn: 'root' })
export class FeaturePlaylistsEffect {
  constructor(
    private browseApi: BrowseApiService,
    private actions$: Actions,
    private authStore: AuthStore
  ) {}

  loadFeaturedPlaylists$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadFeaturedPlaylists),
      withLatestFrom(this.authStore.country$),
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      switchMap(([_, country]) =>
        this.browseApi
          .getAllFeaturedPlaylists({
            limit: 50,
            country: country || 'VN',
          })
          .pipe(
            map((response) =>
              loadFeaturedPlaylistsSuccess({
                response,
              })
            ),
            catchError(() => EMPTY)
          )
      )
    )
  );
}
