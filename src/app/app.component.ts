import { Component,OnInit,Inject } from '@angular/core';
import {AppConfig } from './shared/layout/helpers/appmodel';
import { RecaptchaErrorParameters } from "ng-recaptcha";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MCYeServices';
  isRTL1: boolean = false;
  msg = '';
  stylethee ='';
  constructor(private _appConfig: AppConfig) {      }
  
  ngOnInit(){
    this.isRTL1 = this._appConfig.isRTL;
  
  }
  
  printMsg(msg: string) {
		this.msg = msg;
    //cityMsg = 'Indian City Names';
	}

  public resolved(captchaResponse: string): void {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }

  public onError(errorDetails: RecaptchaErrorParameters): void {
    console.log(`reCAPTCHA error encountered; details:`, errorDetails);
  }
  /* user!: { firstName: string; lastName: string; };
  welcome!: string;
  usernameLabel!: string;
  passwordLabel!: string;
  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'ar']);
    translate.setDefaultLang('en');
    translate.use('ar');    
}
useLanguage(language: string): void {
  this.translate.use(language);
} */

/* ngOnInit() {
  // hardcoded example
  this.user = { firstName: 'Sammy', lastName: 'Shark' };

  // synchronous. Also interpolate the 'firstName' parameter with a value.
  this.welcome = this.translate.instant('welcomeMessage', { firstName: this.user.firstName });

  // asynchronous - gets translations then completes.
  this.translate.get(['login.username', 'login.password'])
    .subscribe(translations => {
      this.usernameLabel = translations['login.username'];
      this.passwordLabel = translations['login.password'];
    });
} */

}
