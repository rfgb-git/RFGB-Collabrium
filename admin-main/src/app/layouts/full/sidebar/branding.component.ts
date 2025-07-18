import { Component } from '@angular/core';
import { CoreService } from 'src/app/services/core.service';

@Component({
  selector: 'app-branding',
  imports: [],
  template: `
    <!-- <a href="/" class="logodark">
      <img
        src="https://rfgbpl.com/wp-content/uploads/2025/03/logo3.png"
        class="align-middle m-2"
        alt="logo"
      />
    </a> -->
  `,
})
export class BrandingComponent {
  options = this.settings.getOptions();
  constructor(private settings: CoreService) {}
}
