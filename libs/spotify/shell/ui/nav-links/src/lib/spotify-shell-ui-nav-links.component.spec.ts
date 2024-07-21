import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpotifyShellUiNavLinksComponent } from './spotify-shell-ui-nav-links.component';

describe('SpotifyShellUiNavLinksComponent', () => {
  let component: SpotifyShellUiNavLinksComponent;
  let fixture: ComponentFixture<SpotifyShellUiNavLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpotifyShellUiNavLinksComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SpotifyShellUiNavLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
