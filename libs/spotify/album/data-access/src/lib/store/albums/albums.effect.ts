import { Injectable } from '@angular/core';
import { AlbumApiService } from '@jc4f-nx/spotify-shared-data-access-spotify-api';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { loadAlbums, loadAlbumsSuccess } from './albums.action';

@Injectable({ providedIn: 'root' })
export class AlbumsEffect {
  loadAlbums$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadAlbums),
      switchMap(() =>
        this.albumApi.getUserSavedAlbums().pipe(
          map((albums) => loadAlbumsSuccess({ albums })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private actions$: Actions, private albumApi: AlbumApiService) {}
}
