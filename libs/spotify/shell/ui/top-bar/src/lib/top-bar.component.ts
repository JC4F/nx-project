import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SocialShareComponent } from '@jc4f-nx/spotify-shell-ui-social-share';
import { UserDropdownComponent } from '@jc4f-nx/spotify-shell-ui-user-dropdown';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';

@Component({
  standalone: true,
  selector: 'as-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  imports: [HlmButtonDirective, UserDropdownComponent, SocialShareComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopBarComponent {
  constructor(private location: Location) {}

  back() {
    this.location.back();
  }

  forward() {
    this.location.forward();
  }
}
