import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpotifyAuthUtilComponent } from './spotify-auth-util.component';

describe('SpotifyAuthUtilComponent', () => {
  let component: SpotifyAuthUtilComponent;
  let fixture: ComponentFixture<SpotifyAuthUtilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpotifyAuthUtilComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SpotifyAuthUtilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
