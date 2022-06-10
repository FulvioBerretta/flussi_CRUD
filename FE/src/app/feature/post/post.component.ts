import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {UserService} from "../../core/service/user.service";
import {User} from "../../shared/model/user";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  form: FormGroup;


  constructor(private formBuilder: FormBuilder, private service: UserService ) {
    this.form = formBuilder.group({
      'name': formBuilder.control('', [Validators.required]),
      'lastName': formBuilder.control('', [Validators.required])
    });
  }

  //call the service to post the data
  postData(user: User) {

    this.service.createUser(user).subscribe(
      data => {
        console.log(data);


      }
    );
    this.form.reset()
  }

  // insertUser() {
  //   console.log(this.form.value);
  //   this.service.createUser(this.form.value)
  //       .subscribe(value => console.log(value))
  //   //manage the error
  //   this.form.reset();
  // }

  //call the service to create a user




  ngOnInit(): void {

  }




}


