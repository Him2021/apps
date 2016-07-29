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
var filter_model_1 = require('./filter-model');
var cost_to_serve_service_1 = require('./cost-to-serve.service');
var FilterDataComponent = (function () {
    function FilterDataComponent(_service) {
        this._service = _service;
        this.model = new filter_model_1.FilterModel('', '', '', '', '');
        this.submitted = false;
        this.active = true;
    }
    FilterDataComponent.prototype.ngOnInit = function () {
        this.getMonthRanges();
        this.getLobs();
        this.getMsFunctions();
        this.getRegions();
        this.getRocs();
    };
    FilterDataComponent.prototype.getMonthRanges = function () {
        var _this = this;
        return this._service.getMonthRanges()
            .subscribe(function (data) { _this.monthRanges = data; });
    };
    FilterDataComponent.prototype.getLobs = function () {
        var _this = this;
        return this._service.getLOBs()
            .subscribe(function (data) { _this.lobs = data; });
    };
    FilterDataComponent.prototype.getMsFunctions = function () {
        var _this = this;
        this.msFunctions = [];
        return this._service.getMsFunctions()
            .subscribe(function (data) { _this.msFunctions = data; });
    };
    FilterDataComponent.prototype.getRegions = function () {
        var _this = this;
        return this._service.getRegions()
            .subscribe(function (data) { _this.regions = data; });
    };
    FilterDataComponent.prototype.getRocs = function () {
        var _this = this;
        return this._service.getRocs()
            .subscribe(function (data) { _this.rocs = data; });
    };
    Object.defineProperty(FilterDataComponent.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    FilterDataComponent.prototype.onSubmit = function () { this.submitted = true; };
    FilterDataComponent = __decorate([
        core_1.Component({
            selector: 'filter-data',
            templateUrl: 'app/CostToserve/filter-data.component.html',
            providers: [cost_to_serve_service_1.CostToServeService]
        }), 
        __metadata('design:paramtypes', [cost_to_serve_service_1.CostToServeService])
    ], FilterDataComponent);
    return FilterDataComponent;
}());
exports.FilterDataComponent = FilterDataComponent;
//# sourceMappingURL=filter-data.component.js.map