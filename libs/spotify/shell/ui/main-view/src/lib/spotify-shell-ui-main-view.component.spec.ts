import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpotifyShellUiMainViewComponent } from './spotify-shell-ui-main-view.component';

describe('SpotifyShellUiMainViewComponent', () => {
  let component: SpotifyShellUiMainViewComponent;
  let fixture: ComponentFixture<SpotifyShellUiMainViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpotifyShellUiMainViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SpotifyShellUiMainViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
