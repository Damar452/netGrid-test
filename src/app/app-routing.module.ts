import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedGuard } from './core/services/guards/logged.guard';
import { UnloggedGuard } from './core/services/guards/unlogged.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginModule),
    canActivate: [UnloggedGuard]
  },
  {
    path: 'list',
    loadChildren: () => import('./dashboard/list/list.module').then( m => m.ListModule),
    canActivate: [LoggedGuard]
  },
  {
    path: 'add',
    loadChildren: () => import('./dashboard/add/add.module').then( m => m.AddModule),
    canActivate: [LoggedGuard]
  },
  {
    path: 'edit/:id',
    loadChildren: () => import('./dashboard/add/add.module').then( m => m.AddModule),
    canActivate: [LoggedGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
