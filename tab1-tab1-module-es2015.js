(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>   \n    <ion-grid *ngIf=\"this.appSetting.search===0 && this.appSetting.filter===0\">\n      <div class=\"center\">\n      <ion-row>\n        <ion-col className=\"ion-align-self-center\">\n          <div class=\"center\">\n            <ion-chip slot=\"start\" (click)=\"this.appSetting.filter=1\" outline color=\"primary\">\n              <ion-icon  name=\"funnel-outline\" color=\"primary\"></ion-icon>\n              <ion-label>Category</ion-label>\n            </ion-chip>\n         </div>\n        </ion-col>\n        <ion-col className=\"ion-align-self-center\">\n          <div class=\"center\">\n            \n          </div>\n        </ion-col>\n        <ion-col className=\"ion-align-self-end\">\n          <div class=\"center\">\n            <ion-chip (click)=\"this.appSetting.search=1\"  outline color=\"primary\">\n              <ion-icon name=\"search\" colour=\"primary\"></ion-icon>\n              <ion-label>Search</ion-label>\n            </ion-chip>\n          </div>\n        </ion-col>\n      </ion-row>\n      </div>\n    </ion-grid>\n\n    <ion-grid *ngIf=\"this.appSetting.search===1\">\n      <ion-row>\n        <ion-col>\n          <div class=\"center\">\n          <ion-list>\n            <ion-item>\n              <ion-label position=\"stacked\">Search Box</ion-label>\n              <ion-input [(ngModel)]=\"this.searchItem\" required type=\"text\" placeholder=\"Search.....\"></ion-input>\n            </ion-item>\n          </ion-list>\n          </div>\n        </ion-col>\n        </ion-row>\n        <ion-row>\n        <ion-col>\n          <div class=\"center\">\n            <ion-button (click)=\"this.appSetting.search=0;\" color=\"light\" expand=\"block\">\n              <ion-icon  name=\"close\"></ion-icon>\n            </ion-button>\n          </div>\n        </ion-col>\n        <ion-col>\n          <div class=\"center\">\n            <ion-button  (click)=\"this.generalSearchMethod()\" color=\"light\" expand=\"block\">\n              <ion-icon  name=\"search\"></ion-icon>\n            </ion-button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid *ngIf=\"this.appSetting.filter===1\">\n      <ion-row>\n        <ion-col>\n          <div class=\"center\">\n          <ion-list>\n            <ion-item>\n              <ion-label position=\"stacked\">Category</ion-label>\n              <ion-select ngDefaultControl [(ngModel)]=\"this.category_ID\" (ngModelChange)=\"onchageCategoryMenu($event)\" placeholder=\"Category\" interface=\"action-sheet\">\n                <ion-select-option [value]=\"0\">All</ion-select-option>\n                <ion-select-option  *ngFor=\"let item of this.appSetting.categoryMenu\" [value]=\"item.cat_id\">{{item.cat_name}}</ion-select-option>\n              </ion-select>\n            </ion-item>\n             \n            <ion-item>\n              <ion-label position=\"stacked\">Sub Category</ion-label>\n              <ion-select ngDefaultControl [(ngModel)]=\"this.subcategory_ID\" placeholder=\"Sub Category\" interface=\"action-sheet\">\n                <ion-select-option [value]=\"0\">All</ion-select-option>\n                <ion-select-option *ngFor=\"let item of subcategory\" [value]=\"item.sub_cat_id\">{{item.sub_cat_name}}</ion-select-option>\n               \n              </ion-select>\n            </ion-item>\n          </ion-list>\n          </div>\n        </ion-col>\n        </ion-row>\n        <ion-row>\n        <ion-col>\n          <div class=\"center\">\n            <ion-button (click)=\"this.appSetting.filter=0\" color=\"light\" expand=\"block\">\n              <ion-icon  name=\"close\"></ion-icon>\n            </ion-button>\n          </div>\n        </ion-col>\n        <ion-col>\n          <div class=\"center\">\n            <ion-button  (click)=\"this.appSetting.search=0;onSearch()\" color=\"light\" expand=\"block\">\n              <ion-icon  name=\"search\"></ion-icon>\n            </ion-button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"this.appSetting.crud===0\" [fullscreen]=\"true\" infiniteScroll [scrollEvents]=\"true\" >\n<ion-infinite-scroll>\n  <ion-card  *ngIf=\"this.appSetting.sessionUser.userType!==0\">  \n    <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-button   (click)=\"this.appSetting.crud=1;this.appSetting.crudProcess='c'\"  color=\"primary\" expand=\"block\">\n              Add New\n            </ion-button>\n          </ion-col>\n        </ion-row>\n    </ion-grid>\n  </ion-card>\n  <ion-card *ngFor=\"let item of items; let i=index\"  >\n    <img src=\"{{this.appSetting.http}}://{{this.localhost}}/images/Main-{{item.main_item_id}}-{{item.image_url}}\"/>\n    <ion-card-header>\n      <ion-card-subtitle>{{this.item.brand}}</ion-card-subtitle>\n      <ion-card-title>{{this.item.main_item_name}}</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      {{this.item.Descriptions}}\n    </ion-card-content>\n    <ion-grid>\n      <ion-row *ngIf=\"this.appSetting.sessionUser.userType===0\">\n        \n        <ion-col>\n          <ion-button (click)=\"onAddSelect(item.main_item_id,item.main_item_name,2)\"  color=\"light\" expand=\"block\">\n            <ion-icon name=\"ellipsis-horizontal-outline\"></ion-icon>\n          </ion-button>\n        </ion-col>\n        \n        <ion-col>\n        <ion-button  (click)=\"onAddSelect(item.main_item_id,item.main_item_name,1)\" color=\"light\" expand=\"block\">\n          <ion-icon  name=\"cart-outline\"></ion-icon>\n        </ion-button>\n        </ion-col>\n      </ion-row>\n\n      <ion-row *ngIf=\"this.appSetting.sessionUser.userType!==0\">\n        \n        <ion-col>\n          <ion-button (click)=\"onEditSelectItem(item.main_item_id)\"  color=\"light\" expand=\"block\">\n            <ion-icon name=\"construct\"></ion-icon> <ion-label>Edit</ion-label>\n          </ion-button>\n        </ion-col>\n        \n        <ion-col>\n        <ion-button  (click)=\"onAddSelect(item.main_item_id,item.main_item_name,1)\" color=\"light\" expand=\"block\">\n          <ion-icon name=\"cube\"></ion-icon> <ion-label>Sub-item</ion-label>\n        </ion-button>\n        </ion-col>\n      </ion-row>\n\n      <ion-row *ngIf=\"this.appSetting.sessionUser.userType!==0\">\n        \n        <ion-col>\n          <ion-button (click)=\"onAddSelect(item.main_item_id,item.main_item_name,2)\"  color=\"light\" expand=\"block\">\n            <ion-icon name=\"logo-buffer\"></ion-icon><ion-label>Unit</ion-label>\n          </ion-button>\n        </ion-col>\n        \n        <ion-col>\n        <ion-button  (click)=\"onAddSelect(item.main_item_id,item.main_item_name,1)\" color=\"light\" expand=\"block\">\n          <ion-icon name=\"podium\"></ion-icon><ion-label>Quantity</ion-label>\n        </ion-button>\n        </ion-col>\n      </ion-row>\n\n      <ion-row *ngIf=\"this.appSetting.sessionUser.userType!==0\">\n        \n        <ion-col>\n          <ion-button (click)=\"onAddSelect(item.main_item_id,item.main_item_name,2)\"  color=\"light\" expand=\"block\">\n            <ion-label>Delete</ion-label>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n  \n  <ion-card>  \n    <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-button   (click)=\"onScrollDown();this.loading=1\"  color=\"primary\" expand=\"block\">\n              Load more data..\n            </ion-button>\n          </ion-col>\n        </ion-row>\n    </ion-grid>\n  </ion-card>  \n  <ion-infinite-scroll-content *ngIf=\"this.loading===1\"\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Loading data...\">\n    </ion-infinite-scroll-content>\n</ion-infinite-scroll>\n</ion-content>\n\n<ion-content *ngIf=\"this.appSetting.crud===1\" [fullscreen]=\"true\" infiniteScroll [scrollEvents]=\"true\" >\n  <ion-infinite-scroll>\n        <!------Create Process-->\n        <ion-card *ngIf=\"this.appSetting.crudProcess==='c'\">\n          <ion-card-header>\n            <ion-card-subtitle>New Item Informations</ion-card-subtitle>\n            <ion-card-title>Create New Item</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-list lines=\"full\" class=\"ion-no-margin ion-no-padding\">\n              <ion-item>\n                <ion-label position=\"stacked\">Item Name <ion-text *ngIf=\"data.main_item_name.toString()===''\" color=\"danger\">*</ion-text></ion-label>\n                <ion-input required type=\"text\" [(ngModel)]=\"data.main_item_name\" ></ion-input>\n              </ion-item>\n\n              <ion-item>\n                <ion-label position=\"stacked\">Descriptions <ion-text *ngIf=\"data.Descriptions.toString()===''\" color=\"danger\">*</ion-text></ion-label>\n                <ion-input required type=\"text\" [(ngModel)]=\"data.Descriptions\" ></ion-input>\n              </ion-item>\n\n              <ion-item>\n                <ion-label position=\"stacked\">Brand <ion-text *ngIf=\"data.brand.toString()===''\" color=\"danger\">*</ion-text></ion-label>\n                <ion-input required type=\"text\" [(ngModel)]=\"data.brand\" ></ion-input>\n              </ion-item>\n\n              <ion-item>\n                <ion-label position=\"stacked\">Category</ion-label>\n                <ion-select ngDefaultControl [(ngModel)]=\"this.category_ID\" (ngModelChange)=\"onchageCategoryMenu($event)\" placeholder=\"Please Select One\" interface=\"action-sheet\">\n                  <ion-select-option  *ngFor=\"let item of this.appSetting.categoryMenu\" [value]=\"item.cat_id\">{{item.cat_name}}</ion-select-option>\n                </ion-select>\n              </ion-item>\n              \n              <ion-item>\n                <ion-label position=\"stacked\">Sub Category <ion-text *ngIf=\"data.sub_category_id===0\" color=\"danger\">*</ion-text></ion-label>\n                <ion-select ngDefaultControl [(ngModel)]=\"data.sub_category_id\" placeholder=\"Please Select One\" interface=\"action-sheet\">\n                  <ion-select-option *ngFor=\"let item of subcategory\" [value]=\"item.sub_cat_id\">{{item.sub_cat_name}}</ion-select-option>\n                </ion-select>\n              </ion-item>\n\n              <ion-item>\n                <ion-label position=\"stacked\">Image (5:4 Size) <ion-text *ngIf=\"data.image_url===null\" color=\"danger\">*</ion-text></ion-label>\n              </ion-item>\n           \n              \n            \n\n              <ion-item>  \n                <input type=\"file\" (change)=\"onFileChanged($event)\" color=\"primary\" />\n              </ion-item>\n              <ion-item>\n                <image-cropper\n                  [imageChangedEvent]=\"imageChangedEvent\"\n                  [maintainAspectRatio]=\"true\"\n                  [aspectRatio]=\"5 / 4\"\n                  [resizeToWidth]=\"750\"\n                  format=\"png\"\n                  (imageCropped)=\"imageCropped($event)\"\n                  (imageLoaded)=\"imageLoaded()\"\n                  (cropperReady)=\"cropperReady()\"\n                  (loadImageFailed)=\"loadImageFailed()\"\n              ></image-cropper>\n              </ion-item>\n              <ion-item>\n              <img id='croppedImage' [src]=\"croppedImage\" />\n              <br/>\n              </ion-item>\n            </ion-list>\n          </ion-card-content>\n          <ion-grid>\n            <ion-row>\n              <ion-col>\n                <ion-button (click)=\"this.appSetting.crud=0;this.appSetting.crudProcess=''\" color=\"light\" expand=\"block\">\n                  Cancel\n                </ion-button>\n                </ion-col>\n              \n              <ion-col>\n                <ion-button (click)=\"onSubmit()\" color=\"light\" expand=\"block\">\n                  Create\n              </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n\n        </ion-card>\n        <!------Create Process-->\n\n        <!------Edit Process-->\n        <ion-card *ngIf=\"this.appSetting.crudProcess==='u'\">\n          <ion-card-header>\n            <ion-card-subtitle>Existing Item Informations</ion-card-subtitle>\n            <ion-card-title>Edit Item</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-list lines=\"full\" class=\"ion-no-margin ion-no-padding\">\n              <ion-item>\n                <ion-label position=\"stacked\">Item Name <ion-text *ngIf=\"data.main_item_name.toString()===''\" color=\"danger\">*</ion-text></ion-label>\n                <ion-input required type=\"text\" [(ngModel)]=\"data.main_item_name\" ></ion-input>\n              </ion-item>\n    \n              <ion-item>\n                <ion-label position=\"stacked\">Descriptions <ion-text *ngIf=\"data.Descriptions.toString()===''\" color=\"danger\">*</ion-text></ion-label>\n                <ion-input required type=\"text\" [(ngModel)]=\"data.Descriptions\" ></ion-input>\n              </ion-item>\n    \n              <ion-item>\n                <ion-label position=\"stacked\">Brand <ion-text *ngIf=\"data.brand.toString()===''\" color=\"danger\">*</ion-text></ion-label>\n                <ion-input required type=\"text\" [(ngModel)]=\"data.brand\" ></ion-input>\n              </ion-item>\n    \n              <ion-item>\n                <ion-label position=\"stacked\">Category</ion-label>\n                <ion-select ngDefaultControl [(ngModel)]=\"this.category_ID\" (ngModelChange)=\"onchageCategoryMenu($event)\" placeholder=\"Please Select One\" interface=\"action-sheet\">\n                  <ion-select-option  *ngFor=\"let item of this.appSetting.categoryMenu\" [value]=\"item.cat_id\">{{item.cat_name}}</ion-select-option>\n                </ion-select>\n              </ion-item>\n               \n              <ion-item>\n                <ion-label position=\"stacked\">Sub Category <ion-text *ngIf=\"data.sub_category_id===0\" color=\"danger\">*</ion-text></ion-label>\n                <ion-select ngDefaultControl [(ngModel)]=\"data.sub_category_id\" placeholder=\"Please Select One\" interface=\"action-sheet\">\n                  <ion-select-option *ngFor=\"let item of subcategory\" [value]=\"item.sub_cat_id\">{{item.sub_cat_name}}</ion-select-option>\n                </ion-select>\n              </ion-item>\n    \n              <ion-item>\n                <img src=\"{{this.appSetting.http}}://{{this.localhost}}/images/Main-{{data.main_item_id}}-{{data.image_url}}\"/>\n              </ion-item>\n              <ion-item>\n                <ion-label position=\"stacked\">Image (5:4 Size) <ion-text *ngIf=\"data.image_url===null\" color=\"danger\">*</ion-text></ion-label>\n              </ion-item>\n    \n              <ion-item>  \n                <input type=\"file\" (change)=\"onFileChanged($event)\" color=\"primary\" />\n              </ion-item>\n              <ion-item>\n                <image-cropper\n                  [imageChangedEvent]=\"imageChangedEvent\"\n                  [maintainAspectRatio]=\"true\"\n                  [aspectRatio]=\"5 / 4\"\n                  [resizeToWidth]=\"750\"\n                  format=\"png\"\n                  (imageCropped)=\"imageCropped($event)\"\n                  (imageLoaded)=\"imageLoaded()\"\n                  (cropperReady)=\"cropperReady()\"\n                  (loadImageFailed)=\"loadImageFailed()\"\n              ></image-cropper>\n              </ion-item>\n              <ion-item>\n              <img [src]=\"croppedImage\" />\n              <br/>\n              </ion-item>\n             </ion-list>\n          </ion-card-content>\n          <ion-grid>\n            <ion-row>\n              <ion-col>\n                <ion-button (click)=\"this.appSetting.crud=0;this.appSetting.crudProcess=''\" color=\"light\" expand=\"block\">\n                  Cancel\n                </ion-button>\n                </ion-col>\n              \n              <ion-col>\n                <ion-button (click)=\"onSubmit()\" color=\"light\" expand=\"block\">\n                  Update\n              </ion-button>\n              </ion-col>\n            </ion-row>\n           </ion-grid>\n    \n        </ion-card>\n        <!------Edit Process-->\n    \n  </ion-infinite-scroll>\n  </ion-content>\n\n");

/***/ }),

/***/ "./src/app/Services/Mainitem/mainitem.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/Services/Mainitem/mainitem.service.ts ***!
  \*******************************************************/
/*! exports provided: MainitemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainitemService", function() { return MainitemService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_app_setting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app-setting */ "./src/app/app-setting.ts");
/* harmony import */ var _upload_upload_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../upload/upload.service */ "./src/app/Services/upload/upload.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);








let MainitemService = class MainitemService {
    constructor(http, uploadService, appSetting, history) {
        this.http = http;
        this.uploadService = uploadService;
        this.appSetting = appSetting;
        this.history = history;
        this.url = `${this.appSetting.http}://${this.appSetting.apiPort}/api/mainItemModels`;
        this.Searchurl = `${this.appSetting.http}://${this.appSetting.apiPort}/api/searchItem`;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
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
    getMany(id) {
        const searchUrl = `${this.Searchurl}/${id}`;
        return this.http.get(searchUrl);
    }
    getScrollDown(id, page) {
        const searchUrl = `${this.Searchurl}/${id}` + `?page=${page}`;
        return this.http.get(searchUrl);
    }
    post(data, uploadData, selectedFile) {
        var obj;
        let x;
        this.http.post(this.url, data, this.httpOptions).subscribe(res => {
            obj = res;
        }, err => { }, () => {
            x = Object.assign(obj);
            this.uploadService.upload(uploadData, selectedFile, "Main-" + x.main_item_id.toString() + "-" + x.image_url);
            this.appSetting.mainItemID = x.main_item_id;
        });
    }
    put(data, uploadData, selectedFile) {
        var obj;
        let x;
        const searchUrl = `${this.url}/${data.main_item_id}`;
        this.http.put(searchUrl, data, this.httpOptions).subscribe(res => {
            console.log(data);
        }, err => {
            console.log(err);
        }, () => {
            x = data;
            this.uploadService.upload(uploadData, selectedFile, "Main-" + x.main_item_id.toString() + "-" + x.image_url);
            this.appSetting.mainItemID = x.main_item_id;
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
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire("Success", "Your Process is successfully", "success").then(() => { this.history.back(); });
    }
};
MainitemService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _upload_upload_service__WEBPACK_IMPORTED_MODULE_3__["UploadService"] },
    { type: src_app_app_setting__WEBPACK_IMPORTED_MODULE_2__["appSetting"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] }
];
MainitemService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])({
        providedIn: "root"
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
        _upload_upload_service__WEBPACK_IMPORTED_MODULE_3__["UploadService"],
        src_app_app_setting__WEBPACK_IMPORTED_MODULE_2__["appSetting"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
], MainitemService);



/***/ }),

/***/ "./src/app/Services/Subitem/subitem.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/Services/Subitem/subitem.service.ts ***!
  \*****************************************************/
/*! exports provided: SubitemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubitemService", function() { return SubitemService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_app_setting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app-setting */ "./src/app/app-setting.ts");
/* harmony import */ var _upload_upload_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../upload/upload.service */ "./src/app/Services/upload/upload.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);







let SubitemService = class SubitemService {
    constructor(http, uploadService, appSetting) {
        this.http = http;
        this.uploadService = uploadService;
        this.appSetting = appSetting;
        this.url = `${this.appSetting.http}://${this.appSetting.apiPort}/api/subItemModels`;
        this.labelurl = `${this.appSetting.http}://${this.appSetting.apiPort}/api/subItemLabel`;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        };
    }
    get(id) {
        const searchUrl = `${this.url}/${id}`;
        return this.http.get(searchUrl);
    }
    getSubItemLabel(id) {
        const searchUrl = `${this.labelurl}/${id}`;
        return this.http.get(searchUrl);
    }
    getSingle(id) {
        const searchUrl = `${this.url}/${id}`;
        return this.http.get(searchUrl);
    }
    post(data, uploadData, selectedFile) {
        var obj;
        let x;
        this.http.post(this.url, data, this.httpOptions).subscribe(res => {
            obj = res;
            console.log(res);
        }, err => {
            console.log(err);
        }, () => {
            x = Object.assign(obj);
            this.uploadService.upload(uploadData, selectedFile, "Sub-" + x.sub_item_id.toString() + "-" + x.sub_item_image);
        });
    }
    put(data) {
        const searchUrl = `${this.url}/${data.sub_item_id}`;
        this.http.put(searchUrl, data, this.httpOptions).subscribe(res => {
            console.log(res);
        }, err => {
            console.log(err);
        });
    }
    delete(main, sub, image) {
        var data = null;
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = false;
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
                console.log(this.responseText);
            }
        });
        xhr.open("DELETE", this.url + "?main=" + main + "&sub=" + sub + "&img=" + image);
        xhr.send(data);
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("Success", "Your Process is successfully", "success");
    }
};
SubitemService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _upload_upload_service__WEBPACK_IMPORTED_MODULE_2__["UploadService"] },
    { type: src_app_app_setting__WEBPACK_IMPORTED_MODULE_1__["appSetting"] }
];
SubitemService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _upload_upload_service__WEBPACK_IMPORTED_MODULE_2__["UploadService"], src_app_app_setting__WEBPACK_IMPORTED_MODULE_1__["appSetting"]])
], SubitemService);



/***/ }),

/***/ "./src/app/Services/generalSearch/general-search.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/Services/generalSearch/general-search.service.ts ***!
  \******************************************************************/
/*! exports provided: GeneralSearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralSearchService", function() { return GeneralSearchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _app_setting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../app-setting */ "./src/app/app-setting.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");





let GeneralSearchService = class GeneralSearchService {
    constructor(http, appSetting) {
        this.http = http;
        this.appSetting = appSetting;
        this.url = `${this.appSetting.http}://${this.appSetting.apiPort}/api/generalSearch`;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    get(name) {
        const searchUrl = `${this.url}/?item=${name}`;
        return this.http.get(searchUrl);
    }
};
GeneralSearchService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _app_setting__WEBPACK_IMPORTED_MODULE_1__["appSetting"] }
];
GeneralSearchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _app_setting__WEBPACK_IMPORTED_MODULE_1__["appSetting"]])
], GeneralSearchService);



/***/ }),

/***/ "./src/app/Services/upload/upload.service.ts":
/*!***************************************************!*\
  !*** ./src/app/Services/upload/upload.service.ts ***!
  \***************************************************/
/*! exports provided: UploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadService", function() { return UploadService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_app_setting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app-setting */ "./src/app/app-setting.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);







let UploadService = class UploadService {
    constructor(transfer, http, history, appSetting) {
        this.transfer = transfer;
        this.http = http;
        this.history = history;
        this.appSetting = appSetting;
    }
    upload(uploadData, selectedFile, filename) {
        this.appSetting.errorMsg.push('Selected file name' + JSON.stringify(selectedFile));
        this.appSetting.errorMsg.push('Selected blob name' + JSON.stringify(this.appSetting.selectedBlob));
        try {
            uploadData.append("myFile", selectedFile, selectedFile.name.toString());
            this.http
                .post(`${this.appSetting.http}://${this.appSetting.apiPort}/api/upload` +
                "?filename=" +
                filename, uploadData, {
                reportProgress: true,
                observe: "events"
            })
                .subscribe(event => {
                console.log(event);
                this.appSetting.errorMsg.push("This is event for upload file-" + JSON.stringify(event));
            }, err => {
                console.log(err);
                this.appSetting.errorMsg.push("This is error for upload fail-" + JSON.stringify(err));
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.hideLoading();
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Image Upload Fail', '', 'error');
            }, () => {
                console.log(event);
                this.appSetting.errorMsg.push("This is successful msg for upload file-" + JSON.stringify(event));
                this.appSetting.crud = 0;
                this.appSetting.crudProcess = '';
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.hideLoading();
            });
        }
        catch (e) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.hideLoading();
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Image Upload try/catch Fail', e, 'error');
            this.appSetting.errorMsg.push(e.toString());
        }
    }
    uploadV2(uploadData, filename) {
        try {
            this.http
                .post(`${this.appSetting.http}://${this.appSetting.apiPort}/api/upload` +
                "?filename=" +
                filename, uploadData, {
                reportProgress: true,
                observe: "events"
            })
                .subscribe(event => {
                console.log(event);
                this.appSetting.errorMsg.push("This is event for upload file-" + JSON.stringify(event));
            }, err => {
                console.log(err);
                this.appSetting.errorMsg.push("This is error for upload fail-" + JSON.stringify(err));
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.hideLoading();
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Image Upload Fail', err.toString(), 'error');
            }, () => {
                console.log(event);
                this.appSetting.errorMsg.push("This is successful msg for upload file-" + JSON.stringify(event));
                this.appSetting.crud = 0;
                this.appSetting.crudProcess = '';
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.hideLoading();
            });
        }
        catch (e) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.hideLoading();
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Image Upload Fail', e, 'error');
            this.appSetting.errorMsg.push(e.toString());
        }
    }
};
UploadService.ctorParameters = () => [
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__["FileTransfer"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
    { type: src_app_app_setting__WEBPACK_IMPORTED_MODULE_1__["appSetting"] }
];
UploadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])({
        providedIn: "root"
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__["FileTransfer"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], src_app_app_setting__WEBPACK_IMPORTED_MODULE_1__["appSetting"]])
], UploadService);



/***/ }),

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-image-cropper */ "./node_modules/ngx-image-cropper/fesm2015/ngx-image-cropper.js");









let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            ngx_image_cropper__WEBPACK_IMPORTED_MODULE_8__["ImageCropperModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }])
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
    })
], Tab1PageModule);



/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content ion-toolbar {\n  --background: translucent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS9EOlxcb25saW5lU2hvcEFwcFxcb25saW5lU2hvcEFwcFxcbXlBcHAvc3JjXFxhcHBcXHRhYjFcXHRhYjEucGFnZS5zY3NzIiwic3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XG59XG4iLCJpb24tY29udGVudCBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/Camera/ngx */ "./node_modules/@ionic-native/Camera/ngx/index.js");
/* harmony import */ var _Services_generalSearch_general_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../Services/generalSearch/general-search.service */ "./src/app/Services/generalSearch/general-search.service.ts");
/* harmony import */ var _Services_unit_unit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../Services/unit/unit.service */ "./src/app/Services/unit/unit.service.ts");
/* harmony import */ var src_app_app_setting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app-setting */ "./src/app/app-setting.ts");
/* harmony import */ var _Services_Mainitem_mainitem_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../Services/Mainitem/mainitem.service */ "./src/app/Services/Mainitem/mainitem.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Services_Subitem_subitem_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Services/Subitem/subitem.service */ "./src/app/Services/Subitem/subitem.service.ts");
/* harmony import */ var _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/base64/ngx */ "./node_modules/@ionic-native/base64/ngx/index.js");










let Tab1Page = class Tab1Page {
    constructor(base64, mainItemService, appSetting, generalSearch, subItemService, UnitService, camera) {
        this.base64 = base64;
        this.mainItemService = mainItemService;
        this.appSetting = appSetting;
        this.generalSearch = generalSearch;
        this.subItemService = subItemService;
        this.UnitService = UnitService;
        this.camera = camera;
        this.items = [];
        this.page = 1;
        this.crud = 0;
        this.crudProcess = "";
        this.data = {
            main_item_id: 0,
            main_item_name: '',
            sub_category_id: 0,
            price: 0,
            image_url: null,
            brand: '',
            Descriptions: ''
        };
        this.categoryChoiceID = 0;
        this.loading = 1;
        this.imageUrl = "";
        this.temp = {
            Main: 0,
            Sub: 0
        };
        this.localhost = this.appSetting.apiPort;
        this.imageLink = `${this.appSetting.http}://${this.localhost}/images/`;
        this.croppedImagepath = "";
        this.isLoading = false;
        this.imageChangedEvent = '';
        this.croppedImage = '';
        this.imagePickerOptions = {
            maximumImagesCount: 1,
            quality: 50
        };
        this.blobToFile = (theBlob) => {
            const b = theBlob;
            return theBlob;
        };
        this.searchItem = "";
        this.category_ID = 0;
        this.subcategory_ID = 0;
        this.subcategory = [];
        this.loading = 1;
    }
    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.loadItems();
    }
    matching() {
        this.appSetting.subCategoryMenu.forEach(x => {
            if (x.sub_cat_id == this.data.sub_category_id) {
                this.category_ID = x.cat_id;
            }
        });
    }
    onEditSelectItem(mainItemID) {
        this.items.forEach(x => {
            if (x.main_item_id === mainItemID) {
                this.data = x;
                let tempSub = this.data.sub_category_id;
                this.matching();
                this.onchageCategoryMenu(this.category_ID);
                this.data.sub_category_id = tempSub;
            }
        });
        this.appSetting.crudProcess = 'u';
        this.appSetting.crud = 1;
    }
    onFileChanged(event) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
            title: 'Please wait',
            html: 'System is processing for your request',
            onBeforeOpen: () => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.showLoading();
            }
        });
        this.selectedFile = event.target.files[0];
        this.data.image_url = this.selectedFile.name;
        this.imageChangedEvent = event;
        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.hideLoading();
    }
    imageCropped(event) {
        this.croppedImage = event.base64;
        // this.appSetting.selectedBlob=this.convertBase64ToBlob(event.base64);
        // Naming the image
        const date = new Date().valueOf();
        let text = '';
        const possibleText = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 5; i++) {
            text += possibleText.charAt(Math.floor(Math.random() * possibleText.length));
        }
        // Replace extension according to your media type
        const imageName = date + '.' + text + '.jpeg';
        // call method that creates a blob from dataUri
        this.base64.encodeFile(event.base64.
            replace(/^data:image\/(png|jpg);base64,/, '')).
            then((base64File) => {
            const byteString = base64File;
            const arrayBuffer = new ArrayBuffer(byteString.length);
            const int8Array = new Uint8Array(arrayBuffer);
            for (let i = 0; i < byteString.length; i++) {
                int8Array[i] = byteString.charCodeAt(i);
            }
            const blob = new Blob([int8Array], { type: 'image/jpeg' });
            this.appSetting.selectedBlob = new Blob([int8Array], { type: 'image/jpeg' });
            const imageFile = new File([blob], imageName, { type: 'image/jpeg' });
            this.selectedFile = imageFile;
            this.appSetting.errorMsg.push("This is image file name" + this.selectedFile.name);
        }, (err) => {
            this.appSetting.errorMsg.push(err);
        });
    }
    imageLoaded() {
        // show cropper
        console.log('image loaded');
    }
    cropperReady() {
        // cropper ready
        console.log('cropper ready');
    }
    loadImageFailed() {
        // show message
        console.log('load image failed');
    }
    //Code Copy
    //Post
    onSubmit() {
        if (this.checkValid()) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                title: 'Please wait',
                html: 'System is processing for your request',
                onBeforeOpen: () => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.showLoading();
                }
            });
            const uploadData = new FormData();
            this.mainItemService.post(this.data, uploadData, this.selectedFile);
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Invalid Data Entry', 'Please fill the data with valid informations', 'warning');
        }
    }
    //Post
    checkValid() {
        if (this.data.image_url !== null &&
            this.data.sub_category_id !== 0 &&
            this.data.Descriptions !== '' &&
            this.data.main_item_name !== '') {
            return true;
        }
        else {
            return false;
        }
    }
    //Put
    onEdit() {
        if (this.checkValid()) {
            const uploadData = new FormData();
            this.mainItemService.put(this.data, uploadData, this.selectedFile);
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Invalid Data Entry', 'Please fill the data with valid informations', 'warning');
        }
    }
    //Put
    loadItems() {
        if (this.appSetting.items.length === 0) {
            this.mainItemService.get().subscribe(x => this.items = x, err => console.log(err), () => {
                this.appSetting.items = this.items;
                this.loading = 0;
                this.appSetting.filter = 0;
                sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.hideLoading();
            });
        }
        else {
            this.items = this.appSetting.items;
            this.loading = 0;
            this.appSetting.filter = 0;
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.hideLoading();
        }
    }
    onSearch() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
            title: 'Please wait',
            html: 'System is processing for your request',
            onBeforeOpen: () => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.showLoading();
            }
        });
        if (this.subcategory_ID !== 0 && this.category_ID !== 0) {
            this.searchBySubCategory();
        }
        else if (this.subcategory_ID === 0 && this.category_ID === 0) {
            this.loadItems();
        }
        else if (this.subcategory_ID === 0 && this.category_ID !== 0) {
            if (this.appSetting.items.length === 0) {
                this.mainItemService.get().
                    subscribe(x => this.items = x, err => console.log(err), () => {
                    this.appSetting.items = this.items;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.hideLoading();
                });
            }
            else if (this.category_ID === 0 && this.subcategory_ID !== 0) {
                this.loadItems();
            }
            else if (this.category_ID !== 0 && this.subcategory_ID === 0) {
                let tempItemModel = [];
                this.items.forEach(x => {
                    this.appSetting.subCategoryMenu.forEach(y => {
                        if (y.cat_id === this.category_ID) {
                            if (x.sub_category_id === y.sub_cat_id) {
                                tempItemModel.push(x);
                            }
                        }
                    });
                    this.items = tempItemModel;
                    this.appSetting.filter = 0;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.hideLoading();
                });
            }
        }
    }
    searchBySubCategory() {
        this.mainItemService.getMany(this.subcategory_ID).subscribe(x => {
            this.items = x;
        }, err => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire("There is no item", "Error", "error");
        }, () => {
            /*      Swal.close();*/
            this.categoryChoiceID = this.subcategory_ID;
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.hideLoading();
            this.appSetting.filter = 0;
        });
    }
    generalSearchMethod() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
            title: 'Please wait',
            html: 'System is processing for your request',
            onBeforeOpen: () => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.showLoading();
            }
        });
        this.generalSearch.get(this.searchItem).subscribe(x => {
            this.items = x;
        }, err => {
            console.log(err);
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire("There is no item", "Error", "error");
        }, () => {
            /*      Swal.close();*/
            this.categoryChoiceID = this.subcategory_ID;
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.hideLoading();
            this.appSetting.search = 0;
        });
    }
    onScrollDown() {
        this.loading = 1;
        let data = [];
        this.page = this.page + 1;
        this.mainItemService.getScrollDown(this.categoryChoiceID, this.page).subscribe(x => data = x, err => console.log(err), () => {
            if (data.length !== 0) {
                data.forEach(z => {
                    this.items.push(z);
                    this.appSetting.items.push(z);
                    this.loading = 0;
                });
            }
            else {
                this.loading = 0;
            }
        });
    }
    onScrollUp() {
    }
    onchageCategoryMenu(v) {
        this.category_ID = v;
        this.subcategory = [];
        this.appSetting.subCategoryMenu.forEach(x => {
            if (x.cat_id === v) {
                this.subcategory.push(x);
            }
        });
    }
    onAddSelect(id, Mainname, detail) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
            title: 'Please wait',
            html: 'System is processing for your request',
            onBeforeOpen: () => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.showLoading();
            }
        });
        this.imageUrl = `${this.appSetting.http}://${this.localhost}/images/innovation.svg`;
        let shopCartItem = {
            orderQty_ID: 0,
            outputQty: 1,
            sub_item_id: 0,
            main_item_id: 0,
            //Backend will calculate price
            output_price: 0,
            orderID: 0,
            status: 'pending',
            userID: 0
        };
        let shopCartItemView = {
            orderQty_ID: 0,
            outputQty: 1,
            sub_item_id: 0,
            sub_item_name: '',
            main_item_id: 0,
            main_item_name: '',
            //Backend will calculate price
            output_price: 0,
            orderID: 0,
            status: 'pending',
            userID: 0,
            sub_imageurl: ""
        };
        if (id !== null) {
            let temp = [];
            let tempView = [];
            let subName = '';
            let priceTemp = [];
            let selectList = [];
            //For Swal Options
            let sentence = "";
            let completeSentence = "";
            let sequence = [];
            if (detail === 1) {
                sequence = ["1", "2"];
            }
            else {
                sequence = ["1"];
            }
            this.UnitService.get(+id).subscribe(y => priceTemp = y, err => console.log(err), () => {
                this.subItemService.get(+id).subscribe(x => temp = x, err => console.log(err), () => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.close();
                    sentence = "{";
                    completeSentence = "";
                    temp.forEach(element => {
                        sentence = sentence + '"' + element.sub_item_id + '"' + ":" + '"' + element.sub_item_name + '"' + ",";
                    });
                    let x = sentence.substring(0, sentence.length - 1);
                    completeSentence = x + "}";
                    let priceShopcart = 0;
                    if (sequence.length === 2) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.mixin({
                            confirmButtonText: 'Next &rarr;',
                            showCancelButton: true,
                            progressSteps: sequence
                        }).queue([
                            {
                                onRender: () => {
                                    let selectDom = document.getElementsByClassName('swal2-select')[0];
                                    if (selectDom !== undefined) {
                                        selectDom.onchange = () => {
                                            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.showLoading();
                                            let selectedIndex = selectDom.options[selectDom.selectedIndex].value;
                                            subName = selectDom.options[selectDom.selectedIndex].innerText;
                                            temp.forEach(x => {
                                                if (x.sub_item_id === +selectedIndex) {
                                                    this.temp.Sub = x.sub_item_id;
                                                    this.temp.Main = x.main_item_id;
                                                    this.imageUrl = `${this.appSetting.http}://${this.localhost}/images/Sub-${x.sub_item_id}-${x.sub_item_image}`;
                                                    let g = document.getElementsByClassName('swal2-image');
                                                    for (var i = 0; i < g.length; i++) {
                                                        let sak = document.getElementsByClassName('swal2-image')[i];
                                                        sak.src = this.imageUrl;
                                                        sak.style.height = "auto";
                                                        sak.style.width = "auto";
                                                    }
                                                }
                                            });
                                            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.hideLoading();
                                        };
                                    }
                                    else {
                                        console.log("Sak it(Image Class) is undefined");
                                    }
                                },
                                title: 'Select one',
                                input: 'select',
                                inputOptions: JSON.parse(completeSentence),
                                inputPlaceholder: 'Select Colour',
                                showCancelButton: true,
                                imageUrl: this.imageUrl,
                                imageWidth: 468.75,
                                imageHeight: 375,
                                imageAlt: 'Custom image',
                                inputValidator: (value) => {
                                    return new Promise((resolve) => {
                                        if (value !== null) {
                                            shopCartItem = {
                                                orderQty_ID: 0,
                                                outputQty: 1,
                                                sub_item_id: this.temp.Sub,
                                                main_item_id: this.temp.Main,
                                                //Backend will calculate price
                                                output_price: 0,
                                                orderID: 0,
                                                status: 'pending',
                                                userID: 0
                                            };
                                            shopCartItemView = {
                                                orderQty_ID: 0,
                                                outputQty: 1,
                                                sub_item_id: this.temp.Sub,
                                                sub_item_name: subName,
                                                main_item_id: this.temp.Main,
                                                main_item_name: Mainname,
                                                //Backend will calculate price
                                                output_price: 0,
                                                orderID: 0,
                                                status: 'pending',
                                                userID: 0,
                                                sub_imageurl: this.imageUrl
                                            };
                                            resolve();
                                        }
                                    });
                                }
                            },
                            {
                                title: 'Quantity',
                                onRender: () => {
                                    let selectDom = document.getElementsByClassName('swal2-input')[0];
                                    if (selectDom !== undefined) {
                                        selectDom.oninput = () => {
                                            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.showLoading();
                                            let qty = +selectDom.value;
                                            let priceArray = [];
                                            let qtyArray = [];
                                            priceTemp.forEach(p => {
                                                priceArray.push(p.price);
                                                qtyArray.push(p.qty);
                                            });
                                            priceArray.reverse();
                                            qtyArray.reverse();
                                            let price = 0;
                                            for (var i = 0; i < priceArray.length; i++) {
                                                let qtyTemp = +((qty / (+qtyArray[i])).toString());
                                                if (qtyTemp < 1) {
                                                    qtyTemp = 0;
                                                }
                                                let toCut = qtyTemp.toString().indexOf(".");
                                                if (toCut > 0) {
                                                    qtyTemp = +(qtyTemp.toString().substring(0, toCut + 1));
                                                }
                                                price = price + (qtyTemp * (+priceArray[i]));
                                                if (price !== 0) {
                                                    qty = qty % (+qtyArray[i]);
                                                }
                                            }
                                            document.getElementById('swal2-title').innerText = price.toString() + ' Kyats';
                                            priceShopcart = price;
                                            selectDom.focus();
                                            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.hideLoading();
                                        };
                                    }
                                    else {
                                        console.log("Sak it is undefined");
                                    }
                                },
                                text: 'Please insert amount to add quantity!',
                                input: 'number',
                                inputValidator: (value) => {
                                    sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.showLoading();
                                    return new Promise((resolve) => {
                                        if (value !== null) {
                                            shopCartItem.output_price = +priceShopcart;
                                            shopCartItem.outputQty = +value;
                                            shopCartItemView.output_price = +priceShopcart;
                                            shopCartItemView.outputQty = +value;
                                            this.appSetting.localShopcart.push(shopCartItem);
                                            this.appSetting.localViewShopcart.push(shopCartItemView);
                                            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.hideLoading();
                                            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire("Success", "Your item has been added to cart", 'success');
                                            //resolve();
                                        }
                                    });
                                }
                            }
                        ]);
                    }
                    else {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.mixin({
                            confirmButtonText: 'Close',
                            showCancelButton: true,
                            progressSteps: sequence
                        }).queue([
                            {
                                onRender: () => {
                                    let selectDom = document.getElementsByClassName('swal2-select')[0];
                                    if (selectDom !== undefined) {
                                        selectDom.onchange = () => {
                                            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.showLoading();
                                            let selectedIndex = selectDom.options[selectDom.selectedIndex].value;
                                            subName = selectDom.options[selectDom.selectedIndex].innerText;
                                            temp.forEach(x => {
                                                if (x.sub_item_id === +selectedIndex) {
                                                    this.temp.Sub = x.sub_item_id;
                                                    this.temp.Main = x.main_item_id;
                                                    this.imageUrl = `${this.appSetting.http}://${this.localhost}/images/Sub-${x.sub_item_id}-${x.sub_item_image}`;
                                                    let g = document.getElementsByClassName('swal2-image');
                                                    for (var i = 0; i < g.length; i++) {
                                                        let sak = document.getElementsByClassName('swal2-image')[i];
                                                        sak.src = this.imageUrl;
                                                        sak.style.height = "auto";
                                                        sak.style.width = "auto";
                                                    }
                                                }
                                            });
                                            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.hideLoading();
                                        };
                                    }
                                    else {
                                        console.log("Sak it(Image Class) is undefined");
                                    }
                                },
                                title: 'Select one',
                                input: 'select',
                                inputOptions: JSON.parse(completeSentence),
                                inputPlaceholder: 'Select Colour',
                                showCancelButton: true,
                                imageUrl: this.imageUrl,
                                imageWidth: 468.75,
                                imageHeight: 375,
                                imageAlt: 'Custom image',
                                inputValidator: (value) => {
                                    return new Promise((resolve) => {
                                        resolve();
                                    });
                                }
                            }
                        ]);
                    }
                });
            });
        }
    }
    filter() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.mixin({
            input: 'text',
            confirmButtonText: 'Next &rarr;',
            showCancelButton: true,
            progressSteps: ['1', '2', '3']
        }).queue([
            {
                title: 'Question 1',
                text: 'Chaining swal2 modals is easy'
            },
            'Question 2',
            'Question 3'
        ]).then((result) => {
            if (result.value) {
                const answers = JSON.stringify(result.value);
                sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                    title: 'All done!',
                    html: `
            Your answers:
            <pre><code>${answers}</code></pre>
          `,
                    confirmButtonText: 'Lovely!'
                });
            }
        });
    }
};
Tab1Page.ctorParameters = () => [
    { type: _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_9__["Base64"] },
    { type: _Services_Mainitem_mainitem_service__WEBPACK_IMPORTED_MODULE_5__["MainitemService"] },
    { type: src_app_app_setting__WEBPACK_IMPORTED_MODULE_4__["appSetting"] },
    { type: _Services_generalSearch_general_search_service__WEBPACK_IMPORTED_MODULE_2__["GeneralSearchService"] },
    { type: _Services_Subitem_subitem_service__WEBPACK_IMPORTED_MODULE_8__["SubitemService"] },
    { type: _Services_unit_unit_service__WEBPACK_IMPORTED_MODULE_3__["UnitService"] },
    { type: _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_1__["Camera"] }
];
Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-tab1',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_9__["Base64"],
        _Services_Mainitem_mainitem_service__WEBPACK_IMPORTED_MODULE_5__["MainitemService"],
        src_app_app_setting__WEBPACK_IMPORTED_MODULE_4__["appSetting"],
        _Services_generalSearch_general_search_service__WEBPACK_IMPORTED_MODULE_2__["GeneralSearchService"],
        _Services_Subitem_subitem_service__WEBPACK_IMPORTED_MODULE_8__["SubitemService"],
        _Services_unit_unit_service__WEBPACK_IMPORTED_MODULE_3__["UnitService"],
        _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_1__["Camera"]])
], Tab1Page);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module-es2015.js.map