import { Component, Inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { WarningInterface } from '../ToDoItems/WarningInterface.interface';
import { LoginService } from './Login.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
//import { ToDo } from '../../../../Models/ToDo.cs';
@Component({
    selector: 'Login',
    templateUrl: './Login.component.html'
})
export class LoginComponent implements OnInit {

    public UserName: string;
    public Password: string;

    constructor(private activeRoute: ActivatedRoute, private loginService: LoginService, private router: Router) {
    }

    ngOnInit(): void {
        //this.activeRoute.paramMap.subscribe(paramMap => this.fetch(paramMap));

    }
    public siginIn(): void {
        let myUser = { UserName: this.UserName, Password: this.Password };
        console.log(myUser);
        this.loginService.signIn(myUser).subscribe();
    }


}
