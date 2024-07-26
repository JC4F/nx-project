import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GreetingComponent } from '@jc4f-nx/spotify-home-ui-greeting';
import { SocialShareComponent } from '@jc4f-nx/spotify-shell-ui-social-share';
import { UserDropdownComponent } from '@jc4f-nx/spotify-shell-ui-user-dropdown';
import { lucideChevronLeft, lucideChevronRight } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconComponent, provideIcons } from '@spartan-ng/ui-icon-helm';

@Component({
  standalone: true,
  selector: 'as-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  imports: [
    HlmButtonDirective,
    UserDropdownComponent,
    SocialShareComponent,
    GreetingComponent,
    HlmIconComponent,
  ],
  providers: [provideIcons({ lucideChevronLeft, lucideChevronRight })],
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
