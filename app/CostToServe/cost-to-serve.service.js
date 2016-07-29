"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var config_1 = require('../shared/config');
var monthRangeUrl = config_1.CONFIG.baseUrls.monthRanges;
var lobUrl = config_1.CONFIG.baseUrls.lobs;
var msFunctionsUrl = config_1.CONFIG.baseUrls.msFunctions;
var regionsUrl = config_1.CONFIG.baseUrls.regions;
var rocsUrl = config_1.CONFIG.baseUrls.rocs;
var CostToServeService = (function () {
    function CostToServeService(_http) {
        this._http = _http;
    }
    CostToServeService.prototype.getMonthRanges = function () {
        return this._http.get(monthRangeUrl)
            .map(function (response) { return response.json().data; });
    };
    CostToServeService.prototype.getLOBs = function () {
        return this._http.get(lobUrl)
            .map(function (response) { return response.json().data; });
    };
    CostToServeService.prototype.getMsFunctions = function () {
        return this._http.get(msFunctionsUrl)
            .map(function (response) { return response.json().data; });
    };
    CostToServeService.prototype.getRegions = function () {
        return this._http.get(regionsUrl)
            .map(function (response) { return response.json().data; });
    };
    CostToServeService.prototype.getRocs = function () {
        return this._http.get(rocsUrl)
            .map(function (response) { return response.json().data; });
    };
    CostToServeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CostToServeService);
    return CostToServeService;
}());
exports.CostToServeService = CostToServeService;
//# sourceMappingURL=cost-to-serve.service.js.map