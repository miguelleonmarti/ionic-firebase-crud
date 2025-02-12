import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// guard
import { AuthGuard } from './services/user/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule), canActivate: [AuthGuard]},
  { path: 'event-create', loadChildren: './pages/event-create/event-create.module#EventCreatePageModule', canActivate: [AuthGuard] },
  { path: 'event-detail/:id', loadChildren: './pages/event-detail/event-detail.module#EventDetailPageModule', canActivate: [AuthGuard] },
  { path: 'event-list', loadChildren: './pages/event-list/event-list.module#EventListPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule' },
  { path: 'reset-password', loadChildren: './pages/reset-password/reset-password.module#ResetPasswordPageModule' },
  { path: 'signup', loadChildren: './pages/signup/signup.module#SignupPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
