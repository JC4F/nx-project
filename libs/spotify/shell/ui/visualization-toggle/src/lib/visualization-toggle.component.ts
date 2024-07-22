import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PlaybackStore } from '@jc4f-nx/spotify-shared-data-access-store';
import { VisualizerStore } from '@jc4f-nx/spotify-visualizer-data-access';
import { SvgIconComponent } from '@ngneat/svg-icon';
import { LetDirective } from '@ngrx/component';
import { HlmSwitchComponent } from '@spartan-ng/ui-switch-helm';
import { BrnTooltipContentDirective } from '@spartan-ng/ui-tooltip-brain';
import {
  HlmTooltipComponent,
  HlmTooltipTriggerDirective,
} from '@spartan-ng/ui-tooltip-helm';

@Component({
  standalone: true,
  selector: 'as-visualization-toggle',
  templateUrl: './visualization-toggle.component.html',
  styleUrls: ['./visualization-toggle.component.scss'],
  imports: [
    CommonModule,
    SvgIconComponent,
    HlmSwitchComponent,
    HlmTooltipComponent,
    HlmTooltipTriggerDirective,
    BrnTooltipContentDirective,
    LetDirective,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VisualizationToggleComponent {
  isVisualizationOn$ = this.visualizerStore.isVisible$;
  isPlaying$ = this.playbackStore.isPlaying$;

  constructor(
    private visualizerStore: VisualizerStore,
    private playbackStore: PlaybackStore
  ) {}

  toggle(isVisible: boolean) {
    this.visualizerStore.setVisibility({ isVisible });
  }
}
