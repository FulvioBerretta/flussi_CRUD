import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PutRoutingModule } from './put-routing.module';
import { PutComponent } from './put.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    PutComponent
  ],
    imports: [
        CommonModule,
        PutRoutingModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule
    ]
})
export class PutModule { }
