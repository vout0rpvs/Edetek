import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Departments } from './departments.model';
import { Employees } from '../employees/employees.model';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DepartmentsService {
  private url = 'http://localhost:3000/departments';
  private urlEmp = 'http://localhost:3000/employees';
  constructor(private http: HttpClient) { }
  getDepartments(): Observable<Departments[]> {
    return this.http.get<Departments[]>(this.url);
  }
  addDepartment(params) {
    return this.http.post(this.url, {
      id: params.id,
      name: params.name,
      description: params.description
    });
  }
  deleteDepartment(department: Departments | number) {
    const id = typeof department === 'number' ? department : department.id;
    const url = `${this.url}/${id}`;
    return this.http.delete(url, httpOptions);
  }
  getEmployee(id: number): Observable<Employees> {
    const url = `${this.urlEmp}/${id}`;
    return this.http.get<Employees>(this.urlEmp);
  }
}
