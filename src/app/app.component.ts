import { Component, ViewChildren, ViewChild, ElementRef } from '@angular/core';
import { AppService } from "./app.service";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent {
  title = 'Employee Management System';
}
