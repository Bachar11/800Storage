import { environment } from '../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private cache: any = {};

  constructor(private http: HttpClient) { }
  
  getUsers(page: number): Observable<any> {
    return this.http.get(`${environment.apiUrl}users?page=${page}`)
  }


  getSingleUser(id: number): Observable<any> {
    if (this.cache[id]) {
      return of(this.cache[id]);
    } else {
      return this.http.get<any>(`${environment.apiUrl}users/${id}`).pipe(
        tap(user => {
          this.cache[id] = user;
          localStorage.setItem(`user_${id}`, JSON.stringify(user));
        })
      );
    }
  }

  clearCache() {
    this.cache = {};
    localStorage.clear();
  }

}
