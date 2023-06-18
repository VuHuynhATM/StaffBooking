import { HttpErrorResponse } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LazyLoadEvent, MenuItem, PrimeNGConfig } from 'primeng/api';
import { Table } from 'primeng/table';
import { EmployeeService } from 'src/app/service/employee/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})

export class EmployeeComponent {
  items!: MenuItem[];

  home!: MenuItem;

  datasource!: any[];

  cols!: any[];

  loading!: boolean;

  constructor(private employeeService: EmployeeService,
    private primengConfig: PrimeNGConfig,
    private router: Router) {

  }
  ngOnInit() {

    this.items = [
      { label: 'Account' },
      { label: 'Employee' },
    ];

    this.home = { icon: 'pi pi-home', routerLink: '/home' };

    this.employeeService.getemployeeLarge().toPromise().then((result)=>{
      if(result!=undefined){
        this.datasource=result.data;
      } (err:HttpErrorResponse) => {
        if(err.status==401)
        this.router.navigate(['/login']);
      }
    });

    this.loading = false;
    this.primengConfig.ripple = true;
  }
}
