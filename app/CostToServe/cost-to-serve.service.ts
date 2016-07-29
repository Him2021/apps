import { Injectable } from '@angular/core';
import{Http, Response} from '@angular/http';
import{Observable} from 'rxjs/Rx';

import{CONFIG} from '../shared/config';

import {MonthRange} from './filters';
import {LOB} from './filters';
import {MsFunction} from './filters';
import {Region} from './filters';
import {ROC} from './filters';


let monthRangeUrl = CONFIG.baseUrls.monthRanges;
let lobUrl = CONFIG.baseUrls.lobs;
let msFunctionsUrl = CONFIG.baseUrls.msFunctions;
let regionsUrl = CONFIG.baseUrls.regions;
let rocsUrl = CONFIG.baseUrls.rocs;

@Injectable()
export class CostToServeService {

    constructor(private _http:Http) { }
    
    getMonthRanges(){
       return this._http.get(monthRangeUrl)
        .map((response:Response) => <MonthRange[]>response.json().data);
    }

    getLOBs(){
        return this._http.get(lobUrl)
        .map((response:Response) => <LOB[]>response.json().data);
    }

    getMsFunctions(){
        return this._http.get(msFunctionsUrl)
        .map((response:Response) => <MsFunction[]>response.json().data);
    }
    
    getRegions(){
        return this._http.get(regionsUrl)
        .map((response:Response) => <Region[]>response.json().data);
    }

    getRocs(){
        return this._http.get(rocsUrl)
        .map((response:Response) => <ROC[]>response.json().data);
    }
}