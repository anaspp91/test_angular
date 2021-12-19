import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { registerService} from '../services/register.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.component.html',
  styleUrls: ['./recover.component.css']
})

export class RecoverComponent implements OnInit {
    form!: FormGroup;
  
    constructor( private formBuilder: FormBuilder, private registerService: registerService) { }

    ngOnInit(): void {  
 
      this.form = this.formBuilder.group({
        "email": new FormControl('', Validators.required)
        })
      };  

      onSubmit() {
        if (this.form.invalid) {
          return;
        }
      }

      recoverPassword(user: any) {

        this.registerService.resetPassword(this.form.value)
            .subscribe(() => {  
              Swal.fire('We have sent a password reset request if the email is verified.')
            })
            .add();
      }
}
  