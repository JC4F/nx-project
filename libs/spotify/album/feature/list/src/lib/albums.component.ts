import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import {
  CurrentViewTransitionService,
  getViewTransitionParamValue,
} from '@jc4f-nx/shared-view-transiton';
import {
  getAlbums,
  getAlbumsLoading,
  loadAlbums,
} from '@jc4f-nx/spotify-album-data-access';
import { PlayerApiService } from '@jc4f-nx/spotify-shared-data-access-spotify-api';
import { CardComponent } from '@jc4f-nx/spotify-shared-ui-media';
import { SpinnerComponent } from '@jc4f-nx/spotify-shared-ui-spinner';
import { RouterUtil } from '@jc4f-nx/spotify-shared-utils';
import { Store, select } from '@ngrx/store';

@Component({
  standalone: true,
  selector: 'as-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss'],
  imports: [CommonModule, CardComponent, SpinnerComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlbumsComponent implements OnInit {
  albums$ = this.store.pipe(select(getAlbums));
  isLoading$ = this.store.pipe(select(getAlbumsLoading));
  transitionService = inject(CurrentViewTransitionService);

  constructor(private store: Store, private playerApi: PlayerApiService) {}

  ngOnInit(): void {
    this.store.dispatch(loadAlbums());
  }

  togglePlay(isPlaying: boolean, contextUri: string) {
    this.playerApi
      .togglePlay(isPlaying, {
        context_uri: contextUri,
      })
      .subscribe();
  }

  /*
    When transitioning to or from the detail page, include the `with-view-transition` transition name.
    This enables the browser to animate between the cover photo image in the list and its image on the detail page.
  */
  viewTransitionName(item: SpotifyApi.SavedAlbumObject) {
    const transition = this.transitionService.currentTransition();
    const transitionAlbumId = getViewTransitionParamValue(
      transition,
      RouterUtil.Configuration.AlbumId
    );
    const withViewTransition = transitionAlbumId === item.album.id;
    return withViewTransition ? 'with-view-transition' : '';
  }
}
