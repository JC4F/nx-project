import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpotifyShellUiUserDropdownComponent } from './spotify-shell-ui-user-dropdown.component';

describe('SpotifyShellUiUserDropdownComponent', () => {
  let component: SpotifyShellUiUserDropdownComponent;
  let fixture: ComponentFixture<SpotifyShellUiUserDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpotifyShellUiUserDropdownComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SpotifyShellUiUserDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
