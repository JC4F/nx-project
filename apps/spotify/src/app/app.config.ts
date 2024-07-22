import { provideHttpClient } from '@angular/common/http';
import {
  ApplicationConfig,
  isDevMode,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';
import { provideServiceWorker } from '@angular/service-worker';
import { onViewTransitionCreated } from '@jc4f-nx/shared-view-transiton';
import {
  PlaylistTracksEffect,
  PlaylistsEffect,
  playlistTrackFeatureKey,
  playlistTracksReducer,
  playlistsFeatureKey,
  playlistsReducer,
} from '@jc4f-nx/spotify-playlist-data-access';
import {
  SETTINGS_FEATURE_KEY,
  SettingsEffects,
  settingsReducer,
} from '@jc4f-nx/spotify-settings-data-access';
import { getAppConfigProvider } from '@jc4f-nx/spotify-shared-app-config';
import { ApplicationEffects } from '@jc4f-nx/spotify-shared-app-init';
import {
  asAudioAnimatedIcon,
  asCaretDownFillIcon,
  asClockIcon,
  asCompassFillIcon,
  asCompassIcon,
  asCupFillIcon,
  asCupIcon,
  asCupStrawIcon,
  asEmojiHeartEyesIcon,
  asExpandIcon,
  asGithubIcon,
  asHeartFillIcon,
  asHeartIcon,
  asHomeIcon,
  asHouseDoorFillIcon,
  asHouseDoorIcon,
  asJournalIcon,
  asMusicNoteBeamedIcon,
  asMusicNoteListIcon,
  asPauseIcon,
  asPlayIcon,
  asQuestionCircleIcon,
  asSearchHeartIcon,
  asSearchIcon,
  asShrinkIcon,
  asStepBackwardIcon,
  asStepForwardIcon,
  asTimesIcon,
  asTwitterIcon,
  asVolumeHighIcon,
  asVolumeMediumIcon,
  asVolumeMuteIcon,
} from '@jc4f-nx/spotify-shared-ui-icon';
import { provideSvgIcons } from '@ngneat/svg-icon';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { environment } from './../environments/environment';
import { appRoutes } from './app.routes';

const rootReducers = {
  [playlistsFeatureKey]: playlistsReducer,
  [playlistTrackFeatureKey]: playlistTracksReducer,
  [SETTINGS_FEATURE_KEY]: settingsReducer,
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes, withViewTransitions({ onViewTransitionCreated })),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000',
    }),
    provideStore(rootReducers),
    provideEffects([
      ApplicationEffects,
      PlaylistsEffect,
      PlaylistTracksEffect,
      SettingsEffects,
    ]),

    getAppConfigProvider(environment),
    provideHttpClient(),

    provideSvgIcons([
      asAudioAnimatedIcon,
      asCaretDownFillIcon,
      asClockIcon,
      asCompassFillIcon,
      asCompassIcon,
      asCupFillIcon,
      asCupIcon,
      asCupStrawIcon,
      asEmojiHeartEyesIcon,
      asExpandIcon,
      asGithubIcon,
      asHeartFillIcon,
      asHeartIcon,
      asHomeIcon,
      asHouseDoorFillIcon,
      asHouseDoorIcon,
      asJournalIcon,
      asMusicNoteBeamedIcon,
      asMusicNoteListIcon,
      asPauseIcon,
      asPlayIcon,
      asQuestionCircleIcon,
      asSearchHeartIcon,
      asSearchIcon,
      asShrinkIcon,
      asStepBackwardIcon,
      asStepForwardIcon,
      asTimesIcon,
      asTwitterIcon,
      asVolumeHighIcon,
      asVolumeMediumIcon,
      asVolumeMuteIcon,
    ]),
  ],
};
