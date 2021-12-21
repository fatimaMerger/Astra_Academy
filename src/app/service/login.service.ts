import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {



  constructor(private httpClient:HttpClient) { }

  private Rest_API_Login_getUSers="https://61b9e45c38f69a0017ce635d.mockapi.io/api/v1/users"


  getUsers()
  {
    return this.httpClient.get(this.Rest_API_Login_getUSers).pipe(
      map((res) => {
        return res;
      })
    )
  }
}
