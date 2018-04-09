import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

setTimeout(() => 
  {platformBrowserDynamic().bootstrapModule(AppModule);
    document.getElementById("loading").style.display = "none";
  }
, 2000);

