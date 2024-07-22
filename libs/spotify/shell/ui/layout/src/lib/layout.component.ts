import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { loadPlaylists } from '@jc4f-nx/spotify-playlist-data-access';
import { PlaybackStore } from '@jc4f-nx/spotify-shared-data-access-store';
import { AlbumArtOverlayComponent } from '@jc4f-nx/spotify-shell-ui-album-at-overlay';
import { MainViewComponent } from '@jc4f-nx/spotify-shell-ui-main-view';
import { NavBarComponent } from '@jc4f-nx/spotify-shell-ui-nav-bar';
import { NowPlayingBarComponent } from '@jc4f-nx/spotify-shell-ui-now-playing-bar';
import { TopBarComponent } from '@jc4f-nx/spotify-shell-ui-top-bar';
import { VisualizerStore } from '@jc4f-nx/spotify-visualizer-data-access';
import { WebVisualizerUiComponent } from '@jc4f-nx/spotify-visualizer-ui';
import { Store } from '@ngrx/store';
import { filter, map } from 'rxjs/operators';

@Component({
  standalone: true,
  selector: 'as-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  imports: [
    CommonModule,
    NavBarComponent,
    TopBarComponent,
    MainViewComponent,
    NowPlayingBarComponent,
    AlbumArtOverlayComponent,
    WebVisualizerUiComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent implements OnInit {
  showPiPVisualizer$ = this.visualizerStore.showPiPVisualizer$;
  currentAlbumCoverUrl$ = this.playbackStore.currentTrack$.pipe(
    map((track) => track?.album?.images[0]?.url),
    filter((imageUrl) => !!imageUrl)
  );

  constructor(
    private playbackStore: PlaybackStore,
    private store: Store,
    private visualizerStore: VisualizerStore
  ) {}

  ngOnInit(): void {
    this.store.dispatch(loadPlaylists());
  }
}
