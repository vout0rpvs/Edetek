import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Employees } from './employees.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class EmployeesService {
  private url = 'http://localhost:3000/employees';
  constructor(private http: HttpClient) { }
  getEmployees() {
    return this.http.get(this.url);
  }
  deleteEmployee(employee: Employees | number) {
    const id = typeof employee === 'number' ? employee : employee.id;
    const url = `${this.url}/${id}`;
    return this.http.delete(url, httpOptions);
  }

}
