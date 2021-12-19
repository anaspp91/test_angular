import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse,HttpHeaders, HttpParams,HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { userProfile } from '../models/userprofile.model';
import { setProfile } from '../models/setProfile.model';
import { setRegister } from '../models/setRegister.model';
import { from } from 'rxjs';

@Injectable()
export class registerService {
  
  private REST_API_SERVER = "http://mcystgeswebapi01.mcy.local/api/Account/RegisterSSO";
  private REST_API_UserType = "http://mcystgeswebapi01.mcy.local/api/UserType";
  private REST_API_Gender = "http://mcystgeswebapi01.mcy.local/api/Gender";
  private REST_API_Country = "http://mcystgeswebapi01.mcy.local/api/Country";
  private REST_API_TOKEN  = "http://mcystgeswebapi01.mcy.local/TOKEN";
  private REST_API_TOKEN1  = "http://localhost:1113/TOKEN";
  private REST_API_Emirate = "http://mcystgeswebapi01.mcy.local/api/Emirate";
  private REST_API_Authority = "http://mcystgeswebapi01.mcy.local/api/Authority";
  private REST_API_USERPROFILE  = "http://localhost:1113/api/UserProfile";
  private REST_API_EmiratesIdExist  = "http://mcystgeswebapi01.mcy.local/api/Account/IsPersonExist";

  private REST_API_UPDATE_USERPROFILE  = "http://localhost:1113/api/UserProfile/UpdateUserProfile";

  private API_ResetPassword  = "http://mcystgeswebapi01.mcy.local/api/Account/ResetPassword";
  private API_ResetPasswordWithToken  = "http://localhost:1113/api/Account/ResetPasswordWithTokenSSO";
  private API_ConfirmEmail  = "http://localhost:1113/api/Account/ConfirmEmail";
  private VerifyPhoneNumber  = "http://localhost:1113/api/Account/VerifyPhoneNumber";
  private ResendPhoneNumberCode  ="http://localhost:1113/api/Account/ResendPhoneNumberCode";

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded",
      "Access-Control-Allow-Origin": "*",      
    })
  };
 
  constructor(private httpClient: HttpClient, private http: HttpClientModule ) { }

 /*  getFullResponseForWriter(): Observable<HttpResponse<any>> {
    return this.httpClient.get(this.REST_API_SERVER, {
      observe: 'response'
    });
}  */
create(params: any) {
    console.log('params--',params); 
    return this.httpClient.post(this.REST_API_SERVER, params);
}
getUserType(): Observable<HttpResponse<any>> {
    return this.httpClient.get(this.REST_API_UserType, {
      observe: 'response'
    });
}

getGender(): Observable<HttpResponse<any>> {
  return this.httpClient.get(this.REST_API_Gender, {
    observe: 'response'
  });
}

getCountry(): Observable<HttpResponse<any>> {
  return this.httpClient.get(this.REST_API_Country, {
    observe: 'response'
  });
}

loginService(params: any){
  const body = new HttpParams()
  .set('username',params.username)
  .set('password',params.password)
  .set('grant_type', 'password');
  return this.httpClient.post(this.REST_API_TOKEN1, body,this.httpOptions);
}
UserProfileSetterGetter(userParams:any){

const setProfiles = new setProfile();

    setProfiles.firstName = userParams.firstName;
    setProfiles.userName = userParams.userName;
    setProfiles.lastName = userParams.lastName;
    setProfiles.emailConfirmed = userParams.emailConfirmed;
    setProfiles.phoneNumber = userParams.phoneNumber;
    setProfiles.userProfileCompleted = userParams.userProfileCompleted;
    setProfiles.phoneNumberConfirmed = userParams.phoneNumberConfirmed;
    setProfiles.lastLoginDate = userParams.lastLoginDate;
    setProfiles.smartpassPersonId = userParams.smartpassPersonId;
    setProfiles.lang = userParams.lang;
    setProfiles.requireOTP = userParams.requireOTP;
    return setProfiles;
  
  }

  RegisterSetterGetter(registerParams:any){
    const setRegisters = new setRegister();
        setRegisters.userId = registerParams.userId;
        setRegisters.phoneNumber = registerParams.phoneNumber;
        return setRegisters;
  }

  /* getUserProfileData(): Observable<HttpResponse<any>>{
    const token ="-KeMSO39VvoPQ2tU2RlgffBLy14pK0QDTV2bo_yokpnzE3hjkk…RL8S_lTudXNkrv08zRJpTUcweODLp3PSo24FYbEzEC005vuHc";
    const headers1 = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.httpClient.get(this.REST_API_UserType, {
      observe: 'response'
    });
  } */
  getData = () => {
    const token ="-KeMSO39VvoPQ2tU2RlgffBLy14pK0QDTV2bo_yokpnzE3hjkk…RL8S_lTudXNkrv08zRJpTUcweODLp3PSo24FYbEzEC005vuHc";
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        return this.httpClient.get((this.REST_API_UserType), { headers: headers }).toPromise();  
  }
  getUserProfileData(): Observable<any> {
    const token ="k4kpLpsqhOpY073IcqwXcUfMLfluTzm4tdBkKgkYSS04e7ancF9ivfEL1RdZeTlTCds-Z6R9vSHZXsn8BCh6RgfF7QhBs48nzB4VRKxKsh4sd04Sz9LH9ZTY8kPTIKyovXOJuqnm8hXfP6Q629YprdMblZcRu1uA5-MZ2eHVrzEOILJqlPMeNjqAG2_ULNOJxMdG_i4z-P9AeCVFFZ1iMcrCtvnS3vYfDgluiZCBxqgsG6Zysu51KX_WFard4mjT24gNq7C8Vb4nu23K2vpHKo6V5WShbiMJhY0NZmmC_fG6e2AsO3jlakM24c0PMWwHDUkBg4F2JNKBLkgz6Db0c5eQDCsbI8IxFtmcBKw-qeWtB7XZocZbu_EhQHANfNTEVqj6WMDlTK2WXAX3qGU5IkQPZmty-VZ3jfzulnBM1tUVngvyn6jPLv_PKNb606T_bmuM7j1knPj0FCMi0qnwGTxlqqCSjmrkTZzL3R3qBsBalLaGEOLc8zxbbiK43A-kp2aBLAMo5f8AJp11oSHBeyz67eOm9FlFFRQzkg9Kk3hVxobPrxMIO6dlUMdMGi-MPH4uNszGBF9j_UJPpQQql8ZzMB7qAxwfkgDYKn2YtqsuoXwjA9R8bjEMvUUChAmazEBjyaFAeB9gIZ0ookcPb6oam90FdW8L5fE0lhUz3789IS5q7XfHLdfKMoiPs1REhlguCrT9BQXVxZIA_fVHeHlB9qtjSO7mHEp3Z-qwwfgS9GxYT9bHarYgdfilnS2c1IuEYIVFDOsqW4Sc_WJtr-ATrwOFfrLsHOZw-r058OS-kNmEu85sQYiTTzMBsED6xy3Go1zWubSWvFsQiUCvuRDJjAhzsnGMvkA1XuZaYGPYtmPxpl02HyKrlQH3G7BaB0idKUEDnf0Q72BbNgt7ixqTg7h4jfKe86os0p2uSjwco3IErwtsKqJ2AfuQqhxxnOJLd2uInWLWqlYOUCaa_YUyXXhGdF1YPT-01z963zkFWrFNDX1ouGwaNAHdoAezdIILwl033KZfCSX6q0lpXIFT3rFUjaHTCz7mcC900ggzaNHtMYB7YSdOiEXAf1J9EI2lf8qDiAuyp4LpS1EkmcpsL9-P0BdFZkDV7fM3_FX50L8wXAaxhb-7VnMXKkcwwszUe-VxtvWhDcecRefIji-dcAswwZX8VTrkuH4YdlIbwM_cWPD3EfJdB2zQSG3PtWlvqXMCHDJ2YqpMl0QVU2p_mOMt5JDtuO_TFihlDg0";
    let httpOptions = new HttpHeaders()
    .set('Authorization', 'Bearer ' + token);
    return this.httpClient.get<userProfile[]> (this.REST_API_USERPROFILE, { headers: httpOptions });
  }

  getUserProfileData1(): Observable<any> {
    return this.httpClient.get(this.REST_API_USERPROFILE)
  }

  isEmiratesIdExistIndividualUserType(paramsM: any):Observable<any>{ 
    const params = new HttpParams()
    .set('emiratesId', paramsM);
  return this.httpClient.get(this.REST_API_EmiratesIdExist, {params}); 
  }

  getAuthority(): Observable<HttpResponse<any>> {
    return this.httpClient.get(this.REST_API_Authority, {
      observe: 'response'
    });
  }
  getEmirates(): Observable<HttpResponse<any>> {
    return this.httpClient.get(this.REST_API_Emirate, {
      observe: 'response'
    });
  }
  updateUserProfile(updateUserProfile: any){
    console.log('params--',updateUserProfile); 
      return this.httpClient.post(this.REST_API_UPDATE_USERPROFILE, updateUserProfile);
  }

  resetPassword(email: any){
      return this.httpClient.post(this.API_ResetPassword, email);
  }

  resetPasswordWithToken(params: any){
      return this.httpClient.post(this.API_ResetPasswordWithToken, params);
  }

  confirmEmail(params: any){
    return this.httpClient.post(this.API_ConfirmEmail, params);
  } 

  confirmPhone(params: any){ 
    //console.log('RegisterSetterGetter--',this.setRegisters); 
    return this.httpClient.post(this.VerifyPhoneNumber, params);
  } 

  resendPhoneNumberCode(params: any){
    return this.httpClient.post(this.ResendPhoneNumberCode, params);
  } 

}
