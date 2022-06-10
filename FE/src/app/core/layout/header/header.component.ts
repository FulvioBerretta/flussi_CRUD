import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  post: string = "Post";
  getById: string = "Get By Id";
  getAll: string = "Get All";
  put: string = "Put";
  delete : string = "Delete";

  goToPost(route: string) {
    this.router.navigateByUrl('post');
  }

  goToGetById(route: string) {
    this.router.navigateByUrl('get-by-id');
  }

  goToGetAll(route: string) {
    this.router.navigateByUrl('get-all');
  }

  goToPut(route: string) {
    this.router.navigateByUrl('put');
  }

  goToDelete($event: string) {
     this.router.navigateByUrl('delete');
  }

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }



}
