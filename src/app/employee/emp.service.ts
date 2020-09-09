import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  constructor(private http: HttpClient) { }

  saveEmployee(EmployeeData) {
    return this.http.post('https://localhost:44302/emp', EmployeeData);
  }

  UpdateEmployee(EmployeeData) {
    return this.http.put('https://localhost:44302/emp', EmployeeData);
  }

  GetAllEmployee() {
    return this.http.get('https://localhost:44302/emp');
  }

  GetEmployeeById(empId) {
    return this.http.get('https://localhost:44302/emp/' + empId);
  }

  DeleteEmployeeById(empId) {
   return this.http.delete('https://localhost:44302/emp/' + empId);
  }

}
