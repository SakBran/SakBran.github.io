function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab3Tab3PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>   \n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <div class=\"center\">\n            <ion-chip (click)=\"this.appSetting.back()\" outline color=\"primary\">\n              <ion-icon  name=\"backspace\"></ion-icon>\n              <ion-label>Back</ion-label>\n            </ion-chip>\n          </div>\n        </ion-col>\n        \n        <ion-col className=\"ion-align-self-center\">\n          <div class=\"center\">\n           \n          </div>\n        </ion-col>\n        <ion-col className=\"ion-align-self-center\">\n          <div class=\"center\">\n           \n         </div>\n        </ion-col>\n        <ion-col >\n          <div   class=\"center\">\n            <ion-chip *ngIf=\"this.appSetting.sessionUser.userID!==0\"  (click)=\"logout()\" outline color=\"primary\">\n              <ion-icon name=\"log-out-outline\"></ion-icon>\n              <ion-label>Logout</ion-label>\n            </ion-chip>\n          </div>\n         \n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"this.orderTracking===0\" [fullscreen]=\"true\">\n\n\n        <!---For Sign In -->\n        <ion-card *ngIf=\"this.appSetting.signIn===1\" >\n           <ion-card-header>\n            <ion-card-title>Sign In</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-list lines=\"full\" class=\"ion-no-margin ion-no-padding\">\n              <ion-item>\n                <ion-label position=\"stacked\">Phone/Username <ion-text *ngIf=\"this.username===''\" color=\"danger\">*</ion-text></ion-label>\n                <ion-input [(ngModel)]=\"this.username\" required type=\"text\" oninput=\"\"></ion-input>\n              </ion-item>\n    \n              <ion-item>\n                <ion-label position=\"stacked\">Password <ion-text *ngIf=\"this.password===''\" color=\"danger\">*</ion-text></ion-label>\n                <ion-input [(ngModel)]=\"this.password\" required type=\"password\" oninput=\"\"></ion-input>\n              </ion-item>\n            </ion-list>\n          </ion-card-content>\n\n          <ion-grid>\n            <ion-row>\n              <ion-col>\n                <ion-button  color=\"light\" expand=\"block\">\n                  Cancel\n                </ion-button>\n                </ion-col>\n              \n              <ion-col>\n                <ion-button  (click)=\"this.login()\" color=\"light\" expand=\"block\">\n                  Sign In\n              </ion-button>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                <div class=\"center\">\n                  <a (click)=\"this.appSetting.signIn=0;this.appSetting.signUp=1;\">Don't have an account?</a></div>\n              \n            </ion-col>\n          <!-----  <ion-col>\n             <div class=\"center\"><a>Forget password?</a></div>\n            </ion-col>------>\n          </ion-row>\n        </ion-grid>\n      \n        </ion-card>\n\n        <!---For Two Factor Authenication -->\n    <!-----    \n      <ion-card *ngIf=\"this.appSetting.otp===1\">\n          <ion-card-header>\n           <ion-card-title>One Time Password</ion-card-title>\n           <ion-card-subtitle>Please prove us with OTP that you are not spam!</ion-card-subtitle>\n         </ion-card-header>\n         <ion-card-content>\n           <ion-list lines=\"full\" class=\"ion-no-margin ion-no-padding\">\n         \n\n            <ion-item>\n              <ion-label>Phone</ion-label>\n              <ion-toggle ></ion-toggle>\n            </ion-item>\n            <ion-item>\n              <ion-label>Google Authenicator</ion-label>\n              <ion-toggle disabled></ion-toggle>\n            </ion-item>\n\n            <ion-item>\n            <ion-grid>\n              <ion-row>\n                <ion-col>\n                </ion-col>\n                <ion-col>\n                  <ion-input required type=\"number\" placeholder=\"OTP\"oninput=\"\"></ion-input>\n                </ion-col>\n                <ion-col>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-item>\n           \n           \n           </ion-list>\n\n         </ion-card-content>\n\n         <ion-grid>\n           <ion-row>\n             <ion-col>\n               <ion-button (click)=\"this.appSetting.otp=0\" color=\"light\" expand=\"block\">\n                 Cancel\n               </ion-button>\n               </ion-col>\n             \n             <ion-col>\n               <ion-button (click)=\"this.appSetting.loginStatus=1;this.appSetting.otp=0\" color=\"light\" expand=\"block\">\n                 Submit\n             </ion-button>\n             </ion-col>\n           </ion-row>\n       </ion-grid>\n     \n       </ion-card>        \n------->\n    \n        <!---For Sign Up Authenication -->\n        <ion-card *ngIf=\" this.appSetting.signUp===1\">\n         \n          <ion-card-header>\n           <ion-card-title>Sign Up</ion-card-title>\n           <ion-card-subtitle>Please enter your informations</ion-card-subtitle>\n         </ion-card-header>\n         <ion-card-content>\n           <ion-list lines=\"full\" class=\"ion-no-margin ion-no-padding\">\n            <ion-item>\n              <ion-label position=\"stacked\">Name <ion-text *ngIf=\"data.userName.toString()===''\" color=\"danger\">*</ion-text></ion-label>\n              <ion-input required type=\"text\" [(ngModel)]=\"data.userName\" ></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"stacked\">Password <ion-text  *ngIf=\"data.password.toString()!==this.confirmPassword || data.password.toString()===''\" color=\"danger\">*</ion-text></ion-label>\n              <ion-input required type=\"password\" [(ngModel)]=\"data.password\" ></ion-input>\n            </ion-item>\n  \n            <ion-item>\n              <ion-label position=\"stacked\">Confirm Password <ion-text *ngIf=\"data.password.toString()!==this.confirmPassword || this.confirmPassword===''\" color=\"danger\">*</ion-text></ion-label>\n              <ion-input required type=\"password\" [(ngModel)]=\"this.confirmPassword\"></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"stacked\">Phone Number <ion-text *ngIf=\"handlePhoneValue()\"  color=\"danger\">*</ion-text></ion-label>\n              <ion-input required type=\"tel\" [(ngModel)]=\"data.userPhone\" ></ion-input>\n            </ion-item>\n\n           \n           \n\n          \n           \n           </ion-list>\n\n         </ion-card-content>\n\n         <ion-grid>\n           <ion-row>\n             <ion-col>\n               <ion-button  color=\"light\" expand=\"block\">\n                 Cancel\n               </ion-button>\n               </ion-col>\n             \n             <ion-col>\n               <ion-button (click)=\"onPost()\" color=\"light\" expand=\"block\">\n                 Sign Up\n             </ion-button>\n             </ion-col>\n           </ion-row>\n           <ion-row>\n            <ion-col>\n              <div class=\"center\">\n                <a (click)=\"this.appSetting.signIn=1;this.appSetting.signUp=0;\">Already a member?</a></div>\n            \n          </ion-col>\n       \n        </ion-row>\n          </ion-grid>\n     \n       </ion-card>   \n\n        <!---For Profile -->\n        <ion-card *ngIf=\" this.appSetting.sessionUser.userID!==0\">\n         \n          <ion-card-header>\n           <ion-card-title>User Profile</ion-card-title>\n           <ion-card-subtitle>This is your delivery information</ion-card-subtitle>\n         </ion-card-header>\n         <ion-card-content>\n           <ion-list lines=\"full\" class=\"ion-no-margin ion-no-padding\">\n            <ion-item>\n              <ion-label position=\"stacked\">Name</ion-label>\n              <ion-input required type=\"text\" [(ngModel)]=\"this.appSetting.sessionUser.userName\" readonly></ion-input>\n            </ion-item>\n<!----------\n            <ion-item>\n              <ion-label position=\"stacked\">Password <ion-text  *ngIf=\"data.password.toString()!==this.confirmPassword || data.password.toString()===''\" color=\"danger\">*</ion-text></ion-label>\n              <ion-input required type=\"password\" [(ngModel)]=\"data.password\" ></ion-input>\n            </ion-item>\n  \n            <ion-item>\n              <ion-label position=\"stacked\">Confirm Password <ion-text *ngIf=\"data.password.toString()!==this.confirmPassword || this.confirmPassword===''\" color=\"danger\">*</ion-text></ion-label>\n              <ion-input required type=\"password\" [(ngModel)]=\"this.confirmPassword\"></ion-input>\n            </ion-item>\n--------->\n            <ion-item>\n              <ion-label position=\"stacked\">Phone Number </ion-label>\n              <ion-input required type=\"tel\" [(ngModel)]=\"this.appSetting.sessionUser.userPhone\" readonly></ion-input>\n            </ion-item>\n\n        \n           \n           </ion-list>\n\n         </ion-card-content>\n\n         <ion-grid>\n           <ion-row>\n            <ion-col>\n              <div class=\"center\">\n            <!-----    <a (click)=\"this.appSetting.signIn=1;this.appSetting.signUp=0;\">Want to Edit User Profile?</a>\n             ------> \n            </div>\n           \n          </ion-col>\n       \n        </ion-row>\n       </ion-grid>\n     \n       </ion-card>  \n      \n\n        <!---For order Tracking -->\n        <ion-card *ngIf=\" this.appSetting.sessionUser.userID!==0 && this.appSetting.sessionUser.userType!==2 \">\n          <ion-card-header>\n           <ion-card-title>Order Tracking</ion-card-title>\n           <ion-card-subtitle *ngIf=\"this.appSetting.userOrderTrackingList.length!==0\">You can check your order list here</ion-card-subtitle>\n           <ion-card-subtitle *ngIf=\"this.appSetting.userOrderTrackingList.length===0\">You have no order</ion-card-subtitle>\n         </ion-card-header>\n         <ion-card-content>\n           <ion-list lines=\"full\" class=\"ion-no-margin ion-no-padding\">\n              <ion-item button *ngFor=\"let item of this.appSetting.userOrderTrackingList\" (click)=\"orderTrackingDetialPage(item.orderID)\">\n                <ion-label>\n                  Invoice :{{item.orderID}}\n                </ion-label>\n              </ion-item>  \n              <ion-item button (click)=\"this.orderListRefresh()\">\n                <ion-icon slot=\"end\" name=\"refresh-circle-outline\"></ion-icon>\n                \n                <ion-label>\n                  Refresh\n                </ion-label>\n              </ion-item>  \n           </ion-list>\n          </ion-card-content>\n        </ion-card> \n        <!----location share-->\n        <ion-card>  \n          <ion-grid *ngIf=\" this.appSetting.sessionUser.userID!==0 && this.appSetting.sessionUser.userType!==2\">\n              <ion-row>\n                <ion-col>\n                  <ion-button   (click)=\"locationShare()\"  color=\"primary\" expand=\"block\">\n                     Location Share\n                  </ion-button>      \n                </ion-col>\n              </ion-row>\n          </ion-grid>\n        </ion-card>  \n\n</ion-content>\n\n<ion-content *ngIf=\"this.appSetting.userOrderTrackingListTemp.length!==0  && this.orderTracking===1\"\n [fullscreen]=\"true\">\n  <ion-row>\n    <ion-col>\n      <ion-button expand=\"full\">Invoice No:{{this.invoice}}</ion-button>\n    </ion-col>\n    \n  </ion-row>\n  <ion-card *ngFor=\"let item of this.appSetting.userOrderTrackingListTemp; let i=index;\">\n    <img src=\"{{this.appSetting.http}}://{{this.localhost}}/images/Sub-{{item.sub_item_id}}-{{item.sub_item_image}}\" />\n   \n    <ion-card-header>\n      <ion-card-subtitle>{{item.main_item_name}}</ion-card-subtitle>\n      <ion-card-title>{{item.sub_item_name}}</ion-card-title>\n    </ion-card-header>\n\n    <ion-toolbar>\n      <ion-grid>\n        \n        <ion-row>\n          <ion-col>\n            <ion-card >\n              <ion-card-header>\n                <ion-card-subtitle>Quantity</ion-card-subtitle>\n                <ion-card-title>{{item.outputQty}}</ion-card-title>\n              </ion-card-header>\n            </ion-card>\n          </ion-col>\n     \n          <ion-col>\n            <ion-card>\n              <ion-card-header>\n                <ion-card-subtitle>Amount</ion-card-subtitle>\n                <ion-card-title>{{item.output_price}}</ion-card-title>\n              </ion-card-header>\n            </ion-card>\n          </ion-col>\n         \n        </ion-row>\n      </ion-grid>\n\n    </ion-toolbar>\n  \n  </ion-card>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <ion-card-header>\n            <ion-card-subtitle>Total Quantity</ion-card-subtitle>\n            <ion-card-title>{{this.totalQty}}</ion-card-title>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n\n      <ion-col>\n        <ion-card>\n          <ion-card-header>\n            <ion-card-subtitle>Total Amount</ion-card-subtitle>\n            <ion-card-title>{{this.totalAmount}}</ion-card-title>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-button expand=\"full\" (click)=\"this.orderTracking=0\">Back</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<ion-content *ngIf=\"this.appSetting.sessionUser.userType===2\">\n  <ion-card>\n  <ion-list>\n    <ion-item *ngFor=\"let item of this.appSetting.errorMsg\">\n    <ion-textarea>\n        {{item}}\n    </ion-textarea>\n    </ion-item>\n  </ion-list>\n</ion-card>\n </ion-content> \n\n\n\n";
    /***/
  },

  /***/
  "./src/app/Services/userAuth/user-auth.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/Services/userAuth/user-auth.service.ts ***!
    \********************************************************/

  /*! exports provided: UserAuthService */

  /***/
  function srcAppServicesUserAuthUserAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserAuthService", function () {
      return UserAuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _app_setting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../app-setting */
    "./src/app/app-setting.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var UserAuthService = /*#__PURE__*/function () {
      function UserAuthService(http, appSetting) {
        _classCallCheck(this, UserAuthService);

        this.http = http;
        this.appSetting = appSetting;
        this.url = "".concat(this.appSetting.http, "://").concat(this.appSetting.apiPort, "/api/userAuthenication");
      }

      _createClass(UserAuthService, [{
        key: "check",
        value: function check(username, password) {
          var url = this.url + "?username=".concat(username, "&password=").concat(password);
          return this.http.get(url);
        }
      }]);

      return UserAuthService;
    }();

    UserAuthService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _app_setting__WEBPACK_IMPORTED_MODULE_1__["appSetting"]
      }];
    };

    UserAuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _app_setting__WEBPACK_IMPORTED_MODULE_1__["appSetting"]])], UserAuthService);
    /***/
  },

  /***/
  "./src/app/tab3/tab3.module.ts":
  /*!*************************************!*\
    !*** ./src/app/tab3/tab3.module.ts ***!
    \*************************************/

  /*! exports provided: Tab3PageModule */

  /***/
  function srcAppTab3Tab3ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function () {
      return Tab3PageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tab3.page */
    "./src/app/tab3/tab3.page.ts");
    /* harmony import */


    var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../explore-container/explore-container.module */
    "./src/app/explore-container/explore-container.module.ts");

    var Tab3PageModule = function Tab3PageModule() {
      _classCallCheck(this, Tab3PageModule);
    };

    Tab3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]
      }])],
      declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
    })], Tab3PageModule);
    /***/
  },

  /***/
  "./src/app/tab3/tab3.page.scss":
  /*!*************************************!*\
    !*** ./src/app/tab3/tab3.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab3Tab3PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content ion-toolbar {\n  --background: translucent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMy9EOlxcb25saW5lU2hvcEFwcFxcb25saW5lU2hvcEFwcFxcbXlBcHAvc3JjXFxhcHBcXHRhYjNcXHRhYjMucGFnZS5zY3NzIiwic3JjL2FwcC90YWIzL3RhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvdGFiMy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XG59IiwiaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/tab3/tab3.page.ts":
  /*!***********************************!*\
    !*** ./src/app/tab3/tab3.page.ts ***!
    \***********************************/

  /*! exports provided: Tab3Page */

  /***/
  function srcAppTab3Tab3PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab3Page", function () {
      return Tab3Page;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _Services_locationSave_location_save_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../Services/locationSave/location-save.service */
    "./src/app/Services/locationSave/location-save.service.ts");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/ngx/index.js");
    /* harmony import */


    var _Services_userOrderTracking_user_order_tracking_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../Services/userOrderTracking/user-order-tracking.service */
    "./src/app/Services/userOrderTracking/user-order-tracking.service.ts");
    /* harmony import */


    var _Services_userAuth_user_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../Services/userAuth/user-auth.service */
    "./src/app/Services/userAuth/user-auth.service.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _Services_User_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../Services/User/user.service */
    "./src/app/Services/User/user.service.ts");
    /* harmony import */


    var src_app_app_setting__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/app-setting */
    "./src/app/app-setting.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var Tab3Page = /*#__PURE__*/function () {
      function Tab3Page(locationService, geolocation, service, orderTrackingService, appSetting, userAuthService) {
        _classCallCheck(this, Tab3Page);

        this.locationService = locationService;
        this.geolocation = geolocation;
        this.service = service;
        this.orderTrackingService = orderTrackingService;
        this.appSetting = appSetting;
        this.userAuthService = userAuthService;
        this.data = {
          userID: 0,
          password: "",
          userName: "",
          userType: 0,
          userPhone: "",
          userAddress: ""
        };
        this.confirmPassword = "";
        this.phoneStatus = false;
        this.emailStatus = true;
        this.typeError = false;
        this.userProfile = this.appSetting.sessionUser;
        this.username = "";
        this.password = "";
        this.totalQty = 0;
        this.totalAmount = 0;
        this.orderTracking = 0;
        this.invoice = 0;
        this.localhost = this.appSetting.apiPort;
      }

      _createClass(Tab3Page, [{
        key: "handlePhoneValue",
        value: function handlePhoneValue() {
          if (this.data.userPhone === '') {
            this.phoneStatus = false;
            return true;
          } else if (this.data.userPhone.length < 8) {
            this.phoneStatus = false;
            return true;
          } else {
            this.phoneStatus = true;
            return false;
          }
        }
      }, {
        key: "validation",
        value: function validation() {
          if (this.data.password !== this.confirmPassword || this.confirmPassword === '') this.typeError = true;else if (this.phoneStatus === false) this.typeError = true;else if (this.emailStatus === false) this.typeError = true;else if (this.data.userName === '') this.typeError = true;else this.typeError = false;
        }
      }, {
        key: "onPost",
        value: function onPost() {
          this.validation();

          if (this.typeError === false) {
            var x = this.data;
            this.service.post(x);
          }
        }
      }, {
        key: "dataCheckLogin",
        value: function dataCheckLogin(username, password) {
          var _this = this;

          this.userAuthService.check(username, password).subscribe(function (x) {
            _this.appSetting.sessionUser = x;
          }, function (err) {
            var error = Object.assign(err);
            var msg = "error";
            var action = "";
            var btn = "OK";

            if (error.status === 401) {
              msg = "Invalid username & password!";
              action = "<a href>Forget password?</a>";
            }

            if (error.status === 404) {
              msg = "Account does not exist";
              action = "<span>Please Sign Up to continue.Thank you</span>";
            }

            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.hideLoading();
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
              icon: 'error',
              title: 'Oops...',
              text: msg,
              confirmButtonText: btn,
              footer: action
            });
          }, function () {
            _this.userProfile = _this.appSetting.sessionUser;

            if (_this.appSetting.sessionUser.userType === 2) {
              _this.orderTrackingService.getAll().subscribe(function (x) {
                return _this.appSetting.userOrderTrackingList = x;
              }, function (err) {
                return console.log(err);
              }, function () {
                _this.appSetting.signIn = 0;

                _this.geolocation.getCurrentPosition().then(function (resp) {
                  var locationModel = {
                    id: 0,
                    userID: _this.appSetting.sessionUser.userID,
                    location_ltd: resp.coords.latitude.toString(),
                    location_lng: resp.coords.longitude.toString()
                  };

                  _this.locationService.post(locationModel);

                  sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Welcome', "Login Successful", 'success');
                  sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.hideLoading();
                });
              });
            } else {
              _this.orderTrackingService.get(_this.appSetting.sessionUser.userID).subscribe(function (x) {
                return _this.appSetting.userOrderTrackingList = x;
              }, function (err) {
                return console.log(err);
              }, function () {
                _this.appSetting.signIn = 0;

                _this.geolocation.getCurrentPosition().then(function (resp) {
                  var locationModel = {
                    id: 0,
                    userID: _this.appSetting.sessionUser.userID,
                    location_ltd: resp.coords.latitude.toString(),
                    location_lng: resp.coords.longitude.toString()
                  };

                  _this.locationService.post(locationModel);

                  sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Welcome', "Login Successful", 'success');
                  sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.hideLoading();
                });
              });
            }
          });
        }
      }, {
        key: "locationShare",
        value: function locationShare() {
          var _this2 = this;

          this.geolocation.getCurrentPosition().then(function (resp) {
            var locationModel = {
              id: 0,
              userID: _this2.appSetting.sessionUser.userID,
              location_ltd: resp.coords.latitude.toString(),
              location_lng: resp.coords.longitude.toString()
            };

            _this2.locationService.post(locationModel);

            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("Successfully Share your location");
          });
        }
      }, {
        key: "orderListRefresh",
        value: function orderListRefresh() {
          var _this3 = this;

          sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            title: 'Please wait',
            html: 'System is processing for your request',
            onBeforeOpen: function onBeforeOpen() {
              sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.showLoading();
            }
          });
          this.orderTrackingService.get(this.appSetting.sessionUser.userID).subscribe(function (x) {
            return _this3.appSetting.userOrderTrackingList = x;
          }, function (err) {
            return console.log(err);
          }, function () {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.hideLoading();
          });
        }
      }, {
        key: "login",
        value: function login() {
          if (!this.loginChek()) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
              title: 'Please wait',
              html: 'System is processing for your request',
              onBeforeOpen: function onBeforeOpen() {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.showLoading();
              }
            });
            this.dataCheckLogin(this.username, this.password);
          }
        }
      }, {
        key: "loginChek",
        value: function loginChek() {
          if (this.username === '' || this.password === '') {
            return false;
          }
        }
      }, {
        key: "totalCalculator",
        value: function totalCalculator() {
          var _this4 = this;

          this.totalQty = 0;
          this.totalAmount = 0;
          this.appSetting.userOrderTrackingListTemp.forEach(function (x) {
            _this4.totalAmount = _this4.totalAmount + x.output_price;
            _this4.totalQty = _this4.totalQty + x.outputQty;
          });
        }
      }, {
        key: "orderTrackingDetialPage",
        value: function orderTrackingDetialPage(id) {
          var _this5 = this;

          this.invoice = 0;
          this.appSetting.userOrderTrackingListTemp = [];
          this.appSetting.userOrderTrackingList.forEach(function (x) {
            if (x.orderID === id) {
              _this5.appSetting.userOrderTrackingListTemp.push(x);
            }
          });
          this.totalCalculator();
          this.orderTracking = 1;
          this.invoice = +id;
        }
      }, {
        key: "logout",
        value: function logout() {
          this.appSetting.sessionUser = {
            userID: 0,
            userName: "",
            password: "",
            userType: 0,
            userPhone: "",
            userAddress: ""
          };
          this.appSetting.signIn = 1;
          this.username = "";
          this.password = "";
        }
      }]);

      return Tab3Page;
    }();

    Tab3Page.ctorParameters = function () {
      return [{
        type: _Services_locationSave_location_save_service__WEBPACK_IMPORTED_MODULE_1__["LocationSaveService"]
      }, {
        type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"]
      }, {
        type: _Services_User_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
      }, {
        type: _Services_userOrderTracking_user_order_tracking_service__WEBPACK_IMPORTED_MODULE_3__["UserOrderTrackingService"]
      }, {
        type: src_app_app_setting__WEBPACK_IMPORTED_MODULE_7__["appSetting"]
      }, {
        type: _Services_userAuth_user_auth_service__WEBPACK_IMPORTED_MODULE_4__["UserAuthService"]
      }];
    };

    Tab3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"])({
      selector: 'app-tab3',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tab3.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tab3.page.scss */
      "./src/app/tab3/tab3.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_locationSave_location_save_service__WEBPACK_IMPORTED_MODULE_1__["LocationSaveService"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"], _Services_User_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"], _Services_userOrderTracking_user_order_tracking_service__WEBPACK_IMPORTED_MODULE_3__["UserOrderTrackingService"], src_app_app_setting__WEBPACK_IMPORTED_MODULE_7__["appSetting"], _Services_userAuth_user_auth_service__WEBPACK_IMPORTED_MODULE_4__["UserAuthService"]])], Tab3Page);
    /***/
  }
}]);
//# sourceMappingURL=tab3-tab3-module-es5.js.map