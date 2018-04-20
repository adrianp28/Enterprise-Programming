import { Component, Inject, Input, OnInit, NgZone, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ToDoItemsInterface } from './ToDoItemsInterface.interface';
import { WarningInterface } from './WarningInterface.interface';
import { ToDoItemsService } from './ToDoItemsService.service';
import * as moment from 'moment';

@Component({
    selector: 'ToDoItems',
    templateUrl: './ToDoItems.component.html'
})
export class ToDoItemsComponent implements OnInit {

    public list: ToDoItemsInterface[] = [];
    public warning: WarningInterface;
    public currentDate: Date = new Date();
    //public zone: NgZone;
    constructor(private activeRoute: ActivatedRoute, private todoService: ToDoItemsService, private ref: ChangeDetectorRef) {
    }

    ngOnInit(): void {
        this.fetchItems();

    }

    fetchItems() {
        this.todoService.getItems().subscribe(results => {
            this.list = results;

        });
        this.todoService.getWarning().subscribe(results => {
            this.warning = results;
        });
        //window.location.reload();
    }
    public sortByName() {
        this.todoService.getItems().subscribe(results => { this.list = results });
        this.list.sort(function (a, b) {
            var nameA = a.Name.toUpperCase(); // ignore upper and lowercase
            var nameB = b.Name.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });

    }
    public checkOverDueDate(d: Date): boolean {
        return moment(d).isBefore(moment().local());
    }
    public checkRange(d: Date, warningDays: number, warningHours: number): string {

        //console.log(warningDays);
        //console.log(warningHours);
        var warnDateTimeUTC = moment(d).utc()
            .subtract(warningDays, 'days')
            .subtract(warningHours, 'hours').format();
        var currentTime = moment().utc().format();
        var dueTime = moment(d).utc().format();
        var warnTime = moment(warnDateTimeUTC).utc().format();

        if (moment(currentTime).isAfter(dueTime)) {
            return 'danger';
        } else if (moment(currentTime).isAfter(warnTime)) {
            return 'warn';
        } else {
            return '';
        }
    }
    public checkDueDate(d: Date): boolean {
        //return moment().isAfter(moment(d).subtract("d", 2).subtract("h", 0)) && moment().isAfter(moment(d));
        var startDate = moment().utc().local().add("d", 2).add("h", 0).utc().local()
            , endDate = moment().utc().local();
        console.log("Start Date");
        console.log(startDate.format());
        console.log("End Date");
        console.log(endDate.format());
        console.log("DueDate");
        console.log(d);
        return moment(d).isBetween(startDate, endDate);
        //return moment().local() >= moment(d).add(2, 'd').add(0, 'h').local();
    }
    public getLocalDate(d: Date): string{
        return moment.utc(d).local().format();
    }
}
