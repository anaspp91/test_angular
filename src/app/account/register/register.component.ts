import { Component, OnInit } from '@angular/core';
import {appService } from '../../shared/layout/helpers/app.services';
import { HttpClient,HttpResponse } from '@angular/common/http';
import { UserType } from '../../shared/layout/helpers/usertypes.model';
import { FormGroup, FormControl, Validators, FormBuilder,AbstractControl, FormArray } 
    from '@angular/forms';
import { registerService} from '../services/register.service';
import { Gender } from '../models/gender.model';
import {Country  } from '../models/country.model';
import {Community  } from '../models/community.model';
import { first } from 'rxjs/operators';
import {EstablishmentPartners} from '../models/establishmentPartners.model'
import { Address} from '../models/address.model';
import { userProfile} from '../models/userprofile.model';
import { ConfirmedValidator } from '../register/confirmpassword.validation'
import {Authority } from '../models/authority.model';
import {Emirate } from '../models/emirates.model';

import Validation from '../services/validation';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formRegister: FormGroup = new FormGroup({
    fullname: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    acceptTerms: new FormControl(false),
  });

  submitted = false;

  //formRegister!: FormGroup;
  frmUserEstablishment!: FormGroup;
  frmaryUserEstablishment!: FormArray;
  userProfileModel!: userProfile;
  userProfileDto!:any;
  userEstablishmentDto!:any;
  IsEmiratesIdExist!:false;
  IsIndividual!:true;

  constructor( private formBuilder: FormBuilder, private registerService: registerService,) {

      this.frmUserEstablishment =this.formBuilder.group({
        establishment: this.formBuilder.group({ 
          "establishmentPartners": new FormControl(''), 
          "address": new FormControl(''),
          "hasValidLicense":false,
          "nameEn": new FormControl(''),
          "nameAr": new FormControl(''),
          "LicenseNumber": new FormControl(''),
          "authority": new FormControl('')
        })
      });
  }
  userTypes: UserType[] = [];
  modelUT: any = { UserType: {} };
  genders: Gender[] =[];
  modelG: any = { Gender: {} };
  countries: Country[]= [];
  modelC: any = { Country: {} };
  AddressM : any = { Address: {} };
  EstabPartnes: any = { EstablishmentPartners: {} };
  register_model = {} ;
  authority: Authority[] =[];
  emirate: Emirate[] =[];
  modelAuthority: any = { Authority: {} };
  getUserProfile!:any;

  

modelCom: any = { Community: {"id":2,"regionId":2,"code":"AD"} };
 UserEstablishment: any = [{
  establishment:{
    establishmentPartners:[],
    address:{}
  }
 }]
  ngOnInit(): void {  
    this.getUserTypes();
    this.getGenders();
    this.getCountries();  
    this.getEmirates();
    this.getAuthority();

    this.formRegister = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(40)
        ]
      ],
      confirmPassword: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(40)
        ]
      ],
      acceptTerms: [false, Validators.requiredTrue],

      //emiratesId: ['', Validators.required],
     // userType: ['', Validators.required],

      Validators:ConfirmedValidator('password','confirmPassword'),
      "response": new FormControl(''),
      "country": new FormControl(''),

      userProfile: this.formBuilder.group({
        "userType": new FormControl('', Validators.required),               
        "address": new FormControl('', Validators.required),
        "isCompleted": new FormControl(false),
        "userTypeId": new FormControl(1),

      

        person:this.formBuilder.group({ 
        emiratesId: ['', Validators.required],
        "name": new FormControl('anaas'),
        "title": new FormControl('tech'),
        "genderId": new FormControl('1'),
        "dateOfBirth": new FormControl('01-01-1990'),
        "country": new FormControl('', Validators.required),
      }), 
      "userEstablishments": new FormControl(this.UserEstablishment),  
    })
    },
    {
      validators: [Validation.match('password', 'confirmPassword')]
    });  
  }
   getUserTypes() {
    this.registerService.getUserType().subscribe(
      (res: HttpResponse<any>) => {
        this.userTypes = res.body;        
      },
      (err: any) => {
        console.log(err);
      }
    );
  } 
 
  getGenders() {
    this.registerService.getGender().subscribe(
      (res: HttpResponse<any>) => {
        this.genders = res.body;             
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
  getCountries() {
    this.registerService.getCountry().subscribe(
      (res: HttpResponse<any>) => {
        this.countries = res.body;             
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
  getAuthority() {
    this.registerService.getAuthority().subscribe(
      (res: HttpResponse<any>) => {
        this.authority = res.body;                   
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
  getEmirates() {
    this.registerService.getEmirates().subscribe(
      (res: HttpResponse<any>) => {
        this.emirate = res.body;                    
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

onSubmit() {
  this.submitted = true;

  if (this.formRegister.invalid) {
    return;
  }

}
get f(): { [key: string]: AbstractControl } {
  return this.formRegister.controls;
}

saveRegsiter(user: any) {
  
  this.userProfileModel = this.formRegister.value;
  this.userProfileDto = this.formRegister.value;

  this.modelUT= this.userTypes.filter(x => x.id == this.userProfileDto.userProfile.userType).pop();
  console.log('this.modelUT',this.modelUT);
  this.formRegister.get(['userProfile','userType'])!.setValue(this.modelUT);


  this.modelC= this.countries.filter(x => x.id == 212).pop();
  this.formRegister.get(['userProfile','person','country'])!.setValue(this.modelC);

  this.formRegister.get(['country'])!.setValue(this.modelC);

  this.formRegister.get(['userProfile','address'])!.setValue(this.modelCom);
  
  this.formRegister.get(['userProfile','person','emiratesId'])!.setValue(this.userProfileDto.userProfile.person.emiratesId);

  this.formRegister.get(['response'])!.setValue(true);

  this.registerService.create(this.formRegister.value)
      .pipe(first())
      .subscribe((res) => { 
        this.registerService.RegisterSetterGetter(res); 
      })
      .add();
}
getUserProfileData() {
  this.registerService.getUserProfileData1().subscribe(
    comments => {
      this.getUserProfile =comments;
      console.log('getUserProfile',this.getUserProfile);            
  },
  err => {
      // Log errors if any
      console.log(err);
  });
}
saveEstablishment(establishment: any){
  
  this.modelAuthority= this.authority.filter(x => x.id == 10).pop();  
   this.frmUserEstablishment.get(['establishment','address'])!.setValue(this.modelCom);
   this.frmUserEstablishment.get(['establishment','authority'])!.setValue(this.modelAuthority);
   this.userEstablishmentDto = this.frmUserEstablishment.value;      
  this.registerService.getUserProfileData1().subscribe(
    comments => {
      if(comments)
      {
        this.getUserProfile =comments;
        console.log('res',this.getUserProfile);        
      }              
        this.getUserProfile.userEstablishments.push(this.userEstablishmentDto);
      
      console.log('this.getUserProfile',this.getUserProfile);
      //console.log('userEstablishmentDto',this.userEstablishmentDto);
      console.log('getUserProfile',this.getUserProfile); 
      this.registerService.updateUserProfile(this.getUserProfile)
      .pipe(first())
      .subscribe((res) => { 
        console.log('response save establishment--',res);     
      })
      .add();
  },
  err => {
      // Log errors if any
      console.log(err);
  });
  
}

onChangeEvent(event: any){

    this.registerService.isEmiratesIdExistIndividualUserType(event.target.value).subscribe(
      (res: any) => {        
        console.log('emiratesId', res);   
        this.IsEmiratesIdExist = res;   
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

}
