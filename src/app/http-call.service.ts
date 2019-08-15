import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpCallService {

  constructor( private Http: HttpClient) { }

  saveStudent(payload) {
    console.log(payload);

    return this.Http.post('http://localhost:5000/createUsers',
      payload)
      .subscribe(
        data  => {
          console.log('POST Request is successful ', data);
        },
        error  => {
          console.log('POST Request is Error', error);
        }
        );
  }
}
