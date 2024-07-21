import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpotifyShellUiLayoutComponent } from './spotify-shell-ui-layout.component';

describe('SpotifyShellUiLayoutComponent', () => {
  let component: SpotifyShellUiLayoutComponent;
  let fixture: ComponentFixture<SpotifyShellUiLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpotifyShellUiLayoutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SpotifyShellUiLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
