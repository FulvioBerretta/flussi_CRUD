import { Component, OnInit } from '@angular/core';
import {User} from "../../shared/model/user";
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {UserService} from "../../core/service/user.service";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: UserService) {
    this.form = formBuilder.group({
      'id': formBuilder.control('', [Validators.required])

    });
  }

  ngOnInit(): void {
  }


  deleteData() {
    const userId: number = this.form.value.id;
    console.log(userId);
    this.service.deleteUser(userId).subscribe(
        data => {
          console.log(userId);
          console.log(data);
        }
    );
    this.form.reset()


  }
}
