import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UIStore } from '@jc4f-nx/spotify-shared-data-access-store';
import { NavLinksComponent } from '@jc4f-nx/spotify-shell-ui-nav-links';
import { SvgIconComponent } from '@ngneat/svg-icon';

@Component({
  standalone: true,
  selector: 'as-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  imports: [CommonModule, RouterModule, SvgIconComponent, NavLinksComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBarComponent {
  readonly navItems$ = this.uiStore.navItems$;

  constructor(private readonly uiStore: UIStore) {}
}
