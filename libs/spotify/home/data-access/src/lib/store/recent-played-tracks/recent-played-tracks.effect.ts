import { Injectable } from '@angular/core';
import { PlayerApiService } from '@jc4f-nx/spotify-shared-data-access-spotify-api';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import {
  loadRecentTracks,
  loadRecentTracksSuccess,
} from './recent-played-tracks.action';

@Injectable({ providedIn: 'root' })
export class RecentPlayedTracksEffect {
  constructor(private playerApi: PlayerApiService, private actions$: Actions) {}

  loadRecentTracks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadRecentTracks),
      switchMap(() =>
        this.playerApi.getRecentPlayedTracks().pipe(
          map((response) =>
            loadRecentTracksSuccess({
              response,
            })
          ),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
