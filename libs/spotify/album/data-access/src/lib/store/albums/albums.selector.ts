import { SelectorUtil } from '@jc4f-nx/spotify-shared-utils';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AlbumsState, albumsFeatureKey } from './albums.reducer';

export const getAlbumsState =
  createFeatureSelector<AlbumsState>(albumsFeatureKey);

export const getAlbums = createSelector(getAlbumsState, (s) => s.data);
export const getAlbumsLoading = createSelector(
  getAlbumsState,
  SelectorUtil.isLoading
);
