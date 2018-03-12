import { Component, Inject, Input, OnInit } from '@angular/core';
import { ElectionList } from '../ElectionList/electionlist.interface';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ElectionListService } from './electionlist.service';

@Component({
    selector: 'electionlist',
    templateUrl: './electionlist.component.html'
})
export class ElectionComponet implements OnInit {

    public elections: ElectionList[] = [];

    constructor(private activeRoute: ActivatedRoute, private electionService: ElectionListService) {
    }

    ngOnInit(): void {
        this.fetchElections();

    }

    fetchElections() {
        this.electionService.getElections().subscribe(results => { this.elections = results.elections });
    } 
}
