import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GetByIdRoutingModule } from './get-by-id-routing.module';
import { GetByIdComponent } from './get-by-id.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    GetByIdComponent
  ],
  imports: [
    CommonModule,
    GetByIdRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class GetByIdModule { }
