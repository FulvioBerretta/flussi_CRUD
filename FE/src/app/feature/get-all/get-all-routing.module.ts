import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GetAllComponent} from "./get-all.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', component: GetAllComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GetAllRoutingModule { }
