import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { registerService} from '../services/register.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-phone',
  templateUrl: './confirm-phone.component.html',
  styleUrls: ['./confirm-phone.component.css']
})
export class ConfirmPhoneComponent implements OnInit {
  frmConfirmPhone!: FormGroup;
  registeredUser!:any;
  isBusy!:boolean;
  isProfileCompleted!:boolean;
  invalidCode!:boolean;

  constructor(private formBuilder: FormBuilder, private registerService: registerService, private router: Router) { }

  ngOnInit(): void {
    this.frmConfirmPhone = this.formBuilder.group({
      confirmationcode: [null, [Validators.required]]
  });
  }

  sendCode(user: any) {
    this.isBusy = true;
    this.registeredUser = {};
    this.registeredUser.userId = 'dbe43c25-50a0-4642-a7dc-281ae91ee6f3';
    this.registeredUser.phoneNumber = '+971569558501';
    this.registeredUser.code = this.frmConfirmPhone.controls['confirmationcode'].value;

    this.registerService.confirmPhone(this.registeredUser)
        .subscribe((res) => {  
            console.log('result--', res);
            if(res == "PhoneVerified" || "Phone Number is already verified"){
                if (this.isProfileCompleted){
                    this.router.navigate(['dashboard']); //$state.go('app.dashboard', null, { reload: true });
                }
                else{
                    this.router.navigate(['completeProfile']); //$state.go('page.completeProfile', null, { reload: true });
                }
            }
            else{
                this.invalidCode = true;
            }
        })
        .add();
  }

  resendCode() {
    this.isBusy = true;
    this.registeredUser = {};
    //this.resendParams.userId = 'dbe43c25-50a0-4642-a7dc-281ae91ee6f3';
    //this.resendParams.phoneNumber = '+971569558501';
    this.registerService.resendPhoneNumberCode(this.registeredUser)
        .subscribe(() => {  
          Swal.fire('Confirmation code has been sent to registered mobile')
        })
        .add();
  }

  proceed() {
    this.isBusy = true;
    this.isProfileCompleted = true;
     if (this.isProfileCompleted) {
        this.router.navigate(['login']); //$state.go('app.dashboard', null, { reload: true });
    }
    else {
        this.router.navigate(['completeProfile']); //$state.go('page.completeProfile', null, { reload: true });
    } 
  }

}
