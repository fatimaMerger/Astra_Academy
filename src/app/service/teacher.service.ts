import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private httpClient: HttpClient) { 

  }
  private REST_API_ = "https://61b9e45c38f69a0017ce635d.mockapi.io/api/v1/teachers"


  getTeacherList()
  {
    return this.httpClient.get(this.REST_API_).pipe(
      map((res) => {
        return res;
      })
    )
  }
  addTeacher(data){
    console.log('data in the service :',data)
    return this.httpClient.post(this.REST_API_, data).pipe(
      map((res) => {
        return res;
      }))
  }
  updateTeacher(data,i){
    const REST_API_update_Teacher = `https://61b9e45c38f69a0017ce635d.mockapi.io/api/v1/teachers/${i}`

    console.log('data in the service :',data)
    return this.httpClient.put(REST_API_update_Teacher,data).pipe(
      map((res) => {
        return res;
      }))
  }

  getSingleTeacher(id){
    const REST_API_update_Teacher = `https://61b9e45c38f69a0017ce635d.mockapi.io/api/v1/teachers/${id}`
    return this.httpClient.get(REST_API_update_Teacher).pipe(
      map((res) => {
        return res;
      }))

  }
 
}
