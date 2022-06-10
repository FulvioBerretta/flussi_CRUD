import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path: 'home', loadChildren: () => import('src/app/feature/home/home.module').then(m => m.HomeModule)},
  {path: 'post', loadChildren: () => import('src/app/feature/post/post.module').then(m => m.PostModule)},
  {path: 'get-by-id', loadChildren: () => import('src/app/feature/get-by-id/get-by-id.module').then(m => m.GetByIdModule)},
  {path: 'get-all', loadChildren: () => import('src/app/feature/get-all/get-all.module').then(m => m.GetAllModule)},
  {path: 'put', loadChildren: () => import('src/app/feature/put/put.module').then(m => m.PutModule)},
  {path: 'delete', loadChildren: () => import('src/app/feature/delete/delete.module').then(m => m.DeleteModule)},
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
