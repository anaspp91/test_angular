import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  canActivate(){
    //Business logic
    //call login api with username&password
    //get token
    //store token to local storage
    //set true if token exist in local storage
    //set false if not

    var token = localStorage.getItem('token');
    if(token){
      return true;
    }
    else{
      return false;
    } 
  }
  
}
