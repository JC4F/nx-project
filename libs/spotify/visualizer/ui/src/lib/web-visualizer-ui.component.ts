import { CommonModule, DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { PlaybackStore } from '@jc4f-nx/spotify-shared-data-access-store';
import {
  AudioAnalyser,
  VisualizerStore,
  initVisualizer,
} from '@jc4f-nx/spotify-visualizer-data-access';
import { SvgIconComponent } from '@ngneat/svg-icon';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { LetDirective } from '@ngrx/component';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { mean } from 'lodash-es';
import { timer } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { Sketch } from 'sketch-js';

const INTERVAL = 100;

@UntilDestroy()
@Component({
  standalone: true,
  selector: 'as-web-visualizer-ui',
  templateUrl: './web-visualizer-ui.component.html',
  styleUrls: ['./web-visualizer-ui.component.scss'],
  imports: [CommonModule, HlmButtonDirective, SvgIconComponent, LetDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebVisualizerUiComponent implements OnInit, OnDestroy {
  isFullscreen = false;
  sketch!: Sketch;
  analyser!: AudioAnalyser;
  isVisualizerShownAsPiP$ = this.visualizerStore.isShownAsPiP$;

  @ViewChild('visualizer', { static: true }) visualizer!: ElementRef;

  constructor(
    private playbackStore: PlaybackStore,
    @Inject(DOCUMENT) private readonly document: Document,
    private visualizerStore: VisualizerStore
  ) {}

  ngOnInit(): void {
    const { sketch, analyser } = initVisualizer(this.visualizer.nativeElement);
    this.sketch = sketch;
    this.analyser = analyser;
    this.init();
  }

  init() {
    this.playbackStore.segments$
      .pipe(
        switchMap((data) =>
          timer(0, INTERVAL).pipe(
            map((num) => ({
              num,
              data,
            }))
          )
        ),
        tap(({ num, data }) => {
          const { position, isPlaying, segments } = data;
          if (!isPlaying) {
            return;
          }
          const currentPos = (position || 0) + num * INTERVAL;
          const segment = segments.find(
            (segment) => segment.start >= currentPos
          );
          if (segment) {
            const avgPitch = mean(segment?.pitches);
            this.analyser.onUpdate(avgPitch / 2);
          }
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }

  toggleFullscreen() {
    if (this.isFullscreen) {
      this.document.exitFullscreen();
    } else {
      (this.visualizer.nativeElement as HTMLElement).requestFullscreen();
    }
    this.isFullscreen = !this.isFullscreen;
  }

  togglePiP() {
    this.visualizerStore.togglePiP();
  }

  close() {
    this.visualizerStore.setVisibility({ isVisible: false });
  }

  ngOnDestroy() {
    this.sketch.destroy();
  }
}
