function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab2Tab2PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar *ngIf=\"this.appSetting.sessionUser.userType!==2\">   \n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <div *ngIf=\"this.appSetting.checkOut===0\" class=\"center\">\n            <ion-chip  (click)=\"this.appSetting.back()\" outline color=\"primary\">\n              \n              <ion-icon name=\"backspace\"></ion-icon>\n              <ion-label>Back</ion-label>\n            </ion-chip>\n          </div>\n          <div *ngIf=\"this.appSetting.checkOut===1\" class=\"center\">\n            <ion-chip  (click)=\"this.appSetting.checkOut=0\" outline color=\"primary\">\n              \n              <ion-icon name=\"backspace\"></ion-icon>\n              <ion-label>Back</ion-label>\n            </ion-chip>\n          </div>\n        </ion-col>\n        <ion-col>\n          <div class=\"center\">\n           \n          </div>\n        </ion-col>\n        <ion-col>\n          <div class=\"center\">\n       \n          <ion-chip  *ngIf=\"this.appSetting.sessionUser.userID===0\"  (click)=\"toSignUp()\" routerLink=\"/tabs/tab3\" outline color=\"primary\">\n              <ion-icon name=\"person-outline\"></ion-icon>\n              <ion-label>Signup</ion-label>\n            </ion-chip>\n            <ion-chip  *ngIf=\"this.appSetting.sessionUser.userID!==0&&this.appSetting.localShopcart.length!==0\"  (click)=\"this.appSetting.checkOut=1\" outline color=\"primary\">\n              <ion-icon name=\"card\"></ion-icon>\n              <ion-label>Purchase</ion-label>\n            </ion-chip>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </ion-toolbar>\n\n  <!------For Admin-->\n  <ion-toolbar *ngIf=\"this.appSetting.sessionUser.userType===2\">   \n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <div class=\"center\">\n            <ion-chip  (click)=\"this.appSetting.deliveryOrOrder=0;this.orderTracking=0;this.orderListRefresh()\" outline color=\"primary\">\n              <ion-icon name=\"list\"></ion-icon>\n              <ion-label>Order</ion-label>\n            </ion-chip>\n          </div>\n        </ion-col>\n        <ion-col>\n          <div class=\"center\">\n           \n          </div>\n        </ion-col>\n        <ion-col>\n          <div class=\"center\">\n            <ion-chip   (click)=\"this.appSetting.deliveryOrOrder=1;this.orderTracking=0;this.orderListRefresh()\" outline color=\"primary\">\n              <ion-icon name=\"car\"></ion-icon>\n              <ion-label>Delivery</ion-label>\n            </ion-chip>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"this.appSetting.localViewShopcart.length===0 && this.appSetting.sessionUser.userType!==2\"\n [fullscreen]=\"true\">\n <ion-card>\n  <ion-card-header>\n    <ion-card-subtitle>Total:0</ion-card-subtitle>\n    \n  </ion-card-header>\n</ion-card>\n </ion-content>\n\n<ion-content *ngIf=\"this.appSetting.localViewShopcart.length!==0 && this.appSetting.sessionUser.userType!==2 && this.appSetting.checkOut===0;\"\n [fullscreen]=\"true\">\n  <ion-card *ngFor=\"let item of this.appSetting.localViewShopcart; let i=index;\">\n    <img src=\"{{this.item.sub_imageurl}}\" />\n   \n    <ion-card-header>\n      <ion-card-subtitle>{{item.main_item_name}}</ion-card-subtitle>\n      <ion-card-title>{{item.sub_item_name}}</ion-card-title>\n    </ion-card-header>\n\n    <ion-toolbar>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-card (click)=\"oneEditQty(i,item.main_item_id)\">\n              <ion-card-header>\n                <ion-card-subtitle>Quantity</ion-card-subtitle>\n                <ion-card-title>{{item.outputQty}}</ion-card-title>\n              </ion-card-header>\n            </ion-card>\n          </ion-col>\n     \n          <ion-col>\n            <ion-card>\n              <ion-card-header>\n                <ion-card-subtitle>Amount</ion-card-subtitle>\n                <ion-card-title>{{item.output_price}}</ion-card-title>\n              </ion-card-header>\n            </ion-card>\n          </ion-col>\n         \n        </ion-row>\n      </ion-grid>\n\n    </ion-toolbar>\n    <ion-button (click)=\"onDelete(i)\" color=\"light\" expand=\"full\">\n      <ion-icon  name=\"trash-outline\"></ion-icon>\n    </ion-button>\n  \n  </ion-card>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <ion-card-header>\n            <ion-card-subtitle>Total Qty</ion-card-subtitle>\n            <ion-card-title>{{this.totalQty}}</ion-card-title>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n\n      <ion-col>\n        <ion-card>\n          <ion-card-header>\n            <ion-card-subtitle>Total Amount</ion-card-subtitle>\n            <ion-card-title>{{this.totalAmount}}</ion-card-title>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-button *ngIf=\"this.appSetting.sessionUser.userID!==0\"  (click)=\"this.appSetting.checkOut=1\"  color=\"primary\" expand=\"block\">\n          Purchase\n        </ion-button>\n        <ion-button *ngIf=\"this.appSetting.sessionUser.userID===0\"  (click)=\"toSignUp()\" routerLink=\"/tabs/tab3\" color=\"primary\" expand=\"block\">\n          Sign up to make Purchase\n        </ion-button>\n        </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n</ion-content>\n\n<ion-content *ngIf=\"this.appSetting.localViewShopcart.length!==0 && this.appSetting.sessionUser.userType!==2 &&  this.appSetting.checkOut===1\" [fullscreen]=\"true\">\n          <!---For Payment Authenication -->\n          <ion-card >\n            <ion-card-header>\n             <ion-card-title>Payment Plan</ion-card-title>\n             <ion-card-subtitle>Please choose one of your option to purchase.</ion-card-subtitle>\n           </ion-card-header>\n           <ion-card-content>\n             <ion-list lines=\"full\" class=\"ion-no-margin ion-no-padding\">\n              <ion-item>\n                <ion-label>KBZ Pay</ion-label>\n                <ion-toggle  disabled></ion-toggle>\n              </ion-item>\n              <ion-item>\n                <ion-label>Sai Sai Pay</ion-label>\n                <ion-toggle disabled></ion-toggle>\n              </ion-item>\n              <ion-item>\n                <ion-label>CB Pay</ion-label>\n                <ion-toggle disabled></ion-toggle>\n              </ion-item>\n              <ion-item>\n                <ion-label>Visa</ion-label>\n                <ion-toggle disabled></ion-toggle>\n              </ion-item>\n              <ion-item>\n                <ion-label>MPU</ion-label>\n                <ion-toggle disabled></ion-toggle>\n              </ion-item>\n              <ion-item>\n                <ion-label>Cash on Delivery</ion-label>\n                <ion-toggle checked></ion-toggle>\n              </ion-item>\n             </ion-list>\n  \n           </ion-card-content>\n      \n         </ion-card> \n\n        <!---For Address form Authenication -->\n        <ion-card >\n          <ion-card-header>\n           <ion-card-title>Delivery form</ion-card-title>\n           <ion-card-subtitle>Please enter your informations</ion-card-subtitle>\n         </ion-card-header>\n         <ion-card-content>\n           <ion-list lines=\"full\" class=\"ion-no-margin ion-no-padding\">\n            <ion-item>\n              <ion-label position=\"stacked\">Name <ion-text color=\"danger\">*</ion-text></ion-label>\n              <ion-input required type=\"text\" [(ngModel)]=\"this.appSetting.sessionUser.userName\" readonly></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"stacked\">Phone Number <ion-text color=\"danger\">*</ion-text></ion-label>\n              <ion-input required type=\"tel\" [(ngModel)]=\"this.appSetting.sessionUser.userPhone\" ></ion-input>\n            </ion-item>\n           \n           </ion-list>\n\n         </ion-card-content>\n\n          <ion-grid>\n              <ion-row>\n                <ion-col>\n                  <ion-button  color=\"light\" expand=\"block\">\n                    Cancel\n                  </ion-button>\n                  </ion-col>\n                \n                <ion-col>\n                  <ion-button  (click)=\"this.checkOut()\"  color=\"light\" expand=\"block\">\n                    Submit\n                </ion-button>\n                </ion-col>\n              </ion-row>\n          </ion-grid>\n     \n       </ion-card> \n\n     \n        <!---For Cash on delivery confirmation Authenication -->\n       <!---------\n         <ion-card *ngIf=\"this.appSetting.otp!==0\" >\n          <ion-card-header>\n           <ion-card-title>One Time Password</ion-card-title>\n           <ion-card-subtitle>Cash on delivery confirmation!</ion-card-subtitle>\n         </ion-card-header>\n         <ion-card-content>\n           <ion-list lines=\"full\" class=\"ion-no-margin ion-no-padding\">\n   \n            <ion-item>\n            <ion-grid>\n              <ion-row>\n                <ion-col>\n                </ion-col>\n                <ion-col>\n                  <ion-input required type=\"number\" placeholder=\"Enter OTP\"oninput=\"\"></ion-input>\n                </ion-col>\n                <ion-col>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-item>\n           \n           \n           </ion-list>\n\n         </ion-card-content>\n\n         <ion-grid>\n           <ion-row>\n             <ion-col>\n               <ion-button  color=\"light\" expand=\"block\">\n                 Cancel\n               </ion-button>\n               </ion-col>\n             \n             <ion-col>\n               <ion-button  color=\"light\" expand=\"block\">\n                 Confirm\n             </ion-button>\n             </ion-col>\n           </ion-row>\n       </ion-grid>\n     \n       </ion-card> ------->\n</ion-content>\n\n<!-------List of Order-->\n<ion-content *ngIf=\"this.appSetting.sessionUser.userType==2 && this.orderTracking===0\"\n [fullscreen]=\"true\">\n        <!---For order Admin Tracking -->\n        <ion-card *ngIf=\" this.appSetting.sessionUser.userID!==0 \">\n          <ion-card-header>\n           <ion-card-title *ngIf=\"this.appSetting.deliveryOrOrder===0\">Order Tracking</ion-card-title>\n           <ion-card-title *ngIf=\"this.appSetting.deliveryOrOrder===1\">Delivery Tracking</ion-card-title>\n           <ion-card-subtitle *ngIf=\"this.appSetting.userOrderTrackingList.length!==0\">You can check your order list here</ion-card-subtitle>\n           <ion-card-subtitle *ngIf=\"this.appSetting.userOrderTrackingList.length===0\">You have no order</ion-card-subtitle>\n         </ion-card-header>\n         <ion-card-content>\n           <ion-list lines=\"full\" class=\"ion-no-margin ion-no-padding\">\n              <ion-item button *ngFor=\"let item of this.appSetting.userOrderTrackingList\" (click)=\"orderTrackingDetialPage(item.orderID)\">\n                <ion-label>\n                  Invoice :{{item.orderID}}\n                </ion-label>\n              </ion-item>  \n              <ion-item button (click)=\"this.orderListRefresh()\">\n                <ion-icon slot=\"end\" name=\"refresh-circle-outline\"></ion-icon>\n                \n                <ion-label>\n                  Refresh\n                </ion-label>\n              </ion-item>  \n           </ion-list>\n          </ion-card-content>\n        </ion-card> \n\n        \n</ion-content>\n\n\n<ion-content *ngIf=\"this.appSetting.userOrderTrackingListTemp.length!==0  && this.orderTracking===1 && this.appSetting.sessionUser.userType===2\"\n [fullscreen]=\"true\">\n <ion-row>\n  <ion-col *ngIf=\" this.appSetting.deliveryOrOrder===0\">\n    <ion-button expand=\"block\">Invoice No:{{this.invoice}}</ion-button>\n  \n  </ion-col>\n  <ion-col *ngIf=\" this.appSetting.deliveryOrOrder===1\">\n    <ion-button color=\"primary\" (click)=\"this.googleMap()\" expand=\"block\"> Google Map for Invoice No:{{this.invoice}}</ion-button>\n  </ion-col>\n  </ion-row>\n <ion-card *ngIf=\" this.appSetting.sessionUserDelivery.userID!==0\">    \n  <ion-card-header>\n   <ion-card-title></ion-card-title>\n   <ion-card-subtitle>Delivery information</ion-card-subtitle>\n </ion-card-header>\n <ion-card-content>\n   <ion-list lines=\"full\" class=\"ion-no-margin ion-no-padding\">\n    <ion-item>\n      <ion-label position=\"stacked\">Name</ion-label>\n      <ion-input required type=\"text\" [(ngModel)]=\"this.appSetting.sessionUserDelivery.userName\" readonly></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"stacked\">Phone Number </ion-label>\n      <ion-input required type=\"tel\" [(ngModel)]=\"this.appSetting.sessionUserDelivery.userPhone\" readonly></ion-input>\n    </ion-item>\n\n   </ion-list>\n </ion-card-content>\n\n <ion-grid>\n   <ion-row>\n    <ion-col>\n      <div class=\"center\">\n    <!-----    <a (click)=\"this.appSetting.signIn=1;this.appSetting.signUp=0;\">Want to Edit User Profile?</a>\n     ------> \n    </div>\n   \n  </ion-col>\n\n</ion-row>\n</ion-grid>\n</ion-card>  \n \n\n  <ion-card *ngFor=\"let item of this.appSetting.userOrderTrackingListTemp; let i=index;\">\n    <img src=\"{{this.appSetting.http}}://{{this.appSetting.apiPort}}/images/Sub-{{item.sub_item_id}}-{{item.sub_item_image}}\" />\n   \n    <ion-card-header>\n      <ion-card-subtitle>{{item.main_item_name}}</ion-card-subtitle>\n      <ion-card-title>{{item.sub_item_name}}</ion-card-title>\n    </ion-card-header>\n\n    <ion-toolbar>\n      <ion-grid>\n        \n        <ion-row>\n          <ion-col>\n            <ion-card >\n              <ion-card-header>\n                <ion-card-subtitle>Quantity</ion-card-subtitle>\n                <ion-card-title>{{item.outputQty}}</ion-card-title>\n              </ion-card-header>\n            </ion-card>\n          </ion-col>\n     \n          <ion-col>\n            <ion-card>\n              <ion-card-header>\n                <ion-card-subtitle>Amount</ion-card-subtitle>\n                <ion-card-title>{{item.output_price}}</ion-card-title>\n              </ion-card-header>\n            </ion-card>\n          </ion-col>\n         \n        </ion-row>\n      </ion-grid>\n\n    </ion-toolbar>\n  \n  </ion-card>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <ion-card-header>\n            <ion-card-subtitle>Total Qty</ion-card-subtitle>\n            <ion-card-title>{{this.totalCalculatorForOrderTracking().qty}}</ion-card-title>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n\n      <ion-col>\n        <ion-card>\n          <ion-card-header>\n            <ion-card-subtitle>Total Amount</ion-card-subtitle>\n            <ion-card-title>{{this.totalCalculatorForOrderTracking().amount}}</ion-card-title>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row>\n      <ion-col>\n        <ion-button expand=\"block\" (click)=\"this.orderTracking=0\">Pending</ion-button>\n      </ion-col>\n    \n      <ion-col>\n        <ion-button color=\"success\" expand=\"block\" (click)=\"this.onApprove()\">Approve</ion-button>\n      </ion-col>\n   \n      <ion-col>\n        <ion-button color=\"danger\" expand=\"block\" (click)=\"this.onReject()\">Reject</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/Services/order/order.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/Services/order/order.service.ts ***!
    \*************************************************/

  /*! exports provided: OrderService */

  /***/
  function srcAppServicesOrderOrderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderService", function () {
      return OrderService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _userOrderTracking_user_order_tracking_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../userOrderTracking/user-order-tracking.service */
    "./src/app/Services/userOrderTracking/user-order-tracking.service.ts");
    /* harmony import */


    var src_app_app_setting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/app-setting */
    "./src/app/app-setting.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var OrderService = /*#__PURE__*/function () {
      function OrderService(http, appSetting, orderTrackingService) {
        _classCallCheck(this, OrderService);

        this.http = http;
        this.appSetting = appSetting;
        this.orderTrackingService = orderTrackingService;
        this.url = "".concat(this.appSetting.http, "://").concat(this.appSetting.apiPort, "/api/OrderModels");
        this.deliveryURI = "".concat(this.appSetting.http, "://").concat(this.appSetting.apiPort, "/api/deliveryModels");
        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
            'Content-Type': 'application/json'
          })
        };
      }

      _createClass(OrderService, [{
        key: "get",
        value: function get() {
          return this.http.get(this.url);
        }
      }, {
        key: "getDelivery",
        value: function getDelivery() {
          return this.http.get(this.deliveryURI);
        }
      }, {
        key: "getSingle",
        value: function getSingle(id) {
          var searchUrl = "".concat(this.url, "/").concat(id);
          return this.http.get(searchUrl);
        }
      }, {
        key: "postDelivery",
        value: function postDelivery(id, userid, status) {
          var _this = this;

          var data = "";
          var url = this.deliveryURI + "/" + id + "?userid=".concat(userid, "&status=").concat(status);
          sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: 'System Message',
            html: 'Your order is processing...',
            confirmButtonText: 'Complete',
            onBeforeOpen: function onBeforeOpen() {
              sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.showLoading();
            }
          });
          this.http.post(url, data, this.httpOptions).subscribe(function (res) {
            console.log(res);
          }, function (err) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.hideLoading();
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
              title: 'System Message',
              html: 'Oops your internet Connection is not stable...',
              confirmButtonText: 'Ok'
            });
          }, function () {
            _this.appSetting.localShopcart = [];
            _this.appSetting.localViewShopcart = [];

            _this.orderListRefresh();
          });
        }
      }, {
        key: "post",
        value: function post(data) {
          var _this2 = this;

          sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: 'System Message',
            html: 'Your order is processing...',
            confirmButtonText: 'Complete',
            onBeforeOpen: function onBeforeOpen() {
              sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.showLoading();
            }
          });
          this.http.post(this.url, data, this.httpOptions).subscribe(function (res) {
            console.log(res);
          }, function (err) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.hideLoading();
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
              title: 'System Message',
              html: 'Oops your internet Connection is not stable...',
              confirmButtonText: 'Ok'
            });
          }, function () {
            _this2.appSetting.localShopcart = [];
            _this2.appSetting.localViewShopcart = [];
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.hideLoading();
          });
        }
      }, {
        key: "put",
        value: function put(data) {
          var searchUrl = "".concat(this.url, "/").concat(data.orderID);
          this.http.put(searchUrl, data, this.httpOptions).subscribe(function (res) {
            console.log(res);
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          var data = null;
          var xhr = new XMLHttpRequest();
          xhr.withCredentials = false;
          xhr.addEventListener('readystatechange', function () {
            if (this.readyState === this.DONE) {
              console.log(this.responseText);
            }
          });
          xhr.open('DELETE', this.url + '/' + id);
          xhr.send(data);
        }
      }, {
        key: "orderListRefresh",
        value: function orderListRefresh() {
          var _this3 = this;

          if (this.appSetting.deliveryOrOrder === 1) {
            this.orderTrackingService.getDelivery().subscribe(function (x) {
              return _this3.appSetting.userOrderTrackingList = x;
            }, function (err) {
              return console.log(err);
            }, function () {
              sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.hideLoading();
            });
          }
        }
      }]);

      return OrderService;
    }();

    OrderService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: src_app_app_setting__WEBPACK_IMPORTED_MODULE_2__["appSetting"]
      }, {
        type: _userOrderTracking_user_order_tracking_service__WEBPACK_IMPORTED_MODULE_1__["UserOrderTrackingService"]
      }];
    };

    OrderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], src_app_app_setting__WEBPACK_IMPORTED_MODULE_2__["appSetting"], _userOrderTracking_user_order_tracking_service__WEBPACK_IMPORTED_MODULE_1__["UserOrderTrackingService"]])], OrderService);
    /***/
  },

  /***/
  "./src/app/Services/orderDetial/order-detial.service.ts":
  /*!**************************************************************!*\
    !*** ./src/app/Services/orderDetial/order-detial.service.ts ***!
    \**************************************************************/

  /*! exports provided: OrderDetialService */

  /***/
  function srcAppServicesOrderDetialOrderDetialServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderDetialService", function () {
      return OrderDetialService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _userOrderTracking_user_order_tracking_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../userOrderTracking/user-order-tracking.service */
    "./src/app/Services/userOrderTracking/user-order-tracking.service.ts");
    /* harmony import */


    var src_app_app_setting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/app-setting */
    "./src/app/app-setting.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var OrderDetialService = /*#__PURE__*/function () {
      function OrderDetialService(http, appSetting, orderTrackingService) {
        _classCallCheck(this, OrderDetialService);

        this.http = http;
        this.appSetting = appSetting;
        this.orderTrackingService = orderTrackingService;
        this.url = "".concat(this.appSetting.http, "://").concat(this.appSetting.apiPort, "/api/orderDetail");
        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
            'Content-Type': 'application/json'
          })
        };
      }

      _createClass(OrderDetialService, [{
        key: "get",
        value: function get() {
          return this.http.get(this.url);
        }
      }, {
        key: "getSingle",
        value: function getSingle(id) {
          var searchUrl = "".concat(this.url, "/").concat(id);
          return this.http.get(searchUrl);
        }
      }, {
        key: "post",
        value: function post(data) {
          var _this4 = this;

          sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: 'System Message',
            html: 'Your order is processing...',
            confirmButtonText: 'Complete',
            onBeforeOpen: function onBeforeOpen() {
              sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.showLoading();
            }
          });
          this.http.post(this.url, data, this.httpOptions).subscribe(function (res) {
            console.log(res);
          }, function (err) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.hideLoading();
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
              title: 'System Message',
              html: 'Oops your internet Connection is not stable...',
              confirmButtonText: 'Ok'
            });
          }, function () {
            _this4.appSetting.localShopcart = [];
            _this4.appSetting.localViewShopcart = [];
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.hideLoading();
          });
        }
      }, {
        key: "put",
        value: function put(id, status) {
          var _this5 = this;

          sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: 'Please wait',
            html: 'System is processing for your request',
            onBeforeOpen: function onBeforeOpen() {
              sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.showLoading();
            }
          });
          var searchUrl = "".concat(this.url, "/").concat(id);
          var data = [];
          this.getSingle(id).subscribe(function (x) {
            return data = x;
          }, function (err) {
            return console.log(err);
          }, function () {
            data.forEach(function (element) {
              element.status = status;
            });

            _this5.http.put(searchUrl, data, _this5.httpOptions).subscribe(function (res) {
              console.log(res);
            }, function (err) {
              console.log(err);
            }, function () {
              _this5.orderListRefresh();
            });
          });
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          var data = null;
          var xhr = new XMLHttpRequest();
          xhr.withCredentials = false;
          xhr.addEventListener('readystatechange', function () {
            if (this.readyState === this.DONE) {
              console.log(this.responseText);
            }
          });
          xhr.open('DELETE', this.url + '/' + id);
          xhr.send(data);
        }
      }, {
        key: "orderListRefresh",
        value: function orderListRefresh() {
          var _this6 = this;

          this.orderTrackingService.getAll().subscribe(function (x) {
            return _this6.appSetting.userOrderTrackingList = x;
          }, function (err) {
            return console.log(err);
          }, function () {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.hideLoading();
          });
        }
      }]);

      return OrderDetialService;
    }();

    OrderDetialService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: src_app_app_setting__WEBPACK_IMPORTED_MODULE_2__["appSetting"]
      }, {
        type: _userOrderTracking_user_order_tracking_service__WEBPACK_IMPORTED_MODULE_1__["UserOrderTrackingService"]
      }];
    };

    OrderDetialService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], src_app_app_setting__WEBPACK_IMPORTED_MODULE_2__["appSetting"], _userOrderTracking_user_order_tracking_service__WEBPACK_IMPORTED_MODULE_1__["UserOrderTrackingService"]])], OrderDetialService);
    /***/
  },

  /***/
  "./src/app/Services/orderQty/order-qty.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/Services/orderQty/order-qty.service.ts ***!
    \********************************************************/

  /*! exports provided: OrderQtyService */

  /***/
  function srcAppServicesOrderQtyOrderQtyServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderQtyService", function () {
      return OrderQtyService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var src_app_app_setting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/app-setting */
    "./src/app/app-setting.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var OrderQtyService = /*#__PURE__*/function () {
      function OrderQtyService(http, appSetting) {
        _classCallCheck(this, OrderQtyService);

        this.http = http;
        this.appSetting = appSetting;
        this.url = "".concat(this.appSetting.http, "://").concat(this.appSetting.apiPort, "/api/orderQtyModels");
        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json'
          })
        };
      }

      _createClass(OrderQtyService, [{
        key: "get",
        value: function get() {
          return this.http.get(this.url);
        }
      }, {
        key: "getSingle",
        value: function getSingle(id) {
          var searchUrl = "".concat(this.url, "/").concat(id);
          return this.http.get(searchUrl);
        }
      }, {
        key: "post",
        value: function post(data) {
          var _this7 = this;

          var tempList = [2, 3];
          var dataList = [];

          if (tempList.includes(this.appSetting.sessionUser.userType)) {
            this.url = "".concat(this.appSetting.http, "://").concat(this.appSetting.apiPort, "/api/outputQtyModels");
            data.forEach(function (x) {
              var z = {
                outputQty_ID: 0,
                outputQty: 0,
                sub_item_id: 0,
                main_item_id: 0,
                output_price: 0,
                outputDate: new Date(),
                userID: 0
              };
              z.outputQty_ID = 0;
              z.outputQty = x.outputQty;
              z.sub_item_id = x.sub_item_id;
              z.main_item_id = x.main_item_id;
              z.output_price = x.output_price;
              z.outputDate = new Date();
              z.userID = _this7.appSetting.sessionUser.userID;
              dataList.push(z);
            });
            var postData = dataList;
            this.save(postData, 'invoice');
          } else {
            var _postData = data;
            this.save(_postData, 'order');
          }
        }
      }, {
        key: "save",
        value: function save(postData, msg) {
          var _this8 = this;

          sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: 'System Message',
            html: "Your ".concat(msg, " is porcessing..."),
            confirmButtonText: 'Done',
            onBeforeOpen: function onBeforeOpen() {
              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.showLoading();
            }
          });
          this.http.post(this.url, postData, this.httpOptions).subscribe(function (res) {}, function (err) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.hideLoading();
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
              title: 'System Message',
              html: 'Oops your internet Connection is not stable...',
              confirmButtonText: 'Ok'
            });
          }, function () {
            _this8.appSetting.localShopcart = [];
            _this8.appSetting.localViewShopcart = [];
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.hideLoading();
          });
          this.http.post(this.url, postData, this.httpOptions).subscribe(function (res) {}, function (err) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.hideLoading();
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
              title: 'System Message',
              html: 'Oops your internet Connection is not stable...',
              confirmButtonText: 'Ok'
            });
          }, function () {
            _this8.appSetting.localShopcart = [];
            _this8.appSetting.localViewShopcart = [];
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.hideLoading();
          });
        }
      }, {
        key: "put",
        value: function put(data) {
          var searchUrl = "".concat(this.url, "/").concat(data.orderQty_ID);
          this.http.put(searchUrl, data, this.httpOptions).subscribe(function (res) {}, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          var data = null;
          var xhr = new XMLHttpRequest();
          xhr.withCredentials = false;
          xhr.addEventListener('readystatechange', function () {
            if (this.readyState === this.DONE) {
              console.log(this.responseText);
            }
          });
          xhr.open('DELETE', this.url + '/' + id);
          xhr.send(data);
        }
      }]);

      return OrderQtyService;
    }();

    OrderQtyService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: src_app_app_setting__WEBPACK_IMPORTED_MODULE_1__["appSetting"]
      }];
    };

    OrderQtyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], src_app_app_setting__WEBPACK_IMPORTED_MODULE_1__["appSetting"]])], OrderQtyService);
    /***/
  },

  /***/
  "./src/app/tab2/tab2.module.ts":
  /*!*************************************!*\
    !*** ./src/app/tab2/tab2.module.ts ***!
    \*************************************/

  /*! exports provided: Tab2PageModule */

  /***/
  function srcAppTab2Tab2ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function () {
      return Tab2PageModule;
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


    var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tab2.page */
    "./src/app/tab2/tab2.page.ts");
    /* harmony import */


    var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../explore-container/explore-container.module */
    "./src/app/explore-container/explore-container.module.ts");

    var Tab2PageModule = function Tab2PageModule() {
      _classCallCheck(this, Tab2PageModule);
    };

    Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]
      }])],
      declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]]
    })], Tab2PageModule);
    /***/
  },

  /***/
  "./src/app/tab2/tab2.page.scss":
  /*!*************************************!*\
    !*** ./src/app/tab2/tab2.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab2Tab2PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content ion-toolbar {\n  --background: translucent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMi9EOlxcb25saW5lU2hvcEFwcFxcb25saW5lU2hvcEFwcFxcbXlBcHAvc3JjXFxhcHBcXHRhYjJcXHRhYjIucGFnZS5zY3NzIiwic3JjL2FwcC90YWIyL3RhYjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XG59IiwiaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/tab2/tab2.page.ts":
  /*!***********************************!*\
    !*** ./src/app/tab2/tab2.page.ts ***!
    \***********************************/

  /*! exports provided: Tab2Page */

  /***/
  function srcAppTab2Tab2PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab2Page", function () {
      return Tab2Page;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _Services_orderDetial_order_detial_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../Services/orderDetial/order-detial.service */
    "./src/app/Services/orderDetial/order-detial.service.ts");
    /* harmony import */


    var _Services_order_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../Services/order/order.service */
    "./src/app/Services/order/order.service.ts");
    /* harmony import */


    var _Services_User_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../Services/User/user.service */
    "./src/app/Services/User/user.service.ts");
    /* harmony import */


    var _Services_userOrderTracking_user_order_tracking_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../Services/userOrderTracking/user-order-tracking.service */
    "./src/app/Services/userOrderTracking/user-order-tracking.service.ts");
    /* harmony import */


    var _Services_locationSave_location_save_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../Services/locationSave/location-save.service */
    "./src/app/Services/locationSave/location-save.service.ts");
    /* harmony import */


    var _Services_unit_unit_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../Services/unit/unit.service */
    "./src/app/Services/unit/unit.service.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var _app_setting__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./../app-setting */
    "./src/app/app-setting.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _Services_orderQty_order_qty_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../Services/orderQty/order-qty.service */
    "./src/app/Services/orderQty/order-qty.service.ts");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/ngx/index.js");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/ngx/index.js");

    var Tab2Page = /*#__PURE__*/function () {
      function Tab2Page(appSetting, orderService, orderTrackingService, UnitService, locationService, UserService, orderDetialService, orderModelService, iab, geolocation) {
        _classCallCheck(this, Tab2Page);

        this.appSetting = appSetting;
        this.orderService = orderService;
        this.orderTrackingService = orderTrackingService;
        this.UnitService = UnitService;
        this.locationService = locationService;
        this.UserService = UserService;
        this.orderDetialService = orderDetialService;
        this.orderModelService = orderModelService;
        this.iab = iab;
        this.geolocation = geolocation;
        this.options = {
          location: 'yes',
          hidden: 'no',
          zoom: 'no',
          hideurlbar: 'yes'
        };
        this.orderTracking = 0;
        this.invoice = 0;
        this.totalQty = 0;
        this.totalAmount = 0;
        this.appSetting.checkOut = 0;
      }

      _createClass(Tab2Page, [{
        key: "toSignUp",
        value: function toSignUp() {
          this.appSetting.signIn = 0;
          this.appSetting.signUp = 1;
        }
      }, {
        key: "googleMap",
        value: function googleMap() {
          var _this9 = this;

          var url = "";
          var me = {
            location_ltd: '0',
            location_lng: '0'
          };
          var user = {
            location_ltd: '0',
            location_lng: '0'
          };
          this.locationService.get(this.appSetting.sessionUserDelivery.userID).subscribe(function (x) {
            user.location_ltd = x.location_ltd.toString();
            user.location_lng = x.location_lng.toString();
          }, function (err) {
            return console.log(err);
          }, function () {
            _this9.geolocation.getCurrentPosition().then(function (resp) {
              me.location_ltd = resp.coords.latitude.toString();
              me.location_lng = resp.coords.longitude.toString();
              url = "https://www.google.com/maps/dir/".concat(me.location_ltd, ",").concat(me.location_lng, "/").concat(user.location_ltd, ",").concat(user.location_lng, "/@").concat(user.location_ltd, ",").concat(user.location_lng);
              var target = "_blank";

              var browser = _this9.iab.create(url, target, _this9.options);

              browser.on('loadstop').subscribe(function (event) {
                browser.insertCSS({
                  code: "body{color: red;"
                });
              });
            });
            /*this.browserTab.isAvailable()
            .then(isAvailable => {
              if (isAvailable) {
                this.browserTab.openUrl(url);
              } else {
                // open URL with InAppBrowser instead or SafariViewController
              }
            });
            })*/

          });
        }
      }, {
        key: "orderListRefresh",
        value: function orderListRefresh() {
          var _this10 = this;

          sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
            title: 'Please wait',
            html: 'System is processing for your request',
            onBeforeOpen: function onBeforeOpen() {
              sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.showLoading();
            }
          });

          if (this.appSetting.deliveryOrOrder === 0) {
            this.orderTrackingService.getAll().subscribe(function (x) {
              return _this10.appSetting.userOrderTrackingList = x;
            }, function (err) {
              return console.log(err);
            }, function () {
              sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.hideLoading();
            });
          } else if (this.appSetting.deliveryOrOrder === 1) {
            this.orderTrackingService.getDelivery().subscribe(function (x) {
              return _this10.appSetting.userOrderTrackingList = x;
            }, function (err) {
              return console.log(err);
            }, function () {
              sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.hideLoading();
            });
          }
        }
      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          this.totalCalculator();
        }
      }, {
        key: "orderTrackingDetialPage",
        value: function orderTrackingDetialPage(id) {
          var _this11 = this;

          this.invoice = 0;
          this.appSetting.userOrderTrackingListTemp = [];
          this.appSetting.userOrderTrackingList.forEach(function (x) {
            if (x.orderID === id) {
              _this11.UserService.getSingle(x.userID).subscribe(function (x) {
                return _this11.appSetting.sessionUserDelivery = x;
              }, function (err) {
                return console.log(err);
              }, function () {
                _this11.appSetting.userOrderTrackingListTemp.push(x);
              });
            }
          });
          this.orderTracking = 1;
          this.invoice = +id;
        }
      }, {
        key: "onApprove",
        value: function onApprove() {
          this.serviceAR(1);
        }
      }, {
        key: "onReject",
        value: function onReject() {
          this.serviceAR(2);
        }
      }, {
        key: "serviceAR",
        value: function serviceAR(status) {
          if (this.appSetting.deliveryOrOrder === 0) {
            if (status !== 0) {
              this.orderDetialService.put(this.invoice, status);
              this.orderTracking = 0;
            }
          } else if (this.appSetting.deliveryOrOrder === 1) {
            if (status !== 0) {
              this.orderModelService.postDelivery(this.invoice, this.appSetting.sessionUser.userID, status);
              this.orderTracking = 0;
            }
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.appSetting.checkOut = 0;
        }
      }, {
        key: "deleteItem",
        value: function deleteItem(id) {
          this.appSetting.localViewShopcart.splice(id, 1);
          this.appSetting.localShopcart.splice(id, 1);
        }
      }, {
        key: "onDelete",
        value: function onDelete(id) {
          this.deleteItem(id);
        }
      }, {
        key: "cart",
        value: function cart() {}
      }, {
        key: "checkOut",
        value: function checkOut() {
          if (this.appSetting.localShopcart.length !== 0) {
            this.appSetting.checkOut = 1;
            this.payment();
          }
        }
      }, {
        key: "payment",
        value: function payment() {
          var _this12 = this;

          if (this.appSetting.sessionUser.userID !== 0) {
            this.appSetting.localShopcart.forEach(function (x) {
              x.userID = _this12.appSetting.sessionUser.userID;
            });
            this.orderService.post(this.appSetting.localShopcart);
            this.geolocation.getCurrentPosition().then(function (resp) {
              var locationModel = {
                id: 0,
                userID: _this12.appSetting.sessionUser.userID,
                location_ltd: resp.coords.latitude.toString(),
                location_lng: resp.coords.longitude.toString()
              };

              _this12.locationService.post(locationModel);
            })["catch"](function (error) {
              console.log('Error getting location', error);
            });
          } else {
            console.log("error");
          }
        }
      }, {
        key: "totalCalculatorForOrderTracking",
        value: function totalCalculatorForOrderTracking() {
          var _this13 = this;

          this.totalQty = 0;
          this.totalAmount = 0;
          this.appSetting.userOrderTrackingListTemp.forEach(function (x) {
            _this13.totalAmount = _this13.totalAmount + x.output_price;
            _this13.totalQty = _this13.totalQty + x.outputQty;
          });
          var res = {
            qty: this.totalQty,
            amount: this.totalAmount
          };
          return res;
        }
      }, {
        key: "totalCalculator",
        value: function totalCalculator() {
          var _this14 = this;

          this.totalQty = 0;
          this.totalAmount = 0;
          this.appSetting.localShopcart.forEach(function (x) {
            _this14.totalAmount = _this14.totalAmount + x.output_price;
            _this14.totalQty = _this14.totalQty + x.outputQty;
          });
        }
      }, {
        key: "checkLocationTesting",
        value: function checkLocationTesting() {
          this.geolocation.getCurrentPosition().then(function (resp) {
            console.log(resp.coords.latitude);
            console.log(resp.coords.longitude);
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire("Latitude is" + resp.coords.latitude + " and longitude is" + resp.coords.longitude);
          })["catch"](function (error) {
            console.log('Error getting location', error);
          });
        }
      }, {
        key: "oneEditQty",
        value: function oneEditQty(id, mainItemID) {
          var _this15 = this;

          var shopCartItem = this.appSetting.localShopcart[id];
          var shopCartItemView = this.appSetting.localViewShopcart[id];
          console.log(shopCartItem);
          console.log(shopCartItemView);
          var priceTemp = [];
          sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
            title: 'Please wait',
            html: 'System is processing for your request',
            onBeforeOpen: function onBeforeOpen() {
              sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.showLoading();
            }
          });
          this.UnitService.get(+mainItemID).subscribe(function (y) {
            return priceTemp = y;
          }, function (err) {
            return console.log(err);
          }, function () {
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.close();
            var priceShopcart = 0;
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.mixin({
              confirmButtonText: 'Next &rarr;',
              showCancelButton: true,
              progressSteps: ['1']
            }).queue([{
              title: 'Quantity',
              onRender: function onRender() {
                var selectDom = document.getElementsByClassName('swal2-input')[0];

                if (selectDom !== undefined) {
                  selectDom.oninput = function () {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.showLoading();
                    var qty = +selectDom.value;
                    var priceArray = [];
                    var qtyArray = [];
                    priceTemp.forEach(function (p) {
                      priceArray.push(p.price);
                      qtyArray.push(p.qty);
                    });
                    priceArray.reverse();
                    qtyArray.reverse();
                    var price = 0;

                    for (var i = 0; i < priceArray.length; i++) {
                      var qtyTemp = +(qty / +qtyArray[i]).toString();

                      if (qtyTemp < 1) {
                        qtyTemp = 0;
                      }

                      var toCut = qtyTemp.toString().indexOf(".");

                      if (toCut > 0) {
                        qtyTemp = +qtyTemp.toString().substring(0, toCut + 1);
                      }

                      price = price + qtyTemp * +priceArray[i];

                      if (price !== 0) {
                        qty = qty % +qtyArray[i];
                      }
                    }

                    document.getElementById('swal2-title').innerText = price.toString() + ' Kyats';
                    priceShopcart = price;
                    selectDom.focus();
                    sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.hideLoading();
                  };
                } else {
                  console.log("Sak it is undefined");
                }
              },
              text: 'Please insert amount to add quantity!',
              input: 'number',
              inputValidator: function inputValidator(value) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.showLoading();
                return new Promise(function (resolve) {
                  if (value !== null && +value > 0) {
                    shopCartItem.output_price = +priceShopcart;
                    shopCartItem.outputQty = +value;
                    shopCartItemView.output_price = +priceShopcart;
                    shopCartItemView.outputQty = +value;
                    _this15.appSetting.localShopcart[id] = shopCartItem;
                    _this15.appSetting.localViewShopcart[id] = shopCartItemView;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.hideLoading();
                    sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire("Success", "Your item qty has been updated", 'success'); //resolve();
                  } else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.hideLoading();
                    sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire("Please Check the Qty", "Your need to add atleast 1", 'info');
                  }
                });
              }
            }]);

            _this15.totalCalculator();
          });
        }
      }]);

      return Tab2Page;
    }();

    Tab2Page.ctorParameters = function () {
      return [{
        type: _app_setting__WEBPACK_IMPORTED_MODULE_8__["appSetting"]
      }, {
        type: _Services_orderQty_order_qty_service__WEBPACK_IMPORTED_MODULE_10__["OrderQtyService"]
      }, {
        type: _Services_userOrderTracking_user_order_tracking_service__WEBPACK_IMPORTED_MODULE_4__["UserOrderTrackingService"]
      }, {
        type: _Services_unit_unit_service__WEBPACK_IMPORTED_MODULE_6__["UnitService"]
      }, {
        type: _Services_locationSave_location_save_service__WEBPACK_IMPORTED_MODULE_5__["LocationSaveService"]
      }, {
        type: _Services_User_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _Services_orderDetial_order_detial_service__WEBPACK_IMPORTED_MODULE_1__["OrderDetialService"]
      }, {
        type: _Services_order_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"]
      }, {
        type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_12__["InAppBrowser"]
      }, {
        type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_11__["Geolocation"]
      }];
    };

    Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"])({
      selector: 'app-tab2',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tab2.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tab2.page.scss */
      "./src/app/tab2/tab2.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_setting__WEBPACK_IMPORTED_MODULE_8__["appSetting"], _Services_orderQty_order_qty_service__WEBPACK_IMPORTED_MODULE_10__["OrderQtyService"], _Services_userOrderTracking_user_order_tracking_service__WEBPACK_IMPORTED_MODULE_4__["UserOrderTrackingService"], _Services_unit_unit_service__WEBPACK_IMPORTED_MODULE_6__["UnitService"], _Services_locationSave_location_save_service__WEBPACK_IMPORTED_MODULE_5__["LocationSaveService"], _Services_User_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _Services_orderDetial_order_detial_service__WEBPACK_IMPORTED_MODULE_1__["OrderDetialService"], _Services_order_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_12__["InAppBrowser"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_11__["Geolocation"]])], Tab2Page);
    ;
    /***/
  }
}]);
//# sourceMappingURL=tab2-tab2-module-es5.js.map