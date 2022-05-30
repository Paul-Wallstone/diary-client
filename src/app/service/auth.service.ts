import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {getURL} from "../../environments/environment";

const AUTH_API = 'auth/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  public login(user): Observable<any> {
    return this.http.post(getURL(AUTH_API + 'sign-in'), {
      username: user.username,
      password: user.password
    });
  }

  public register(user): Observable<any> {
    return this.http.post(getURL(AUTH_API + 'sign-up'), {
      email: user.email,
      username: user.username,
      firstname: user.firstname,
      lastname: user.lastname,
      password: user.password,
      confirmPassword: user.confirmPassword
    });
  }
}
