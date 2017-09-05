import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class EmployeeService {
  url="assets/data/employee.json";
  constructor(private httpService:Http ) { }

  getEmployeeDetails(): Observable<any>{
   return this.httpService.get(this.url).map(result=>{
     return result.json();
   })
  }
}