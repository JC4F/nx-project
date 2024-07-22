import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SvgIconComponent } from '@ngneat/svg-icon';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';

@Component({
  standalone: true,
  selector: 'as-social-share',
  templateUrl: './social-share.component.html',
  styleUrls: ['./social-share.component.scss'],
  imports: [SvgIconComponent, HlmButtonDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialShareComponent {}
