import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
} from '@angular/core';
import { SvgIconComponent } from '@ngneat/svg-icon';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';

@Component({
  selector: 'as-play-button',
  standalone: true,
  templateUrl: './play-button.component.html',
  imports: [CommonModule, SvgIconComponent, HlmButtonDirective],
})
export class PlayButtonComponent {
  isPause: boolean | undefined;
  @Input() isPlaying: boolean | null | undefined;
  @Input() primary = false;
  @Input() large = false;
  @Input() flatIcon = false;
  @HostBinding('class.is-show-volume') @Input() isShowVolumeIcon = false;
  @Output() togglePlay = new EventEmitter<boolean>();

  get buttonClass() {
    if (this.flatIcon) {
      return ['flex'];
    }
    const baseClass =
      'flex !rounded-full hover:scale-105 active:scale-[0.98] group/item';
    const sizeClass = this.large ? 'large' : '';
    return [
      baseClass,
      sizeClass,
      this.primary
        ? '!text-black !bg-[#1ed760] !h-12 !w-12 !shadow'
        : '!text-black !bg-foreground',
    ];
  }

  get svgSize() {
    return this.large ? 'lg' : 'md';
  }
}
