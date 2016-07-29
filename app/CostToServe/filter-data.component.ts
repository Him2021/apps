import { Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

import {FilterModel} from './filter-model';
import{CostToServeService} from './cost-to-serve.service'
import{MsFunction} from './filters';
import {LOB} from './filters';
import{MonthRange} from './filters';
import{ROC} from './filters';
import{Region} from './filters';

@Component({    
    selector: 'filter-data',
    templateUrl: 'app/CostToserve/filter-data.component.html',
    providers: [CostToServeService]
})

export class FilterDataComponent implements OnInit {    
    monthRanges:MonthRange[];
    msFunctions:MsFunction[];    
    lobs:LOB[];
    rocs:ROC[];
    regions:Region[]; 
    model= new FilterModel('','','','','');
          
    submitted =false;    
    active =true;

    
    constructor(private _service:CostToServeService){
        
    }
        
    ngOnInit(){        
        this.getMonthRanges();
        this.getLobs();
        this.getMsFunctions();
        this.getRegions();
        this.getRocs();
    }

    getMonthRanges(){       
        return this._service.getMonthRanges()
        .subscribe(data =>{this.monthRanges = data});
    }

    getLobs(){       
        return this._service.getLOBs()
        .subscribe(data =>{this.lobs = data});
    }
        
    getMsFunctions(){
        this.msFunctions = [];
        return this._service.getMsFunctions()
        .subscribe(data => {this.msFunctions = data}) ;
    }   

    getRegions(){
        return this._service.getRegions()
        .subscribe(data => {this.regions = data});
    }

    
    getRocs(){
        return this._service.getRocs()
        .subscribe(data => {this.rocs = data});
    }
    
    get diagnostic() { return JSON.stringify(this.model); }

    onSubmit(){this.submitted = true;} 

}