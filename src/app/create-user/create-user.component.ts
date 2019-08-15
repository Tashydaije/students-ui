import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { HttpCallService } from '../http-call.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  payload = {};
  response;

  onSubmit(form: NgForm) {
    this.payload = form.value;
    console.log('Form Data:: ', this.payload);

    this.response = this.HttpCall.saveStudent(this.payload);
    console.log(this.response);
  }
  // when u pass data to this controller ::::
  constructor(private HttpCall: HttpCallService) { }

  // what happens when page loads :::
  ngOnInit() {
    }

}
