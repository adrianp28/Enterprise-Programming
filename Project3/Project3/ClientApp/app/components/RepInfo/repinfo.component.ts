import { Component, Inject, Input, OnInit } from '@angular/core';
import { RepInfo } from './RepInfo.interface';
import { OfficesInterface } from './offices.interface';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SearchService } from '../Search/search.service';

@Component({
    selector: 'RepInfo',
    templateUrl: './repinfo.component.html'
})
export class RepInfoComponent implements OnInit {

    public address: any;
    public repInfo: RepInfo[] = [];
    public offices: OfficesInterface[] = [];

    constructor(private activeRoute: ActivatedRoute, private searchService: SearchService) {
    }

    ngOnInit(): void {
        this.activeRoute.paramMap.subscribe(paramMap => this.fetchReps(paramMap));
   
    }

    fetchReps(paramMap: ParamMap): void {
        this.address = paramMap.get('address');
        //this.searchService.getReps(this.address).subscribe(officesInfo => this.offices = officesInfo.offices);
        this.searchService.getReps(this.address).subscribe(repInfo => {
            this.repInfo = repInfo.officials;
            this.offices = repInfo.offices;
            for (let office of this.offices) {
                console.log("sdfsvsdc");
                for (let index of office.officialIndices) {
                 this.repInfo[index].office = office.name;
                    console.log(index);
                }
            }
        });
        //this.offices[0].name = "dsfdfsdgdv";
        //console.log(this.offices[0].name);
        
    }
}
