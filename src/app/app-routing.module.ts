// ng
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    pathMatch: 'full',
    loadChildren: '@routes/home/home.module#HomeModule'
  },
  {
    path: 'not-found',
    pathMatch: 'full',
    loadChildren: '@routes/not-found/not-found.module#NotFoundModule'
  },
  {
    path: 'authentication',
    pathMatch: 'full',
    loadChildren:
      '@routes/authentication/authentication.module#AuthenticationModule'
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
