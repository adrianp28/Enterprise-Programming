import { Injectable, Component } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { ToDoItemsInterface } from "./ToDoItemsInterface.interface";
import { WarningInterface } from "./WarningInterface.interface";
import 'rxjs/add/operator/map';

@Injectable()
export class ToDoItemsService {

    constructor(private http: Http) { }

    getItems(){
        return this.http.get('api/ToDo')
            .map(response => response.json());

    }
    getWarning() {
        return this.http.get('api/Warning')
            .map(response => response.json());
    }
    getItemsSorted(type: string) {
        return this.http.get('api/ToDo', type)
            .map(response => response.json());

    }
    getItem(id: string) {
        return this.http.get('api/ToDo/'+id)
            .map(response => response.json());
    }
    deleteItem(id: string) {
        return this.http.delete('api/ToDo/' + id);
    }
    updateItem(item: ToDoItemsInterface, id:string) {
        return this.http.put('api/ToDo/' + id, item);
    }
    updateSettings(setting: WarningInterface, id: string) {
        return this.http.put('api/Warning/' + id, setting);
    }
    addItem(item: ToDoItemsInterface) {
        return this.http.post('api/ToDo/', item);

    }
}