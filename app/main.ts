import { bootstrap }    from '@angular/platform-browser-dynamic';
import { disableDeprecatedForms, provideForms} from '@angular/forms';
import { HTTP_PROVIDERS, XHRBackend } from '@angular/http';

import { AppComponent } from './app.component';

bootstrap(AppComponent,
[
   disableDeprecatedForms(),
   provideForms(),
HTTP_PROVIDERS
])
 .catch((err: any) => console.error(err));