import { Injectable, Component } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { NormalAddress } from "./normal.interface";
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {

    constructor(private http: Http) { }

    getReps(address: string) {
        return this.http.get('https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyDsbN4O4BdkYBlMAqZmBGpBqcoiQB2_fm4&address=' + address)
            .map(response => response.json());

    }
    getElections(address: string) {
        return this.http.get('https://www.googleapis.com/civicinfo/v2/voterinfo?key=AIzaSyDsbN4O4BdkYBlMAqZmBGpBqcoiQB2_fm4&address=' + address)
            .map(response => response.json());
    }
    getElection(address: string, electionID: string) {
        return this.http.get('https://www.googleapis.com/civicinfo/v2/voterinfo?address=' + address + '&electionId=' + electionID + '&key=AIzaSyDsbN4O4BdkYBlMAqZmBGpBqcoiQB2_fm4')
            .map(response => response.json());
        //return this.http.get('https://www.googleapis.com/civicinfo/v2/voterinfo?address=904%20Chartrand%20Ct%20Edmond%20OK%2073034&electionId=2000&key=AIzaSyDsbN4O4BdkYBlMAqZmBGpBqcoiQB2_fm4')
        //    .map(response => response.json());
        
    }
}