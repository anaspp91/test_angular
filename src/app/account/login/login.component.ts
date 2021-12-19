import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { registerService} from '../services/register.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform!: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private registerService: registerService,private router: Router) { }

  ngOnInit(): void {
    this.loginform = this.formBuilder.group({          
      "username": new FormControl('', Validators.required),
      "password": new FormControl('', Validators.required)
    });
  }
  onSubmit() {
    this.SignInForm();
  }
  private SignInForm() {
    this.registerService.loginService(this.loginform.value)
        .pipe(first())
        .subscribe((res) => { 
          this.SetUserloginParams(res);
        })
        .add();
  }
  private SetUserloginParams(UserParams:any){
    console.log('response Login--',UserParams);
    console.log('token--',UserParams.access_token);
    this.registerService.UserProfileSetterGetter(UserParams);
    if(UserParams.userProfileCompleted == "False"){
      this.router.navigateByUrl('/completeProfile');
    }
  }
}
