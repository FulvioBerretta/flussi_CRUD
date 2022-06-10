import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../../shared/model/user";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
   url: string = 'http://localhost:8080/users';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<User[]>(this.url);

  }


  getUser(id: number): Observable<User> {
    return this.http.get<User>(this.url + '/' + id);
  }

  createUser(user: User){
    return this.http.post(this.url,
      {
          "firstName": user?.name?.toString(),
          "lastName": user?.lastName?.toString()
          }

        );
  }

  updateUser(user: User) {

    return this.http.put(this.url,
        {
            "id": user?.id?.toString(),
            "firstName": user?.name?.toString(),
            "lastName": user?.lastName?.toString()
        }
        );
  }

  deleteUser(id: number) {
    return this.http.delete(this.url + '/' + id);
  }
    getUsersPaginated(pageIndex: number, pageSize: number, name?: string): Promise<User[] | undefined> {
      name = name ? name : ''; // if name is undefined, set it to empty string
      return this.http.get<User[]>(this.url + '?index=' + pageIndex + '&limit=' + pageSize + '&name=' + name ).toPromise();
    }
}

