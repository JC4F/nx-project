import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  asCupStrawIcon,
  asEmojiHeartEyesIcon,
  asGithubIcon,
  asTwitterIcon,
} from '@jc4f-nx/spotify-shared-ui-icon';
import { SvgIconComponent, provideSvgIcons } from '@ngneat/svg-icon';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';

@Component({
  standalone: true,
  selector: 'as-social-share',
  templateUrl: './social-share.component.html',
  styleUrls: ['./social-share.component.scss'],
  imports: [SvgIconComponent, HlmButtonDirective],
  providers: [
    provideSvgIcons([
      asCupStrawIcon,
      asEmojiHeartEyesIcon,
      asTwitterIcon,
      asGithubIcon,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ]) as unknown as any[],
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialShareComponent {}
