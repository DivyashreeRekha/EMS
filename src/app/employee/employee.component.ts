import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EmployeeService } from "./employee.service";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit {

  empList: Array<Employee>;
  empName: string;
   selectedEmployee:Employee;
  validFormInput:boolean=true;
  @ViewChild('cancel') cancel:ElementRef;
  constructor(private EmployeeService: EmployeeService) {//dependency injection
    
  }

  ngOnInit(){
    this.EmployeeService.getEmployeeDetails().subscribe(res => {
      this.empList = res;
    })

    this.selectedEmployee=new Employee();
  }

  saveEmployee(empData: Employee) {
    if (!empData.name || !empData.location || !empData.gender){
      this.validFormInput=false;
      return
    }
    this.validFormInput=true;  
      
    if(!empData.id){
      empData.id = this.getLastId() + 1;
      
         this.empList.push(empData);
    }else{
      this.editEmployee(empData);
    }
    this.cancel.nativeElement.click();
  }

  getLastId() {
    return this.empList[this.empList.length - 1].id;
  }

  editEmployee(empData:Employee){
   this.selectedEmployee=empData;
  }

  setSelectedEmployee(id: string){
    this.selectedEmployee= this.empList.filter(e => {
      return e.id == id
    })[0];

  }

  removeEmployee(id: string) {
    this.empList = this.empList.filter(e => {
      return e.id != id
    })
  }

  clearSelectedEmp(){
    this.selectedEmployee=new Employee();
  }
}

class Employee {
  id: string
  name: string
  location: string
  gender: string
}
