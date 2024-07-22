import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as SettingsActions from './settings.actions';
import { SettingsState } from './settings.reducer';
import * as SettingsSelectors from './settings.selectors';

@Injectable({ providedIn: 'root' })
export class SettingsFacade {
  public settings$ = this.store.select(SettingsSelectors.getSettings);
  public volume$ = this.store.select(SettingsSelectors.getSettingsVolume);

  constructor(private store: Store<SettingsState>) {}

  public persistVolume(volume: number) {
    this.store.dispatch(SettingsActions.persistVolume({ volume }));
  }
}
