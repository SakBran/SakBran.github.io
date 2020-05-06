(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\n\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button *ngIf=\"this.appSetting.sessionUser.userType===0\" tab=\"tab1\">\n      <ion-icon name=\"home-outline\"></ion-icon>\n      <ion-label>Home</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button *ngIf=\"this.appSetting.sessionUser.userType!==0\" tab=\"tab1\">\n      <ion-icon name=\"cog\"></ion-icon>\n      <ion-label>Configurations</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button *ngIf=\"this.appSetting.sessionUser.userType===0\" tab=\"tab2\">  \n      <ion-icon name=\"cart-outline\"></ion-icon>\n      <ion-badge color=\"medium\">{{this.appSetting.localShopcart.length}}</ion-badge>\n      <ion-label >Shop Cart</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button *ngIf=\"this.appSetting.sessionUser.userType!==0\" tab=\"tab2\">  \n      <ion-icon name=\"folder-open\"></ion-icon>\n      <ion-badge color=\"medium\">{{this.appSetting.userOrderTrackingList.length}}</ion-badge>\n      <ion-label >Order & Delivery</ion-label>\n    </ion-tab-button>\n\n\n\n    <ion-tab-button tab=\"tab3\">\n      <ion-icon name=\"person-outline\"></ion-icon>\n      <ion-label>Profile</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n\n</ion-tabs>\n");

/***/ }),

/***/ "./src/app/Services/Category/cateogory.service.ts":
/*!********************************************************!*\
  !*** ./src/app/Services/Category/cateogory.service.ts ***!
  \********************************************************/
/*! exports provided: CateogoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CateogoryService", function() { return CateogoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_app_setting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app-setting */ "./src/app/app-setting.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");





let CateogoryService = class CateogoryService {
    constructor(http, appSetting) {
        this.http = http;
        this.appSetting = appSetting;
        this.url = `${this.appSetting.http}://${this.appSetting.apiPort}/api/categoryModels`;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    get() {
        return this.http.get(this.url);
    }
    getSingle(id) {
        const searchUrl = `${this.url}/${id}`;
        return this.http.get(searchUrl);
    }
    post(data) {
        this.http.post(this.url, data, this.httpOptions).subscribe(res => {
            console.log(res);
        }, err => {
            console.log(err);
        });
    }
    put(data) {
        const searchUrl = `${this.url}/${data.cat_id}`;
        this.http.put(searchUrl, data, this.httpOptions).subscribe(res => {
            console.log(res);
        }, err => {
            console.log(err);
        });
    }
    delete(id) {
        const data = null;
        const xhr = new XMLHttpRequest();
        xhr.withCredentials = false;
        xhr.addEventListener('readystatechange', function () {
            if (this.readyState === this.DONE) {
                console.log(this.responseText);
            }
        });
        xhr.open('DELETE', this.url + '/' + id);
        xhr.send(data);
    }
};
CateogoryService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: src_app_app_setting__WEBPACK_IMPORTED_MODULE_1__["appSetting"] }
];
CateogoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], src_app_app_setting__WEBPACK_IMPORTED_MODULE_1__["appSetting"]])
], CateogoryService);



/***/ }),

/***/ "./src/app/Services/Subcategory/sub-category.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/Services/Subcategory/sub-category.service.ts ***!
  \**************************************************************/
/*! exports provided: SubCategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubCategoryService", function() { return SubCategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_app_setting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app-setting */ "./src/app/app-setting.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let SubCategoryService = class SubCategoryService {
    constructor(http, appSetting) {
        this.http = http;
        this.appSetting = appSetting;
        this.url = `${this.appSetting.http}://${this.appSetting.apiPort}/api/subcategoryModels`;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        };
    }
    get() {
        return this.http.get(this.url);
    }
    getSingle(id) {
        const searchUrl = `${this.url}/${id}`;
        return this.http.get(searchUrl);
    }
    post(data) {
        this.http.post(this.url, data, this.httpOptions).subscribe(res => {
            console.log(res);
        }, err => {
            console.log(err);
        });
    }
    put(data) {
        const searchUrl = `${this.url}/${data.cat_id}`;
        this.http.put(searchUrl, data, this.httpOptions).subscribe(res => {
            console.log(res);
        }, err => {
            console.log(err);
        });
    }
    delete(id) {
        var data = null;
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = false;
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
                console.log(this.responseText);
            }
        });
        xhr.open("DELETE", this.url + "/" + id);
        xhr.send(data);
    }
};
SubCategoryService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: src_app_app_setting__WEBPACK_IMPORTED_MODULE_1__["appSetting"] }
];
SubCategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: "root"
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], src_app_app_setting__WEBPACK_IMPORTED_MODULE_1__["appSetting"]])
], SubCategoryService);



/***/ }),

/***/ "./src/app/Services/locationSave/location-save.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/Services/locationSave/location-save.service.ts ***!
  \****************************************************************/
/*! exports provided: LocationSaveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationSaveService", function() { return LocationSaveService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/location-accuracy/ngx */ "./node_modules/@ionic-native/location-accuracy/ngx/index.js");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "./node_modules/@ionic-native/android-permissions/ngx/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_app_setting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app-setting */ "./src/app/app-setting.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");







let LocationSaveService = class LocationSaveService {
    constructor(androidPermissions, locationAccuracy, http, appSetting) {
        this.androidPermissions = androidPermissions;
        this.locationAccuracy = locationAccuracy;
        this.http = http;
        this.appSetting = appSetting;
        this.url = `${this.appSetting.http}://${this.appSetting.apiPort}/api/locationModels`;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        };
    }
    get(id) {
        const searchUrl = `${this.url}/${id}`;
        return this.http.get(searchUrl);
    }
    post(data) {
        let x;
        this.http.post(this.url, data, this.httpOptions).subscribe(res => {
            console.log(res);
        }, err => {
            console.log(err);
        }, () => {
        });
    }
    put(data) {
        const searchUrl = `${this.url}/${data.userID}`;
        this.http.put(searchUrl, data, this.httpOptions).subscribe(res => {
            console.log(res);
        }, err => {
            console.log(err);
        });
    }
    //Check if application having GPS access permission  
    checkGPSPermission() {
        this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(result => {
            if (result.hasPermission) {
                //If having permission show 'Turn On GPS' dialogue
                this.askToTurnOnGPS();
            }
            else {
                //If not having permission ask for permission
                this.requestGPSPermission();
            }
        }, err => {
            console.log(err);
        });
    }
    requestGPSPermission() {
        this.locationAccuracy.canRequest().then((canRequest) => {
            if (canRequest) {
                console.log("4");
            }
            else {
                //Show 'GPS Permission Request' dialogue
                this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION)
                    .then(() => {
                    // call method to turn on GPS
                    this.askToTurnOnGPS();
                }, error => {
                    //Show console.log if user click on 'No Thanks'
                    console.log('requestPermission Error requesting location permissions ' + error);
                });
            }
        });
    }
    askToTurnOnGPS() {
        this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(() => {
            // When GPS Turned ON call method to get Accurate location coordinates
        }, error => console.log('Error requesting location permissions ' + JSON.stringify(error)));
    }
};
LocationSaveService.ctorParameters = () => [
    { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_2__["AndroidPermissions"] },
    { type: _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_1__["LocationAccuracy"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: src_app_app_setting__WEBPACK_IMPORTED_MODULE_4__["appSetting"] }
];
LocationSaveService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_2__["AndroidPermissions"],
        _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_1__["LocationAccuracy"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], src_app_app_setting__WEBPACK_IMPORTED_MODULE_4__["appSetting"]])
], LocationSaveService);



/***/ }),

/***/ "./src/app/tabs/tabs-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");




const routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'tab1',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | tab1-tab1-module */[__webpack_require__.e("default~tab1-tab1-module~tab2-tab2-module~tab3-tab3-module"), __webpack_require__.e("common"), __webpack_require__.e("tab1-tab1-module")]).then(__webpack_require__.bind(null, /*! ../tab1/tab1.module */ "./src/app/tab1/tab1.module.ts")).then(m => m.Tab1PageModule)
                    }
                ]
            },
            {
                path: 'tab2',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | tab2-tab2-module */[__webpack_require__.e("default~tab1-tab1-module~tab2-tab2-module~tab3-tab3-module"), __webpack_require__.e("common"), __webpack_require__.e("tab2-tab2-module")]).then(__webpack_require__.bind(null, /*! ../tab2/tab2.module */ "./src/app/tab2/tab2.module.ts")).then(m => m.Tab2PageModule)
                    }
                ]
            },
            {
                path: 'tab3',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | tab3-tab3-module */[__webpack_require__.e("default~tab1-tab1-module~tab2-tab2-module~tab3-tab3-module"), __webpack_require__.e("common"), __webpack_require__.e("tab3-tab3-module")]).then(__webpack_require__.bind(null, /*! ../tab3/tab3.module */ "./src/app/tab3/tab3.module.ts")).then(m => m.Tab3PageModule)
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/tabs/tab1',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TabsPageRoutingModule);



/***/ }),

/***/ "./src/app/tabs/tabs.module.ts":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs-routing.module */ "./src/app/tabs/tabs-routing.module.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
    })
], TabsPageModule);



/***/ }),

/***/ "./src/app/tabs/tabs.page.scss":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvdGFicy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/tabs/tabs.page.ts":
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Services_locationSave_location_save_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../Services/locationSave/location-save.service */ "./src/app/Services/locationSave/location-save.service.ts");
/* harmony import */ var _Services_Category_cateogory_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../Services/Category/cateogory.service */ "./src/app/Services/Category/cateogory.service.ts");
/* harmony import */ var _Services_Subcategory_sub_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../Services/Subcategory/sub-category.service */ "./src/app/Services/Subcategory/sub-category.service.ts");
/* harmony import */ var _app_setting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../app-setting */ "./src/app/app-setting.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");






let TabsPage = class TabsPage {
    constructor(appSetting, categoryService, SubCategoryService, locationService) {
        this.appSetting = appSetting;
        this.categoryService = categoryService;
        this.SubCategoryService = SubCategoryService;
        this.locationService = locationService;
        this.categoryService.get().subscribe(x => (this.appSetting.categoryMenu = x), err => console.log(err), () => {
            this.SubCategoryService.get().subscribe(y => (this.appSetting.subCategoryMenu = y));
        });
        this.locationService.checkGPSPermission();
    }
};
TabsPage.ctorParameters = () => [
    { type: _app_setting__WEBPACK_IMPORTED_MODULE_4__["appSetting"] },
    { type: _Services_Category_cateogory_service__WEBPACK_IMPORTED_MODULE_2__["CateogoryService"] },
    { type: _Services_Subcategory_sub_category_service__WEBPACK_IMPORTED_MODULE_3__["SubCategoryService"] },
    { type: _Services_locationSave_location_save_service__WEBPACK_IMPORTED_MODULE_1__["LocationSaveService"] }
];
TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-tabs',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tabs.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tabs.page.scss */ "./src/app/tabs/tabs.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_setting__WEBPACK_IMPORTED_MODULE_4__["appSetting"],
        _Services_Category_cateogory_service__WEBPACK_IMPORTED_MODULE_2__["CateogoryService"],
        _Services_Subcategory_sub_category_service__WEBPACK_IMPORTED_MODULE_3__["SubCategoryService"], _Services_locationSave_location_save_service__WEBPACK_IMPORTED_MODULE_1__["LocationSaveService"]])
], TabsPage);



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module-es2015.js.map