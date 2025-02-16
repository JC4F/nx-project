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
  tap,
  withLatestFrom,
} from 'rxjs/operators';
import {
  loadPlaylistTracks,
  loadPlaylistTracksSuccess,
  setPlaylistTracksStateStatus,
} from './playlist-tracks.action';
import { getPlaylistTracksState } from './playlist-tracks.selector';

@Injectable({ providedIn: 'root' })
export class PlaylistTracksEffect {
  loadPlaylistTracks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPlaylistTracks),
      withLatestFrom(this.store.pipe(select(getPlaylistTracksState))),
      tap(([{ playlistId }, playlistTracks]) => {
        if (playlistTracks.data?.has(playlistId)) {
          this.store.dispatch(
            setPlaylistTracksStateStatus({
              status: 'success',
            })
          );
        }
      }),
      filter(([{ playlistId }, playlistTracks]) => {
        return !playlistTracks.data?.has(playlistId);
      }),
      switchMap(([{ playlistId }]) =>
        this.playlistsApi.getTracks(playlistId).pipe(
          map((playlistTracks) =>
            loadPlaylistTracksSuccess({
              playlistId,
              playlistTracks,
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
