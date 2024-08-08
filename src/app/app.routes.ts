import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'app',
    loadComponent: () => import('./home/home.page').then(m => m.HomePage),
  },
  {
    path: 'init-chrono',
    loadComponent: () => import('./init-chrono/init-chrono.page').then(m => m.InitChronoPage)
  },
  {
    path: 'chrono',
    loadComponent: () => import('./chrono/chrono.page').then(m => m.ChronoPage),
  },
  {
    path: 'process/new',
    loadComponent: () => import('./process/new-process/new-process.page').then(m => m.NewProcessPage),
    // pathMatch: 'full',
  },
  {
    path: 'process/list',
    loadComponent: () => import('./process/process-list/process-list.page').then(m => m.ProcessListPage)
  },
  {
    path: 'process',
    loadComponent: () => import('./process/process.page').then(m => m.ProcessPage),
  },
  {
    path: '',
    redirectTo: 'app',
    pathMatch: 'full',
  },


];
