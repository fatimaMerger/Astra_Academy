import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient: HttpClient) { }

  
  private REST_API = "https://61b9e45c38f69a0017ce635d.mockapi.io/api/v1/students"
  
  //get list of students
  getStudentList()
  {
    return this.httpClient.get(this.REST_API).pipe(
      map((res) => {
        return res;
      })
    )
  }

  addStudent(data){
    console.log('data in the service :',data)
    return this.httpClient.post(this.REST_API, data).pipe(
      map((res) => {
        return res;
      }))
  }
  updateStudent(data,i){
    const REST_API_update_Student = `https://61b9e45c38f69a0017ce635d.mockapi.io/api/v1/students/${i}`

    console.log('data in the service :',data)
    return this.httpClient.put(REST_API_update_Student,data).pipe(
      map((res) => {
        return res;
      }))
  }

  getSingleStudent(id){
    const REST_API_update_Student = `https://61b9e45c38f69a0017ce635d.mockapi.io/api/v1/students/${id}`

    // console.log('data in the service :')
    return this.httpClient.get(REST_API_update_Student).pipe(
      map((res) => {
        return res;
      }))

  }

}
