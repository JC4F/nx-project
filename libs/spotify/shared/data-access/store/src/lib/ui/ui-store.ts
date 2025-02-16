import { Injectable } from '@angular/core';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { UnauthorizedModalComponent } from '@jc4f-nx/spotify-auth-ui-unauthorized-modal';
import { NavItem } from '@jc4f-nx/spotify-shared-data-access-models';
import { ComponentStore } from '@ngrx/component-store';
import { HlmDialogService } from '@spartan-ng/ui-dialog-helm';
import { filter, switchMap, tap } from 'rxjs/operators';

interface UIState {
  navItems: NavItem[];
  isShowUnauthorizedModal: boolean;
}

@Injectable({ providedIn: 'root' })
export class UIStore extends ComponentStore<UIState> {
  constructor(private _hlmDialogService: HlmDialogService) {
    super({
      navItems: [
        {
          label: 'Home',
          path: '',
          exact: true,
          icon: 'house-door',
          iconSelected: 'house-door-fill',
        },
        { label: 'Search', path: '/search', icon: 'search' },
        {
          label: 'Browse',
          path: '/browse',
          icon: 'compass',
          iconSelected: 'compass-fill',
        },
        {
          label: 'My Playlists',
          path: '/collection/playlists',
          icon: 'music-note-list',
          iconSelected: 'music-note-beamed',
        },
        { label: 'My Albums', path: '/albums', icon: 'journal' },
        {
          label: 'Liked songs',
          path: '/collection/tracks',
          icon: 'heart',
          iconSelected: 'heart-fill',
        },
      ],
      isShowUnauthorizedModal: false,
    });
  }
  readonly isShowUnauthorizedModal$ = this.select(
    (s) => s.isShowUnauthorizedModal
  );
  readonly navItems$ = this.select(({ navItems }) => navItems);

  readonly showUnauthorizedModal = this.effect((params$) =>
    params$.pipe(
      switchMap(() => this.isShowUnauthorizedModal$),
      filter((s) => !s),
      tap(() => {
        this.patchState({
          isShowUnauthorizedModal: true,
        });
        this._hlmDialogService.open(UnauthorizedModalComponent);
      })
    )
  );
}
