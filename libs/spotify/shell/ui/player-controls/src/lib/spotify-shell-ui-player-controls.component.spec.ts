import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpotifyShellUiPlayerControlsComponent } from './spotify-shell-ui-player-controls.component';

describe('SpotifyShellUiPlayerControlsComponent', () => {
  let component: SpotifyShellUiPlayerControlsComponent;
  let fixture: ComponentFixture<SpotifyShellUiPlayerControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpotifyShellUiPlayerControlsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SpotifyShellUiPlayerControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
