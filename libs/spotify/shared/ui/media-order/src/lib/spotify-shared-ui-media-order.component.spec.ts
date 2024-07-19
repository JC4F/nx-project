import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpotifySharedUiMediaOrderComponent } from './spotify-shared-ui-media-order.component';

describe('SpotifySharedUiMediaOrderComponent', () => {
  let component: SpotifySharedUiMediaOrderComponent;
  let fixture: ComponentFixture<SpotifySharedUiMediaOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpotifySharedUiMediaOrderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SpotifySharedUiMediaOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
