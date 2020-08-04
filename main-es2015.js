(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/breaking/breaking.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/breaking/breaking.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table align=\"center\" style=\"width:100%; max-width:740px; border: 0px solid #011051; background-color: #011051;\">\n<tr>\n  <td><img src=\"http://images1.afaqsnewsletter.com/mailers/breaking_latest/b_top.jpg\" style=\"left:0px; width: 100%; max-width:740px; \"></td>\n</tr>\n<tr>\n    <td bgcolor=\"#ffffff\" dir=\"ltr\" align=\"center\" valign=\"top\" width=\"100%\" style=\" border-collapse: collapse;border: 0; padding: 1px; padding-bottom: 50px; padding-top: 50px; border-left:0px solid #8a8a88; border-right:0px solid #8a8a88; background-color: #ffffff;\">\n        <table id=\"resp-table-row\" align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\n            <tr *ngFor = \"let data of HNewsData | slice:0:1; let ind=index;\">\n                <td class=\"left\">\n                    <table align=\"left\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\n                        <tr>\n                            <td align=\"center\" dir=\"ltr\" valign=\"top\" style=\"padding: 5px ;\">\n                                <a href=\"{{data.story.url}}?utm_source=mailer&utm_medium=mailer&utm_campaign=afaqs_breaking-{{currentDate | date:'yyyy-MM-dd'}}\" target=\"_blank\" style=\"text-decoration:none;\"><img [src]= \"'https://gumlet.assettype.com/' + data.story['hero-image-s3-key']+'?w=250&h=150&mode=fill&fill=solid&fill-color=ffffff'\" width=\"99%\" alt=\"\" border=\"0\" style=\" border:#c9c5bc 1px solid;\"></a>\n                            </td>\n                        </tr>\n                    </table>\n                </td>\n                <td class=\"right\">\n                    <table align=\"left\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\n                        <tr>\n                           <td dir=\"ltr\" align=\"left\" id=\"resp-table-caption\" valign=\"bottom\" style=\"font-family: sans-serif; font-size: 15px; line-height: 20px; color: #555555; padding-left: 10px; text-align: left;\" >\n                                <a href=\"{{data.story.url}}?utm_source=mailer&utm_medium=mailer&utm_campaign=afaqs_breaking-{{currentDate | date:'yyyy-MM-dd'}}\" target=\"_blank\" style=\"text-decoration:none;\"><h2 style=\" line-height:30px; margin: 0 1px 5px 0; font-family: sans-serif;  color: #333333; font-weight: bold; word-wrap: break-word;\">{{data.story.headline}}</h2></a>\n                                <p style=\"margin: 0 1px 5px 0; font-size: 16px; line-height: 25px;word-wrap: break-word;\">{{data.story.subheadline}}</p>\n                            </td>\n                        </tr>\n                    </table>\n                </td> \n            </tr>\n        </table>\n    </td>\n</tr>\n\n<tr>\n  <td>\n  <table border=\"0\" style=\" width: 100%; background-color:#011051; max-width:740px; height:30px;\">\n      <tr>\n        <td width=\"90\" style=\"font-family: sans-serif; font-size: 16px; color:white;\"><strong>Follow on:</strong></td>\n        <td align=\"left\" width=\"40\">\n          <a href=\"http://images1.afaqsnewsletter.com/cgi-bin/re.html?c=afaqs_breaking_twitter:-{{currentDate | date:'yyyy-MM-dd'}}&u=https://twitter.com/afaqs\" target=\"_blank\"><img src=\"https://www.afaqs.com/labs/newsletter/breaking/t.png\" style=\"width:100%; max-width: 40px; \">\n          </a>\n        </td>\n        <td align=\"left\" width=\"40\">\n          <a href=\"http://images1.afaqsnewsletter.com/cgi-bin/re.html?c=afaqs_breaking_facebook:-{{currentDate | date:'yyyy-MM-dd'}}&u=https://www.facebook.com/afaqs\" target=\"_blank\"><img src=\"https://www.afaqs.com/labs/newsletter/breaking/f.png\" style=\"width:100%; max-width: 40px; \">\n          </a>\n        </td>\n        <td align=\"left\" width=\"40\">\n          <a href=\"http://images1.afaqsnewsletter.com/cgi-bin/re.html?c=afaqs_breaking_linkedin:-{{currentDate | date:'yyyy-MM-dd'}}&u=https://www.linkedin.com/company/banyan-netfaqs-pvt-ltd--afaqs--/\" target=\"_blank\"><img src=\"https://www.afaqs.com/labs/newsletter/breaking/in.png\" style=\"width:100%; max-width: 40px;\">\n          </a>\n        </td>\n        <td align=\"right\">&nbsp;</td>\n      </tr>\n  </table>\n  </td>\n</tr>\n\n<tr>\n  <td align=\"right\">\n    <p style=\"font-family: sans-serif; font-size: 14px; color:#fff; margin: 0; padding: 0;\">\n      <app-date></app-date>\n    </p>\n  </td>\n</tr>\n</table>\n\n\n<div align=\"center\"><br>\n<font face=\"Arial, Helvetica, sans-serif\" size=\"2\" color=\"#000000\">\n<a href=\"https://www.afaqs.com/labs/main/mailer-help.html\" target=\"_blank\" alt=\"\">click here</a> to know how to add our e-newsletters to your safe sender list<br>\nIf you do not wish to receive any such special mailers, <a href=\"http://images1.afaqsnewsletter.com/mailers/main/user-unsubscribe.html\" target=\"_blank\" alt=\"\">click here</a><br>\n<a href=\"https://www.afaqs.com/labs/signup/index.html\" target=\"_blank\" alt=\"\">click here</a> to edit your profile<br>\n <img src=\"http://images1.afaqsnewsletter.com/cgi-bin/counter/m_count?emailID=<%[email]%>&amp;mailerID=afaqs_breaking_{{currentDate | date:'yyyy-MM-dd'}}\" alt=\"\" width=\"1\" height=\"1\" />\n</font></div> ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/date/date.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/date/date.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("{{ myDate | date:'EEEE'}} {{ myDate | date:'dd'}} {{ myDate | date:'MMM'}} {{ myDate | date:'yyyy'}}");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/latest/latest.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/latest/latest.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table align=\"center\" style=\"width:100%; max-width:740px; border: 0px solid #e7af36; background-color: #e7af36;\">\n<tr>\n  <td><img src=\"http://images1.afaqsnewsletter.com/mailers/breaking_latest/l_top.jpg\" style=\"left:0px; width: 100%; max-width:740px; \"></td>\n</tr>\n<tr>\n<td bgcolor=\"#ffffff\" dir=\"ltr\" align=\"center\" valign=\"top\" width=\"100%\" style=\" border-collapse: collapse;border: 0; padding: 1px; padding-bottom: 50px; padding-top: 50px; border-left:0px solid #8a8a88; border-right:0px solid #8a8a88; background-color: #ffffff;\">\n    <table id=\"resp-table-row\" align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\n        <tr *ngFor = \"let data of HNewsData | slice:0:1; let ind=index;\">\n            <td class=\"left\">\n                <table align=\"left\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\n                    <tr>\n                        <td align=\"center\" dir=\"ltr\" valign=\"top\" style=\"padding: 5px ;\">\n                            <a href=\"{{data.story.url}}?utm_source=mailer&utm_medium=mailer&utm_campaign=afaqs_Latest-{{currentDate | date:'yyyy-MM-dd'}}\" target=\"_blank\" style=\"text-decoration:none;\"><img [src]= \"'https://gumlet.assettype.com/' + data.story['hero-image-s3-key']+'?w=250&h=150&mode=fill&fill=solid&fill-color=ffffff'\" width=\"99%\" alt=\"\" border=\"0\" style=\" border:#c9c5bc 1px solid;\"></a>\n                        </td>\n                    </tr>\n                </table>\n            </td>\n            <td class=\"right\">\n                <table align=\"left\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\n                    <tr>\n                       <td dir=\"ltr\" align=\"left\" id=\"resp-table-caption\" valign=\"bottom\" style=\"font-family: sans-serif; font-size: 15px; line-height: 20px; color: #555555; padding-left: 10px; text-align: left;\" >\n                            <a href=\"{{data.story.url}}?utm_source=mailer&utm_medium=mailer&utm_campaign=afaqs_Latest-{{currentDate | date:'yyyy-MM-dd'}}\" target=\"_blank\" style=\"text-decoration:none;\"><h2 style=\" line-height:30px; margin: 0 1px 5px 0; font-family: sans-serif;  color: #333333; font-weight: bold; word-wrap: break-word;\">{{data.story.headline}}</h2></a>\n                            <p style=\"margin: 0 1px 5px 0; font-size: 16px; line-height: 25px;word-wrap: break-word;\">{{data.story.subheadline}}</p>\n                        </td>\n                    </tr>\n                </table>\n            </td> \n        </tr>\n    </table>\n</td>\n</tr>\n\n<tr>\n  <td>\n  <table border=\"0\" style=\" width: 100%; background-color:#e7af36; max-width:740px; height:30px;\">\n      <tr>\n        <td width=\"90\" style=\"font-family: sans-serif; font-size: 16px; color:white;\"><strong>Follow on:</strong></td>\n        <td align=\"left\" width=\"40\">\n          <a href=\"http://images1.afaqsnewsletter.com/cgi-bin/re.html?c=afaqs_Latest_twitter:-{{currentDate | date:'yyyy-MM-dd'}}&u=https://twitter.com/afaqs\" target=\"_blank\"><img src=\"https://www.afaqs.com/labs/newsletter/breaking/t.png\" style=\"width:100%; max-width: 40px; \">\n          </a>\n        </td>\n        <td align=\"left\" width=\"40\">\n          <a href=\"http://images1.afaqsnewsletter.com/cgi-bin/re.html?c=afaqs_Latest_facebook:-{{currentDate | date:'yyyy-MM-dd'}}&u=https://www.facebook.com/afaqs\" target=\"_blank\"><img src=\"https://www.afaqs.com/labs/newsletter/breaking/f.png\" style=\"width:100%; max-width: 40px; \">\n          </a>\n        </td>\n        <td align=\"left\" width=\"40\">\n          <a href=\"http://images1.afaqsnewsletter.com/cgi-bin/re.html?c=afaqs_Latest_linkedin:-{{currentDate | date:'yyyy-MM-dd'}}&u=https://www.linkedin.com/company/banyan-netfaqs-pvt-ltd--afaqs--/\" target=\"_blank\"><img src=\"https://www.afaqs.com/labs/newsletter/breaking/in.png\" style=\"width:100%; max-width: 40px;\">\n          </a>\n        </td>\n        <td align=\"right\">&nbsp;</td>\n      </tr>\n  </table>\n  </td>\n</tr>\n\n<tr>\n  <td align=\"right\">\n    <p style=\"font-family: sans-serif; font-size: 14px; color:#000; margin: 0; padding: 0;\">\n      <app-date></app-date>\n    </p>\n  </td>\n</tr>\n</table>\n\n\n<div align=\"center\"><br>\n<font face=\"Arial, Helvetica, sans-serif\" size=\"2\" color=\"#000000\">\n<a href=\"https://www.afaqs.com/labs/main/mailer-help.html\" target=\"_blank\" alt=\"\">click here</a> to know how to add our e-newsletters to your safe sender list<br>\nIf you do not wish to receive any such special mailers, <a href=\"http://www.jobswitch.in/application/views/employer/afaqs-register/unsubsc-news.php?crypt_password=<%[crypt_password]%>\" target=\"_blank\" alt=\"\">click here</a><br>\n<a href=\"https://www.afaqs.com/labs/signup/index3.html\" target=\"_blank\" alt=\"\">click here</a> to edit your profile<br>\n<img src=\"http://images1.afaqsnewsletter.com/cgi-bin/counter/m_count?emailID=<%[email]%>&amp;mailerID=afaqs_Latest_{{currentDate | date:'yyyy-MM-dd'}}\" alt=\"\" width=\"1\" height=\"1\" />\n</font></div> \n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/two-latest/two-latest.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/two-latest/two-latest.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table align=\"center\" style=\"width:100%; max-width:740px; border: 0px solid #e7af36; background-color: #e7af36;\">\n<tr>\n  <td><img src=\"http://images1.afaqsnewsletter.com/mailers/breaking_latest/l_top.jpg\" style=\"left:0px; width: 100%; max-width:740px; \"></td>\n</tr>\n<tr>\n<td bgcolor=\"#ffffff\" dir=\"ltr\" align=\"center\" valign=\"top\" width=\"100%\" style=\" border-collapse: collapse;border: 0; padding: 1px; padding-bottom: 1px; padding-top: 50px; border-left:0px solid #8a8a88; border-right:0px solid #8a8a88; background-color: #ffffff;\">\n    <table id=\"resp-table-row\" align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\n        <tr *ngFor = \"let data of HNewsData | slice:0:2; let ind=index;\">\n            <td class=\"left\"  style=\"padding-bottom: 50px;\">\n                <table align=\"left\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\n                    <tr>\n                        <td align=\"center\" dir=\"ltr\" valign=\"top\" style=\"padding: 5px ;\">\n                            <a href=\"{{data.story.url}}?utm_source=mailer&utm_medium=mailer&utm_campaign=afaqs_Latest-{{currentDate | date:'yyyy-MM-dd'}}\" target=\"_blank\" style=\"text-decoration:none;\"><img [src]= \"'https://gumlet.assettype.com/' + data.story['hero-image-s3-key']+'?w=250&h=150&mode=fill&fill=solid&fill-color=ffffff'\" width=\"99%\" alt=\"\" border=\"0\" style=\" border:#c9c5bc 1px solid;\"></a>\n                        </td>\n                    </tr>\n                </table>\n            </td>\n            <td class=\"right\" style=\"padding-bottom: 50px;\">\n                <table align=\"left\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\n                    <tr>\n                       <td dir=\"ltr\" align=\"left\" id=\"resp-table-caption\" valign=\"bottom\" style=\"font-family: sans-serif; font-size: 15px; line-height: 20px; color: #555555; padding-left: 10px; text-align: left;\" >\n                            <a href=\"{{data.story.url}}?utm_source=mailer&utm_medium=mailer&utm_campaign=afaqs_Latest-{{currentDate | date:'yyyy-MM-dd'}}\" target=\"_blank\" style=\"text-decoration:none;\"><h2 style=\" line-height:30px; margin: 0 1px 5px 0; font-family: sans-serif;  color: #333333; font-weight: bold; word-wrap: break-word;\">{{data.story.headline}}</h2></a>\n                            <p style=\"margin: 0 1px 5px 0; font-size: 16px; line-height: 25px;word-wrap: break-word;\">{{data.story.subheadline}}</p>\n                        </td>\n                    </tr>\n                </table>\n            </td> \n        </tr>\n    </table>\n</td>\n</tr>\n\n<tr>\n  <td>\n  <table border=\"0\" style=\" width: 100%; background-color:#e7af36; max-width:740px; height:30px;\">\n      <tr>\n        <td width=\"90\" style=\"font-family: sans-serif; font-size: 16px; color:white;\"><strong>Follow on:</strong></td>\n        <td align=\"left\" width=\"40\">\n          <a href=\"http://images1.afaqsnewsletter.com/cgi-bin/re.html?c=afaqs_Latest_twitter:-{{currentDate | date:'yyyy-MM-dd'}}&u=https://twitter.com/afaqs\" target=\"_blank\"><img src=\"https://www.afaqs.com/labs/newsletter/breaking/t.png\" style=\"width:100%; max-width: 40px; \">\n          </a>\n        </td>\n        <td align=\"left\" width=\"40\">\n          <a href=\"http://images1.afaqsnewsletter.com/cgi-bin/re.html?c=afaqs_Latest_facebook:-{{currentDate | date:'yyyy-MM-dd'}}&u=https://www.facebook.com/afaqs\" target=\"_blank\"><img src=\"https://www.afaqs.com/labs/newsletter/breaking/f.png\" style=\"width:100%; max-width: 40px; \">\n          </a>\n        </td>\n        <td align=\"left\" width=\"40\">\n          <a href=\"http://images1.afaqsnewsletter.com/cgi-bin/re.html?c=afaqs_Latest_linkedin:-{{currentDate | date:'yyyy-MM-dd'}}&u=https://www.linkedin.com/company/banyan-netfaqs-pvt-ltd--afaqs--/\" target=\"_blank\"><img src=\"https://www.afaqs.com/labs/newsletter/breaking/in.png\" style=\"width:100%; max-width: 40px;\">\n          </a>\n        </td>\n        <td align=\"right\">&nbsp;</td>\n      </tr>\n  </table>\n  </td>\n</tr>\n\n<tr>\n  <td align=\"right\">\n    <p style=\"font-family: sans-serif; font-size: 14px; color:#000; margin: 0; padding: 0;\">\n      <app-date></app-date>\n    </p>\n  </td>\n</tr>\n</table>\n\n\n<div align=\"center\"><br>\n<font face=\"Arial, Helvetica, sans-serif\" size=\"2\" color=\"#000000\">\n<a href=\"https://www.afaqs.com/labs/main/mailer-help.html\" target=\"_blank\" alt=\"\">click here</a> to know how to add our e-newsletters to your safe sender list<br>\nIf you do not wish to receive any such special mailers, <a href=\"http://images1.afaqsnewsletter.com/mailers/main/user-unsubscribe.html\" target=\"_blank\" alt=\"\">click here</a><br>\n<a href=\"https://www.afaqs.com/labs/signup/index.html\" target=\"_blank\" alt=\"\">click here</a> to edit your profile<br>\n <img src=\"http://images1.afaqsnewsletter.com/cgi-bin/counter/m_count?emailID=<%[email]%>&amp;mailerID=afaqs_Latest_{{currentDate | date:'yyyy-MM-dd'}}\" alt=\"\" width=\"1\" height=\"1\" />\n</font></div> \n\n\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _myserve_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./myserve.service */ "./src/app/myserve.service.ts");



let AppComponent = class AppComponent {
    constructor(singh) {
        this.singh = singh;
        this.title = 'Hindustan Latest';
        this.currentDate = new Date();
    }
    ngOnInit() {
        this.singh.fetchLatestNews().subscribe(res => {
            //console.log(res);
            this.Hdata = res;
            this.HNewsData = this.Hdata.items;
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _myserve_service__WEBPACK_IMPORTED_MODULE_2__["MyserveService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _date_date_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./date/date.component */ "./src/app/date/date.component.ts");
/* harmony import */ var _myserve_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./myserve.service */ "./src/app/myserve.service.ts");
/* harmony import */ var _latest_latest_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./latest/latest.component */ "./src/app/latest/latest.component.ts");
/* harmony import */ var _breaking_breaking_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./breaking/breaking.component */ "./src/app/breaking/breaking.component.ts");
/* harmony import */ var _two_latest_two_latest_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./two-latest/two-latest.component */ "./src/app/two-latest/two-latest.component.ts");











const appRoutes = [
    { path: 'ln', component: _latest_latest_component__WEBPACK_IMPORTED_MODULE_8__["LatestComponent"] },
    { path: 'bn', component: _breaking_breaking_component__WEBPACK_IMPORTED_MODULE_9__["BreakingComponent"] },
    { path: '2ln', component: _two_latest_two_latest_component__WEBPACK_IMPORTED_MODULE_10__["TwoLatestComponent"] },
    { path: 'ln', redirectTo: '/', pathMatch: 'full' },
    { path: '', component: _latest_latest_component__WEBPACK_IMPORTED_MODULE_8__["LatestComponent"] }
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _date_date_component__WEBPACK_IMPORTED_MODULE_6__["DateComponent"],
            _latest_latest_component__WEBPACK_IMPORTED_MODULE_8__["LatestComponent"],
            _breaking_breaking_component__WEBPACK_IMPORTED_MODULE_9__["BreakingComponent"],
            _two_latest_two_latest_component__WEBPACK_IMPORTED_MODULE_10__["TwoLatestComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes)
            //RouterModule.forRoot(appRoutes, {useHash: true})
        ],
        providers: [_myserve_service__WEBPACK_IMPORTED_MODULE_7__["MyserveService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/breaking/breaking.component.css":
/*!*************************************************!*\
  !*** ./src/app/breaking/breaking.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JyZWFraW5nL2JyZWFraW5nLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/breaking/breaking.component.ts":
/*!************************************************!*\
  !*** ./src/app/breaking/breaking.component.ts ***!
  \************************************************/
/*! exports provided: BreakingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreakingComponent", function() { return BreakingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _myserve_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../myserve.service */ "./src/app/myserve.service.ts");



let BreakingComponent = class BreakingComponent {
    constructor(singh) {
        this.singh = singh;
        this.currentDate = new Date();
    }
    ngOnInit() {
        this.singh.fetchLatestNews().subscribe(res => {
            //console.log(res);
            this.Hdata = res;
            this.HNewsData = this.Hdata.items;
        });
    }
};
BreakingComponent.ctorParameters = () => [
    { type: _myserve_service__WEBPACK_IMPORTED_MODULE_2__["MyserveService"] }
];
BreakingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-breaking',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./breaking.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/breaking/breaking.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./breaking.component.css */ "./src/app/breaking/breaking.component.css")).default]
    })
], BreakingComponent);



/***/ }),

/***/ "./src/app/date/date.component.css":
/*!*****************************************!*\
  !*** ./src/app/date/date.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RhdGUvZGF0ZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/date/date.component.ts":
/*!****************************************!*\
  !*** ./src/app/date/date.component.ts ***!
  \****************************************/
/*! exports provided: DateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateComponent", function() { return DateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let DateComponent = class DateComponent {
    constructor(datePipe) {
        this.datePipe = datePipe;
        this.myDate = new Date().toDateString();
        this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
    }
    ngOnInit() {
    }
};
DateComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] }
];
DateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-date',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./date.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/date/date.component.html")).default,
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./date.component.css */ "./src/app/date/date.component.css")).default]
    })
], DateComponent);



/***/ }),

/***/ "./src/app/latest/latest.component.css":
/*!*********************************************!*\
  !*** ./src/app/latest/latest.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhdGVzdC9sYXRlc3QuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/latest/latest.component.ts":
/*!********************************************!*\
  !*** ./src/app/latest/latest.component.ts ***!
  \********************************************/
/*! exports provided: LatestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LatestComponent", function() { return LatestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _myserve_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../myserve.service */ "./src/app/myserve.service.ts");



let LatestComponent = class LatestComponent {
    constructor(singh) {
        this.singh = singh;
        this.currentDate = new Date();
    }
    ngOnInit() {
        this.singh.fetchLatestNews().subscribe(res => {
            //console.log(res);
            this.Hdata = res;
            this.HNewsData = this.Hdata.items;
        });
    }
};
LatestComponent.ctorParameters = () => [
    { type: _myserve_service__WEBPACK_IMPORTED_MODULE_2__["MyserveService"] }
];
LatestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-latest',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./latest.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/latest/latest.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./latest.component.css */ "./src/app/latest/latest.component.css")).default]
    })
], LatestComponent);



/***/ }),

/***/ "./src/app/myserve.service.ts":
/*!************************************!*\
  !*** ./src/app/myserve.service.ts ***!
  \************************************/
/*! exports provided: MyserveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyserveService", function() { return MyserveService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let MyserveService = class MyserveService {
    constructor(http) {
        this.http = http;
    }
    fetchLatestNews() {
        const url = 'https://www.afaqs.com/api/v1/collections/newsletter';
        return this.http.get(url);
    }
};
MyserveService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
MyserveService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MyserveService);



/***/ }),

/***/ "./src/app/two-latest/two-latest.component.css":
/*!*****************************************************!*\
  !*** ./src/app/two-latest/two-latest.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3R3by1sYXRlc3QvdHdvLWxhdGVzdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/two-latest/two-latest.component.ts":
/*!****************************************************!*\
  !*** ./src/app/two-latest/two-latest.component.ts ***!
  \****************************************************/
/*! exports provided: TwoLatestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwoLatestComponent", function() { return TwoLatestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _myserve_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../myserve.service */ "./src/app/myserve.service.ts");



let TwoLatestComponent = class TwoLatestComponent {
    constructor(singh) {
        this.singh = singh;
        this.currentDate = new Date();
    }
    ngOnInit() {
        this.singh.fetchLatestNews().subscribe(res => {
            //console.log(res);
            this.Hdata = res;
            this.HNewsData = this.Hdata.items;
        });
    }
};
TwoLatestComponent.ctorParameters = () => [
    { type: _myserve_service__WEBPACK_IMPORTED_MODULE_2__["MyserveService"] }
];
TwoLatestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-two-latest',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./two-latest.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/two-latest/two-latest.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./two-latest.component.css */ "./src/app/two-latest/two-latest.component.css")).default]
    })
], TwoLatestComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\User\Desktop\Mean\Angular\latest\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
