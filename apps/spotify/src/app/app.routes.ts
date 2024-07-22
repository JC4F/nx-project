import { Route } from '@angular/router';
import {
  FeaturePlaylistsEffect,
  RecentPlayedTracksEffect,
  featuredPlaylistsFeatureKey,
  featuredPlaylistsReducer,
  recentFeatureTracksFeatureKey,
  recentPlayedTracksReducer,
} from '@jc4f-nx/spotify-home-data-access';
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
    ],
  },
];
