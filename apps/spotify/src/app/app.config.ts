import {
  ApplicationConfig,
  isDevMode,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideServiceWorker } from '@angular/service-worker';
import {
  PlaylistTracksEffect,
  PlaylistsEffect,
  playlistTrackFeatureKey,
  playlistTracksReducer,
  playlistsFeatureKey,
  playlistsReducer,
} from '@jc4f-nx/spotify-playlist-data-access';
import { ApplicationEffects } from '@jc4f-nx/spotify-shared-app-init';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { appRoutes } from './app.routes';

const rootReducers = {
  [playlistsFeatureKey]: playlistsReducer,
  [playlistTrackFeatureKey]: playlistTracksReducer,
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000',
    }),
    provideStore(rootReducers),
    provideEffects([ApplicationEffects, PlaylistsEffect, PlaylistTracksEffect]),
  ],
};
