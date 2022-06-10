import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GetByIdComponent} from "./get-by-id.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', component: GetByIdComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GetByIdRoutingModule { }
