import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClickStopPropagationDirective } from '@jc4f-nx/spotify-shared-click-stop-propagation';
import { PlaybackStore } from '@jc4f-nx/spotify-shared-data-access-store';
import { MediaCoverComponent } from '@jc4f-nx/spotify-shared-ui-media-cover';
import { PlayButtonComponent } from '@jc4f-nx/spotify-shared-ui-play-button';
import { SelectorUtil } from '@jc4f-nx/spotify-shared-utils';
import { LetDirective } from '@ngrx/component';
import { Observable, combineLatest, of } from 'rxjs';
@Component({
  standalone: true,
  selector: 'as-card',
  templateUrl: './card.component.html',
  imports: [
    RouterModule,
    LetDirective,
    CommonModule,
    ClickStopPropagationDirective,
    MediaCoverComponent,
    PlayButtonComponent,
  ],
})
export class CardComponent implements OnInit {
  @Input() imageUrl: string | undefined;
  @Input() title!: string;
  @Input() description!: string | null;
  @Input() routerUrl!: string;
  @Input() uri!: string;
  @Input() roundedImage? = false;
  @Output() togglePlay = new EventEmitter<boolean>();

  isMediaPlaying$!: Observable<boolean>;

  constructor(private playbackStore: PlaybackStore) {}

  ngOnInit() {
    this.isMediaPlaying$ = SelectorUtil.getMediaPlayingState(
      combineLatest([of(this.uri), this.playbackStore.playback$])
    );
  }
}
