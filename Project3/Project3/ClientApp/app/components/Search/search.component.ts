import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { NormalAddress } from './normal.interface';
import { elections } from './elections.interface';
import { OtherElections } from './OtherElections.interface';
import { SearchService } from './search.service';

@Component({
    selector: 'elec-search',
    templateUrl: './search.component.html'
})
export class SearchComponent {
    public address: NormalAddress;
    public address2: NormalAddress;
    public elects: elections;
    public otherElections: OtherElections[];
    public addressSearch: string;
    public type: string;
    constructor(private http: Http, private searchService: SearchService) {
    }

    public search() {
        if (this.type === "Reps") {
            this.searchService.getReps(this.addressSearch).subscribe(results => this.address = results.normalizedInput);
        }
        else if (this.type === "Elections") {
            this.searchService.getElections(this.addressSearch).subscribe(results => {
                    this.elects = results.election;
                    this.otherElections = results.otherElections;
                    this.address2 = results.normalizedInput;
                }
            )
        }
    }
}
