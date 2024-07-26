import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  getCategories,
  getCategoriesLoading,
  loadCategories,
} from '@jc4f-nx/spotify-browse-data-access';
import { CategoryCoverComponent } from '@jc4f-nx/spotify-browse-ui-category-cover';
import { SpinnerComponent } from '@jc4f-nx/spotify-shared-ui-spinner';
import { Store, select } from '@ngrx/store';

@Component({
  standalone: true,
  selector: 'as-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  imports: [CommonModule, CategoryCoverComponent, SpinnerComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesComponent {
  isLoading$ = this.store.pipe(select(getCategoriesLoading));
  categories$ = this.store.pipe(select(getCategories));

  constructor(private store: Store) {
    this.store.dispatch(loadCategories({}));
  }
}
