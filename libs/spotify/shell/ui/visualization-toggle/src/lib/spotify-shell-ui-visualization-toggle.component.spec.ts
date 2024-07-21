import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpotifyShellUiVisualizationToggleComponent } from './spotify-shell-ui-visualization-toggle.component';

describe('SpotifyShellUiVisualizationToggleComponent', () => {
  let component: SpotifyShellUiVisualizationToggleComponent;
  let fixture: ComponentFixture<SpotifyShellUiVisualizationToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpotifyShellUiVisualizationToggleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      SpotifyShellUiVisualizationToggleComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
