import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WebVisualizerUiComponent } from '@jc4f-nx/spotify-visualizer-ui';

@Component({
  standalone: true,
  selector: 'as-visualizer',
  templateUrl: './visualizer.component.html',
  styleUrls: ['./visualizer.component.scss'],
  imports: [WebVisualizerUiComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VisualizerComponent {}
