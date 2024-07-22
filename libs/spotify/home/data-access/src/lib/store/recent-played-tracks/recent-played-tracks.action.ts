import { SpotifyApiRecentPlayerTracksResponse } from '@jc4f-nx/spotify-shared-data-access-models';
import { createAction, props } from '@ngrx/store';

export const loadRecentTracks = createAction(
  '[Home/Load Recent Played Tracks]'
);
export const loadRecentTracksSuccess = createAction(
  '[Home/Load Recent Played Tracks Success]',
  props<{
    response: SpotifyApiRecentPlayerTracksResponse;
  }>()
);
export const loadRecentTracksError = createAction(
  '[Home/Load Recent Played Tracks Error]',
  props<{ error: string }>()
);
