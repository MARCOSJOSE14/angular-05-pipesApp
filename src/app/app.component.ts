import { Component, LOCALE_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from "./shared/shared.module";

// Configuración de locale de la app
import localeEsCL from "@angular/common/locales/es-CL";
import localeFrCA from "@angular/common/locales/fr-CA";

import { registerLocaleData  } from "@angular/common";

registerLocaleData( localeEsCL );
registerLocaleData( localeFrCA );

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SharedModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [
    {
      provide: LOCALE_ID, useValue: 'es-CL'
    }
  ]
})
export class AppComponent {
  public title = 'JosE mARCos rAMOs';
}
