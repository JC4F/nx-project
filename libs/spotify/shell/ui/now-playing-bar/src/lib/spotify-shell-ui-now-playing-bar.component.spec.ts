import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpotifyShellUiNowPlayingBarComponent } from './spotify-shell-ui-now-playing-bar.component';

describe('SpotifyShellUiNowPlayingBarComponent', () => {
  let component: SpotifyShellUiNowPlayingBarComponent;
  let fixture: ComponentFixture<SpotifyShellUiNowPlayingBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpotifyShellUiNowPlayingBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SpotifyShellUiNowPlayingBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
