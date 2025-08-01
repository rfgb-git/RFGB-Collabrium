import { Routes } from '@angular/router';

export const routes: Routes = [{
  path: '', loadComponent: () => import('./po.component').then(m => m.PoComponent), data: {
    title: 'PO'
  }
}];
