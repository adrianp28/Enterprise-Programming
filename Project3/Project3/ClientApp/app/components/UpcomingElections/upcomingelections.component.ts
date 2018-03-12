import { Component, Inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SearchService } from '../Search/search.service';
import { elections } from '../Search/elections.interface';
import { PollingLocations } from './PollingLocations.interface';
import { EarlyVote } from './EarlyVote.interface';
import { contests } from './contests.interface';

@Component({
    selector: 'UpcomingElections',
    templateUrl: './upcomingelections.component.html'
})
export class UpcomingElectionsComponent implements OnInit {

    public address: any;
    public electionID: any;
    public elect: elections;
    public pollingLocations: PollingLocations[];
    public earlyVote: EarlyVote[];
    public contest: contests[];
    constructor(private activeRoute: ActivatedRoute, private searchService: SearchService) {
    }

    ngOnInit(): void {
        this.activeRoute.paramMap.subscribe(paramMap => this.fetchReps(paramMap));
   
    }

    fetchReps(paramMap: ParamMap): void {
        this.address = paramMap.get('address');
        this.electionID = paramMap.get('electionID');
        this.searchService.getElection(this.address, this.electionID).subscribe(electInfo => {
            this.elect = electInfo.election;
            this.pollingLocations = electInfo.pollingLocations;
            this.earlyVote = electInfo.earlyVoteSites;
            this.contest = electInfo.contests;
        });
    }
}
