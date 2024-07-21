import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'as-work-in-progress',
  templateUrl: './work-in-progress.component.html',
  styleUrls: ['./work-in-progress.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkInProgressComponent {
  @Input() featureName = '';
}
