import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
} from '@angular/core';
import { PlayButtonComponent } from '@jc4f-nx/spotify-shared-ui-play-button';

@Component({
  standalone: true,
  selector: 'as-media-order',
  templateUrl: './media-order.component.html',
  imports: [PlayButtonComponent, CommonModule],
  // host: {
  //   '[style.display]': '"block"'
  // }
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class MediaOrderComponent {
  @HostBinding('style.display') display = 'block';

  @Input() index!: number;
  @Input() isPlaying!: boolean | null;
  @Output() togglePlay = new EventEmitter<boolean>();
}
