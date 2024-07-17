import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OthersComponent } from '@jc4f-nx/others';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';

@Component({
  standalone: true,
  imports: [RouterModule, HlmButtonDirective, OthersComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-spotify';
}
