import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/service/employee/employee.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  txtUserName!:string;
  txtPassword!:string;

  constructor(private router: Router,
              private accountService:EmployeeService){
  }
  ngOnInit(): void {
  }

  signin(){
    this.accountService.LoginAccount(this.txtUserName, this.txtPassword).toPromise().then((result)=>{
      if(result!=undefined){
        this.router.navigate(['/home']);
      } (err:HttpErrorResponse) => {
        if(err.status==401)
        this.router.navigate(['/login']);
      }
    });
  }
}
