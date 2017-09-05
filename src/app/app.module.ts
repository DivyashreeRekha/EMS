import { BrowserModule } from '@angular/platform-browser'; 
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpModule } from "@angular/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from "./employee/employee.component";
import { ProjectComponent } from "./project/project.component";
import { EmployeeModule } from "./employee/employee.module";
import { ProjectModule } from "./project/project.module";
import { HomeComponent } from "./home/home.component";
import { HomeModule } from "./home/home.module";

const appRoutes: Routes = [
  {
    path: 'employee',
    component: EmployeeComponent,
    data: { title: 'Employee' }
  },
  {
    path: 'project',
    component: ProjectComponent
  },
  {
    path: '',
    component: HomeComponent
  },{ 
    path: '**', component: HomeComponent
   }
  
];


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    EmployeeModule,
    ProjectModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
