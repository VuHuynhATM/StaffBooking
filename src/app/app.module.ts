import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import {ToolbarModule} from 'primeng/toolbar';
import {SidebarModule} from 'primeng/sidebar';
import {PanelMenuModule} from 'primeng/panelmenu';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {ChartModule} from 'primeng/chart';
import {TableModule} from 'primeng/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './layout/login-page/login-page.component';
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from './layout/main/home/home.component';
import { EmployeeComponent } from './layout/main/account/employee/employee.component';
import { CustomerComponent } from './layout/main/account/customer/customer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HeaderComponent,
    HomeComponent,
    EmployeeComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    SidebarModule,
    PasswordModule,
    ButtonModule,
    ToolbarModule,
    BrowserAnimationsModule,
    FormsModule,
    PanelMenuModule,
    BreadcrumbModule,
    ChartModule,
    TableModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
