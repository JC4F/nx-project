import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MediaCoverComponent } from '@jc4f-nx/spotify-shared-ui-media-cover';

@Component({
  standalone: true,
  selector: 'as-category-cover',
  templateUrl: './category-cover.component.html',
  styleUrls: ['./category-cover.component.scss'],
  imports: [CommonModule, RouterModule, MediaCoverComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryCoverComponent {
  @Input() category!: SpotifyApi.CategoryObject;
}
