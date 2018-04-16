import { Component, Inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ToDoItemsInterface } from './ToDoItemsInterface.interface';
import { ToDoItemsService } from './ToDoItemsService.service';

@Component({
    selector: 'ToDoItems',
    templateUrl: './ToDoItems.component.html'
})
export class ToDoItemsComponent implements OnInit {

    public list: ToDoItemsInterface[] = [];

    constructor(private activeRoute: ActivatedRoute, private todoService: ToDoItemsService) {
    }

    ngOnInit(): void {
        this.fetchItems();

    }

    fetchItems() {
        this.todoService.getItems().subscribe(results => { this.list = results });
    }
    public deleteItem() {

    }
}
