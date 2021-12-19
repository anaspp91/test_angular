
import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse,HttpHeaders, HttpParams,HttpClientModule } from '@angular/common/http';
import { catchError, map, Observable } from 'rxjs';
import { from } from 'rxjs';
import { User } from '../helpers/user';



const USERS = [
	new User(1, 'mahesh', 'm123', 'ADMIN'),
	new User(2, 'krishna', 'k123', 'USER')
];
//let usersObservable = of(USERS);

@Injectable()
export class AuthService {
    private redirectUrl: string = '/';
	private loginUrl: string = '/login';
	private isloggedIn: boolean = false;
	private loggedInUser = {} as User;
	// getAllUsers(): Observable<User[]> {
	// 	return usersObservable;
	// }

    // isUserAuthenticated(username: string, password: string): Observable<boolean> {
	// 	return this.getAllUsers().pipe(
	// 		map(users => {
	// 			let user = users.find(user => (user.username === username) && (user.password === password));
	// 			if (user) {
	// 				this.isloggedIn = true;
	// 				this.loggedInUser = user;
	// 			} else {
	// 				this.isloggedIn = false;
	// 			}
	// 			return this.isloggedIn;
	// 		}));
	// }

    isUserLoggedIn(): boolean {
		return this.isloggedIn;
	}
	getRedirectUrl(): string {
		return this.redirectUrl;
	}
	setRedirectUrl(url: string): void {
		this.redirectUrl = url;
	}
	getLoginUrl(): string {
		return this.loginUrl;
	}
	getLoggedInUser(): User {
		return this.loggedInUser;
	}
	logoutUser(): void {
		this.isloggedIn = false;
	}

    private REST_API_TOKEN  = "http://mcystgeswebapi01.mcy.local/TOKEN";
    httpOptions = {
        headers: new HttpHeaders({
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Origin": "*",      
        })
      };
     
    constructor(private http: HttpClient) {
    }

    loginService(params: any){
        const body = new HttpParams()
        .set('username',params.username)
        .set('password',params.password)
        .set('grant_type', 'password');
        return this.http.post(this.REST_API_TOKEN, body, this.httpOptions).pipe(map(res => res)
        );
      }

      public isAuthenticated() : boolean{
          //return this.getToken() != null;
      }
}