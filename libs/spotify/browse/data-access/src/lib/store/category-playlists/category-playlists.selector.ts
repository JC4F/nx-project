import { SelectorUtil } from '@jc4f-nx/spotify-shared-utils';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  CategoryPlaylistsState,
  categoryPlaylistsFeatureKey,
} from './category-playlists.reducer';

export const getCategoryPlaylistsState =
  createFeatureSelector<CategoryPlaylistsState>(categoryPlaylistsFeatureKey);

export const getCategoryPlaylistsLoading = createSelector(
  getCategoryPlaylistsState,
  SelectorUtil.isLoading
);

export const getCategoryPlaylistsMap = createSelector(
  getCategoryPlaylistsState,
  (s) => s.data
);
export const getCategoryPlaylistsById = (categoryId: string) =>
  createSelector(getCategoryPlaylistsMap, (map) => {
    const playlists = map?.get(categoryId);
    return SelectorUtil.getPlaylistsWithRoute(playlists);
  });
