import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { asAudioAnimatedIcon } from '@jc4f-nx/spotify-shared-ui-icon';
import { SvgIconComponent, provideSvgIcons } from '@ngneat/svg-icon';

@Component({
  standalone: true,
  selector: 'as-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  imports: [SvgIconComponent],
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  providers: [provideSvgIcons([asAudioAnimatedIcon]) as unknown as any[]],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpinnerComponent {
  @Input() size = 'xl';
}
