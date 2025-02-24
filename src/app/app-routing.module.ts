import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Component/login/login.component';
import { RegisterComponent } from './Component/register/register.component';
import { HomepageComponent } from './Component/homepage/homepage.component';
import { authGuard } from './Gaurds/auth.guard';
import { authRedirectGaurd } from './Gaurds/auth-redirect.gaurd';
import { UsersComponent } from './Component/users/users.component';
import { ClientComponent } from './Component/client/client.component';

const routes: Routes = [
  {path:'login',component:LoginComponent,canActivate:[authRedirectGaurd]},
  {path:'register',component:RegisterComponent},
  {path:'homepage',component:HomepageComponent,canActivate:[authGuard]},
  {path:'users',component:UsersComponent,canActivate:[authGuard]},
  {path:'client',component:ClientComponent,canActivate:[authGuard]},
  {path:'',redirectTo:'login',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
