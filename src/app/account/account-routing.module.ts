import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RecoverComponent } from './recover/recover.component';
import { ResetComponent } from './reset/reset.component';
import {CompleteProfileComponent } from '../account/complete-profile/complete-profile.component';
import {ConfirmPhoneComponent } from '../account/confirm-phone/confirm-phone.component';
import { AuthGuardGuard } from 'src/auth-guard.guard';

const routes: Routes = [
  {
  path: 'login',
  component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
    },
    {
      path: 'completeProfile',
      component: CompleteProfileComponent,
      canActivate:[AuthGuardGuard]
    },
    {
      path: 'recover',
      component: RecoverComponent
    },
    {
      path: 'reset',
      component: ResetComponent
    },
    {
      path: 'confirmPhone',
      component: ConfirmPhoneComponent
    }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
