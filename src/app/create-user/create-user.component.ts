import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  firstName = '';
  lastName = '';
  email = '';
  phoneNumber = '';
  // when u pass data to this controller ::::
  constructor() { }

  // what happens when page loads :::
  ngOnInit() {
  }

  showStudents(){
    console.log(this.firstName, this.lastName);
  }


}
