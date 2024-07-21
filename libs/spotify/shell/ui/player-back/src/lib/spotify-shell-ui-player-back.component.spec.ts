import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpotifyShellUiPlayerBackComponent } from './spotify-shell-ui-player-back.component';

describe('SpotifyShellUiPlayerBackComponent', () => {
  let component: SpotifyShellUiPlayerBackComponent;
  let fixture: ComponentFixture<SpotifyShellUiPlayerBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpotifyShellUiPlayerBackComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SpotifyShellUiPlayerBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
