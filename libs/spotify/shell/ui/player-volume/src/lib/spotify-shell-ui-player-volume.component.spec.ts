import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpotifyShellUiPlayerVolumeComponent } from './spotify-shell-ui-player-volume.component';

describe('SpotifyShellUiPlayerVolumeComponent', () => {
  let component: SpotifyShellUiPlayerVolumeComponent;
  let fixture: ComponentFixture<SpotifyShellUiPlayerVolumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpotifyShellUiPlayerVolumeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SpotifyShellUiPlayerVolumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
