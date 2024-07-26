import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthStore } from '@jc4f-nx/spotify-auth-data-access';
import { SvgIconComponent } from '@ngneat/svg-icon';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { BrnMenuTriggerDirective } from '@spartan-ng/ui-menu-brain';
import {
  HlmMenuComponent,
  HlmMenuGroupComponent,
  HlmMenuItemDirective,
  HlmMenuItemIconDirective,
  HlmMenuItemSubIndicatorComponent,
  HlmMenuLabelComponent,
  HlmMenuSeparatorComponent,
  HlmMenuShortcutComponent,
  HlmSubMenuComponent,
} from '@spartan-ng/ui-menu-helm';

@Component({
  standalone: true,
  selector: 'as-user-dropdown',
  templateUrl: './user-dropdown.component.html',
  styleUrls: ['./user-dropdown.component.scss'],
  imports: [
    CommonModule,
    HlmButtonDirective,
    RouterModule,
    SvgIconComponent,
    BrnMenuTriggerDirective,

    HlmMenuComponent,
    HlmSubMenuComponent,
    HlmMenuItemDirective,
    HlmMenuItemSubIndicatorComponent,
    HlmMenuLabelComponent,
    HlmMenuShortcutComponent,
    HlmMenuSeparatorComponent,
    HlmMenuItemIconDirective,
    HlmMenuGroupComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDropdownComponent {
  userName$ = this.store.userName$;
  userAvatar$ = this.store.userAvatar$;
  userProduct$ = this.store.userProduct$;

  constructor(private store: AuthStore) {}
}
