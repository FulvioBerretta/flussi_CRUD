import { Component, OnInit } from '@angular/core';
import {User} from "../../shared/model/user";
import {UserService} from "../../core/service/user.service";
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";

@Component({
  selector: 'app-put',
  templateUrl: './put.component.html',
  styleUrls: ['./put.component.scss']
})
export class PutComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: UserService) {
    this.form = formBuilder.group({
      'id': formBuilder.control('', [Validators.required]),
      'name': formBuilder.control('', [Validators.required]),
      'lastName': formBuilder.control('', [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  updateData() {
    const user: User = new User(this.form.value.id, this.form.value.name, this.form.value.lastName);
    this.service.updateUser(user).subscribe(
        data => {
          console.log(data);
        }
    );
    this.form.reset()
  }
}
