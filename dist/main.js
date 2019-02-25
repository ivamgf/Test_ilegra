(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-body container\">\n    <img class=\"img_lightsaber\" src=\"../../assets/sabre3.png\" alt=\"lightsaber\">\n  </div>\n</div>\n\n<div class=\"card container card_films\" style=\"width:300px\">\n  <img class=\"card-img-top\" src=\"../../assets/jedi.jpg\" alt=\"Card image\">\n  <div class=\"card-body\">\n    <h4 class=\"card-title\">Developer: Ivam Galvão Filho</h4>\n    <p class=\"card-text\">Developer FrontEnd and Jedi Master.</p>\n    <p class=\"card-text\">\n      graduating in analysis and development of systems by the college Estácio de Sá\n    </p>\n    <p class=\"card-text\">\n      Contact: ivam.developer@gmail.com\n    </p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/about/about.component.scss":
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card_films {\n  margin-top: 5%;\n  margin-bottom: 5%; }\n\n@media only screen and (max-width: 817px) {\n  .img_lightsaber {\n    width: 90%; }\n  .card_films {\n    width: 100px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvQzpcXFdvcmtzcGFjZVxcV29ya3NwYWNlLXRlc3QtaWxlZ3JhXFxUZXN0X2lsZWdyYVxcYXBwVGVzdElsZWdyYS9zcmNcXGFwcFxcYWJvdXRcXGFib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYztFQUNkLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJO0lBQ0ksVUFBVSxFQUFBO0VBRWQ7SUFDSSxZQUFZLEVBQUEsRUFDZiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmRfZmlsbXMge1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MTdweCkge1xyXG4gICAgLmltZ19saWdodHNhYmVyIHtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgfVxyXG4gICAgLmNhcmRfZmlsbXMge1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/about/about.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _planets_planets_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./planets/planets.component */ "./src/app/planets/planets.component.ts");
/* harmony import */ var _films_film1_film1_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./films/film1/film1.component */ "./src/app/films/film1/film1.component.ts");
/* harmony import */ var _films_film2_film2_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./films/film2/film2.component */ "./src/app/films/film2/film2.component.ts");
/* harmony import */ var _films_film3_film3_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./films/film3/film3.component */ "./src/app/films/film3/film3.component.ts");
/* harmony import */ var _films_film4_film4_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./films/film4/film4.component */ "./src/app/films/film4/film4.component.ts");
/* harmony import */ var _films_film5_film5_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./films/film5/film5.component */ "./src/app/films/film5/film5.component.ts");
/* harmony import */ var _films_film6_film6_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./films/film6/film6.component */ "./src/app/films/film6/film6.component.ts");
/* harmony import */ var _films_film7_film7_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./films/film7/film7.component */ "./src/app/films/film7/film7.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");














var routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: 'nav',
        component: _nav_nav_component__WEBPACK_IMPORTED_MODULE_4__["NavComponent"]
    },
    {
        path: 'planets',
        component: _planets_planets_component__WEBPACK_IMPORTED_MODULE_5__["PlanetsComponent"]
    },
    {
        path: 'film1',
        component: _films_film1_film1_component__WEBPACK_IMPORTED_MODULE_6__["Film1Component"]
    },
    {
        path: 'film2',
        component: _films_film2_film2_component__WEBPACK_IMPORTED_MODULE_7__["Film2Component"]
    },
    {
        path: 'film3',
        component: _films_film3_film3_component__WEBPACK_IMPORTED_MODULE_8__["Film3Component"]
    },
    {
        path: 'film4',
        component: _films_film4_film4_component__WEBPACK_IMPORTED_MODULE_9__["Film4Component"]
    },
    {
        path: 'film5',
        component: _films_film5_film5_component__WEBPACK_IMPORTED_MODULE_10__["Film5Component"]
    },
    {
        path: 'film6',
        component: _films_film6_film6_component__WEBPACK_IMPORTED_MODULE_11__["Film6Component"]
    },
    {
        path: 'film7',
        component: _films_film7_film7_component__WEBPACK_IMPORTED_MODULE_12__["Film7Component"]
    },
    {
        path: 'about',
        component: _about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-nav></app-nav>\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"/assets/logo.png\">\n</div>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Star Wars Gallery';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _planets_planets_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./planets/planets.component */ "./src/app/planets/planets.component.ts");
/* harmony import */ var _films_film1_film1_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./films/film1/film1.component */ "./src/app/films/film1/film1.component.ts");
/* harmony import */ var _films_film2_film2_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./films/film2/film2.component */ "./src/app/films/film2/film2.component.ts");
/* harmony import */ var _films_film3_film3_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./films/film3/film3.component */ "./src/app/films/film3/film3.component.ts");
/* harmony import */ var _films_film4_film4_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./films/film4/film4.component */ "./src/app/films/film4/film4.component.ts");
/* harmony import */ var _films_film5_film5_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./films/film5/film5.component */ "./src/app/films/film5/film5.component.ts");
/* harmony import */ var _films_film6_film6_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./films/film6/film6.component */ "./src/app/films/film6/film6.component.ts");
/* harmony import */ var _films_film7_film7_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./films/film7/film7.component */ "./src/app/films/film7/film7.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_7__["NavComponent"],
                _planets_planets_component__WEBPACK_IMPORTED_MODULE_8__["PlanetsComponent"],
                _films_film1_film1_component__WEBPACK_IMPORTED_MODULE_9__["Film1Component"],
                _films_film2_film2_component__WEBPACK_IMPORTED_MODULE_10__["Film2Component"],
                _films_film3_film3_component__WEBPACK_IMPORTED_MODULE_11__["Film3Component"],
                _films_film4_film4_component__WEBPACK_IMPORTED_MODULE_12__["Film4Component"],
                _films_film5_film5_component__WEBPACK_IMPORTED_MODULE_13__["Film5Component"],
                _films_film6_film6_component__WEBPACK_IMPORTED_MODULE_14__["Film6Component"],
                _films_film7_film7_component__WEBPACK_IMPORTED_MODULE_15__["Film7Component"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_16__["AboutComponent"]
            ],
            exports: [
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_7__["NavComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["NO_ERRORS_SCHEMA"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]],
            providers: [_angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: contentHeaders, AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contentHeaders", function() { return contentHeaders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var contentHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
contentHeaders.append('Content-Type', 'application/json');
var AppService = /** @class */ (function () {
    function AppService(http) {
        this.http = http;
    }
    AppService.prototype.onGetFilms = function () {
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: contentHeaders });
        return this.http.get('https://swapi.co/api/films/', options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.json(); }));
    };
    AppService.prototype.onGetFilm1 = function () {
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: contentHeaders });
        return this.http.get('https://swapi.co/api/films/1/', options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.json(); }));
    };
    AppService.prototype.onGetFilm2 = function () {
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: contentHeaders });
        return this.http.get('https://swapi.co/api/films/2/', options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.json(); }));
    };
    AppService.prototype.onGetFilm3 = function () {
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: contentHeaders });
        return this.http.get('https://swapi.co/api/films/3/', options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.json(); }));
    };
    AppService.prototype.onGetFilm4 = function () {
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: contentHeaders });
        return this.http.get('https://swapi.co/api/films/4/', options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.json(); }));
    };
    AppService.prototype.onGetFilm5 = function () {
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: contentHeaders });
        return this.http.get('https://swapi.co/api/films/5/', options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.json(); }));
    };
    AppService.prototype.onGetFilm6 = function () {
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: contentHeaders });
        return this.http.get('https://swapi.co/api/films/6/', options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.json(); }));
    };
    AppService.prototype.onGetFilm7 = function () {
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: contentHeaders });
        return this.http.get('https://swapi.co/api/films/7/', options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.json(); }));
    };
    AppService.prototype.onGetPlanets = function () {
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: contentHeaders });
        return this.http.get('https://swapi.co/api/planets/', options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.json(); }));
    };
    AppService.prototype.onGetPlanet2 = function () {
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: contentHeaders });
        return this.http.get('https://swapi.co/api/planets/2/', options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.json(); }));
    };
    AppService.prototype.onGetPlanet3 = function () {
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: contentHeaders });
        return this.http.get('https://swapi.co/api/planets/3/', options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.json(); }));
    };
    AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/films/film1/film1.component.html":
/*!**************************************************!*\
  !*** ./src/app/films/film1/film1.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card container card_films\" style=\"width:300px\">\n    <img class=\"card-img-top\" src=\"../../assets/ep4.png\" alt=\"Card image\">\n    <div class=\"card-body\">\n      <h4 class=\"card-title\">{{getFilm1.title}}</h4>\n      <p class=\"card-text\">Episódio {{getFilm1.episode_id}}</p>\n      <p class=\"card-text\">Data {{getFilm1.release_date}}</p>\n      <p class=\"card-text\">Produção {{getFilm1.producer}}</p>\n      <p class=\"card-text\">Texto de Abertura: <br>{{getFilm1.opening_crawl}}</p>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/films/film1/film1.component.scss":
/*!**************************************************!*\
  !*** ./src/app/films/film1/film1.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card_films {\n  margin-top: 5%;\n  margin-bottom: 5%; }\n\n.card-img-top {\n  margin-top: 5%; }\n\n@media only screen and (max-width: 817px) {\n  .img_lightsaber {\n    width: 90%; }\n  .card_films {\n    width: 100px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsbXMvZmlsbTEvQzpcXFdvcmtzcGFjZVxcV29ya3NwYWNlLXRlc3QtaWxlZ3JhXFxUZXN0X2lsZWdyYVxcYXBwVGVzdElsZWdyYS9zcmNcXGFwcFxcZmlsbXNcXGZpbG0xXFxmaWxtMS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWM7RUFDZCxpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxjQUFjLEVBQUE7O0FBRWxCO0VBQ0k7SUFDSSxVQUFVLEVBQUE7RUFFZDtJQUNJLFlBQVksRUFBQSxFQUNmIiwiZmlsZSI6InNyYy9hcHAvZmlsbXMvZmlsbTEvZmlsbTEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZF9maWxtcyB7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIG1hcmdpbi1ib3R0b206IDUlO1xyXG59XHJcbi5jYXJkLWltZy10b3Age1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MTdweCkge1xyXG4gICAgLmltZ19saWdodHNhYmVyIHtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgfVxyXG4gICAgLmNhcmRfZmlsbXMge1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/films/film1/film1.component.ts":
/*!************************************************!*\
  !*** ./src/app/films/film1/film1.component.ts ***!
  \************************************************/
/*! exports provided: contentHeaders, Film1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contentHeaders", function() { return contentHeaders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Film1Component", function() { return Film1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");





var contentHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
contentHeaders.append('Content-Type', 'application/json');
var Film1Component = /** @class */ (function () {
    function Film1Component(httpAppService, http) {
        this.httpAppService = httpAppService;
        this.http = http;
    }
    Film1Component.prototype.ngOnInit = function () {
        var _this = this;
        var returnFilm1 = this.httpAppService.onGetFilm1()
            .subscribe(function (data) { return _this.getFilm1 = data; }, function (error) { return alert(error); }, function () { return (console.log(_this.getFilm1)); });
    };
    Film1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-film1',
            template: __webpack_require__(/*! ./film1.component.html */ "./src/app/films/film1/film1.component.html"),
            providers: [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]],
            styles: [__webpack_require__(/*! ./film1.component.scss */ "./src/app/films/film1/film1.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], Film1Component);
    return Film1Component;
}());



/***/ }),

/***/ "./src/app/films/film2/film2.component.html":
/*!**************************************************!*\
  !*** ./src/app/films/film2/film2.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card container card_films\" style=\"width:300px\">\n  <img class=\"card-img-top\" src=\"../../assets/ep5.jpg\" alt=\"Card image\">\n  <div class=\"card-body\">\n    <h4 class=\"card-title\">{{getFilm2.title}}</h4>\n    <p class=\"card-text\">Episódio {{getFilm2.episode_id}}</p>\n    <p class=\"card-text\">Data {{getFilm2.release_date}}</p>\n    <p class=\"card-text\">Produção {{getFilm2.producer}}</p>\n    <p class=\"card-text\">Texto de Abertura: <br>{{getFilm2.opening_crawl}}</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/films/film2/film2.component.scss":
/*!**************************************************!*\
  !*** ./src/app/films/film2/film2.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card_films {\n  margin-top: 5%;\n  margin-bottom: 5%; }\n\n.card-img-top {\n  margin-top: 5%; }\n\n@media only screen and (max-width: 817px) {\n  .img_lightsaber {\n    width: 90%; }\n  .card_films {\n    width: 100px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsbXMvZmlsbTIvQzpcXFdvcmtzcGFjZVxcV29ya3NwYWNlLXRlc3QtaWxlZ3JhXFxUZXN0X2lsZWdyYVxcYXBwVGVzdElsZWdyYS9zcmNcXGFwcFxcZmlsbXNcXGZpbG0yXFxmaWxtMi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWM7RUFDZCxpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxjQUFjLEVBQUE7O0FBRWxCO0VBQ0k7SUFDSSxVQUFVLEVBQUE7RUFFZDtJQUNJLFlBQVksRUFBQSxFQUNmIiwiZmlsZSI6InNyYy9hcHAvZmlsbXMvZmlsbTIvZmlsbTIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZF9maWxtcyB7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIG1hcmdpbi1ib3R0b206IDUlO1xyXG59XHJcbi5jYXJkLWltZy10b3Age1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MTdweCkge1xyXG4gICAgLmltZ19saWdodHNhYmVyIHtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgfVxyXG4gICAgLmNhcmRfZmlsbXMge1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/films/film2/film2.component.ts":
/*!************************************************!*\
  !*** ./src/app/films/film2/film2.component.ts ***!
  \************************************************/
/*! exports provided: contentHeaders, Film2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contentHeaders", function() { return contentHeaders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Film2Component", function() { return Film2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");





var contentHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
contentHeaders.append('Content-Type', 'application/json');
var Film2Component = /** @class */ (function () {
    function Film2Component(httpAppService, http) {
        this.httpAppService = httpAppService;
        this.http = http;
    }
    Film2Component.prototype.ngOnInit = function () {
        var _this = this;
        var returnFilm2 = this.httpAppService.onGetFilm2()
            .subscribe(function (data) { return _this.getFilm2 = data; }, function (error) { return alert(error); }, function () { return (console.log(_this.getFilm2)); });
    };
    Film2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-film2',
            template: __webpack_require__(/*! ./film2.component.html */ "./src/app/films/film2/film2.component.html"),
            styles: [__webpack_require__(/*! ./film2.component.scss */ "./src/app/films/film2/film2.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], Film2Component);
    return Film2Component;
}());



/***/ }),

/***/ "./src/app/films/film3/film3.component.html":
/*!**************************************************!*\
  !*** ./src/app/films/film3/film3.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card container card_films\" style=\"width:300px\">\n    <img class=\"card-img-top\" src=\"../../assets/ep6.jpg\" alt=\"Card image\">\n    <div class=\"card-body\">\n      <h4 class=\"card-title\">{{getFilm3.title}}</h4>\n      <p class=\"card-text\">Episódio {{getFilm3.episode_id}}</p>\n      <p class=\"card-text\">Data {{getFilm3.release_date}}</p>\n      <p class=\"card-text\">Produção {{getFilm3.producer}}</p>\n      <p class=\"card-text\">Texto de Abertura: <br>{{getFilm3.opening_crawl}}</p>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/films/film3/film3.component.scss":
/*!**************************************************!*\
  !*** ./src/app/films/film3/film3.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card_films {\n  margin-top: 5%;\n  margin-bottom: 5%; }\n\n.card-img-top {\n  margin-top: 5%; }\n\n@media only screen and (max-width: 817px) {\n  .img_lightsaber {\n    width: 90%; }\n  .card_films {\n    width: 100px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsbXMvZmlsbTMvQzpcXFdvcmtzcGFjZVxcV29ya3NwYWNlLXRlc3QtaWxlZ3JhXFxUZXN0X2lsZWdyYVxcYXBwVGVzdElsZWdyYS9zcmNcXGFwcFxcZmlsbXNcXGZpbG0zXFxmaWxtMy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWM7RUFDZCxpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxjQUFjLEVBQUE7O0FBRWxCO0VBQ0k7SUFDSSxVQUFVLEVBQUE7RUFFZDtJQUNJLFlBQVksRUFBQSxFQUNmIiwiZmlsZSI6InNyYy9hcHAvZmlsbXMvZmlsbTMvZmlsbTMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZF9maWxtcyB7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIG1hcmdpbi1ib3R0b206IDUlO1xyXG59XHJcbi5jYXJkLWltZy10b3Age1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MTdweCkge1xyXG4gICAgLmltZ19saWdodHNhYmVyIHtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgfVxyXG4gICAgLmNhcmRfZmlsbXMge1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/films/film3/film3.component.ts":
/*!************************************************!*\
  !*** ./src/app/films/film3/film3.component.ts ***!
  \************************************************/
/*! exports provided: contentHeaders, Film3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contentHeaders", function() { return contentHeaders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Film3Component", function() { return Film3Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");





var contentHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
contentHeaders.append('Content-Type', 'application/json');
var Film3Component = /** @class */ (function () {
    function Film3Component(httpAppService, http) {
        this.httpAppService = httpAppService;
        this.http = http;
    }
    Film3Component.prototype.ngOnInit = function () {
        var _this = this;
        var returnFilm3 = this.httpAppService.onGetFilm3()
            .subscribe(function (data) { return _this.getFilm3 = data; }, function (error) { return alert(error); }, function () { return (console.log(_this.getFilm3)); });
    };
    Film3Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-film3',
            template: __webpack_require__(/*! ./film3.component.html */ "./src/app/films/film3/film3.component.html"),
            styles: [__webpack_require__(/*! ./film3.component.scss */ "./src/app/films/film3/film3.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], Film3Component);
    return Film3Component;
}());



/***/ }),

/***/ "./src/app/films/film4/film4.component.html":
/*!**************************************************!*\
  !*** ./src/app/films/film4/film4.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card container card_films\" style=\"width:300px\">\n    <img class=\"card-img-top\" src=\"../../assets/ep1.png\" alt=\"Card image\">\n    <div class=\"card-body\">\n      <h4 class=\"card-title\">{{getFilm4.title}}</h4>\n      <p class=\"card-text\">Episódio {{getFilm4.episode_id}}</p>\n      <p class=\"card-text\">Data {{getFilm4.release_date}}</p>\n      <p class=\"card-text\">Produção {{getFilm4.producer}}</p>\n      <p class=\"card-text\">Texto de Abertura: <br>{{getFilm4.opening_crawl}}</p>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/films/film4/film4.component.scss":
/*!**************************************************!*\
  !*** ./src/app/films/film4/film4.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card_films {\n  margin-top: 5%;\n  margin-bottom: 5%; }\n\n.card-img-top {\n  margin-top: 5%; }\n\n@media only screen and (max-width: 817px) {\n  .img_lightsaber {\n    width: 90%; }\n  .card_films {\n    width: 100px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsbXMvZmlsbTQvQzpcXFdvcmtzcGFjZVxcV29ya3NwYWNlLXRlc3QtaWxlZ3JhXFxUZXN0X2lsZWdyYVxcYXBwVGVzdElsZWdyYS9zcmNcXGFwcFxcZmlsbXNcXGZpbG00XFxmaWxtNC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWM7RUFDZCxpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxjQUFjLEVBQUE7O0FBRWxCO0VBQ0k7SUFDSSxVQUFVLEVBQUE7RUFFZDtJQUNJLFlBQVksRUFBQSxFQUNmIiwiZmlsZSI6InNyYy9hcHAvZmlsbXMvZmlsbTQvZmlsbTQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZF9maWxtcyB7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIG1hcmdpbi1ib3R0b206IDUlO1xyXG59XHJcbi5jYXJkLWltZy10b3Age1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MTdweCkge1xyXG4gICAgLmltZ19saWdodHNhYmVyIHtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgfVxyXG4gICAgLmNhcmRfZmlsbXMge1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/films/film4/film4.component.ts":
/*!************************************************!*\
  !*** ./src/app/films/film4/film4.component.ts ***!
  \************************************************/
/*! exports provided: contentHeaders, Film4Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contentHeaders", function() { return contentHeaders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Film4Component", function() { return Film4Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");





var contentHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
contentHeaders.append('Content-Type', 'application/json');
var Film4Component = /** @class */ (function () {
    function Film4Component(httpAppService, http) {
        this.httpAppService = httpAppService;
        this.http = http;
    }
    Film4Component.prototype.ngOnInit = function () {
        var _this = this;
        var returnFilm4 = this.httpAppService.onGetFilm4()
            .subscribe(function (data) { return _this.getFilm4 = data; }, function (error) { return alert(error); }, function () { return (console.log(_this.getFilm4)); });
    };
    Film4Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-film4',
            template: __webpack_require__(/*! ./film4.component.html */ "./src/app/films/film4/film4.component.html"),
            styles: [__webpack_require__(/*! ./film4.component.scss */ "./src/app/films/film4/film4.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], Film4Component);
    return Film4Component;
}());



/***/ }),

/***/ "./src/app/films/film5/film5.component.html":
/*!**************************************************!*\
  !*** ./src/app/films/film5/film5.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card container card_films\" style=\"width:300px\">\n    <img class=\"card-img-top\" src=\"../../assets/ep2.jpg\" alt=\"Card image\">\n    <div class=\"card-body\">\n      <h4 class=\"card-title\">{{getFilm5.title}}</h4>\n      <p class=\"card-text\">Episódio {{getFilm5.episode_id}}</p>\n      <p class=\"card-text\">Data {{getFilm5.release_date}}</p>\n      <p class=\"card-text\">Produção {{getFilm5.producer}}</p>\n      <p class=\"card-text\">Texto de Abertura: <br>{{getFilm5.opening_crawl}}</p>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/films/film5/film5.component.scss":
/*!**************************************************!*\
  !*** ./src/app/films/film5/film5.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card_films {\n  margin-top: 5%;\n  margin-bottom: 5%; }\n\n.card-img-top {\n  margin-top: 5%; }\n\n@media only screen and (max-width: 817px) {\n  .img_lightsaber {\n    width: 90%; }\n  .card_films {\n    width: 100px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsbXMvZmlsbTUvQzpcXFdvcmtzcGFjZVxcV29ya3NwYWNlLXRlc3QtaWxlZ3JhXFxUZXN0X2lsZWdyYVxcYXBwVGVzdElsZWdyYS9zcmNcXGFwcFxcZmlsbXNcXGZpbG01XFxmaWxtNS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWM7RUFDZCxpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxjQUFjLEVBQUE7O0FBRWxCO0VBQ0k7SUFDSSxVQUFVLEVBQUE7RUFFZDtJQUNJLFlBQVksRUFBQSxFQUNmIiwiZmlsZSI6InNyYy9hcHAvZmlsbXMvZmlsbTUvZmlsbTUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZF9maWxtcyB7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIG1hcmdpbi1ib3R0b206IDUlO1xyXG59XHJcbi5jYXJkLWltZy10b3Age1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MTdweCkge1xyXG4gICAgLmltZ19saWdodHNhYmVyIHtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgfVxyXG4gICAgLmNhcmRfZmlsbXMge1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/films/film5/film5.component.ts":
/*!************************************************!*\
  !*** ./src/app/films/film5/film5.component.ts ***!
  \************************************************/
/*! exports provided: contentHeaders, Film5Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contentHeaders", function() { return contentHeaders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Film5Component", function() { return Film5Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");





var contentHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
contentHeaders.append('Content-Type', 'application/json');
var Film5Component = /** @class */ (function () {
    function Film5Component(httpAppService, http) {
        this.httpAppService = httpAppService;
        this.http = http;
    }
    Film5Component.prototype.ngOnInit = function () {
        var _this = this;
        var returnFilm1 = this.httpAppService.onGetFilm5()
            .subscribe(function (data) { return _this.getFilm5 = data; }, function (error) { return alert(error); }, function () { return (console.log(_this.getFilm5)); });
    };
    Film5Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-film5',
            template: __webpack_require__(/*! ./film5.component.html */ "./src/app/films/film5/film5.component.html"),
            styles: [__webpack_require__(/*! ./film5.component.scss */ "./src/app/films/film5/film5.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], Film5Component);
    return Film5Component;
}());



/***/ }),

/***/ "./src/app/films/film6/film6.component.html":
/*!**************************************************!*\
  !*** ./src/app/films/film6/film6.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card container card_films\" style=\"width:300px\">\n    <img class=\"card-img-top\" src=\"../../assets/ep3.jpg\" alt=\"Card image\">\n    <div class=\"card-body\">\n      <h4 class=\"card-title\">{{getFilm6.title}}</h4>\n      <p class=\"card-text\">Episódio {{getFilm6.episode_id}}</p>\n      <p class=\"card-text\">Data {{getFilm6.release_date}}</p>\n      <p class=\"card-text\">Produção {{getFilm6.producer}}</p>\n      <p class=\"card-text\">Texto de Abertura: <br>{{getFilm6.opening_crawl}}</p>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/films/film6/film6.component.scss":
/*!**************************************************!*\
  !*** ./src/app/films/film6/film6.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card_films {\n  margin-top: 5%;\n  margin-bottom: 5%; }\n\n.card-img-top {\n  margin-top: 5%; }\n\n@media only screen and (max-width: 817px) {\n  .img_lightsaber {\n    width: 90%; }\n  .card_films {\n    width: 100px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsbXMvZmlsbTYvQzpcXFdvcmtzcGFjZVxcV29ya3NwYWNlLXRlc3QtaWxlZ3JhXFxUZXN0X2lsZWdyYVxcYXBwVGVzdElsZWdyYS9zcmNcXGFwcFxcZmlsbXNcXGZpbG02XFxmaWxtNi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWM7RUFDZCxpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxjQUFjLEVBQUE7O0FBRWxCO0VBQ0k7SUFDSSxVQUFVLEVBQUE7RUFFZDtJQUNJLFlBQVksRUFBQSxFQUNmIiwiZmlsZSI6InNyYy9hcHAvZmlsbXMvZmlsbTYvZmlsbTYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZF9maWxtcyB7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIG1hcmdpbi1ib3R0b206IDUlO1xyXG59XHJcbi5jYXJkLWltZy10b3Age1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MTdweCkge1xyXG4gICAgLmltZ19saWdodHNhYmVyIHtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgfVxyXG4gICAgLmNhcmRfZmlsbXMge1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/films/film6/film6.component.ts":
/*!************************************************!*\
  !*** ./src/app/films/film6/film6.component.ts ***!
  \************************************************/
/*! exports provided: contentHeaders, Film6Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contentHeaders", function() { return contentHeaders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Film6Component", function() { return Film6Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");





var contentHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
contentHeaders.append('Content-Type', 'application/json');
var Film6Component = /** @class */ (function () {
    function Film6Component(httpAppService, http) {
        this.httpAppService = httpAppService;
        this.http = http;
    }
    Film6Component.prototype.ngOnInit = function () {
        var _this = this;
        var returnFilm6 = this.httpAppService.onGetFilm6()
            .subscribe(function (data) { return _this.getFilm6 = data; }, function (error) { return alert(error); }, function () { return (console.log(_this.getFilm6)); });
    };
    Film6Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-film6',
            template: __webpack_require__(/*! ./film6.component.html */ "./src/app/films/film6/film6.component.html"),
            styles: [__webpack_require__(/*! ./film6.component.scss */ "./src/app/films/film6/film6.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], Film6Component);
    return Film6Component;
}());



/***/ }),

/***/ "./src/app/films/film7/film7.component.html":
/*!**************************************************!*\
  !*** ./src/app/films/film7/film7.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card container card_films\" style=\"width:300px\">\n    <img class=\"card-img-top\" src=\"../../assets/ep7.jpg\" alt=\"Card image\">\n    <div class=\"card-body\">\n      <h4 class=\"card-title\">{{getFilm7.title}}</h4>\n      <p class=\"card-text\">Episódio {{getFilm7.episode_id}}</p>\n      <p class=\"card-text\">Data {{getFilm7.release_date}}</p>\n      <p class=\"card-text\">Produção {{getFilm7.producer}}</p>\n      <p class=\"card-text\">Texto de Abertura: <br>{{getFilm7.opening_crawl}}</p>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/films/film7/film7.component.scss":
/*!**************************************************!*\
  !*** ./src/app/films/film7/film7.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card_films {\n  margin-top: 5%;\n  margin-bottom: 5%; }\n\n.card-img-top {\n  margin-top: 5%; }\n\n@media only screen and (max-width: 817px) {\n  .img_lightsaber {\n    width: 90%; }\n  .card_films {\n    width: 100px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsbXMvZmlsbTcvQzpcXFdvcmtzcGFjZVxcV29ya3NwYWNlLXRlc3QtaWxlZ3JhXFxUZXN0X2lsZWdyYVxcYXBwVGVzdElsZWdyYS9zcmNcXGFwcFxcZmlsbXNcXGZpbG03XFxmaWxtNy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWM7RUFDZCxpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxjQUFjLEVBQUE7O0FBRWxCO0VBQ0k7SUFDSSxVQUFVLEVBQUE7RUFFZDtJQUNJLFlBQVksRUFBQSxFQUNmIiwiZmlsZSI6InNyYy9hcHAvZmlsbXMvZmlsbTcvZmlsbTcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZF9maWxtcyB7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIG1hcmdpbi1ib3R0b206IDUlO1xyXG59XHJcbi5jYXJkLWltZy10b3Age1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MTdweCkge1xyXG4gICAgLmltZ19saWdodHNhYmVyIHtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgfVxyXG4gICAgLmNhcmRfZmlsbXMge1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/films/film7/film7.component.ts":
/*!************************************************!*\
  !*** ./src/app/films/film7/film7.component.ts ***!
  \************************************************/
/*! exports provided: contentHeaders, Film7Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contentHeaders", function() { return contentHeaders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Film7Component", function() { return Film7Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");





var contentHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
contentHeaders.append('Content-Type', 'application/json');
var Film7Component = /** @class */ (function () {
    function Film7Component(httpAppService, http) {
        this.httpAppService = httpAppService;
        this.http = http;
    }
    Film7Component.prototype.ngOnInit = function () {
        var _this = this;
        var returnFilm7 = this.httpAppService.onGetFilm7()
            .subscribe(function (data) { return _this.getFilm7 = data; }, function (error) { return alert(error); }, function () { return (console.log(_this.getFilm7)); });
    };
    Film7Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-film7',
            template: __webpack_require__(/*! ./film7.component.html */ "./src/app/films/film7/film7.component.html"),
            styles: [__webpack_require__(/*! ./film7.component.scss */ "./src/app/films/film7/film7.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], Film7Component);
    return Film7Component;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-body container\">\n    <img class=\"img_lightsaber\" src=\"../../assets/sabre1.png\" alt=\"lightsaber\">\n  </div>\n</div>\n\n<div class=\"card container card_films\" style=\"width:300px\">\n    <img class=\"card-img-top\" src=\"../../assets/logo.png\" alt=\"Card image\">\n    <div class=\"card-body\">\n      <h4 class=\"card-title\">Lista de filmes</h4>\n      <ul>\n        <li *ngFor=\"let i of getFilms.results\">{{i.title}}</li>\n      </ul>\n    </div>\n  </div>\n\n<div class=\"card container card_films\" style=\"width:300px\">\n  <img class=\"card-img-top\" src=\"../../assets/ep4.png\" alt=\"Card image\">\n  <div class=\"card-body\">\n    <h4 class=\"card-title\">{{getFilm1.title}}</h4>\n    <p class=\"card-text\">Episódio {{getFilm1.episode_id}}</p>\n    <a href=\"#\" class=\"btn btn-primary\" routerLink=\"/film1\">Ver mais Detalhes do Filme</a>\n  </div>\n</div>\n\n<div class=\"card container card_films\" style=\"width:300px\">\n  <img class=\"card-img-top\" src=\"../../assets/ep5.jpg\" alt=\"Card image\">\n  <div class=\"card-body\">\n    <h4 class=\"card-title\">{{getFilm2.title}}</h4>\n    <p class=\"card-text\">Episódio {{getFilm2.episode_id}}</p>\n    <a href=\"#\" class=\"btn btn-primary\" routerLink=\"/film2\">Ver mais Detalhes do Filme</a>\n  </div>\n</div>\n\n<div class=\"card container card_films\" style=\"width:300px\">\n  <img class=\"card-img-top\" src=\"../../assets/ep6.jpg\" alt=\"Card image\">\n  <div class=\"card-body\">\n    <h4 class=\"card-title\">{{getFilm3.title}}</h4>\n    <p class=\"card-text\">Episódio {{getFilm3.episode_id}}</p>\n    <a href=\"#\" class=\"btn btn-primary\" routerLink=\"/film3\">Ver mais Detalhes do Filme</a>\n  </div>\n</div>\n\n<div class=\"card container card_films\" style=\"width:300px\">\n  <img class=\"card-img-top\" src=\"../../assets/ep1.png\" alt=\"Card image\">\n  <div class=\"card-body\">\n    <h4 class=\"card-title\">{{getFilm4.title}}</h4>\n    <p class=\"card-text\">Episódio {{getFilm4.episode_id}}</p>\n    <a href=\"#\" class=\"btn btn-primary\" routerLink=\"/film4\">Ver mais Detalhes do Filme</a>\n  </div>\n</div>\n\n<div class=\"card container card_films\" style=\"width:300px\">\n  <img class=\"card-img-top\" src=\"../../assets/ep2.jpg\" alt=\"Card image\">\n  <div class=\"card-body\">\n    <h4 class=\"card-title\">{{getFilm5.title}}</h4>\n    <p class=\"card-text\">Episódio {{getFilm5.episode_id}}</p>\n    <a href=\"#\" class=\"btn btn-primary\" routerLink=\"/film5\">Ver mais Detalhes do Filme</a>\n  </div>\n</div>\n\n<div class=\"card container card_films\" style=\"width:300px\">\n  <img class=\"card-img-top\" src=\"../../assets/ep3.jpg\" alt=\"Card image\">\n  <div class=\"card-body\">\n    <h4 class=\"card-title\">{{getFilm6.title}}</h4>\n    <p class=\"card-text\">Episódio {{getFilm6.episode_id}}</p>\n    <a href=\"#\" class=\"btn btn-primary\" routerLink=\"/film6\">Ver mais Detalhes do Filme</a>\n  </div>\n</div>\n\n<div class=\"card container card_films\" style=\"width:300px\">\n  <img class=\"card-img-top\" src=\"../../assets/ep7.jpg\" alt=\"Card image\">\n  <div class=\"card-body\">\n    <h4 class=\"card-title\">{{getFilm7.title}}</h4>\n    <p class=\"card-text\">Episódio {{getFilm7.episode_id}}</p>\n    <a href=\"#\" class=\"btn btn-primary\" routerLink=\"/film7\">Ver mais Detalhes do Filme</a>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card_films {\n  margin-top: 5%;\n  margin-bottom: 5%; }\n\n.card-img-top {\n  margin-top: 5%; }\n\n@media only screen and (max-width: 817px) {\n  .img_lightsaber {\n    width: 90%; }\n  .card_films {\n    width: 100px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcV29ya3NwYWNlXFxXb3Jrc3BhY2UtdGVzdC1pbGVncmFcXFRlc3RfaWxlZ3JhXFxhcHBUZXN0SWxlZ3JhL3NyY1xcYXBwXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYztFQUNkLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLGNBQWMsRUFBQTs7QUFFbEI7RUFDSTtJQUNJLFVBQVUsRUFBQTtFQUVkO0lBQ0ksWUFBWSxFQUFBLEVBQ2YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZF9maWxtcyB7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIG1hcmdpbi1ib3R0b206IDUlO1xyXG59XHJcbi5jYXJkLWltZy10b3Age1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MTdweCkge1xyXG4gICAgLmltZ19saWdodHNhYmVyIHtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgfVxyXG4gICAgLmNhcmRfZmlsbXMge1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: contentHeaders, HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contentHeaders", function() { return contentHeaders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");





var contentHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
contentHeaders.append('Content-Type', 'application/json');
var HomeComponent = /** @class */ (function () {
    function HomeComponent(httpAppService, http) {
        this.httpAppService = httpAppService;
        this.http = http;
        this.getFilms = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var returnFilms = this.httpAppService.onGetFilms()
            .subscribe(function (data) { return _this.getFilms = data; }, function (error) { return alert(error); }, function () { return (console.log(_this.getFilms)); });
        var returnFilm1 = this.httpAppService.onGetFilm1()
            .subscribe(function (data2) { return _this.getFilm1 = data2; }, function (error) { return alert(error); }, function () { return (console.log(_this.getFilm1)); });
        var returnFilm2 = this.httpAppService.onGetFilm2()
            .subscribe(function (data3) { return _this.getFilm2 = data3; }, function (error) { return alert(error); }, function () { return (console.log(_this.getFilm2)); });
        var returnFilm3 = this.httpAppService.onGetFilm3()
            .subscribe(function (data4) { return _this.getFilm3 = data4; }, function (error) { return alert(error); }, function () { return (console.log(_this.getFilm3)); });
        var returnFilm4 = this.httpAppService.onGetFilm4()
            .subscribe(function (data5) { return _this.getFilm4 = data5; }, function (error) { return alert(error); }, function () { return (console.log(_this.getFilm4)); });
        var returnFilm5 = this.httpAppService.onGetFilm5()
            .subscribe(function (data6) { return _this.getFilm5 = data6; }, function (error) { return alert(error); }, function () { return (console.log(_this.getFilm5)); });
        var returnFilm6 = this.httpAppService.onGetFilm6()
            .subscribe(function (data7) { return _this.getFilm6 = data7; }, function (error) { return alert(error); }, function () { return (console.log(_this.getFilm6)); });
        var returnFilm7 = this.httpAppService.onGetFilm7()
            .subscribe(function (data8) { return _this.getFilm7 = data8; }, function (error) { return alert(error); }, function () { return (console.log(_this.getFilm7)); });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm bg-dark navbar-dark\">\n  <!-- Brand -->\n  <a class=\"navbar-brand\" href=\"#\" routerLink=\"/\"><img src=\"../../assets/logo.png\" alt=\"logo_star_wars\" width=\"50px\"></a>\n\n  <!-- Links -->\n  <ul class=\"navbar-nav\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"#\" routerLink=\"/\">Home</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"#\" routerLink=\"/planets\">Planets</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"#\" routerLink=\"/about\">About</a>\n    </li>\n  </ul>\n</nav>\n"

/***/ }),

/***/ "./src/app/nav/nav.component.scss":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.scss */ "./src/app/nav/nav.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/planets/planets.component.html":
/*!************************************************!*\
  !*** ./src/app/planets/planets.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-body container\">\n    <img class=\"img_lightsaber\" src=\"../../assets/sabre2.png\" alt=\"lightsaber\">\n  </div>\n</div>\n\n<div class=\"card container card_films\" style=\"width:300px\">\n  <img class=\"card-img-top\" src=\"../../assets/Tatoooine.jpg\" alt=\"Card image\">\n  <div class=\"card-body\">\n    <h4 class=\"card-title\">Lista de Planetas</h4>\n    <ul>\n      <li *ngFor=\"let i of getPlanets.results\">{{i.name}}</li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/planets/planets.component.scss":
/*!************************************************!*\
  !*** ./src/app/planets/planets.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card_films {\n  margin-top: 5%;\n  margin-bottom: 5%; }\n\n.card-img-top {\n  margin-top: 5%; }\n\n@media only screen and (max-width: 817px) {\n  .img_lightsaber {\n    width: 90%; }\n  .card_films {\n    width: 100px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxhbmV0cy9DOlxcV29ya3NwYWNlXFxXb3Jrc3BhY2UtdGVzdC1pbGVncmFcXFRlc3RfaWxlZ3JhXFxhcHBUZXN0SWxlZ3JhL3NyY1xcYXBwXFxwbGFuZXRzXFxwbGFuZXRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYztFQUNkLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLGNBQWMsRUFBQTs7QUFFbEI7RUFDSTtJQUNJLFVBQVUsRUFBQTtFQUVkO0lBQ0ksWUFBWSxFQUFBLEVBQ2YiLCJmaWxlIjoic3JjL2FwcC9wbGFuZXRzL3BsYW5ldHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZF9maWxtcyB7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIG1hcmdpbi1ib3R0b206IDUlO1xyXG59XHJcbi5jYXJkLWltZy10b3Age1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MTdweCkge1xyXG4gICAgLmltZ19saWdodHNhYmVyIHtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgfVxyXG4gICAgLmNhcmRfZmlsbXMge1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/planets/planets.component.ts":
/*!**********************************************!*\
  !*** ./src/app/planets/planets.component.ts ***!
  \**********************************************/
/*! exports provided: contentHeaders, PlanetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contentHeaders", function() { return contentHeaders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanetsComponent", function() { return PlanetsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");





var contentHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
contentHeaders.append('Content-Type', 'application/json');
var PlanetsComponent = /** @class */ (function () {
    function PlanetsComponent(httpAppService, http) {
        this.httpAppService = httpAppService;
        this.http = http;
        this.getPlanets = [];
    }
    PlanetsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var returnPlanets = this.httpAppService.onGetPlanets()
            .subscribe(function (data) { return _this.getPlanets = data; }, function (error) { return alert(error); }, function () { return (console.log(_this.getPlanets)); });
    };
    PlanetsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-planets',
            template: __webpack_require__(/*! ./planets.component.html */ "./src/app/planets/planets.component.html"),
            styles: [__webpack_require__(/*! ./planets.component.scss */ "./src/app/planets/planets.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], PlanetsComponent);
    return PlanetsComponent;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Workspace\Workspace-test-ilegra\Test_ilegra\appTestIlegra\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map