import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from './departments.service';
import { Departments } from './departments.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'departments',
    templateUrl: './departments.component.html',
    styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
    private depts: any;
    private needToAdd =  false;
    private params: any = {};

    constructor(private deptService: DepartmentsService,
                private activatedRoute: ActivatedRoute,
                private router: Router ) {
    }
    ngOnInit() {
        this.getDept();
    }
    storeDeptId(department): void {
        this.router.navigate(['/employees', {id: department.id}]);
        console.log(department.id);
    }
    getDept(): void {
        const id = +this.activatedRoute.snapshot.paramMap.get('id');
        this.deptService.getDepartments()
            .subscribe(data => this.depts = data);
    }
    addDept() {
        this.deptService.addDepartment(this.params)
        .subscribe(data => {
            this.depts.push(data);
        });
    }
    deleteDept(department: Departments): void {
        this.depts = this.depts.filter(d => d !== department);
        this.deptService.deleteDepartment(department).subscribe();
    }
}
