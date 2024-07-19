import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpotifySharedUiMediaCoverComponent } from './spotify-shared-ui-media-cover.component';

describe('SpotifySharedUiMediaCoverComponent', () => {
  let component: SpotifySharedUiMediaCoverComponent;
  let fixture: ComponentFixture<SpotifySharedUiMediaCoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpotifySharedUiMediaCoverComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SpotifySharedUiMediaCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
