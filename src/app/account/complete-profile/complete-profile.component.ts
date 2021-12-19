import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient,HttpResponse } from '@angular/common/http';
import { registerService} from '../services/register.service';
import { Gender } from '../models/gender.model';
import {Country  } from '../models/country.model';
import { UserType } from '../../shared/layout/helpers/usertypes.model';


@Component({
  selector: 'app-complete-profile',
  templateUrl: './complete-profile.component.html',
  styleUrls: ['./complete-profile.component.css']
})
export class CompleteProfileComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private httpClient: HttpClient, private router: Router,private registerService: registerService) { }
  userProfileForm!: FormGroup;
  userProfile: any ={  person : {}  };
  selectedFile!: File;
  imgFront!:any;
  UserEstablishment: any = [{

    establishment:{
      establishmentPartners:[],
      address:{}
    }
   }]
   userTypes: UserType[] = [];
   userTypes1: UserType[] = [];
   genders: Gender[] =[];  ;
  countries: Country[]= [];
  selectedCar!: number;

    cars = [
        { id: 1, name: 'Volvo' },
        { id: 2, name: 'Saab' },
        { id: 3, name: 'Opel' },
        { id: 4, name: 'Audi' },
    ];

  ngOnInit(): void {

    this.getUserTypes();
    this.getGenders();
    this.getCountries();

    this.userProfileForm = this.formBuilder.group({ 
      userProfile: this.formBuilder.group({
        "userType": new FormControl('', Validators.required),               
        "address": new FormControl('', Validators.required),
        "isCompleted": new FormControl(false),
        "userTypeId": new FormControl(1),
        person:this.formBuilder.group({ 
        "emiratesId": new FormControl(''),
        "name": new FormControl('', Validators.required),
        "title": new FormControl('', Validators.required),
        "gender": new FormControl('', Validators.required),
        "genderId": new FormControl('1'),
        "dateOfBirth": new FormControl('', Validators.required),
        "country": new FormControl('', Validators.required),
      }), 
      "userEstablishments": new FormControl(this.UserEstablishment),
      // userEstablishments:this.formBuilder.array([{
      //   // establishment:this.formBuilder.group({ 
      //   //   "establishmentPartners": new FormControl(''), 
      //   //   "address": new FormControl('')
      //   // })
      // }])     
    })        
  })
  this.getUserProfileData();
  
  }
  getUserProfileData(){
    this.registerService.getUserProfileData1().subscribe(
      comments => {
        console.log('comments',comments);
        const usertype = comments.userType;
        this.userTypes1 = comments.userType;
        console.log('usertype',usertype);
        //this.userProfileForm.setValue({userType:usertype});
        this.userProfileForm.get(['userProfile','userType'])!.setValue(this.userTypes1);
        this.userProfileForm.get(['userProfile','person','emiratesId'])!.setValue(comments.person.emiratesId);
        this.userProfileForm.get(['userProfile','person','name'])!.setValue(comments.person.name);
        this.userProfileForm.get(['userProfile','person','title'])!.setValue(comments.person.title);
        this.userProfileForm.get(['userProfile','person','dateOfBirth'])!.setValue(comments.person.dateOfBirth);
        console.log('userProfile',usertype);
        // Emit list event
       // EmitterService.get(this.listId).emit(comments);
    },
    err => {
        // Log errors if any
        console.log(err);
    });
  }
  onSubmit() {}

  getUserTypes() {
    this.registerService.getUserType().subscribe(
      (res: HttpResponse<any>) => {
        this.userTypes = res.body;     
        console.log('usertypes',this.userTypes);
        console.log(res.headers.get('Content-Type'));
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
        console.log('getGenders',this.genders);
        console.log(res.headers.get('Content-Type'));
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
        console.log('countries',this.countries);
        console.log(res.headers.get('Content-Type'));
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
  onFileSelected(event:any) {
    this.selectedFile = <File>event.target.files[0];
    this.onUpload();
  }
  private onUpload() {
    const fd = new FormData();
    fd.append('imageFile', this.selectedFile, this.selectedFile.name);
    this.httpClient.post('https://localhost:1113/api/Upload/UploadFile?uploadFile=ProfilePersonalPhotoPath', fd)
      .subscribe(res =>  this.imgFront = res);
  }
}
