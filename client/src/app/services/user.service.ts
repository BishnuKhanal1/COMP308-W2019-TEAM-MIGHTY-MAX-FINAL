import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: User;
  private authToken: any = null;

  private endpoint = 'http://localhost:3000/api/profile/';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    })
  };

  constructor(private http: HttpClient) {
    this.user = new User();
   }

   public getUser(user: User): Observable<any> {
    this.loadToken();
    return this.http.get<any>(this.endpoint + user._id, this.httpOptions);
   }

  public editUserProfileInfo(user: User): Observable<any> {
    this.loadToken();
    return this.http.post<any>(this.endpoint + user._id, user, this.httpOptions);
  }

  private loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
    this.httpOptions.headers = this.httpOptions.headers.set('Authorization', this.authToken);
  }
}
