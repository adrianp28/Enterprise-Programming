import { Component, Inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { WarningInterface } from '../ToDoItems/WarningInterface.interface';
import { ToDoItemsService } from '../ToDoItems/ToDoItemsService.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
//import { ToDo } from '../../../../Models/ToDo.cs';
@Component({
    selector: 'Settings',
    templateUrl: './Settings.component.html'
})
export class SettingsComponent implements OnInit {
    public id: any;
    //public updateItem: ToDoItemsInterface = {};
    public warning: WarningInterface;
    public days: number;
    public hours: number;
    constructor(private activeRoute: ActivatedRoute, private todoItemsService: ToDoItemsService, private router: Router) {
    }

    ngOnInit(): void {
        this.activeRoute.paramMap.subscribe(paramMap => this.fetch(paramMap));

    }

    fetch(paramMap: ParamMap): void {
        this.id = paramMap.get('ID');
        this.todoItemsService.getWarning().subscribe(results => { this.warning = results });
    }
    public updateSettings() {
        let mySetting = { ID: this.id, days: this.days, hours: this.hours };
        this.todoItemsService.updateSettings(mySetting, this.id).subscribe();
        this.router.navigate(['Home']);
    }
    //public updateToDo() {
    //    let myItem = { ID: this.id, Name: this.nameTODO, Date: this.DueDate, Description: this.description, Tag: this.Tag, Status: this.status };
    //    this.todoItemsService.updateItem(myItem, this.id).subscribe();
    //    this.router.navigate(['Home']);
    //}

}
