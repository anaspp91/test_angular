

  import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })

export class AppConfig {
    apiEndpoint: string;
    isRTL:boolean;
    constructor() {
        this.apiEndpoint = 'api/validationerrors';
        this.isRTL = false;
    }
}

    /* export class appModels {       
    constructor(
      public isRTL: boolean) {        
      }
  } */