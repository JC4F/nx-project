import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PlayerApiService } from '@jc4f-nx/spotify-shared-data-access-spotify-api';
import { DataSizeObserverDirective } from '@jc4f-nx/spotify-shared-data-size-observer';
import { CardComponent } from '@jc4f-nx/spotify-shared-ui-media';
import { NzButtonModule } from 'ng-zorro-antd/button';
import * as mockAlbums from './albums.mock.json';

@Component({
  selector: 'as-container-queries',
  standalone: true,
  imports: [
    CardComponent,
    CommonModule,
    DataSizeObserverDirective,
    NzButtonModule,
  ],
  styles: [
    `
      .featured-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      }
    `,
  ],
  template: `
    <div class="px-8 pt-4">
      <h1 class="text-xl text-foreground">Hello Melbourne 🇦🇺</h1>
      <div class="flex pb-6">
        <a
          nz-button
          class="text-xl text-primary btn-with-icon"
          target="_blank"
          href="https://trungk18.com/wdc23"
          >👉 View my slide</a
        >
      </div>
      <div class="grid gap-6">
        <section class="featured-grid gap-6">
          <ng-container
            *ngTemplateOutlet="cards; context: { albums: featureAlbumsTwo }"
          ></ng-container>
        </section>
        <section class="featured-grid gap-6">
          <ng-container
            *ngTemplateOutlet="cards; context: { albums: featureAlbumsThree }"
          ></ng-container>
        </section>
        <section class="grid grid-cols-card-autofill gap-6">
          <ng-container
            *ngTemplateOutlet="cards; context: { albums: albums }"
          ></ng-container>
        </section>
      </div>
      <h2 class="text-xl text-foreground my-8">Card Playground 🇦🇺</h2>
      <div class="grid place-items-center min-h-[600px]">
        <div class="min-w-[180px] resize-x overflow-auto">
          <ng-container
            *ngTemplateOutlet="cards; context: { albums: singleAlbum }"
          ></ng-container>
        </div>
      </div>
    </div>

    <ng-template #cards let-albums="albums">
      @for (item of albums; track item) {
      <as-card
        [title]="item.album.name"
        [uri]="item.album.uri"
        [description]="item.album.artists[0].name"
        [imageUrl]="item.album.images[0]?.url"
        [routerUrl]="item.album.id"
        (togglePlay)="togglePlay($event, item.album.uri)"
      >
      </as-card>
      }
    </ng-template>
  `,
})
export class ContainerQueriesComponent {
  response = mockAlbums as SpotifyApi.UsersSavedAlbumsResponse;
  singleAlbum = [this.response.items[1]];
  featureAlbumsTwo = this.response.items.slice(0, 2);
  featureAlbumsThree = this.response.items.slice(2, 5);
  albums = this.response.items.slice(6);
  playerApi = inject(PlayerApiService);

  togglePlay(isPlaying: boolean, contextUri: string) {
    this.playerApi
      .togglePlay(isPlaying, {
        context_uri: contextUri,
      })
      .subscribe();
  }
}
