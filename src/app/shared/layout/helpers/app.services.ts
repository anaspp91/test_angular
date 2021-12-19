import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';
import { UserType } from '../helpers/usertypes.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class appService {
  
  private REST_API_SERVER = "http://localhost:1113/api/UserType";

  constructor(private httpClient: HttpClient) { }

  getFullResponseForWriter(): Observable<HttpResponse<any>> {
    return this.httpClient.get(this.REST_API_SERVER, {
      observe: 'response'
    });
} 

}