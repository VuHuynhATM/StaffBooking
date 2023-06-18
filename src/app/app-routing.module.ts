import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './layout/login-page/login-page.component';
import { HomeComponent } from './layout/main/home/home.component';
import { EmployeeComponent } from './layout/main/account/employee/employee.component';
import { CustomerComponent } from './layout/main/account/customer/customer.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginPageComponent
  },
  {
    path: "",
    component: LoginPageComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "employee",
    component: EmployeeComponent
  },
  {
    path: "customer",
    component: CustomerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
