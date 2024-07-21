import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpotifyShellUiSocialShareComponent } from './spotify-shell-ui-social-share.component';

describe('SpotifyShellUiSocialShareComponent', () => {
  let component: SpotifyShellUiSocialShareComponent;
  let fixture: ComponentFixture<SpotifyShellUiSocialShareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpotifyShellUiSocialShareComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SpotifyShellUiSocialShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
