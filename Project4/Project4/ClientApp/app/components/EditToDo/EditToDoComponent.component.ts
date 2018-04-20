import { Component, Inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ToDoItemsInterface } from '../ToDoItems/ToDoItemsInterface.interface';
import { ToDoItemsService } from '../ToDoItems/ToDoItemsService.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
//import { ToDo } from '../../../../Models/ToDo.cs';
@Component({
    selector: 'EditToDo',
    templateUrl: './EditToDo.component.html'
})
export class EditToDoComponent implements OnInit {
    public id: any;
    public item: ToDoItemsInterface;
    public Tag: string;
    //public updateItem: ToDoItemsInterface = {};
    public nameTODO: string;
    public DueDate: Date;
    public description: string;
    public status: string;
    constructor(private activeRoute: ActivatedRoute, private todoItemsService: ToDoItemsService, private router: Router) {
    }

    ngOnInit(): void {
        this.activeRoute.paramMap.subscribe(paramMap => this.fetch(paramMap));

    }

    fetch(paramMap: ParamMap): void {
        this.id = paramMap.get('ID');
        this.todoItemsService.getItem(this.id).subscribe(results => { this.item = results });
        this.nameTODO = this.item.Name;
        this.description = this.item.Description;
        this.DueDate = this.item.Date;
    }
    public updateToDo() {
        let myItem = { ID: this.id, Name: this.nameTODO, Date: this.DueDate, Description: this.description, Tag: this.Tag, Status: this.status };
        this.todoItemsService.updateItem(myItem, this.id).subscribe();
        this.router.navigate(['Home']);
    }
    public deleteToDO(paramMap: ParamMap) {
        //this.id = paramMap.get('ID');
        
        this.todoItemsService.deleteItem(this.id).subscribe();
        this.router.navigate(['Home']);
    }

}
