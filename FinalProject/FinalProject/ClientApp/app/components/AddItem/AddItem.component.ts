import { Component, Inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ToDoItemsInterface } from '../ToDoItems/ToDoItemsInterface.interface';
import { ToDoItemsService } from '../ToDoItems/ToDoItemsService.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import * as moment from 'moment'
//import { ToDo } from '../../../../Models/ToDo.cs';
@Component({
    selector: 'AddItem',
    templateUrl: './AddItem.component.html'
})
export class AddItemComponent implements OnInit {
    public id: any;
    public item: ToDoItemsInterface;
    public Tag: string;
    //public updateItem: ToDoItemsInterface = {};
    public nameTODO: string;
    public DueDate: Date;
    public description: string;
    constructor(private activeRoute: ActivatedRoute, private todoItemsService: ToDoItemsService, private router: Router) {
    }

    ngOnInit(): void {
        //this.activeRoute.paramMap.subscribe(paramMap => this.fetch(paramMap));

    }

    fetch(paramMap: ParamMap): void {
        this.id = paramMap.get('ID');
        this.todoItemsService.getItem(this.id).subscribe(results => { this.item = results });
    }
    public addToDo() {
        let myItem = { ID: this.id, Name: this.nameTODO, Date: moment(this.DueDate).utc().toDate(), Description: this.description, Tag: this.Tag, Status: "Active" };
        this.todoItemsService.addItem(myItem).subscribe();
        this.router.navigate(['Home']);
    }

}
