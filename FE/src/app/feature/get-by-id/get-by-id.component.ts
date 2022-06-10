import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../core/service/user.service";

@Component({
  selector: 'app-get-by-id',
  templateUrl: './get-by-id.component.html',
  styleUrls: ['./get-by-id.component.scss']
})
export class GetByIdComponent implements OnInit {
  form: FormGroup;
  @Input() element: any = this.getData();

  constructor(private formBuilder: FormBuilder, private service: UserService ) {
    this.form = formBuilder.group({
      'id': formBuilder.control('', [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  getData() {
    const id: number = this.form.value.id;
    console.log(id);
    return this.service.getUser(id).subscribe(
        data => {
          console.log(data);


        }
    );
    //this.form.reset()

  }
}
