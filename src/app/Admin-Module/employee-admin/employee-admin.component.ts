import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './../../services/employee.service';

@Component({
  selector: 'app-employee-admin',
  templateUrl: './employee-admin.component.html',
  styleUrls: ['./employee-admin.component.less']
})
export class EmployeeAdminComponent implements OnInit {

  constructor(private empService: EmployeeService ) { }

  ngOnInit(): void {

  }

  getInfo() {

    this.empService.getEmployeeInfo();
  }

}
