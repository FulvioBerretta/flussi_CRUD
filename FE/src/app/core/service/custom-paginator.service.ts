// import { Injectable } from '@angular/core';
// import {MatPaginatorIntl} from "@angular/material/paginator";
// import {HttpClient} from "@angular/common/http";
// import * as http from "http";
// import {map} from "rxjs";
// import {User} from "../../shared/model/user";
//
// @Injectable({
//   providedIn: 'root'
// })
// export class CustomPaginatorService {
//   items: any;
//
//
//   constructor(http: HttpClient) {
//   }
//
//   getItems(pageSize: number, currentPage: number) {
//     const queryParams = `?pageSize=${pageSize}&page=${currentPage}`;
//     return http.get<{ message: string, items: any, maxCount: number }>('API_URL' + queryParams)
//         .pipe(map((itemData: User) => {
//           return {
//             id: itemData.id,
//             maxCount: itemData.maxCount
//           };
//         })).subscribe((res) => {
//           this.items = res.item;
//         });
//   }
//
// }
