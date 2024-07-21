import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpotifyShellUiNavBarComponent } from './spotify-shell-ui-nav-bar.component';

describe('SpotifyShellUiNavBarComponent', () => {
  let component: SpotifyShellUiNavBarComponent;
  let fixture: ComponentFixture<SpotifyShellUiNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpotifyShellUiNavBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SpotifyShellUiNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
