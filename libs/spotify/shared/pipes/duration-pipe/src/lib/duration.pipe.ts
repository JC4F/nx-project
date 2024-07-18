import { Pipe, PipeTransform } from '@angular/core';
import { TimeUtil } from '@jc4f-nx/spotify-shared-utils';
@Pipe({
  standalone: true,
  name: 'duration',
})
export class DurationPipe implements PipeTransform {
  transform(durationInMs: number | null): string {
    if (!durationInMs) {
      return '';
    }
    return TimeUtil.formatDuration(durationInMs);
  }
}
