import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { registerService} from '../services/register.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {
  form!: FormGroup;
  passwordObj!:any;

  constructor(private formBuilder: FormBuilder, private registerService: registerService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {  

    this.form = this.formBuilder.group({
      "password": new FormControl('', Validators.required)
      })
    };  

    onSubmit() {
      if (this.form.invalid) {
        return;
      }
    }

    resetPassword(user: any) {
    this.route.queryParams.subscribe(params => {
      let userid = params['userId'];
      let code = params['code'];

      this.passwordObj = {};
      this.passwordObj.userId = userid;
      this.passwordObj.code = (code == undefined ? null : code);
      this.passwordObj.password = this.form.controls['password'].value;

      this.registerService.resetPasswordWithToken(this.passwordObj)
          .subscribe((res) => {  
            if(res == 'PasswordReset'){
              Swal.fire('Password has been updated succesfully.')
              this.router.navigate(['login']);
            }
            else
              Swal.fire('Failed')
          })
          .add();
    });
    }
}
