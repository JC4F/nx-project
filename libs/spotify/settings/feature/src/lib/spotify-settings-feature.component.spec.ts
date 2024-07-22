import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpotifySettingsFeatureComponent } from './spotify-settings-feature.component';

describe('SpotifySettingsFeatureComponent', () => {
  let component: SpotifySettingsFeatureComponent;
  let fixture: ComponentFixture<SpotifySettingsFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpotifySettingsFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SpotifySettingsFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
