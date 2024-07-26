import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, Route, Router } from '@angular/router';
import {
  AlbumsEffect,
  albumsFeatureKey,
  albumsReducer,
} from '@jc4f-nx/spotify-album-data-access';
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
      {
        path: 'search',
        loadComponent: () =>
          import('@jc4f-nx/spotify-search-feature').then(
            (m) => m.SearchComponent
          ),
      },
      {
        path: 'collection',
        children: [
          {
            path: 'playlists',
            loadComponent: () =>
              import('@jc4f-nx/spotify-playlist-feature-list').then(
                (m) => m.PlaylistsComponent
              ),
          },
          {
            path: 'tracks',
            loadComponent: () =>
              import('@jc4f-nx/spotify-tracks-feature').then(
                (m) => m.TracksComponent
              ),
          },
        ],
      },
      {
        path: `playlist/:${RouterUtil.Configuration.PlaylistId}`,
        loadComponent: () =>
          import('@jc4f-nx/spotify-playlist-feature-detail').then(
            (m) => m.PlaylistComponent
          ),
      },
      {
        path: 'albums',
        providers: [
          provideState({
            name: albumsFeatureKey,
            reducer: albumsReducer,
          }),
          provideEffects([AlbumsEffect]),
        ],
        children: [
          {
            path: '',
            loadComponent: () =>
              import('@jc4f-nx/spotify-album-feature-list').then(
                (m) => m.AlbumsComponent
              ),
          },
          {
            path: `:${RouterUtil.Configuration.AlbumId}`,
            loadComponent: () =>
              import('@jc4f-nx/spotify-album-feature-detail').then(
                (m) => m.AlbumComponent
              ),
          },
        ],
      },
      {
        path: `artist/:${RouterUtil.Configuration.ArtistId}`,
        loadComponent: () =>
          import('@jc4f-nx/spotify-artist-feature').then(
            (m) => m.ArtistComponent
          ),
      },
      {
        path: 'container-queries',
        children: [
          {
            path: '',
            loadComponent: () =>
              import('@jc4f-nx/spotify-container-queries').then(
                (m) => m.ContainerQueriesComponent
              ),
          },
          {
            path: `:${RouterUtil.Configuration.AlbumId}`,
            canActivate: [containerQueriesDetailGuard],
            children: [],
          },
        ],
      },
      {
        path: RouterUtil.Configuration.Visualizer,
        loadComponent: () =>
          import('@jc4f-nx/spotify-visualizer-feature').then(
            (m) => m.VisualizerComponent
          ),
      },
    ],
  },
];

export function containerQueriesDetailGuard(next: ActivatedRouteSnapshot) {
  const router = inject(Router);
  const albumId = next.paramMap.get(RouterUtil.Configuration.AlbumId);
  router.navigate([RouterUtil.Configuration.Albums, albumId]);
  return true;
}
