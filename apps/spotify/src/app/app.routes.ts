import { Route } from '@angular/router';
import {
  CategoriesEffect,
  CategoryPlaylistsEffect,
  categoriesFeatureKey,
  categoriesReducer,
  categoryPlaylistsFeatureKey,
  categoryPlaylistsReducer,
} from '@jc4f-nx/spotify-browse-data-access';
import {
  FeaturePlaylistsEffect,
  RecentPlayedTracksEffect,
  featuredPlaylistsFeatureKey,
  featuredPlaylistsReducer,
  recentFeatureTracksFeatureKey,
  recentPlayedTracksReducer,
} from '@jc4f-nx/spotify-home-data-access';
import { RouterUtil } from '@jc4f-nx/spotify-shared-utils';
import { LayoutComponent } from '@jc4f-nx/spotify-shell-ui-layout';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';

export const appRoutes: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('@jc4f-nx/spotify-home-feature').then((m) => m.HomeComponent),
        providers: [
          provideState({
            name: recentFeatureTracksFeatureKey,
            reducer: recentPlayedTracksReducer,
          }),
          provideState({
            name: featuredPlaylistsFeatureKey,
            reducer: featuredPlaylistsReducer,
          }),
          provideEffects([RecentPlayedTracksEffect, FeaturePlaylistsEffect]),
        ],
      },
      {
        path: 'browse',
        providers: [
          provideState({
            name: categoriesFeatureKey,
            reducer: categoriesReducer,
          }),
          provideState({
            name: categoryPlaylistsFeatureKey,
            reducer: categoryPlaylistsReducer,
          }),
          provideEffects([CategoriesEffect, CategoryPlaylistsEffect]),
        ],
        children: [
          {
            path: '',
            loadComponent: () =>
              import('@jc4f-nx/spotify-browse-feature-categories').then(
                (m) => m.CategoriesComponent
              ),
          },
          {
            path: `:${RouterUtil.Configuration.CategoryId}`,
            loadComponent: () =>
              import('@jc4f-nx/spotify-browse-feature-category').then(
                (m) => m.CategoryComponent
              ),
          },
        ],
      },
    ],
  },
];
