import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.routes').then((m) => m.routes),
  },  {
    path: 'categorias',
    loadComponent: () => import('./pages/categorias/categorias.page').then( m => m.CategoriasPage)
  },

];
