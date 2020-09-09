import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { EmpService } from './emp.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employeeForm: FormGroup;
  employeeList;

  constructor(private fb: FormBuilder, private http: HttpClient,
    private empService: EmpService) {
       }

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      Name: [''],
      Email: [''],
      Password: ['']
    });

    this.GetEmployeeData();
  }
  OnSubmit() {
    //console.log(this.employeeForm);
   // this.http.post('https://localhost:44302/emp', this.employeeForm.value)
   //.subscribe(data => {
     // console.log(data);


    this.empService.saveEmployee(this.employeeForm.value).subscribe(data => {
      this.GetEmployeeData();
    });
}


  GetEmployeeData() {
    this.empService.GetAllEmployee().subscribe(data => {

      this.employeeList = data;

      console.log(data);
    });
  }

}
