import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',

    loadChildren: () =>
      import('./components/home/home.module').then((m) => m.HomePageModule),


  },
  {
    path: 'annonces',
    loadChildren: () =>
      import('./components/annonces/annonces.module').then((m) => m.AnnoncesModule),

  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./components/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./components/signup/signup.module').then((m) => m.SignupPageModule),
  },
  {
    path: 'user-profile',
    loadChildren: () => import('./components/profile/profile.module').then(m => m.UserProfilePageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
