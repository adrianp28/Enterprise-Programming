import { Injectable, Component } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { ToDoItemsInterface } from "./ToDoItemsInterface.interface";
import 'rxjs/add/operator/map';

@Injectable()
export class ToDoItemsService {

    constructor(private http: Http) { }

    getItems(){
        return this.http.get('http://localhost:5000/api/ToDo')
            .map(response => response.json());

    }
    getItem(id: string) {
        return this.http.get('http://localhost:5000/api/ToDo/'+id)
            .map(response => response.json());
    }
    deleteItem(id: string) {
        return this.http.delete('http://localhost:5000/api/ToDo/' + id);
    }
    updateItem(item: ToDoItemsInterface, id:string) {
        return this.http.put('http://localhost:5000/api/ToDo/' + id, item);
    }
}