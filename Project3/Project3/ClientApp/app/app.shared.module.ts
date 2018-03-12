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
import { SearchComponent } from './components/Search/search.component';
import { ElectionComponet } from './components/ElectionList/electionlist.component';
import { RepInfoComponent } from './components/RepInfo/repinfo.component';
import { UpcomingElectionsComponent } from './components/UpcomingElections/upcomingelections.component';
import { ElectionListService } from './components/ElectionList/electionlist.service';
import { SearchService } from './components/Search/search.service';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        SearchComponent,
        ElectionComponet,
        RepInfoComponent,
        UpcomingElectionsComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'search', component: SearchComponent },
            { path: 'electionlist', component: ElectionComponet },
            { path: 'RepInfo/:address', component: RepInfoComponent },
            { path: 'UpcomingElections/:address/:electionID', component: UpcomingElectionsComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ],
    providers: [
        ElectionListService,
        SearchService
    ]
})
export class AppModuleShared {
}
