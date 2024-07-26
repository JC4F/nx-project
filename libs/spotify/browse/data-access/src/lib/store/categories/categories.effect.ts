import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { filter, map, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import {
  loadCategories,
  loadCategoriesSuccess,
  setCategoriesState,
} from './categories.action';

import { AuthStore } from '@jc4f-nx/spotify-auth-data-access';
import { BrowseApiService } from '@jc4f-nx/spotify-shared-data-access-spotify-api';
import { select, Store } from '@ngrx/store';
import { getCategories } from './categories.selector';

@Injectable()
export class CategoriesEffect {
  loadCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCategories),
      withLatestFrom(this.store.pipe(select(getCategories))),
      tap(([, categories]) => {
        if (categories) {
          this.store.dispatch(setCategoriesState({ status: 'success' }));
        }
      }),
      filter(([, data]) => !data),
      withLatestFrom(this.authStore.country$),
      switchMap(([, country]) =>
        this.browseApi
          .getAllCategories({
            country,
            limit: 50,
          })
          .pipe(
            map((response) =>
              loadCategoriesSuccess({
                categories: response,
              })
            )
          )
      )
    )
  );

  constructor(
    private store: Store,
    private actions$: Actions,
    private browseApi: BrowseApiService,
    private authStore: AuthStore
  ) {}
}
