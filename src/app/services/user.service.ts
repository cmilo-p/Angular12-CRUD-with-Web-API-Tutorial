import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  API_URL: string = 'https://jsonplaceholder.cypress.io/';
  constructor(private http: HttpClient) { }

  listUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.API_URL + 'users');
  }

  viewUser(id: string) {
    return this.http.get(this.API_URL + 'users/' + id);
  }

  addUser(userObj: any) {
    /* metodo de envio(Ruta de envio, Datos) */
    return this.http.post(this.API_URL + 'users', userObj);
  }

  deleteUser(id: any) {
    return this.http.delete(this.API_URL + 'users/' + id)
  }

  editUser(id: any, userObj: any) {
    return this.http.put(this.API_URL + 'users/' + id, userObj)
  }
}
