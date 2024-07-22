import { SvgIcons } from '@ngneat/svg-icon';

export interface NavItem {
  label: string;
  path: string;
  icon?: SvgIcons;
  iconSelected?: SvgIcons;
  exact?: boolean;
}
