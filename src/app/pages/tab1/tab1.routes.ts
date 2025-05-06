import { Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

export const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'agregar/:listaId',
    loadComponent: () =>
      import('../agregar/agregar.page').then((m) => m.AgregarPage),
  },
];
