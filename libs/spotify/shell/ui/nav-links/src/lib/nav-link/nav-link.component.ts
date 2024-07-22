import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { PlayerApiService } from '@jc4f-nx/spotify-shared-data-access-spotify-api';
import { PlaybackStore } from '@jc4f-nx/spotify-shared-data-access-store';
import { MediaCoverComponent } from '@jc4f-nx/spotify-shared-ui-media-cover';
import { PlayButtonComponent } from '@jc4f-nx/spotify-shared-ui-play-button';
import { RouteUtil, SelectorUtil } from '@jc4f-nx/spotify-shared-utils';
import { LetDirective } from '@ngrx/component';
import { Observable, combineLatest, of } from 'rxjs';

@Component({
  standalone: true,
  selector: 'as-nav-link',
  templateUrl: './nav-link.component.html',
  styleUrls: ['./nav-link.component.scss'],
  imports: [
    CommonModule,
    RouterModule,
    MediaCoverComponent,
    PlayButtonComponent,
    LetDirective,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavLinkComponent implements OnInit {
  @Input()
  set playlist(value: SpotifyApi.PlaylistObjectSimplified) {
    this.playlistWithRoute = {
      ...value,
      routeUrl: RouteUtil.getPlaylistRouteUrl(value.id),
    };
  }

  playlistWithRoute!: SpotifyApi.PlaylistObjectSimplified & {
    routeUrl: string;
  };
  isPlaylistPlaying$!: Observable<boolean>;

  constructor(
    private playbackStore: PlaybackStore,
    private playerApi: PlayerApiService
  ) {}

  ngOnInit(): void {
    this.isPlaylistPlaying$ = SelectorUtil.getMediaPlayingState(
      combineLatest([
        of(this.playlistWithRoute?.uri),
        this.playbackStore.playback$,
      ])
    );
  }

  togglePlaylist(isPlaying: boolean) {
    this.playerApi
      .togglePlay(isPlaying, {
        context_uri: this.playlistWithRoute?.uri,
      })
      .subscribe(); //TODO: Refactor with component store live stream
  }
}
