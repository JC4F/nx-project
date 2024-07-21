import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpotifyShellUiTopBarComponent } from './spotify-shell-ui-top-bar.component';

describe('SpotifyShellUiTopBarComponent', () => {
  let component: SpotifyShellUiTopBarComponent;
  let fixture: ComponentFixture<SpotifyShellUiTopBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpotifyShellUiTopBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SpotifyShellUiTopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
