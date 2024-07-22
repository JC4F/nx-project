import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import {
  CurrentViewTransitionService,
  getViewTransitionParamValue,
} from '@jc4f-nx/shared-view-transiton';
import { PlaylistsResponseWithRoute } from '@jc4f-nx/spotify-shared-data-access-models';
import { PlayerApiService } from '@jc4f-nx/spotify-shared-data-access-spotify-api';
import { CardComponent } from '@jc4f-nx/spotify-shared-ui-media';
import { SpinnerComponent } from '@jc4f-nx/spotify-shared-ui-spinner';
import { RouterUtil } from '@jc4f-nx/spotify-shared-utils';

@Component({
  standalone: true,
  selector: 'as-playlist-list',
  templateUrl: './playlist-list.component.html',
  styleUrls: ['./playlist-list.component.scss'],
  imports: [CardComponent, SpinnerComponent, CommonModule],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaylistListComponent {
  @Input() playlists!: PlaylistsResponseWithRoute | null;
  @Input() isLoading!: boolean | null;
  transitionService = inject(CurrentViewTransitionService);

  constructor(private playerApi: PlayerApiService) {}

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
  viewTransitionName(item: SpotifyApi.PlaylistObjectSimplified) {
    const transition = this.transitionService.currentTransition();
    const transitionAlbumId = getViewTransitionParamValue(
      transition,
      RouterUtil.Configuration.PlaylistId
    );
    const withViewTransition = transitionAlbumId === item.id;
    return withViewTransition ? 'with-view-transition' : '';
  }
}
