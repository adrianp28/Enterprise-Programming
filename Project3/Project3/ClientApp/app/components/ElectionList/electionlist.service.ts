import { Injectable, Component } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { ElectionList } from "./electionlist.interface";
import 'rxjs/add/operator/map';

@Injectable()
export class ElectionListService {

    constructor(private http: Http) { }

    getElections(){
        return this.http.get('https://www.googleapis.com/civicinfo/v2/elections?key=AIzaSyDsbN4O4BdkYBlMAqZmBGpBqcoiQB2_fm4')
            .map(response => response.json());

    }

}