import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable } from 'rxjs';

import { IUser, IUserCredentials } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserRepositoryService {
  public user: IUser | null = null;

  constructor(private http: HttpClient) { }

  private storeAndReturnUser = (user: IUser): IUser => {
    this.user = user;
    return user;
  }

  signIn(credentials: IUserCredentials): Observable<IUser> {
    return this.http.post<IUser>('/api/sign-in', credentials)
      .pipe(map(this.storeAndReturnUser));
  }

  signOut() {
    this.user = null;
  }

  register(user: IUser): Observable<IUser> {
    return this.http.post<IUser>('/api/register', user)
      .pipe(map(this.storeAndReturnUser));
  }
}
