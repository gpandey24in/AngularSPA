import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employeeForm: FormGroup;
  constructor(private fb: FormBuilder, private http:HttpClient) {
       }

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      Name: [''],
      Email: [''],
      Password: ['']
    });
  }
  OnSubmit() {
    //console.log(this.employeeForm);
    this.http.post('https://localhost:44302/emp', this.employeeForm.value).subscribe(data => {
      console.log(data);
    });
}

}
