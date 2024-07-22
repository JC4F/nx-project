import { SelectorUtil } from '@jc4f-nx/spotify-shared-utils';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  PlaylistTracksState,
  playlistTrackFeatureKey,
} from './playlist-tracks.reducer';

export const getPlaylistTracksState =
  createFeatureSelector<PlaylistTracksState>(playlistTrackFeatureKey);

export const getPlaylistTracksLoading = createSelector(
  getPlaylistTracksState,
  SelectorUtil.isLoading
);

export const getPlaylistTracksById = (playlistId: string) =>
  createSelector(getPlaylistTracksState, ({ data }) => {
    return data?.get(playlistId);
  });
