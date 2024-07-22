import { Injectable } from '@angular/core';
import { PlaylistApiService } from '@jc4f-nx/spotify-shared-data-access-spotify-api';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { EMPTY } from 'rxjs';
import {
  catchError,
  filter,
  map,
  switchMap,
  withLatestFrom,
} from 'rxjs/operators';
import { loadPlaylists, loadPlaylistsSuccess } from './playlists.action';
import { getPlaylistsState } from './playlists.selector';

@Injectable({ providedIn: 'root' })
export class PlaylistsEffect {
  loadPlaylists$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPlaylists),
      withLatestFrom(this.store.pipe(select(getPlaylistsState))),
      filter(([, playlistState]) => !playlistState.data),
      switchMap(() =>
        this.playlistsApi.getUserSavedPlaylists().pipe(
          map((playlists) =>
            loadPlaylistsSuccess({
              playlists,
            })
          ),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private playlistsApi: PlaylistApiService,
    private store: Store
  ) {}
}
