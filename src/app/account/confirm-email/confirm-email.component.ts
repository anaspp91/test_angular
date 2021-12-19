import { Component, OnInit } from '@angular/core';
import { registerService} from '../services/register.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
    selector: 'app-confirm-email',
    templateUrl: './confirm-email.component.html',
    styleUrls: ['./confirm-email.component.css']
  })

  export class ConfirmEmailComponent implements OnInit {
    inputParams!:any;

    constructor(private registerService: registerService, private route: ActivatedRoute, private router: Router) { }

    ngOnInit(): void {  
            this.route.queryParams.subscribe(params => {
                let userid = params['userId'];
                let code = params['code'];
        
                this.inputParams = {};
                this.inputParams.userId = userid;
                this.inputParams.code = (code == undefined ? null : code);
        
                this.registerService.confirmEmail(this.inputParams)
                    .subscribe((res) => {  
                    if(res == 'ConfirmEmail'){
                        Swal.fire('Your account has been confirmed successfully')
                        this.router.navigate(['login']);
                    }
                    else
                        Swal.fire('Failed')
                    })
                    .add();
            });
        }
  }


    