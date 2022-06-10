import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from "../../shared/model/user";
import {UserService} from "../../core/service/user.service";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-get-all',
  templateUrl: './get-all.component.html',
  styleUrls: ['./get-all.component.scss']
})
export class GetAllComponent implements OnInit {

    dataSource: any = [];
    //@ViewChild('paginator') paginator!: MatPaginator;
    displayedColumns: string[] = ['Name','LastName'];

  constructor(private service: UserService) {
      //this.dataSource.paginator = this.paginator;
  }



    pgIndex= 2;
    firstLastButtons= true;
    pnDisabled= true;
    hdPageSize= true;


    ngOnInit(): void {

        this.service.getUsersPaginated(0, 10).then(value => {
                this.dataSource = new MatTableDataSource(value);
            },
            error => {
                console.log(error);
            })

    } // end of ngOnInit

    onChangePage(pe:PageEvent) {
        this.service.getUsersPaginated(pe.pageIndex, pe.pageSize).then(value => {
                this.dataSource = new MatTableDataSource(value);
            },
            error => {
                console.log(error);
            })
    }

    applyFilter(event: KeyboardEvent) {
        this.dataSource.filter = (event.target as HTMLInputElement)?.value.trim().toLowerCase();
    }
}






