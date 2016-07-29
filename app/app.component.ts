import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import{FilterDataComponent} from './CostToServe/filter-data.component';


@Component({
    selector: 'my-app',
    templateUrl:'app/app.component.html',
directives: [ROUTER_DIRECTIVES,FilterDataComponent]
})
export class AppComponent {
    siteTitle:string = "OPSBI Apps"
    pageTitle: string = "Cost To Serve"

 }
