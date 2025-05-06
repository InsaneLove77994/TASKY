import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { addIcons } from "ionicons";
import { close, bookmarkOutline, clipboardOutline, addOutline, createOutline } from "ionicons/icons";

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

addIcons({close, bookmarkOutline, clipboardOutline, addOutline, createOutline})

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
  ],
});
