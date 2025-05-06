import { Routes } from "@angular/router";
import { Tab2Page } from "./tab2.page";

export const routes:Routes = [
    {
        path: '',
        component: Tab2Page
    },
    {
        path: 'agregar/:listaId',
        loadComponent: () => import('../agregar/agregar.page').then((m)=>m.AgregarPage)
    }
]