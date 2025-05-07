import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { initializeApp } from 'firebase/app';
import { environment } from './environments/environment';
initializeApp(environment.firebaseConfig);

import { addIcons } from "ionicons";
import { close, bookmarkOutline, clipboardOutline, addOutline, createOutline, folderOutline } from "ionicons/icons";

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

// Agregar los íconos a la lista global
addIcons({close, bookmarkOutline, clipboardOutline, addOutline, createOutline, folderOutline})

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
  ],
});

