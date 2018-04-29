import { Injectable, Component } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { LoginInterface } from "../Login/Login.interface";
import { RegisterInterface } from "../Register/Register.interface";
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

    constructor(private http: Http) { }

    signIn(user: LoginInterface) {
        console.log(user);
        return this.http.post('/api/user/login', user);
            //.map(response => response.json()); 
    }
    
}