import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {AppConfig } from '../helpers/appmodel';

/* import {appModel} from '../helpers/appmodels';
import {appModels} from '../helpers/appmodel'; */

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 /*  user!: { firstName: string; lastName: string; };
  welcome!: string;
  usernameLabel!: string;
  passwordLabel!: string; */
   isRTL: boolean = false;

  constructor(private translate: TranslateService,private _appConfig: AppConfig) {
    translate.addLangs(['en', 'ar']);
    translate.setDefaultLang('ar');
    translate.use('ar');    
}
useLanguage(language: string): void {
  this.translate.use(language);  
  //let isRTL: boolean = false;
  if(language == "ar"){
    this.sendMsgEvent.emit("ARB");
    this.isRTL = true;
    this._appConfig.isRTL = true;
  }
  else {
    this.isRTL = false;
    this.sendMsgEvent.emit("ENG");
    this._appConfig.isRTL = false;
  }
 /*  this.appModels.isRTL == isRTL; */
}
  ngOnInit(): void {
  }
  @Output() 
	sendMsgEvent = new EventEmitter<string>();
}
