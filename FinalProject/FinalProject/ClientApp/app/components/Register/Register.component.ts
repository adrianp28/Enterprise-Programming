import { Component, Inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ToDoItemsInterface } from '../ToDoItems/ToDoItemsInterface.interface';
import { ToDoItemsService } from '../ToDoItems/ToDoItemsService.service';
import { ErrorRInterface } from './ErrorR.interface';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import * as moment from 'moment'
//import { ToDo } from '../../../../Models/ToDo.cs';
@Component({
    selector: 'Register',
    templateUrl: './Register.component.html'
})
export class RegisterComponent implements OnInit {

    public Username: string;
    public Password: string;
    public Email: string;
    public errorsInterface: ErrorRInterface[] = [];
    constructor(private activeRoute: ActivatedRoute, private todoItemsService: ToDoItemsService, private router: Router) {
    }

    ngOnInit(): void {
        //this.activeRoute.paramMap.subscribe(paramMap => this.fetch(paramMap));

    }

    fetch(paramMap: ParamMap): void {
       // this.todoItemsService.getItem(this.id).subscribe(results => { this.item = results });
    }
    public register(): void {
        let myUser = { Email: this.Email, UserName: this.Username, Password: this.Password };
        this.todoItemsService.register(myUser).subscribe(errors => { this.errorsInterface = errors; });
        console.log(this.errorsInterface.length);
        if (this.errorsInterface.length == 0) {
            this.router.navigate(['Login']);
        }
        //console.log(myUser);
    }

}
