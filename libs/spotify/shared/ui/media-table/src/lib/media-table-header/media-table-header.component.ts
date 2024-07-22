import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'as-media-table-header',
  templateUrl: './media-table-header.component.html',
  styleUrls: ['./media-table-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MediaTableHeaderComponent {}
