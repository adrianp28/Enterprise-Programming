import { Component, Inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ToDoItemsInterface } from '../ToDoItems/ToDoItemsInterface.interface';
import { ToDoItemsService } from '../ToDoItems/ToDoItemsService.service';

@Component({
    selector: 'Completed',
    templateUrl: './Completed.component.html'
})
export class CompletedComponent implements OnInit {

    public list: ToDoItemsInterface[] = [];

    constructor(private activeRoute: ActivatedRoute, private todoService: ToDoItemsService) {
    }

    ngOnInit(): void {
        this.fetchItems();

    }

    fetchItems() {
        this.todoService.getItems().subscribe(results => { this.list = results });
    }
    public deleteToDOItem(id: string) {
        //this.id = paramMap.get('ID');

        this.todoService.deleteItem(id).subscribe();
        window.location.reload();
    }
}
