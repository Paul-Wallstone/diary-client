import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from "../models/User";
import {getURL} from "../../environments/environment";

const USER_API = 'users/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getUserById(id: number): Observable<any> {
    return this.http.get<any>(getURL(USER_API + id));
  }

  getCurrentUser(): Observable<any> {
    return this.http.get(USER_API + '/current');
  }

  updateUser(user: User): Observable<any> {
    return this.http.post(getURL(USER_API + user.id + '/update'), user);
  }
}
