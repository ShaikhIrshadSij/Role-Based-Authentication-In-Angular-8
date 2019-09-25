import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './_guard/auth.guard';
import { Role } from './_models/role';
import { LoginComponent } from './login/login.component';


const appRoutes: Routes = [
  {
      path: '',
      component: HomeComponent,
      canActivate: [AuthGuard],
  },
  {
      path: 'admin',
      component: AdminComponent,
      canActivate: [AuthGuard],
      data: { roles: [Role.Admin] }
  },
  {
      path: 'login',
      component: LoginComponent
  },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
