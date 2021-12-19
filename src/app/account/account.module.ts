import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule,FormsModule} from "@angular/forms";
import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetComponent } from './reset/reset.component';
import { RecoverComponent } from './recover/recover.component';
import { CompleteProfileComponent } from './complete-profile/complete-profile.component';
import { ConfirmPhoneComponent } from './confirm-phone/confirm-phone.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ResetComponent,
    RecoverComponent,
    CompleteProfileComponent,
    ConfirmPhoneComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    ReactiveFormsModule,
    FormsModule
    
  ]
})
export class AccountModule { }
