import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { SvgIconComponent, SvgIcons } from '@ngneat/svg-icon';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
export const IconSizesInPx: { [key in IconSize]: number } = {
  xs: 8, // 0.5rem
  sm: 12, // 0.75rem
  md: 16, // 1rem
  lg: 24, // 1.5rem
  xl: 32, // 2rem
  xxl: 40, // 2.5rem
};

@Component({
  standalone: true,
  selector: 'as-input',
  templateUrl: './input.component.html',
  imports: [
    SvgIconComponent,
    ReactiveFormsModule,
    CommonModule,
    HlmInputDirective,
  ],
})
export class InputComponent implements AfterViewInit {
  @Input() control = new FormControl('');
  @Input() containerClassName = '';
  @Input() icon!: SvgIcons;
  @Input() iconSize: IconSize = 'md';
  @Input() placeholder = '';
  @Input() rounded = false;
  @Input() enableClearButton = false;
  @Input() autoFocus = false;
  @ViewChild('input') inputRef!: ElementRef;

  get iconContainerWidth(): number {
    return IconSizesInPx[this.iconSize] * 2;
  }

  get inputContainerHeight(): number {
    return IconSizesInPx[this.iconSize] * 1.8;
  }

  get showClearButton(): boolean {
    return this.enableClearButton && !!this.control?.value;
  }

  clear() {
    this.control.patchValue('');
    this.inputRef.nativeElement.focus();
  }

  ngAfterViewInit() {
    if (this.autoFocus && this.inputRef) {
      this.inputRef.nativeElement.focus();
    }
  }
}
