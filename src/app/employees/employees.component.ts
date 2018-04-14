import { Component, OnInit } from '@angular/core';
import { EmployeesService } from './employees.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'employees',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
    private emps: any;
    private paramMap: any;
    constructor(private empService: EmployeesService,
                private activatedRoute: ActivatedRoute) {
    }
    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(params => this.paramMap = params);
        this.empService.getEmployees()
            .subscribe(data => {
                this.emps = data;
            });
    }
}
