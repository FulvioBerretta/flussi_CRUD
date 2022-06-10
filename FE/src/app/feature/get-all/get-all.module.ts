import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GetAllRoutingModule } from './get-all-routing.module';
import { GetAllComponent } from './get-all.component';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [
    GetAllComponent
  ],
    imports: [
        CommonModule,
        GetAllRoutingModule,
        MatTableModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatInputModule
    ]
})
export class GetAllModule { }
