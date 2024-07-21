import { Component } from '@angular/core';
import { AuthStore } from '@jc4f-nx/spotify-auth-data-access';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { BrnDialogRef } from '@spartan-ng/ui-dialog-brain';

@Component({
  standalone: true,
  selector: 'as-anauthorized-modal',
  templateUrl: './unauthorized-modal.component.html',
  imports: [HlmButtonDirective],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnauthorizedModalComponent {
  constructor(private modal: BrnDialogRef, private store: AuthStore) {}

  authenticate() {
    this.store.redirectToAuthorize();
    this.modal.close();
  }
}
