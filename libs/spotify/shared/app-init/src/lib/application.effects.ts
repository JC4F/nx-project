import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { AuthStore } from '@jc4f-nx/spotify-auth-data-access';
import { SettingsFacade } from '@jc4f-nx/spotify-settings-data-access';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { PlaybackService } from '@jc4f-nx/spotify-shared-data-access-store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { combineLatest } from 'rxjs';
import { filter, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { AppInit, AuthReady } from './app-init.action';
import { GoogleAnalyticsService } from './google-analytics.service';
import { PromptUpdateService } from './promp-update.service';

@Injectable()
export class ApplicationEffects {
  constructor(
    private actions$: Actions,
    private authStore: AuthStore,
    private playbackService: PlaybackService,
    private settingsFacade: SettingsFacade,
    private router: Router,
    private googleAnalytics: GoogleAnalyticsService,
    private promptUpdate: PromptUpdateService
  ) {}

  initAuth$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AppInit),
        tap(() => {
          this.authStore.init();
        })
      ),
    {
      dispatch: false,
    }
  );

  initPlaybackSDK$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthReady),
        withLatestFrom(
          combineLatest([this.authStore.token$, this.settingsFacade.volume$])
        ),
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        tap(([_, [token, volume]]) => {
          this.playbackService.initPlaybackSDK(token, volume);
        })
      ),
    {
      dispatch: false,
    }
  );

  sendGoogleAnalyticPageView$ = createEffect(
    () =>
      this.router.events.pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        ),
        tap((event) => {
          this.googleAnalytics.sendPageView(event.urlAfterRedirects);
        })
      ),
    {
      dispatch: false,
    }
  );

  initForceUpdate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AppInit),
        switchMap(() => this.promptUpdate.forceUpdate())
      ),
    {
      dispatch: false,
    }
  );
}
