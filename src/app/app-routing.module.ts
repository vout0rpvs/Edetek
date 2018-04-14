import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentsComponent } from './departments/departments.component';
import { EmployeesComponent } from './employees/employees.component';

const routes: Routes = [
  {path: ' ', redirectTo: 'departments' , pathMatch: 'full'},
  {path: 'departments', component: DepartmentsComponent},
  {path: 'employees', component: EmployeesComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
