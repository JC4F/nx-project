import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  getCategoryById,
  getCategoryPlaylistsById,
  getCategoryPlaylistsLoading,
  loadCategoryPlaylists,
} from '@jc4f-nx/spotify-browse-data-access';
import { PlaylistListComponent } from '@jc4f-nx/spotify-shared-ui-playlist-list';
import { RouterUtil } from '@jc4f-nx/spotify-shared-utils';
import { LetDirective } from '@ngrx/component';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, map, switchMap, tap } from 'rxjs/operators';

@Component({
  standalone: true,
  selector: 'as-category-detail',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  imports: [CommonModule, PlaylistListComponent, LetDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryComponent {
  categoryParams$: Observable<string> = this.route.params.pipe(
    map((params) => params[RouterUtil.Configuration.CategoryId]),
    filter((categoryId) => !!categoryId)
  );

  category$ = this.categoryParams$.pipe(
    switchMap((categoryId) =>
      this.store.pipe(select(getCategoryById(categoryId)))
    )
  );

  // TODO: find out why it is always false
  isLoadingPlaylists$ = this.store.pipe(select(getCategoryPlaylistsLoading));

  playlists$ = this.categoryParams$.pipe(
    tap((categoryId) => {
      this.store.dispatch(loadCategoryPlaylists({ categoryId }));
    }),
    switchMap((categoryId) =>
      this.store.pipe(select(getCategoryPlaylistsById(categoryId)))
    )
  );

  constructor(private route: ActivatedRoute, private store: Store) {}
}
