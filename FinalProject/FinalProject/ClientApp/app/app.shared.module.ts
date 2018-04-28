import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { ToDoItemsComponent } from './components/ToDoItems/ToDoItemsComponent.component';
import { ToDoItemsService } from './components/ToDoItems/ToDoItemsService.service';
import { EditToDoComponent } from './components/EditToDo/EditToDoComponent.component';
import { AddItemComponent } from './components/AddItem/AddItem.component';
import { CompletedComponent } from './components/completed/CompletedComponent.component';
import { SettingsComponent } from './components/Settings/SettingsComponent.component';
import { LoginComponent } from './components/Login/LoginComponent.component';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        ToDoItemsComponent,
        EditToDoComponent,
        AddItemComponent,
        CompletedComponent,
        SettingsComponent,
        LoginComponent
    ],

    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'Login', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'ToDoList', component: ToDoItemsComponent },
            { path: 'Edit/:ID', component: EditToDoComponent },
            { path: 'Settings/:ID', component: SettingsComponent },
            { path: 'AddItem', component: AddItemComponent },
            { path: 'completed', component: CompletedComponent },
            { path: 'Login', component: LoginComponent },
            { path: '**', redirectTo: 'Login' }
        ])
    ],
    providers: [
        ToDoItemsService
    ]
})
export class AppModuleShared {
}
