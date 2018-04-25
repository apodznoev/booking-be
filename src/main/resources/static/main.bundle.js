webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_core_module__ = __webpack_require__("./src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_containers_app_component__ = __webpack_require__("./src/app/core/containers/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__state_app_store__ = __webpack_require__("./src/app/state/app.store.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_4__state_app_store__["a" /* AppStore */], __WEBPACK_IMPORTED_MODULE_2__core_core_module__["a" /* CoreModule */].forRoot()],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__core_containers_app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/booking-inquiry/booking-inquiry.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingInquiryModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_past_inquiry_service_package_component__ = __webpack_require__("./src/app/booking-inquiry/components/past-inquiry-service-package.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_past_inquiry_component__ = __webpack_require__("./src/app/booking-inquiry/components/past-inquiry.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_selected_service_package_component__ = __webpack_require__("./src/app/booking-inquiry/components/selected-service-package.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_service_package_component__ = __webpack_require__("./src/app/booking-inquiry/components/service-package.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__containers_current_inquiry_component__ = __webpack_require__("./src/app/booking-inquiry/containers/current-inquiry.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__containers_search_result_component__ = __webpack_require__("./src/app/booking-inquiry/containers/search-result.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__containers_search_field_component__ = __webpack_require__("./src/app/booking-inquiry/containers/search-field.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__containers_search_component__ = __webpack_require__("./src/app/booking-inquiry/containers/search.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_10__containers_search_component__["a" /* SearchComponent */],
    __WEBPACK_IMPORTED_MODULE_8__containers_search_result_component__["a" /* SearchResultComponent */],
    __WEBPACK_IMPORTED_MODULE_6__components_service_package_component__["a" /* ServicePackageComponent */],
    __WEBPACK_IMPORTED_MODULE_4__components_past_inquiry_component__["a" /* PastInquiryComponent */],
    __WEBPACK_IMPORTED_MODULE_7__containers_current_inquiry_component__["a" /* CurrentInquiryComponent */],
    __WEBPACK_IMPORTED_MODULE_3__components_past_inquiry_service_package_component__["a" /* PastInquiryServicePackageComponent */],
    __WEBPACK_IMPORTED_MODULE_5__components_selected_service_package_component__["a" /* SelectedServicePackageComponent */],
    __WEBPACK_IMPORTED_MODULE_9__containers_search_field_component__["a" /* SearchFieldComponent */]
];
var BookingInquiryModule = /** @class */ (function () {
    function BookingInquiryModule() {
    }
    BookingInquiryModule_1 = BookingInquiryModule;
    BookingInquiryModule.forRoot = function () {
        return {
            ngModule: BookingInquiryModule_1
        };
    };
    BookingInquiryModule = BookingInquiryModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* NgModule */])({
            declarations: COMPONENTS,
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* ReactiveFormsModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_10__containers_search_component__["a" /* SearchComponent */], __WEBPACK_IMPORTED_MODULE_8__containers_search_result_component__["a" /* SearchResultComponent */]]
        })
    ], BookingInquiryModule);
    return BookingInquiryModule;
    var BookingInquiryModule_1;
}());



/***/ }),

/***/ "./src/app/booking-inquiry/components/past-inquiry-service-package.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PastInquiryServicePackageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PastInquiryServicePackageComponent = /** @class */ (function () {
    function PastInquiryServicePackageComponent() {
        this.cardOpen = false;
    }
    PastInquiryServicePackageComponent.prototype.toggleCard = function () {
        this.cardOpen = !this.cardOpen;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], PastInquiryServicePackageComponent.prototype, "servicePackage", void 0);
    PastInquiryServicePackageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'vwbt-past-inquiry-service-package',
            template: "\n        <div class=\"card mb-3\">\n            <h5 class=\"card-header package-header\" (click)=\"toggleCard()\">\n                {{ servicePackage.name }}\n            </h5>\n            <div class=\"card-body package-body\" *ngIf=\"cardOpen\">\n                <div>\n                    <p>Description: {{ servicePackage.description }}</p>\n                    <div class=\"row\">\n                        <div class=\"col\">\n                            <p>Spare parts</p>\n                            <ul>\n                                <li *ngFor=\"let part of servicePackage.parts\">{{part}}</li>\n                            </ul>\n                        </div>\n                        <div class=\"col\">\n                            <p>Labour</p>\n                            <ul>\n                                <li *ngFor=\"let labourItem of servicePackage.labour\">{{labourItem}}</li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    ",
            styles: [
                "\n        .card {\n            border: none;\n        }\n        .package-header {\n            background: #fff;\n            border: none;\n            cursor: pointer;\n        }\n        .package-body {\n            border-top: 1px solid #E6E6E6;\n        }\n    "
            ]
        }),
        __metadata("design:paramtypes", [])
    ], PastInquiryServicePackageComponent);
    return PastInquiryServicePackageComponent;
}());



/***/ }),

/***/ "./src/app/booking-inquiry/components/past-inquiry.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PastInquiryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PastInquiryComponent = /** @class */ (function () {
    function PastInquiryComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], PastInquiryComponent.prototype, "pastInquiry", void 0);
    PastInquiryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'vwbt-past-inquiry',
            template: "\n        <div class=\"card\">\n            <h5 class=\"card-header inquiry-header\">\n                <span>Inquiry: {{ pastInquiry.date | date:'dd.MM.yyyy HH:mm' }}</span>\n                <span class=\"total-price\">\n                    Total price: {{ pastInquiry.price | number:'1.2-2':'de' }} \u20AC\n                </span>\n            </h5>\n            <div class=\"card-body inquiry-body\">\n                <vwbt-past-inquiry-service-package\n                    *ngFor=\"let servicePackage of pastInquiry.servicePackages\"\n                    [servicePackage]=\"servicePackage\">\n                </vwbt-past-inquiry-service-package>\n            </div>\n        </div>\n    ",
            styles: [
                "\n        .card {\n            border: none;\n        }\n        .inquiry-header {\n            background: #6E747B;\n            border-bottom: 1px solid #6E747B;\n            color: #fff;\n            font-size: 18px;\n            padding-bottom: 20px;\n            padding-top: 20px;\n        }\n        .inquiry-body {\n            background: #E6E6E6;\n        }\n        .total-price {\n            float: right;\n        }\n    "
            ]
        }),
        __metadata("design:paramtypes", [])
    ], PastInquiryComponent);
    return PastInquiryComponent;
}());



/***/ }),

/***/ "./src/app/booking-inquiry/components/selected-service-package.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectedServicePackageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SelectedServicePackageComponent = /** @class */ (function () {
    function SelectedServicePackageComponent() {
        this.showDetails = false;
        this.removeFromInquiry = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
    }
    SelectedServicePackageComponent.prototype.toggleDetails = function (event) {
        this.showDetails = !this.showDetails;
        event.stopPropagation();
    };
    SelectedServicePackageComponent.prototype.removeFromInquiryClicked = function (event, id) {
        event.stopPropagation();
        this.removeFromInquiry.emit(id);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], SelectedServicePackageComponent.prototype, "servicePackage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], SelectedServicePackageComponent.prototype, "removeFromInquiry", void 0);
    SelectedServicePackageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'vwbt-selected-service-package',
            template: "\n        <div class=\"card mb-3\">\n            <h5 class=\"card-header\" (click)=\"toggleDetails($event)\">\n                <span class=\"name\">{{ servicePackage.name }}</span>\n                <span class=\"remove\">\n                    <i class=\"far fa-trash-alt\"\n                        (click)=\"removeFromInquiryClicked($event, servicePackage.id)\">\n                    </i>\n                </span>\n                <span class=\"price mr-4\">Price: {{ servicePackage.price | number:'1.2-2':'de' }} \u20AC</span>\n            </h5>\n            <div class=\"card-body text-left\" *ngIf=\"showDetails\">\n                <div>\n                    <p>Description: {{ servicePackage.description }}</p>\n                    <div class=\"row\">\n                        <div class=\"col\">\n                            <p>Spare parts</p>\n                            <ul>\n                                <li *ngFor=\"let part of servicePackage.parts\">{{part}}</li>\n                            </ul>\n                        </div>\n                        <div class=\"col\">\n                            <p>Labour</p>\n                            <ul>\n                                <li *ngFor=\"let labourItem of servicePackage.labour\">{{labourItem}}</li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    ",
            styles: [
                "\n        h5 {\n            cursor: pointer;\n            font-size: 18px;\n            line-height: 35px;\n            padding-bottom: 5px;\n            padding-top: 5px;\n        }\n        .name {\n            float: left;\n        }\n        .btn-add-to-inquiry {\n            float: right;\n            width: 184px;\n        }\n        .card {\n            border: none;\n        }\n        .card-header {\n            background: #fff;\n            border: none;\n        }\n        .card-body {\n            border-top: 1px solid #E6E6E6;\n        }\n        .price,\n        .remove {\n            float: right;\n        }\n    "
            ]
        })
    ], SelectedServicePackageComponent);
    return SelectedServicePackageComponent;
}());



/***/ }),

/***/ "./src/app/booking-inquiry/components/service-package.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicePackageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServicePackageComponent = /** @class */ (function () {
    function ServicePackageComponent() {
        this.showDetails = false;
        this.servicePackageSelected = false;
        this.getDetails = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.addToInquiry = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
    }
    Object.defineProperty(ServicePackageComponent.prototype, "detailsMissing", {
        get: function () {
            return !(this.servicePackage.description || this.servicePackage.labour || this.servicePackage.parts);
        },
        enumerable: true,
        configurable: true
    });
    ServicePackageComponent.prototype.getDetailsClicked = function (event, id) {
        this.showDetails = !this.showDetails;
        event.stopPropagation();
        if (!this.detailsMissing) {
            return;
        }
        this.getDetails.emit(id);
    };
    ServicePackageComponent.prototype.addToInquiryClicked = function (event, id) {
        event.stopPropagation();
        if (this.detailsMissing) {
            this.getDetails.emit(id);
        }
        this.addToInquiry.emit(id);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], ServicePackageComponent.prototype, "servicePackage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], ServicePackageComponent.prototype, "servicePackageSelected", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], ServicePackageComponent.prototype, "getDetails", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], ServicePackageComponent.prototype, "addToInquiry", void 0);
    ServicePackageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'vwbt-service-package',
            template: "\n        <div class=\"card\">\n            <h5 class=\"card-header justify-content-between\" (click)=\"getDetailsClicked($event, servicePackage.id)\">\n                {{ servicePackage.name }}\n                <button type=\"button\" class=\"btn btn-primary btn-add-to-inquiry\"\n                    [ngClass]=\"{'disabled': servicePackageSelected}\"\n                    (click)=\"addToInquiryClicked($event, servicePackage.id)\">\n                    Add to inquiry\n                </button>\n                <span class=\"price mr-4\">Price: {{ servicePackage.price | number:'1.2-2':'de' }} \u20AC</span>\n            </h5>\n            <div class=\"card-body\" *ngIf=\"showDetails && !detailsMissing\">\n                <div *ngIf=\"!detailsMissing\">\n                    <p>Description: {{ servicePackage.description }}</p>\n                    <div class=\"row\">\n                        <div class=\"col\">\n                            <p>Spare parts</p>\n                            <ul>\n                                <li *ngFor=\"let part of servicePackage.parts\">{{part}}</li>\n                            </ul>\n                        </div>\n                        <div class=\"col\">\n                            <p>Labour</p>\n                            <ul>\n                                <li *ngFor=\"let labourItem of servicePackage.labour\">{{labourItem}}</li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    ",
            styles: [
                "\n        h5 {\n            cursor: pointer;\n            font-size: 18px;\n            line-height: 35px;\n            padding-bottom: 5px;\n            padding-top: 5px;\n        }\n        .btn-add-to-inquiry {\n            float: right;\n            width: 184px;\n        }\n        .card {\n            border: none;\n        }\n        .card-header {\n            background: #fff;\n            border: none;\n        }\n        .card-body {\n            border-top: 1px solid #E6E6E6;\n        }\n        .price {\n            float: right;\n        }\n    "
            ]
        })
    ], ServicePackageComponent);
    return ServicePackageComponent;
}());



/***/ }),

/***/ "./src/app/booking-inquiry/containers/current-inquiry.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrentInquiryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__state_booking_inquiry_services_booking_inquiry_state_service__ = __webpack_require__("./src/app/state/booking-inquiry/services/booking-inquiry-state.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CurrentInquiryComponent = /** @class */ (function () {
    function CurrentInquiryComponent(bookingInquiriesStateService) {
        this.bookingInquiriesStateService = bookingInquiriesStateService;
    }
    CurrentInquiryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bookingInquiriesStateService.getCurrentVIN().subscribe(function (vin) { return (_this.vin = vin); });
        this.isCurrentInquirySaved = this.bookingInquiriesStateService.isCurrentInquirySaved();
    };
    Object.defineProperty(CurrentInquiryComponent.prototype, "totalPrice", {
        get: function () {
            return this.servicePackages.map(function (x) { return x.price; }).reduce(function (x, y) { return x + y; }, 0);
        },
        enumerable: true,
        configurable: true
    });
    CurrentInquiryComponent.prototype.removeFromInquiry = function (id) {
        this.bookingInquiriesStateService.removeServicePackageFromInquiry(id);
    };
    CurrentInquiryComponent.prototype.saveInquiry = function () {
        this.bookingInquiriesStateService.saveInquiry({
            packageIds: this.servicePackages.map(function (p) { return p.id; }),
            vin: this.vin
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Array)
    ], CurrentInquiryComponent.prototype, "servicePackages", void 0);
    CurrentInquiryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'vwbt-current-inquiry',
            template: "\n        <vwbt-selected-service-package\n            *ngFor=\"let servicePackage of servicePackages\"\n            [servicePackage]=\"servicePackage\"\n            (removeFromInquiry)=\"removeFromInquiry($event)\">\n        </vwbt-selected-service-package>\n        <button type=\"button\" class=\"btn btn-primary btn-add-to-inquiry\"\n            (click)=\"saveInquiry()\"\n            [disabled]=\"isCurrentInquirySaved | async\">\n            Save inquiry\n        </button>\n        <p class=\"price mr-3\">\n            Total price: {{ totalPrice | number:'1.2-2':'de' }} \u20AC\n        </p>\n    ",
            styles: [
                "\n        .btn-add-to-inquiry {\n            float: right;\n        }\n        .price {\n            float: right;\n            line-height: 40px;\n            margin: 0;\n        }\n    "
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__state_booking_inquiry_services_booking_inquiry_state_service__["a" /* BookingInquiryStateService */]])
    ], CurrentInquiryComponent);
    return CurrentInquiryComponent;
}());



/***/ }),

/***/ "./src/app/booking-inquiry/containers/search-field.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchFieldComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__validators_vin_validators__ = __webpack_require__("./src/app/booking-inquiry/validators/vin-validators.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__state_booking_inquiry_services_booking_inquiry_state_service__ = __webpack_require__("./src/app/state/booking-inquiry/services/booking-inquiry-state.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_api_service__ = __webpack_require__("./src/app/shared/services/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchFieldComponent = /** @class */ (function () {
    function SearchFieldComponent(bookingInquiriesStateService, apiService) {
        this.bookingInquiriesStateService = bookingInquiriesStateService;
        this.apiService = apiService;
        this.vinServerError = false;
        this.bookingInquiryResultExists = false;
        this.vinFormGroup = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            vin: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(17),
                __WEBPACK_IMPORTED_MODULE_2__validators_vin_validators__["a" /* firstSixCharsShouldBeLetters */](),
                __WEBPACK_IMPORTED_MODULE_2__validators_vin_validators__["b" /* lastSixCharsShouldBeNumbers */](),
                __WEBPACK_IMPORTED_MODULE_2__validators_vin_validators__["c" /* noSpecialSign */]()
            ])
        }, { updateOn: 'submit' });
    }
    Object.defineProperty(SearchFieldComponent.prototype, "vinInputMode", {
        get: function () {
            return !this.vinSearchTerm || !this.bookingInquiryResultExists;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchFieldComponent.prototype, "vinFormValue", {
        get: function () {
            return this.vinFormGroup.controls.vin.value;
        },
        enumerable: true,
        configurable: true
    });
    SearchFieldComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bookingInquiriesStateService.getCurrentVIN().subscribe(function (vin) { return (_this.vinSearchTerm = vin); });
        this.bookingInquiriesStateService
            .bookingInquiryResultExists()
            .subscribe(function (x) { return (_this.bookingInquiryResultExists = x); });
        this.apiService.getVinServerError().subscribe(function (vinServerError) { return (_this.vinServerError = vinServerError); });
    };
    SearchFieldComponent.prototype.resetSearch = function () {
        this.searchInput.nativeElement.value = '';
        this.bookingInquiriesStateService.resetBookingInquiries();
    };
    SearchFieldComponent.prototype.search = function () {
        if (this.vinFormGroup.invalid) {
            return;
        }
        this.bookingInquiriesStateService.fetchBookingInquiries(this.vinFormValue);
        this.bookingInquiriesStateService.setCurrentVIN(this.vinFormValue);
    };
    Object.defineProperty(SearchFieldComponent.prototype, "validationMessage", {
        get: function () {
            if (this.vinFormGroup.valid || !this.vinForm.submitted) {
                return '';
            }
            var errors = Object.keys(this.vinFormGroup.controls.vin.errors);
            if (errors.length > 1) {
                return "You have entered an incorrect VIN. Please enter a VIN according to this example: WVWZZZ1J3W3867502.";
            }
            switch (errors[0]) {
                case 'required':
                case 'minlength':
                    return 'The VIN must be 17 characters long.';
                case 'firstSixCharsError':
                    return 'The first six characters of the VIN must be letters.';
                case 'lastSixCharsError':
                    return 'The last six characters must be numeric.';
                case 'noSpecialSignError':
                    return 'The VIN consists only of letters and numbers.';
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ViewChild */])('form'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */])
    ], SearchFieldComponent.prototype, "vinForm", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ViewChild */])('searchInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */])
    ], SearchFieldComponent.prototype, "searchInput", void 0);
    SearchFieldComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'vwbt-search-field',
            template: "\n    <form [formGroup]=\"vinFormGroup\" class=\"form-inline justify-content-center\"\n        (ngSubmit)=\"search()\" #form=\"ngForm\">\n        <div class=\"form-group mr-2\">\n            <label for=\"vwbt-vin-input\">\n                <i class=\"fas fa-car\"></i>\n            </label>\n        </div>\n        <div class=\"form-group mr-2\">\n            <input [ngClass]=\n                    \"{'hidden': !vinInputMode,\n                    'is-invalid': ((!form.valid && form.submitted) || vinServerError)}\"\n                #searchInput\n                formControlName=\"vin\" class=\"vin-input form-control\"\n                id=\"vwbt-vin-input\" placeholder=\"VIN\" type=\"text\" maxlength=\"17\" />\n            <p *ngIf=\"!vinInputMode\" class=\"vin-text\">{{ vinSearchTerm }}</p>\n        </div>\n        <div class=\"form-group\">\n            <button *ngIf=\"vinInputMode\" type=\"submit\"\n                class=\"btn btn-submit btn-outline-light\">\n                Confirm\n            </button>\n            <button *ngIf=\"!vinInputMode\" type=\"button\"\n                class=\"btn btn-submit btn-outline-light\"\n                (click)=\"resetSearch()\">\n                Change\n            </button>\n        </div>\n    </form>\n    ",
            styles: [
                "\n            .vin {\n                background: #6E747B;\n                color: #FFF;\n                padding-bottom: 15px;\n                padding-top: 15px;\n                text-align: center;\n            }\n            .vin-input {\n                text-align: center;\n                width: 265px;\n            }\n            .vin-text {\n                display: inline-block;\n                margin: 0;\n                width: 265px;\n            }\n            .hidden {\n                display: none;\n            }\n            .btn-submit {\n                font-size: 16px;\n                width: 90px;\n            }\n            .invalid {\n                color: #dc3545;\n            }\n            .vin-body {\n                background: #E6E6E6;\n                padding-top: 30px;\n            }\n            .vin-body .fa-inbox {\n                padding-right: 10px;\n            }\n        "
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__state_booking_inquiry_services_booking_inquiry_state_service__["a" /* BookingInquiryStateService */], __WEBPACK_IMPORTED_MODULE_4__shared_services_api_service__["a" /* ApiService */]])
    ], SearchFieldComponent);
    return SearchFieldComponent;
}());



/***/ }),

/***/ "./src/app/booking-inquiry/containers/search-result.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchResultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__state_booking_inquiry_services_booking_inquiry_state_service__ = __webpack_require__("./src/app/state/booking-inquiry/services/booking-inquiry-state.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchResultComponent = /** @class */ (function () {
    function SearchResultComponent(bookingInquiriesStateService) {
        this.bookingInquiriesStateService = bookingInquiriesStateService;
        this.activeTabIndex = 0;
    }
    SearchResultComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bookingInquiriesStateService
            .getServicePackages()
            .subscribe(function (servicePackages) { return (_this.servicePackages = servicePackages); });
        this.bookingInquiriesStateService
            .getPastInquiries()
            .subscribe(function (pastInquiries) { return (_this.pastInquiries = pastInquiries); });
        this.bookingInquiriesStateService
            .getSelectedPackages()
            .subscribe(function (selectedPackages) { return (_this.selectedPackages = selectedPackages); });
    };
    SearchResultComponent.prototype.isPackageSelected = function (id) {
        return this.selectedPackages.some(function (x) { return x === id; });
    };
    SearchResultComponent.prototype.setActiveTabIndex = function (index) {
        this.activeTabIndex = index;
    };
    SearchResultComponent.prototype.servicePackageTracker = function (index, servicePackage) {
        return servicePackage.id;
    };
    SearchResultComponent.prototype.handleGetDetails = function (id) {
        this.bookingInquiriesStateService.fetchServicePackageDetails(id);
    };
    SearchResultComponent.prototype.handleAddToInquiry = function (id) {
        this.bookingInquiriesStateService.addServicePackageToInquiry(id);
    };
    SearchResultComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'vwbt-search-result',
            template: "\n        <div class=\"container\"\n            *ngIf=\"(servicePackages && servicePackages.length > 0) || (pastInquiries && pastInquiries.length > 0)\">\n            <div class=\"row mt-3\">\n                <div class=\"col\">\n                    <div class=\"card mt-3\">\n                        <div class=\"card-header\">\n                            <ul class=\"nav nav-pills card-header-pills nav-fill\">\n                                <li class=\"nav-item nav-service-packages\"\n                                    (click)=\"setActiveTabIndex(0)\">\n                                    <a class=\"nav-link\" href=\"#\">\n                                        <i class=\"fas fa-wrench\"></i>\n                                        Available service packages\n                                    </a>\n                                </li>\n                                <li class=\"nav-item nav-past-inquiries\"\n                                    (click)=\"setActiveTabIndex(1)\">\n                                    <a class=\"nav-link\" href=\"#\">\n                                        <span class=\"icon-past-inquiries\">\n                                            <i class=\"fas fa-calendar\"></i>\n                                            <span *ngIf=\"pastInquiries && pastInquiries.length > 0\"\n                                                class=\"badge badge-past-inquiries badge-pill badge-primary\">\n                                                &nbsp;\n                                            </span>\n                                        </span>\n                                        Past inquiries\n                                    </a>\n                                </li>\n                            </ul>\n                        </div>\n                        <div class=\"card-body body-service-packages\" *ngIf=\"activeTabIndex === 0\">\n                            <div *ngIf=\"servicePackages && servicePackages.length > 0\">\n                                <div *ngFor=\"let servicePackage of servicePackages; trackBy: servicePackageTracker\"\n                                    class=\"mt-3\">\n                                    <vwbt-service-package\n                                        [servicePackageSelected]=\"isPackageSelected(servicePackage.id)\"\n                                        [servicePackage]=\"servicePackage\"\n                                        (getDetails)=\"handleGetDetails($event)\"\n                                        (addToInquiry)=\"handleAddToInquiry($event)\">\n                                    </vwbt-service-package>\n                                </div>\n                            </div>\n                            <p *ngIf=\"servicePackages && servicePackages.length === 0\">\n                                There are no service packages available for the current vehicle.\n                            </p>\n                        </div>\n                        <div class=\"card-body body-past-inquiries\" *ngIf=\"activeTabIndex === 1\">\n                            <div *ngIf=\"pastInquiries && pastInquiries.length > 0\">\n                                <div *ngFor=\"let pastInquiry of pastInquiries\"\n                                    class=\"mt-3\">\n                                    <vwbt-past-inquiry\n                                        [pastInquiry]=\"pastInquiry\">\n                                    </vwbt-past-inquiry>\n                                </div>\n                            </div>\n                            <p *ngIf=\"pastInquiries && pastInquiries.length === 0\">\n                                There are no past inquiries available for the current vehicle.\n                            </p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    ",
            styles: [
                "\n        .card-header {\n            border-bottom: none;\n            padding: 0;\n        }\n        .card-header-pills {\n            margin: 0;\n        }\n        .nav-item {\n            padding-bottom: 6px;\n            padding-top: 7px;\n        }\n        .nav-item a {\n            color: #000;\n        }\n        .nav-item i {\n            padding-right: 10px;\n        }\n        .nav-service-packages {\n            background: #E6E6E6;\n        }\n        .nav-past-inquiries {\n            background: #FFF;\n        }\n        .body-service-packages {\n            background: #E6E6E6;\n        }\n        .icon-past-inquiries {\n            position: relative;\n        }\n        .badge-past-inquiries {\n            font-size: 9px;\n            left: 8px;\n            position: absolute;\n            top: -4px;\n        }\n    "
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__state_booking_inquiry_services_booking_inquiry_state_service__["a" /* BookingInquiryStateService */]])
    ], SearchResultComponent);
    return SearchResultComponent;
}());



/***/ }),

/***/ "./src/app/booking-inquiry/containers/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_api_service__ = __webpack_require__("./src/app/shared/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__state_booking_inquiry_services_booking_inquiry_state_service__ = __webpack_require__("./src/app/state/booking-inquiry/services/booking-inquiry-state.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_combineLatest__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/combineLatest.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_field_component__ = __webpack_require__("./src/app/booking-inquiry/containers/search-field.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchComponent = /** @class */ (function () {
    function SearchComponent(bookingInquiriesStateService, apiService) {
        this.bookingInquiriesStateService = bookingInquiriesStateService;
        this.apiService = apiService;
        this.initialState = true;
        this.vinServerError = false;
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bookingInquiriesStateService.getCurrentVIN().subscribe(function (x) { return (_this.initialState = !x); });
        Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_combineLatest__["a" /* combineLatest */])(this.bookingInquiriesStateService.getServicePackages(), this.bookingInquiriesStateService.getPastInquiries(), function (servicePackages, pastInquiries) {
            return {
                servicePackages: servicePackages,
                pastInquiries: pastInquiries
            };
        }).subscribe(function (inquiryResult) {
            _this.servicePackages = inquiryResult.servicePackages;
            _this.pastInquiries = inquiryResult.pastInquiries;
        });
        Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_combineLatest__["a" /* combineLatest */])(this.bookingInquiriesStateService.getSelectedPackages(), this.bookingInquiriesStateService.getServicePackages(), function (selectedPackageIds, servicePackages) {
            return servicePackages.filter(function (sp) {
                return selectedPackageIds.some(function (packageId) { return packageId === sp.id; });
            });
        }).subscribe(function (selectedPackages) { return (_this.selectedServicePackages = selectedPackages); });
        this.apiService.getVinServerError().subscribe(function (vinServerError) { return (_this.vinServerError = vinServerError); });
    };
    Object.defineProperty(SearchComponent.prototype, "validationMessage", {
        get: function () {
            return this.searchForm.validationMessage;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ViewChild */])('searchForm'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__search_field_component__["a" /* SearchFieldComponent */])
    ], SearchComponent.prototype, "searchForm", void 0);
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'vwbt-search',
            template: "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div class=\"card mt-4\">\n                <div class=\"card-header vin\">\n                    <div class=\"col-auto\">\n                        <vwbt-search-field #searchForm></vwbt-search-field>\n                    </div>\n                </div>\n                <div class=\"card-body vin-body text-center\" *ngIf=\"servicePackages.length > 0\">\n                    <p *ngIf=\"selectedServicePackages.length === 0\">\n                        <i class=\"fas fa-inbox\"></i> Currently there is no service package selected\n                    </p>\n                    <vwbt-current-inquiry *ngIf=\"selectedServicePackages.length > 0\"\n                        [servicePackages]=\"selectedServicePackages\">\n                    </vwbt-current-inquiry>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"vin-message mt-4 row text-center\">\n        <div class=\"col\">\n            <p class=\"invalid\" *ngIf=\"validationMessage\">{{validationMessage}}</p>\n            <p class=\"text-center\" *ngIf=\"!validationMessage && initialState && !vinServerError\">\n                Enter the <strong>Vehicle identification number</strong>\n                to receive relevant service packages and past inquiries concerning\n                a vehicle.\n            </p>\n            <p *ngIf=\"!initialState && servicePackages.length === 0 && pastInquiries.length === 0 && !vinServerError\">\n                No service packages or past inquiries could be found for the VIN you entered.\n            </p>\n            <p *ngIf=\"vinServerError\" class=\"invalid\">\n                There was a problem with retrieving the details associated with the VIN.\n                Please check your VIN and try again.\n            </p>\n        </div>\n    </div>\n</div>",
            styles: [
                "\n            .vin {\n                background: #6E747B;\n                color: #FFF;\n                padding-bottom: 15px;\n                padding-top: 15px;\n                text-align: center;\n            }\n            .vin-input {\n                text-align: center;\n                width: 265px;\n            }\n            .vin-text {\n                display: inline-block;\n                margin: 0;\n                width: 265px;\n            }\n            .hidden {\n                display: none;\n            }\n            .btn-submit {\n                font-size: 16px;\n                width: 90px;\n            }\n            .invalid {\n                color: #dc3545;\n            }\n            .vin-body {\n                background: #E6E6E6;\n                padding-top: 30px;\n            }\n            .vin-body .fa-inbox {\n                padding-right: 10px;\n            }\n        "
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__state_booking_inquiry_services_booking_inquiry_state_service__["a" /* BookingInquiryStateService */], __WEBPACK_IMPORTED_MODULE_1__shared_services_api_service__["a" /* ApiService */]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/booking-inquiry/validators/vin-validators.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = firstSixCharsShouldBeLetters;
/* harmony export (immutable) */ __webpack_exports__["b"] = lastSixCharsShouldBeNumbers;
/* harmony export (immutable) */ __webpack_exports__["c"] = noSpecialSign;
function firstSixCharsShouldBeLetters() {
    return function (control) {
        if (control.value.length < 17) {
            return null;
        }
        var firstSixCharacters = control.value.substring(0, 6);
        var isValid = firstSixCharacters.match('^[a-zA-Z]+$');
        return isValid ? null : { firstSixCharsError: { value: control.value } };
    };
}
function lastSixCharsShouldBeNumbers() {
    return function (control) {
        if (control.value.length < 17) {
            return null;
        }
        var lastSixCharacters = control.value.substring(11, 17);
        var isValid = lastSixCharacters.match('^[0-9]+$');
        return isValid ? null : { lastSixCharsError: { value: control.value } };
    };
}
function noSpecialSign() {
    return function (control) {
        if (control.value.length < 17) {
            return null;
        }
        var containsSpecialCharacters = control.value.match('[^A-Za-z0-9]+');
        return containsSpecialCharacters ? { noSpecialSignError: { value: control.value } } : null;
    };
}


/***/ }),

/***/ "./src/app/core/components/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'vwbt-header',
            template: "\n        <header>\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col\">\n                        <h1>\n                            <img src=\"assets/icons8-car-50.png\" style=\"width:100px;height:125px;\" alt=\"Training\">\n                            <strong>Training</strong>\n                            <sub>Booking & Inquiry Online Service</sub>\n                        </h1>\n                    </div>\n                    <div class=\"col text-right\">\n                        <p class=\"avatar\"></p>\n                        <p class=\"username\">Thomas M\u00FCller</p>\n                        <p class=\"logout\"><a href=\"#\">Log out</a></p>\n                    </div>\n                </div>\n            </div>\n        </header>\n    ",
            styles: [
                "\n        header {\n            background: #EFEFEF;\n            border-bottom: 1px solid #5E89BB;\n            height: 162px;\n        }\n\n        h1 {\n            height: 162px;\n        }\n\n        h1 img {\n            float: left;\n            padding-top: 30px;\n        }\n\n        h1 strong {\n            left: 20px;\n            position: relative;\n            top: 35px;\n        }\n\n        h1 sub {\n            color: #555;\n            display: block;\n            font-size: 24px;\n            left: 21px;\n            top: 50px;\n            position: relative;\n        }\n\n        .avatar {\n            background: #bbb;\n            border: 1px solid #999;\n            border-radius: 100%;\n            float: right;\n            height: 64px;\n            position: relative;\n            top: 45px;\n            width: 64px;\n        }\n\n        .username {\n            font-size: 20px;\n            position: relative;\n            right: 20px;\n            top: 48px;\n        }\n\n        .logout {\n            font-size: 18px;\n            position: relative;\n            right: 20px;\n            top: 33px;\n        }\n    "
            ]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/core/components/loader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoaderComponent = /** @class */ (function () {
    function LoaderComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Number)
    ], LoaderComponent.prototype, "loading", void 0);
    LoaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'vwbt-loader',
            template: "\n        <div class=\"loader\" *ngIf=\"loading > 0\">\n            <i class=\"fas fa-sync fa-spin\"></i>\n        </div>\n    ",
            styles: [
                "\n        .loader {\n            background: rgba(0,0,0,0.6);\n            border-radius: 10px;\n            color: #FFF;\n            height: 120px;\n            left: 50%;\n            line-height: 120px;\n            margin-left: -60px;\n            position: fixed;\n            text-align: center;\n            top: 10%;\n            width: 120px;\n        }\n    "
            ]
        })
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/app/core/containers/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__state_core_services_core_state_service__ = __webpack_require__("./src/app/state/core/services/core-state.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_locales_de__ = __webpack_require__("./node_modules/@angular/common/locales/de.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(coreStateService) {
        this.coreStateService = coreStateService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_common__["d" /* registerLocaleData */])(__WEBPACK_IMPORTED_MODULE_2__angular_common_locales_de__["a" /* default */]);
        this.coreStateService.getLoading().subscribe(function (loading) { return (_this.loading = loading); });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'vwbt-app',
            template: "\n        <vwbt-header></vwbt-header>\n\n        <vwbt-search></vwbt-search>\n\n        <vwbt-search-result></vwbt-search-result>\n\n        <vwbt-loader [loading]=\"loading\"></vwbt-loader>\n    "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__state_core_services_core_state_service__["a" /* CoreStateService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__containers_app_component__ = __webpack_require__("./src/app/core/containers/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__state_state_module__ = __webpack_require__("./src/app/state/state.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_header_component__ = __webpack_require__("./src/app/core/components/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__booking_inquiry_booking_inquiry_module__ = __webpack_require__("./src/app/booking-inquiry/booking-inquiry.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_loader_component__ = __webpack_require__("./src/app/core/components/loader.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule_1 = CoreModule;
    CoreModule.forRoot = function () {
        return {
            ngModule: CoreModule_1
        };
    };
    CoreModule = CoreModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__containers_app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_5__components_header_component__["a" /* HeaderComponent */], __WEBPACK_IMPORTED_MODULE_7__components_loader_component__["a" /* LoaderComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_6__booking_inquiry_booking_inquiry_module__["a" /* BookingInquiryModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_4__state_state_module__["a" /* StateModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */].forRoot()]
        })
    ], CoreModule);
    return CoreModule;
    var CoreModule_1;
}());



/***/ }),

/***/ "./src/app/shared/services/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.vinServerError = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](false);
    }
    ApiService.prototype.getBookingInquiry = function (vin) {
        this.setVinServerError(false);
        return this.http.get("/api/vin/" + vin);
    };
    ApiService.prototype.getPackageDetails = function (id) {
        return this.http.get("/api/servicepackages/" + id + "/details");
    };
    ApiService.prototype.saveInquiry = function (inquiry) {
        return this.http.post("/api/inquiries/" + inquiry.vin, inquiry.packageIds.map(function (packageId) {
            return { id: packageId };
        }));
    };
    ApiService.prototype.setVinServerError = function (state) {
        this.vinServerError.next(state);
    };
    ApiService.prototype.getVinServerError = function () {
        return this.vinServerError;
    };
    ApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__("./src/app/shared/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule_1 = SharedModule;
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1,
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */]]
        };
    };
    SharedModule = SharedModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]]
        })
    ], SharedModule);
    return SharedModule;
    var SharedModule_1;
}());



/***/ }),

/***/ "./src/app/state/app.store.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export reducers */
/* unused harmony export logger */
/* unused harmony export REDUCERS_TOKEN */
/* unused harmony export metaReducers */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppStore; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_reducers__ = __webpack_require__("./src/app/state/core/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__booking_inquiry_reducers__ = __webpack_require__("./src/app/state/booking-inquiry/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_effects__ = __webpack_require__("./node_modules/@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__booking_inquiry_effects_details__ = __webpack_require__("./src/app/state/booking-inquiry/effects/details.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__booking_inquiry_effects_booking_inquiry__ = __webpack_require__("./src/app/state/booking-inquiry/effects/booking-inquiry.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__booking_inquiry_effects_save_inquiry__ = __webpack_require__("./src/app/state/booking-inquiry/effects/save-inquiry.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var reducers = __assign({}, __WEBPACK_IMPORTED_MODULE_2__core_reducers__["b" /* reducers */], __WEBPACK_IMPORTED_MODULE_3__booking_inquiry_reducers__["f" /* reducers */]);
function logger(reducer) {
    return function (state, action) {
        console.log('++++++++++ STATE CHANGE:', action.type);
        console.log('OLD STATE:', state);
        console.log('PAYLOAD:', action.payload);
        var newState = reducer(state, action);
        console.log('NEW STATE:', newState);
        return newState;
    };
}
// Workaround for ngrx AOT issues (https://github.com/ngrx/platform/issues/116)
var REDUCERS_TOKEN = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* InjectionToken */]('Registered Reducers');
Object.assign(REDUCERS_TOKEN, reducers);
var metaReducers = !__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].production ? [logger] : [];
var AppStore = /** @class */ (function () {
    function AppStore() {
    }
    AppStore = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["d" /* StoreModule */].forRoot(REDUCERS_TOKEN, { metaReducers: metaReducers }),
                __WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["c" /* EffectsModule */].forRoot([__WEBPACK_IMPORTED_MODULE_6__booking_inquiry_effects_details__["a" /* ServicePackageDetailsEffects */], __WEBPACK_IMPORTED_MODULE_7__booking_inquiry_effects_booking_inquiry__["a" /* BookingInquiryEffects */], __WEBPACK_IMPORTED_MODULE_8__booking_inquiry_effects_save_inquiry__["a" /* SaveInquiryEffects */]])
                /* ),
                StoreDevtoolsModule.instrument({ maxAge: 10 }) */
            ],
            providers: [{ provide: REDUCERS_TOKEN, useValue: reducers }]
        })
    ], AppStore);
    return AppStore;
}());



/***/ }),

/***/ "./src/app/state/booking-inquiry/actions/booking-inquiry.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return SET_CURRENT_VIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GET_BOOKING_INQUIRY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return RESET_BOOKING_INQUIRY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return REPLACE_BOOKING_INQUIRY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GET_SERVICE_PACKAGE_DETAILS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return REPLACE_SERVICE_PACKAGE_DETAILS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_SERVICE_PACKAGE_TO_INQUIRY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return REMOVE_SERVICE_PACKAGE_FROM_INQUIRY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return RESET_SERVICE_PACKAGE_SELECTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return SAVE_INQUIRY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return SAVE_INQUIRY_COMPLETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return SetCurrentVIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return GetBookingInquiry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return GetServicePackageDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return ReplaceBookingInquiry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return ReplaceServicePackageDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AddServicePackageToInquiry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return RemoveServicePackageFromInquiry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return ResetServicePackageSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return ResetBookingInquiry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return SaveInquiry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return SaveInquiryComplete; });
var prefix = '[SERVICEPACKAGES]';
var SET_CURRENT_VIN = prefix + " Set current VIN";
var GET_BOOKING_INQUIRY = prefix + " Get booking inquiries";
var RESET_BOOKING_INQUIRY = prefix + " Reset booking inquiry";
var REPLACE_BOOKING_INQUIRY = prefix + " Replace booking inquiries";
var GET_SERVICE_PACKAGE_DETAILS = prefix + " Get service package details";
var REPLACE_SERVICE_PACKAGE_DETAILS = prefix + " Replace service package details";
var ADD_SERVICE_PACKAGE_TO_INQUIRY = prefix + " Add service package to inquiry";
var REMOVE_SERVICE_PACKAGE_FROM_INQUIRY = prefix + " Remove service package from inquiry";
var RESET_SERVICE_PACKAGE_SELECTION = prefix + " Reset service package selection";
var SAVE_INQUIRY = prefix + " Save inquiry";
var SAVE_INQUIRY_COMPLETE = prefix + " Save inquiry complete";
var SetCurrentVIN = /** @class */ (function () {
    function SetCurrentVIN(payload) {
        this.payload = payload;
        this.type = SET_CURRENT_VIN;
    }
    return SetCurrentVIN;
}());

var GetBookingInquiry = /** @class */ (function () {
    function GetBookingInquiry(payload) {
        this.payload = payload;
        this.type = GET_BOOKING_INQUIRY;
    }
    return GetBookingInquiry;
}());

var GetServicePackageDetails = /** @class */ (function () {
    function GetServicePackageDetails(payload) {
        this.payload = payload;
        this.type = GET_SERVICE_PACKAGE_DETAILS;
    }
    return GetServicePackageDetails;
}());

var ReplaceBookingInquiry = /** @class */ (function () {
    function ReplaceBookingInquiry(payload) {
        this.payload = payload;
        this.type = REPLACE_BOOKING_INQUIRY;
    }
    return ReplaceBookingInquiry;
}());

var ReplaceServicePackageDetails = /** @class */ (function () {
    function ReplaceServicePackageDetails(payload) {
        this.payload = payload;
        this.type = REPLACE_SERVICE_PACKAGE_DETAILS;
    }
    return ReplaceServicePackageDetails;
}());

var AddServicePackageToInquiry = /** @class */ (function () {
    function AddServicePackageToInquiry(payload) {
        this.payload = payload;
        this.type = ADD_SERVICE_PACKAGE_TO_INQUIRY;
    }
    return AddServicePackageToInquiry;
}());

var RemoveServicePackageFromInquiry = /** @class */ (function () {
    function RemoveServicePackageFromInquiry(payload) {
        this.payload = payload;
        this.type = REMOVE_SERVICE_PACKAGE_FROM_INQUIRY;
    }
    return RemoveServicePackageFromInquiry;
}());

var ResetServicePackageSelection = /** @class */ (function () {
    function ResetServicePackageSelection() {
        this.type = RESET_SERVICE_PACKAGE_SELECTION;
    }
    return ResetServicePackageSelection;
}());

var ResetBookingInquiry = /** @class */ (function () {
    function ResetBookingInquiry() {
        this.type = RESET_BOOKING_INQUIRY;
    }
    return ResetBookingInquiry;
}());

var SaveInquiry = /** @class */ (function () {
    function SaveInquiry(payload) {
        this.payload = payload;
        this.type = SAVE_INQUIRY;
    }
    return SaveInquiry;
}());

var SaveInquiryComplete = /** @class */ (function () {
    function SaveInquiryComplete(payload) {
        this.payload = payload;
        this.type = SAVE_INQUIRY_COMPLETE;
    }
    return SaveInquiryComplete;
}());



/***/ }),

/***/ "./src/app/state/booking-inquiry/effects/booking-inquiry.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingInquiryEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__("./node_modules/@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_api_service__ = __webpack_require__("./src/app/shared/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions_booking_inquiry__ = __webpack_require__("./src/app/state/booking-inquiry/actions/booking-inquiry.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_actions_notification__ = __webpack_require__("./src/app/state/core/actions/notification.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_actions_layout__ = __webpack_require__("./src/app/state/core/actions/layout.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__core_model_notification_type__ = __webpack_require__("./src/app/state/core/model/notification-type.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var BookingInquiryEffects = /** @class */ (function () {
    function BookingInquiryEffects(apiService, actions$) {
        var _this = this;
        this.apiService = apiService;
        this.actions$ = actions$;
        this.get$ = this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_7__actions_booking_inquiry__["c" /* GET_BOOKING_INQUIRY */]).mergeMap(function (action) {
            return _this.apiService
                .getBookingInquiry(action.payload)
                .map(function (bookingInquiry) { return new __WEBPACK_IMPORTED_MODULE_7__actions_booking_inquiry__["m" /* ReplaceBookingInquiry */](bookingInquiry); })
                .catch(function () {
                _this.apiService.setVinServerError(true);
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].of(new __WEBPACK_IMPORTED_MODULE_8__core_actions_notification__["b" /* Set */]({
                    message: 'There was an error while loading data. Please try again.',
                    type: __WEBPACK_IMPORTED_MODULE_10__core_model_notification_type__["a" /* NotificationType */].ERROR
                }), new __WEBPACK_IMPORTED_MODULE_9__core_actions_layout__["c" /* HideLoading */]());
            });
        });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */])
    ], BookingInquiryEffects.prototype, "get$", void 0);
    BookingInquiryEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__shared_services_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */]])
    ], BookingInquiryEffects);
    return BookingInquiryEffects;
}());



/***/ }),

/***/ "./src/app/state/booking-inquiry/effects/details.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicePackageDetailsEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__("./node_modules/@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_api_service__ = __webpack_require__("./src/app/shared/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions_booking_inquiry__ = __webpack_require__("./src/app/state/booking-inquiry/actions/booking-inquiry.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_actions_notification__ = __webpack_require__("./src/app/state/core/actions/notification.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_actions_layout__ = __webpack_require__("./src/app/state/core/actions/layout.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__core_model_notification_type__ = __webpack_require__("./src/app/state/core/model/notification-type.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ServicePackageDetailsEffects = /** @class */ (function () {
    function ServicePackageDetailsEffects(apiService, actions$) {
        var _this = this;
        this.apiService = apiService;
        this.actions$ = actions$;
        this.get$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_7__actions_booking_inquiry__["d" /* GET_SERVICE_PACKAGE_DETAILS */])
            .mergeMap(function (action) {
            return _this.apiService
                .getPackageDetails(action.payload)
                .map(function (servicePackage) {
                return new __WEBPACK_IMPORTED_MODULE_7__actions_booking_inquiry__["n" /* ReplaceServicePackageDetails */](servicePackage);
            })
                .catch(function () {
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].of(new __WEBPACK_IMPORTED_MODULE_8__core_actions_notification__["b" /* Set */]({
                    message: 'There was an error while loading data. Please try again.',
                    type: __WEBPACK_IMPORTED_MODULE_10__core_model_notification_type__["a" /* NotificationType */].ERROR
                }), new __WEBPACK_IMPORTED_MODULE_9__core_actions_layout__["c" /* HideLoading */]());
            });
        });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */])
    ], ServicePackageDetailsEffects.prototype, "get$", void 0);
    ServicePackageDetailsEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__shared_services_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */]])
    ], ServicePackageDetailsEffects);
    return ServicePackageDetailsEffects;
}());



/***/ }),

/***/ "./src/app/state/booking-inquiry/effects/save-inquiry.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaveInquiryEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__("./node_modules/@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_api_service__ = __webpack_require__("./src/app/shared/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions_booking_inquiry__ = __webpack_require__("./src/app/state/booking-inquiry/actions/booking-inquiry.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_actions_notification__ = __webpack_require__("./src/app/state/core/actions/notification.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_actions_layout__ = __webpack_require__("./src/app/state/core/actions/layout.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__core_model_notification_type__ = __webpack_require__("./src/app/state/core/model/notification-type.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var SaveInquiryEffects = /** @class */ (function () {
    function SaveInquiryEffects(apiService, actions$) {
        var _this = this;
        this.apiService = apiService;
        this.actions$ = actions$;
        this.get$ = this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_7__actions_booking_inquiry__["q" /* SAVE_INQUIRY */]).mergeMap(function (action) {
            return _this.apiService
                .saveInquiry(action.payload)
                .map(function () {
                return new __WEBPACK_IMPORTED_MODULE_7__actions_booking_inquiry__["u" /* SaveInquiryComplete */](action.payload);
            })
                .catch(function () {
                _this.apiService.setVinServerError(true);
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].of(new __WEBPACK_IMPORTED_MODULE_8__core_actions_notification__["b" /* Set */]({
                    message: 'There was an error while loading data. Please try again.',
                    type: __WEBPACK_IMPORTED_MODULE_10__core_model_notification_type__["a" /* NotificationType */].ERROR
                }), new __WEBPACK_IMPORTED_MODULE_9__core_actions_layout__["c" /* HideLoading */]());
            });
        });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */])
    ], SaveInquiryEffects.prototype, "get$", void 0);
    SaveInquiryEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__shared_services_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */]])
    ], SaveInquiryEffects);
    return SaveInquiryEffects;
}());



/***/ }),

/***/ "./src/app/state/booking-inquiry/reducers/booking-inquiry.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["f"] = reducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getServicePackages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getPastInquiries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getSelectedPackages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getCurrentVIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getIsCurrentInquirySaved; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_booking_inquiry__ = __webpack_require__("./src/app/state/booking-inquiry/actions/booking-inquiry.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    servicePackages: [],
    pastInquiries: [],
    selectedPackages: [],
    VIN: '',
    isCurrentInquirySaved: false
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_booking_inquiry__["h" /* REPLACE_BOOKING_INQUIRY */]: {
            return __assign({}, state, { servicePackages: action.payload.servicePackages, pastInquiries: action.payload.pastInquiries });
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_booking_inquiry__["j" /* RESET_BOOKING_INQUIRY */]: {
            return __assign({}, state, { servicePackages: [], pastInquiries: [] });
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_booking_inquiry__["r" /* SAVE_INQUIRY_COMPLETE */]: {
            var selectedServicePackages = [];
            var packageIds_1 = action.payload.packageIds;
            selectedServicePackages.push.apply(selectedServicePackages, state.servicePackages.filter(function (servicePackage) { return packageIds_1.some(function (id) { return id === servicePackage.id; }); }));
            var savedInquiry = {
                date: new Date(),
                price: selectedServicePackages.map(function (x) { return x.price; }).reduce(function (x, y) { return x + y; }, 0),
                servicePackages: selectedServicePackages
            };
            var newPastInquiries = [];
            newPastInquiries.push(savedInquiry);
            newPastInquiries.push.apply(newPastInquiries, state.pastInquiries);
            return __assign({}, state, { pastInquiries: newPastInquiries, isCurrentInquirySaved: true });
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_booking_inquiry__["i" /* REPLACE_SERVICE_PACKAGE_DETAILS */]: {
            return __assign({}, state, { servicePackages: state.servicePackages.map(function (p) {
                    return p.id === action.payload.id
                        ? action.payload
                        : p;
                }) });
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_booking_inquiry__["a" /* ADD_SERVICE_PACKAGE_TO_INQUIRY */]: {
            var newSelectedPackages = [];
            newSelectedPackages.push.apply(newSelectedPackages, state.selectedPackages.concat([action.payload]));
            return __assign({}, state, { selectedPackages: newSelectedPackages, isCurrentInquirySaved: false });
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_booking_inquiry__["g" /* REMOVE_SERVICE_PACKAGE_FROM_INQUIRY */]: {
            var newSelectedPackages = [];
            newSelectedPackages.push.apply(newSelectedPackages, state.selectedPackages.filter(function (x) { return x !== action.payload; }));
            return __assign({}, state, { selectedPackages: newSelectedPackages, isCurrentInquirySaved: false });
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_booking_inquiry__["k" /* RESET_SERVICE_PACKAGE_SELECTION */]: {
            return __assign({}, state, { selectedPackages: [] });
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_booking_inquiry__["s" /* SET_CURRENT_VIN */]: {
            return __assign({}, state, { VIN: action.payload });
        }
        default: {
            return state;
        }
    }
}
var getServicePackages = function (state) { return state.servicePackages; };
var getPastInquiries = function (state) { return state.pastInquiries; };
var getSelectedPackages = function (state) { return state.selectedPackages; };
var getCurrentVIN = function (state) { return state.VIN; };
var getIsCurrentInquirySaved = function (state) { return state.isCurrentInquirySaved; };


/***/ }),

/***/ "./src/app/state/booking-inquiry/reducers/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return reducers; });
/* unused harmony export getBookingInquiry */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getServicePackageList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getPastInquiries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getSelectedPackages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getCurrentVIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getIsCurrentInquirySaved; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__booking_inquiry__ = __webpack_require__("./src/app/state/booking-inquiry/reducers/booking-inquiry.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");


var reducers = {
    bookingInquiries: __WEBPACK_IMPORTED_MODULE_0__booking_inquiry__["f" /* reducer */]
};
var getBookingInquiry = Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["g" /* createFeatureSelector */])('bookingInquiries');
var getServicePackageList = Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* createSelector */])(getBookingInquiry, __WEBPACK_IMPORTED_MODULE_0__booking_inquiry__["e" /* getServicePackages */]);
var getPastInquiries = Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* createSelector */])(getBookingInquiry, __WEBPACK_IMPORTED_MODULE_0__booking_inquiry__["c" /* getPastInquiries */]);
var getSelectedPackages = Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* createSelector */])(getBookingInquiry, __WEBPACK_IMPORTED_MODULE_0__booking_inquiry__["d" /* getSelectedPackages */]);
var getCurrentVIN = Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* createSelector */])(getBookingInquiry, __WEBPACK_IMPORTED_MODULE_0__booking_inquiry__["a" /* getCurrentVIN */]);
var getIsCurrentInquirySaved = Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* createSelector */])(getBookingInquiry, __WEBPACK_IMPORTED_MODULE_0__booking_inquiry__["b" /* getIsCurrentInquirySaved */]);


/***/ }),

/***/ "./src/app/state/booking-inquiry/services/booking-inquiry-state.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingInquiryStateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_booking_inquiry__ = __webpack_require__("./src/app/state/booking-inquiry/actions/booking-inquiry.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reducers__ = __webpack_require__("./src/app/state/booking-inquiry/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_combineLatest__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/combineLatest.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BookingInquiryStateService = /** @class */ (function () {
    function BookingInquiryStateService(_store) {
        this._store = _store;
    }
    // Service packages observables
    BookingInquiryStateService.prototype.getPastInquiries = function () {
        return this._store.select(__WEBPACK_IMPORTED_MODULE_4__reducers__["c" /* getPastInquiries */]);
    };
    BookingInquiryStateService.prototype.getServicePackages = function () {
        return this._store.select(__WEBPACK_IMPORTED_MODULE_4__reducers__["e" /* getServicePackageList */]);
    };
    BookingInquiryStateService.prototype.bookingInquiryResultExists = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_combineLatest__["a" /* combineLatest */])(this.getServicePackages(), this.getPastInquiries(), function (y, x) { return x.length > 0 || y.length > 0; });
    };
    BookingInquiryStateService.prototype.isCurrentInquirySaved = function () {
        return this._store.select(__WEBPACK_IMPORTED_MODULE_4__reducers__["b" /* getIsCurrentInquirySaved */]);
    };
    BookingInquiryStateService.prototype.getSelectedPackages = function () {
        return this._store.select(__WEBPACK_IMPORTED_MODULE_4__reducers__["d" /* getSelectedPackages */]);
    };
    BookingInquiryStateService.prototype.getCurrentVIN = function () {
        return this._store.select(__WEBPACK_IMPORTED_MODULE_4__reducers__["a" /* getCurrentVIN */]);
    };
    BookingInquiryStateService.prototype.setCurrentVIN = function (vin) {
        return this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__actions_booking_inquiry__["v" /* SetCurrentVIN */](vin));
    };
    // Service package actions
    BookingInquiryStateService.prototype.fetchBookingInquiries = function (vin) {
        this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__actions_booking_inquiry__["e" /* GetBookingInquiry */](vin));
    };
    BookingInquiryStateService.prototype.fetchServicePackageDetails = function (id) {
        this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__actions_booking_inquiry__["f" /* GetServicePackageDetails */](id));
    };
    BookingInquiryStateService.prototype.addServicePackageToInquiry = function (id) {
        this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__actions_booking_inquiry__["b" /* AddServicePackageToInquiry */](id));
    };
    BookingInquiryStateService.prototype.removeServicePackageFromInquiry = function (id) {
        this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__actions_booking_inquiry__["l" /* RemoveServicePackageFromInquiry */](id));
    };
    BookingInquiryStateService.prototype.resetBookingInquiries = function () {
        this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__actions_booking_inquiry__["o" /* ResetBookingInquiry */]());
        this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__actions_booking_inquiry__["p" /* ResetServicePackageSelection */]());
        this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__actions_booking_inquiry__["v" /* SetCurrentVIN */](''));
    };
    BookingInquiryStateService.prototype.saveInquiry = function (inquiry) {
        this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__actions_booking_inquiry__["t" /* SaveInquiry */](inquiry));
    };
    BookingInquiryStateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]])
    ], BookingInquiryStateService);
    return BookingInquiryStateService;
}());



/***/ }),

/***/ "./src/app/state/core/actions/layout.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SHOW_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HIDE_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SHOW_NOTIFICATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HIDE_NOTIFICATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ShowLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return HideLoading; });
/* unused harmony export ShowNotification */
/* unused harmony export HideNotification */
var prefix = '[LAYOUT]';
var SHOW_LOADING = prefix + " Show loading";
var HIDE_LOADING = prefix + " Hide loading";
var SHOW_NOTIFICATION = prefix + " Show notification";
var HIDE_NOTIFICATION = prefix + " Hide notification";
var ShowLoading = /** @class */ (function () {
    function ShowLoading() {
        this.type = SHOW_LOADING;
    }
    return ShowLoading;
}());

var HideLoading = /** @class */ (function () {
    function HideLoading() {
        this.type = HIDE_LOADING;
    }
    return HideLoading;
}());

var ShowNotification = /** @class */ (function () {
    function ShowNotification() {
        this.type = SHOW_NOTIFICATION;
    }
    return ShowNotification;
}());

var HideNotification = /** @class */ (function () {
    function HideNotification() {
        this.type = HIDE_NOTIFICATION;
    }
    return HideNotification;
}());



/***/ }),

/***/ "./src/app/state/core/actions/notification.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Set; });
var prefix = '[NOTIFICATION]';
var SET = prefix + " Set";
var Set = /** @class */ (function () {
    function Set(payload) {
        this.payload = payload;
        this.type = SET;
    }
    return Set;
}());



/***/ }),

/***/ "./src/app/state/core/model/notification-type.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationType; });
var NotificationType;
(function (NotificationType) {
    NotificationType["INFO"] = "Info";
    NotificationType["ERROR"] = "Error";
    NotificationType["SUCCESS"] = "Success";
})(NotificationType || (NotificationType = {}));


/***/ }),

/***/ "./src/app/state/core/reducers/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return reducers; });
/* unused harmony export getLayoutState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getLoading; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layout__ = __webpack_require__("./src/app/state/core/reducers/layout.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__notification__ = __webpack_require__("./src/app/state/core/reducers/notification.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");



var reducers = {
    layout: __WEBPACK_IMPORTED_MODULE_0__layout__["b" /* reducer */],
    notification: __WEBPACK_IMPORTED_MODULE_1__notification__["a" /* reducer */]
};
var getLayoutState = Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_store__["g" /* createFeatureSelector */])('layout');
var getLoading = Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* createSelector */])(getLayoutState, __WEBPACK_IMPORTED_MODULE_0__layout__["a" /* getLoading */]);


/***/ }),

/***/ "./src/app/state/core/reducers/layout.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = reducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getLoading; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_layout__ = __webpack_require__("./src/app/state/core/actions/layout.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_notification__ = __webpack_require__("./src/app/state/core/actions/notification.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__booking_inquiry_actions_booking_inquiry__ = __webpack_require__("./src/app/state/booking-inquiry/actions/booking-inquiry.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};



var initialState = {
    loading: 0,
    showNotification: false
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_layout__["d" /* SHOW_LOADING */]:
        case __WEBPACK_IMPORTED_MODULE_2__booking_inquiry_actions_booking_inquiry__["d" /* GET_SERVICE_PACKAGE_DETAILS */]:
        case __WEBPACK_IMPORTED_MODULE_2__booking_inquiry_actions_booking_inquiry__["c" /* GET_BOOKING_INQUIRY */]:
        case __WEBPACK_IMPORTED_MODULE_2__booking_inquiry_actions_booking_inquiry__["q" /* SAVE_INQUIRY */]: {
            return __assign({}, state, { loading: state.loading + 1 });
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_layout__["a" /* HIDE_LOADING */]:
        case __WEBPACK_IMPORTED_MODULE_2__booking_inquiry_actions_booking_inquiry__["i" /* REPLACE_SERVICE_PACKAGE_DETAILS */]:
        case __WEBPACK_IMPORTED_MODULE_2__booking_inquiry_actions_booking_inquiry__["h" /* REPLACE_BOOKING_INQUIRY */]:
        case __WEBPACK_IMPORTED_MODULE_2__booking_inquiry_actions_booking_inquiry__["r" /* SAVE_INQUIRY_COMPLETE */]: {
            return __assign({}, state, { loading: state.loading - 1 });
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_layout__["e" /* SHOW_NOTIFICATION */]:
        case __WEBPACK_IMPORTED_MODULE_1__actions_notification__["a" /* SET */]: {
            return __assign({}, state, { showNotification: true });
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_layout__["b" /* HIDE_NOTIFICATION */]: {
            return __assign({}, state, { showNotification: false });
        }
        default: {
            return state;
        }
    }
}
var getLoading = function (state) { return state.loading; };


/***/ }),

/***/ "./src/app/state/core/reducers/notification.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_notification__ = __webpack_require__("./src/app/state/core/actions/notification.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_notification_type__ = __webpack_require__("./src/app/state/core/model/notification-type.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


var initialState = {
    message: '',
    type: __WEBPACK_IMPORTED_MODULE_1__model_notification_type__["a" /* NotificationType */].INFO
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_notification__["a" /* SET */]: {
            return __assign({}, state, action.payload);
        }
        default: {
            return state;
        }
    }
}


/***/ }),

/***/ "./src/app/state/core/services/core-state.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreStateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_layout__ = __webpack_require__("./src/app/state/core/actions/layout.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers_index__ = __webpack_require__("./src/app/state/core/reducers/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CoreStateService = /** @class */ (function () {
    function CoreStateService(_store) {
        this._store = _store;
    }
    // Layout observables
    CoreStateService.prototype.getLoading = function () {
        return this._store.select(__WEBPACK_IMPORTED_MODULE_3__reducers_index__["a" /* getLoading */]);
    };
    // Layout actions
    CoreStateService.prototype.showLoading = function () {
        this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__actions_layout__["f" /* ShowLoading */]());
    };
    CoreStateService.prototype.hideLoading = function () {
        this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__actions_layout__["c" /* HideLoading */]());
    };
    CoreStateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]])
    ], CoreStateService);
    return CoreStateService;
}());



/***/ }),

/***/ "./src/app/state/state.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StateModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_core_state_service__ = __webpack_require__("./src/app/state/core/services/core-state.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__booking_inquiry_services_booking_inquiry_state_service__ = __webpack_require__("./src/app/state/booking-inquiry/services/booking-inquiry-state.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



/**
 * The StateModule has the responsibility of maintaining the state of the application.
 *
 * It contains distributed data needed by multiple points in the application like the current
 * application layout state and stored data.
 *
 * The state is split up into semantic parts. Each part features a front-facing service (facade)
 * and a state management solution. This state management module uses the ngrx/Store libraray to
 * manage the state (which is based on Flux principles) but, since there is a facade service, it can
 * easily be exchanged with a custom built solution or any other state management framework.
 */
var StateModule = /** @class */ (function () {
    function StateModule() {
    }
    StateModule_1 = StateModule;
    StateModule.forRoot = function () {
        return {
            ngModule: StateModule_1,
            providers: [__WEBPACK_IMPORTED_MODULE_1__core_services_core_state_service__["a" /* CoreStateService */], __WEBPACK_IMPORTED_MODULE_2__booking_inquiry_services_booking_inquiry_state_service__["a" /* BookingInquiryStateService */]]
        };
    };
    StateModule = StateModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* NgModule */])()
    ], StateModule);
    return StateModule;
    var StateModule_1;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    apiUrl: '',
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])()
    .bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map