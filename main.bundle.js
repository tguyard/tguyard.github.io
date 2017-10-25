webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"memory main\">\n  <div class=\"header\">\n    <app-menu></app-menu>\n    <h1 class=\"center\">Admin</h1>\n  </div>\n\n  <section>\n    <article >\n      <div *ngFor=\"let user of users\">\n        <div><strong>{{ user.user.name }}</strong></div>\n        <div><a href=\"{{origin}}#/?userId={{user.user.id}}\"><pre>{{origin}}#/?userId={{user.user.id}}</pre></a></div>\n        <pre>{{ user.mots | json}}</pre>\n      </div>\n    </article>\n\n    <div class=\"bottom\">\n      <button type=\"button\" (click)=\"memoryService.clear()\">CLEAR</button>\n    </div>\n\n  </section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__memory_service__ = __webpack_require__("../../../../../src/app/memory.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fragment_service__ = __webpack_require__("../../../../../src/app/fragment.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminComponent = (function () {
    function AdminComponent(memoryService, fragmentService) {
        this.memoryService = memoryService;
        this.fragmentService = fragmentService;
        this.defaultPeople = [
            { name: 'CONTREMAITRE', value: '☯' },
            { name: 'SOLDAT', value: '♞' },
            { name: 'AGENT', value: '☂' },
            { name: 'JOURNALISTE', value: '★' },
            { name: 'ERUDIT', value: '☀' },
            { name: 'MONSTRE', value: '❤' },
            { name: 'TELE', value: '☢' },
            { name: 'VOYANTE', value: '☎' },
            { name: 'CHEF', value: '⚐' },
            { name: 'ESCLAVE', value: '⚓' },
            { name: 'FLIC', value: '♬' },
            { name: 'SUPERIEUR', value: '☘' }
        ];
        this.users = [];
        this.origin = window.location.origin;
        var users = {};
        for (var i = 0; i < fragmentService.fragments.length; ++i) {
            var f = fragmentService.fragments[i];
            users[f.user.name] = {
                w: f.words[0].concat(users[f.user.name] != null ? users[f.user.name].w : []),
                u: f.user
            };
        }
        var _loop_1 = function (name) {
            if (users.hasOwnProperty(name)) {
                this_1.users.push({
                    user: users[name].u,
                    mots: users[name].w.filter(function (v, index) { return users[name].w.indexOf(v) === index; })
                });
            }
        };
        var this_1 = this;
        for (var name in users) {
            _loop_1(name);
        }
    }
    return AdminComponent;
}());
AdminComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-admin',
        template: __webpack_require__("../../../../../src/app/admin.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__memory_service__["a" /* MemoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__memory_service__["a" /* MemoryService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__fragment_service__["a" /* FragmentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__fragment_service__["a" /* FragmentService */]) === "function" && _b || Object])
], AdminComponent);

var _a, _b;
//# sourceMappingURL=admin.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(route) {
        route.queryParamMap
            .filter(function (m) { return m.has('userId'); })
            .map(function (m) { return m.get('userId'); })
            .subscribe(function (userId) { return localStorage.setItem('userId', userId); });
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: "\n   <router-outlet></router-outlet>\n "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_component__ = __webpack_require__("../../../../../src/app/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__fragment_component__ = __webpack_require__("../../../../../src/app/fragment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__memories_component__ = __webpack_require__("../../../../../src/app/memories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__menu_component__ = __webpack_require__("../../../../../src/app/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__people_component__ = __webpack_require__("../../../../../src/app/people.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__admin_component__ = __webpack_require__("../../../../../src/app/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__tele_component__ = __webpack_require__("../../../../../src/app/tele.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__replace_pipe__ = __webpack_require__("../../../../../src/app/replace.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__search_service__ = __webpack_require__("../../../../../src/app/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__fragment_service__ = __webpack_require__("../../../../../src/app/fragment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__users_service__ = __webpack_require__("../../../../../src/app/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__memory_service__ = __webpack_require__("../../../../../src/app/memory.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__memories_component__["a" /* MemoryComponent */],
            __WEBPACK_IMPORTED_MODULE_5__search_component__["a" /* SearchComponent */],
            __WEBPACK_IMPORTED_MODULE_6__fragment_component__["a" /* FragmentComponent */],
            __WEBPACK_IMPORTED_MODULE_8__menu_component__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_9__people_component__["a" /* PeopleComponent */],
            __WEBPACK_IMPORTED_MODULE_10__admin_component__["a" /* AdminComponent */],
            __WEBPACK_IMPORTED_MODULE_11__tele_component__["a" /* TeleComponent */],
            __WEBPACK_IMPORTED_MODULE_12__replace_pipe__["a" /* ReplacePipe */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot([{
                    path: '',
                    component: __WEBPACK_IMPORTED_MODULE_7__memories_component__["a" /* MemoryComponent */]
                }, {
                    path: 'memory',
                    component: __WEBPACK_IMPORTED_MODULE_7__memories_component__["a" /* MemoryComponent */]
                }, {
                    path: 'search',
                    component: __WEBPACK_IMPORTED_MODULE_5__search_component__["a" /* SearchComponent */]
                }, {
                    path: 'fragment/:id',
                    component: __WEBPACK_IMPORTED_MODULE_6__fragment_component__["a" /* FragmentComponent */]
                }, {
                    path: 'people',
                    component: __WEBPACK_IMPORTED_MODULE_9__people_component__["a" /* PeopleComponent */]
                }, {
                    path: 'admin',
                    component: __WEBPACK_IMPORTED_MODULE_10__admin_component__["a" /* AdminComponent */]
                }, {
                    path: 'tele',
                    component: __WEBPACK_IMPORTED_MODULE_11__tele_component__["a" /* TeleComponent */]
                }], { useHash: true }),
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_13__search_service__["a" /* SearchService */],
            __WEBPACK_IMPORTED_MODULE_14__fragment_service__["a" /* FragmentService */],
            __WEBPACK_IMPORTED_MODULE_15__users_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_16__memory_service__["a" /* MemoryService */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/fragment.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"fragment main\">\n  <div class=\"header\">\n    <app-menu></app-menu>\n    <h1 class=\"center\">Un souvenir vous reviens ...</h1>\n  </div>\n\n  <section>\n    <article class=\"mem\">\n      <div class=\"mem-title\" [innerHTML]=\"fragment.title\"></div>\n      <div class=\"mem-body\" [innerHTML]=\"fragment.details\"></div>\n    </article>\n\n    <a class=\"button memory-bg\" href=\"#/memory\">Ma mémoire</a>\n  </section>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/fragment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FragmentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fragment_service__ = __webpack_require__("../../../../../src/app/fragment.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FragmentComponent = (function () {
    function FragmentComponent(route, fragmentService) {
        this.route = route;
        this.fragmentService = fragmentService;
    }
    FragmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .map(function (params) { return _this.fragmentService.getById(params.get('id')); })
            .subscribe(function (f) { return _this.fragment = f; });
    };
    return FragmentComponent;
}());
FragmentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-fragment',
        template: __webpack_require__("../../../../../src/app/fragment.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__fragment_service__["a" /* FragmentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__fragment_service__["a" /* FragmentService */]) === "function" && _b || Object])
], FragmentComponent);

var _a, _b;
//# sourceMappingURL=fragment.component.js.map

/***/ }),

/***/ "../../../../../src/app/fragment.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Fragment */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FragmentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__users_service__ = __webpack_require__("../../../../../src/app/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_md5__ = __webpack_require__("../../../../md5/md5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_md5__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Fragment = (function () {
    function Fragment(user, w1, title, details, order, word2) {
        if (order === void 0) { order = 0; }
        if (word2 === void 0) { word2 = null; }
        this.user = user;
        this.title = title;
        this.details = details;
        this.order = order;
        this.word2 = word2;
        this.isOpened = false;
        this.words = [w1];
        this.id = __WEBPACK_IMPORTED_MODULE_2_md5__(w1[0] + order + user.name);
    }
    return Fragment;
}());

var FragmentService = (function () {
    function FragmentService(userService) {
        /* tslint:disable */
        this.fragments = [];
        // WARNING: <p>internat, convoqué voyante missing</p>
        this.fragments.push(new Fragment(userService.chef, ["diamant", "diamants", "diament", "diaments"], "Afrique du sud, Mine de diamant - 1919 - Promenade", "<p>Je marche tranquillement aux abords de ma <strong class=\"mc\">mine&nbsp;\u00E0 ciel ouvert. Il fait extr\u00EAmement chaud, je ne sais pas si j\u2019ai choisi le bon moment pour me promener.</p>\n", 1));
        this.fragments.push(new Fragment(userService.chef, ["caillou", "pierre"], "Afrique du sud, Mine de diamant - 1919 - Aggression", "<p>J\u2019entend des cris diffus, je me mets \u00E0 trottiner pour aller voir ce qu\u2019il se passe. En arrivant sur le surplomb je vois <strong class=\"people\">CONTREMAITRE en train de frapper un <strong class=\"mc\">mineur&nbsp;noir (<strong class=\"people\">ESCLAVE). Ce dernier g\u00EEt dans une marre de <strong class=\"mc\">sang.</p>\n<p>Je commence \u00E0 descendre prudemment la pente pour intervenir quand un autre <strong class=\"mc\">mineur&nbsp;(<strong class=\"people\">SOLDAT) arrive en courant et envoie <strong class=\"people\">CONTREMAITRE au sol.</p>\n<p>Je continue ma descente alors que <strong class=\"people\">SOLDAT aide <strong class=\"people\">ESCLAVE \u00E0 se relever.</p>\n<p>Arriv\u00E9 sur un surplomb au dessus de la sc\u00E8ne, je cris &nbsp;:</p>\n<p>\u201C- Quel est votre nom ?\u201D</p>\n", 2));
        this.fragments.push(new Fragment(userService.chef, ["mine"], "Afrique du sud, Mine de diamant - 1919 - Maurice", "<p>\u00C7a toque \u00E0 la porte puis <strong class=\"people\">SOLDAT arrive dans le bureau, le poignet band\u00E9. Je lui indique le fauteuil en face de moi et il s\u2019assoit.</p>\n<p>\u201C- <strong class=\"mc\">Maurice, savez-vous ce que vous risquez \u00E0 frapper un de mes contrema\u00EEtre ?\u201D</p>\n<p>\u201C- Oui \u2026\u201D</p>\n<p>\u201C- Vous avez fait preuve de courage, j\u2019ai assist\u00E9 \u00E0 votre intervention et vous avez bien fait. Ce contrema\u00EEtre n\u2019a pas \u00E0 battre mes employ\u00E9s \u00E0 mort sous pr\u00E9texte qu\u2019ils sont noirs.\u201D</p>\n<p>\u201C- Euh \u2026 merci \u2026\u201D</p>\n<p>\u201C- Vous semblez savoir bien vous battre. Vous avez fait la guerre ?\u201D</p>\n<p>\u201C- Oui, j\u2019\u00E9tais artificier. J\u2019ai combattu \u00E0 <strong class=\"mc\">verdun&nbsp;et j\u2019ai re\u00E7u la croix de guerre. Apr\u00E8s la guerre j\u2019ai d\u00E9cid\u00E9 de venir en <strong class=\"mc\">Afrique du Sud mais ce n\u2019est pas si facile de trouver un boulot. Je suis plut\u00F4t chanceux de travailler dans votre <strong class=\"mc\">mine.\u201D</p>\n<p>Je le regarde. Dans quel monde nous nous trouvons pour qu\u2019un heros de guerre, avec des valeurs, se retrouve <strong class=\"mc\">mineur\u2026 Je lui dit :</p>\n<p>\u201C- Vous n\u2019\u00EAtes pas fait pour \u00EAtre <strong class=\"mc\">mineur, que diriez vous de devenir mon majordome ? J\u2019ai pas mal de t\u00E2che \u00E0 vous confier.\u201D</p>\n", 3, ["sang"]));
        this.fragments.push(new Fragment(userService.chef, ["maria"], "Zurich, Entrep\u00F4t en banlieu - 1927 ", "<p>Un l\u00E9ger bruit, la porte s'entrouvre et une lueur de lanterne projette des ombres dans la p\u00E9nombre de l'entrep\u00F4t. Je jubile, apr\u00E8s tant de temps mon investigation va porter ses fruits.</p>\n<p>\u201C- \u00E7a y est, on les tient !\u201D je chuchote</p>\n<p>\u201C- ils sont en avance on dirait\u201D r\u00E9pond <strong class=\"people\">SOLDAT</p>\n<p>La lanterne s\u2019avance dans l'entrep\u00F4t, aucun bruit de pas ne semble provenir de son porteur. J\u2019esp\u00E8re qu\u2019il ne seront pas arm\u00E9, je pr\u00E9f\u00E8rerais r\u00E9soudre \u00E7a pacifiquement.</p>\n<p>Je r\u00E9alise que la lanterne vient droit vers notre planque. <strong class=\"people\">SOLDAT semble aussi l\u2019avoir remarqu\u00E9 et je le sens tendu. Je pose ma main sur son bras pour \u00E9viter qu\u2019il brandisse son fusil. Pas tout de suite.</p>\n<p>\u201C- attends encore un peu\u201D je suis murmure \u00E0 l\u2019oreille.</p>\n<p>La lumi\u00E8re arr\u00EAte de bouger \u00E0 quelque m\u00E8tres devant nous et j'aper\u00E7ois 2 yeux brillants l\u00E9g\u00E8rement au dessus.</p>\n<p>Soudain un rire f\u00E9minin r\u00E9sonne dans l'entrep\u00F4t.</p>\n<p>\u201C- si vous voulez les voir, vous ne regardez pas dans la bonne direction messieurs <strong class=\"mc\">Pollack et Genevoix !\u201D dit la forme</p>\n<p>Je suis atterr\u00E9. Nous avons donc \u00E9t\u00E9 d\u00E9masqu\u00E9 et traqu\u00E9s. Pris \u00E0 notre propre pi\u00E8ge \u2026 Mais je veux savoir la v\u00E9rit\u00E9. Je me l\u00E8ve et m\u2019avance vers la dame. Je le suis et j'aper\u00E7ois pour la 1er fois, dans la lueur de la lampe, le beau visage de <strong class=\"people\">AGENT. Elle est magnifique et m\u00E9langer une fragilit\u00E9 et une pr\u00E9sence.</p>\n<p>\u201C- Qui \u00EAtes vous ?\u201C Je lui demande doucement</p>\n<p>\u201C- Peu importe. Mais je dois dire que je suis impressionn\u00E9 par votre travaille d\u2019enqu\u00EAte. Sans vous pister je ne crois pas que j\u2019aurais pu trouver le <strong class=\"mc\">portail seule. Mais il est temps d\u2019intervenir, vous allez avoir besoin de mon aide.\u201D</p>\n<p>Elle n\u2019est donc pas notre ennemie. Mais tout ce semble myst\u00E9rieux. Je ne vois pas de <strong class=\"mc\">portail. Je lui demande :</p>\n<p>\u201C- De quoi parlez vous ? Qu\u2019est-ce que vient faire ici cette histoire de <strong class=\"mc\">portail ? Vous aussi vous enqu\u00EAtez sur la fili\u00E8re clandestine d\u2019importation de <strong class=\"mc\">diamant. La transaction devrait avoir lieu ici d\u2019un moment \u00E0 l\u2019autre ! D'ailleurs \u00E9teignez cette lumi\u00E8re et venez vous cacher avec nous !</p>\n<p>\u201C- Oh, me cacher comme une humaine ... pourquoi pas\u201D l\u00E2cha t-elle avec un petit rire s\u00E9duisant \u201Dlaissez moi juste r\u00E9gler un \u201Cd\u00E9tail\u201D, il reste encore 15 bonnes minute avant leur arriv\u00E9e.\u201D</p>\n<p><strong class=\"people\">AGENT marche tranquillement vers le mur oppos\u00E9 \u00E0 la porte de l'entrep\u00F4t posa un sac en toile sous une table pr\u00E8s d\u2019un bassin remplis d\u2019eau croupi et de tas de d\u00E9tritus. Elle recouvre le sac d\u2019un vieux carton qui tra\u00EEnait et revient vers nous avec toujours autant d\u2019\u00E9nergie. <strong class=\"people\">SOLDAT demande :</p>\n<p>\u201C- qu\u2019est ce que c\u2019est ?\u201D</p>\n<p>\u201C- oh, vous les verrez bien assez vite. Venez vous planquer ici\u201D dit elle en indiquant un recoin en vu du carton.</p>\n<p>Nous nous installons et <strong class=\"people\">AGENT \u00E9teint sa lampe. Le silence revient, seuls les rats vient parfois le perturber. L\u2019obscurit\u00E9 s\u2019\u00E9claircit \u00E0 mesure que mes pupilles se remettent de l\u2019\u00E9claire de la lanterne, mon regard se p\u00E8re des les superbeux yeux de <strong class=\"people\">AGENT. Sa beaut\u00E9, son assurance en ce lieu et ses yeux qui brillent encore l\u00E9g\u00E8rement \u2026 Et comment nous a t elle trouv\u00E9. Je me suis plant\u00E9 sur toute la ligne ? Au moment ou je vais commencer \u00E0 parler, <strong class=\"people\">AGENT prend la parole et me dit :</p>\n<p>\u201C- votre analyse \u00E9tait vraiment bonne, Harry. Il y a bien une source croissante de <strong class=\"mc\">diamant inject\u00E9 sur le march\u00E9. Cette source vient bien de <strong class=\"mc\">Zurich&nbsp;et plus particuli\u00E8rement cet entrep\u00F4t, mais vous vous trompez sur la source r\u00E9el, ces <strong class=\"mc\">diamants ne viennent pas d\u2019une <strong class=\"mc\">mine concurrente. En fait ils ne viennent pas de ce <strong class=\"mc\">plan \u2026 mais d\u2019un autre <strong class=\"mc\">plan. Les Hadinos perturbe l\u2019\u00E9conomie terrienne en totale violation des trait\u00E9s de neutralit\u00E9 de ce <strong class=\"mc\">plan. Bref, il fallait agir et vous tombez bien.\u201D</p>\n<p>Elle s'arr\u00EAte, regarde le carton attentivement et regarde <strong class=\"people\">SOLDAT :</p>\n<p>\u201C- Ils vont arriver, vous pouvez me rendre un service ?\u201D</p>\n<p>\u201C- Heu, je suppose\u201D r\u00E9pond-il</p>\n<p>Elle sort un petit boitier de sa poche et je ne peux pas m'emp\u00EAcher d\u2019\u00E9prouver une pointe de jalousie quand elle le passe \u00E0 <strong class=\"people\">SOLDAT. Elle lui dit :</p>\n<p>\u201C- Prenez \u00E7a. Quand ils seront rentr\u00E9s, tous les 3, appuyez sur le bouton.\u201D</p>\n<p><strong class=\"people\">SOLDAT prend l'objet pr\u00E9cautionneusement puis nous reportons notre attention vers le carton. 30 secondes plus tard, un flash blanc laisse place \u00E0 une sorte de voile iris\u00E9 &nbsp;circulaire \u00E0 2 m\u00E8tre du carton. 3 cr\u00E9atures plates et translucide en sort.</p>\n<p>Soudain une \u00E9norme <strong class=\"mc\">explosion.</p>\n<p>Je me r\u00E9veille dans les bras dans <strong class=\"people\">SOLDAT. Je n\u2019ai pas d\u00FB perdre connaissance longtemps. <strong class=\"people\">AGENT s\u2019avance vers le nuage de poussi\u00E8re en allumant sa lampe.</p>\n<p><strong class=\"people\">SOLDAT m\u2019aide \u00E0 me lever et nous suivons <strong class=\"people\">AGENT.</p>\n<p>La poussi\u00E8re retombe peu \u00E0 peu. Le <strong class=\"mc\">portail a disparu. Les 3 cr\u00E9atures ont pris de la hauteur, des membres sont apparus et ils commencent \u00E0 ressembler \u00E0 des humano\u00EFdes.</p>\n<p><strong class=\"people\">AGENT engage la conversation avec eux dans une langue inconnue. Apr\u00E8s quelques minutes de conversation aux intonations \u00E9tonnantes, <strong class=\"people\">AGENT se tourne vers nous et dit</p>\n<p>\u201C- F\u00E9licitation messieurs, vous venez d'arr\u00EAter vos premiers planaires !</p>\n", 4));
        this.fragments.push(new Fragment(userService.chef, ["kagana"], "Londres, Colloque d\u2019arch\u00E9ologie - 1929", "<p>C\u2019est tout simplement fabuleux ! Cette femme (<strong class=\"people\">ERUDIT) a non seulement mis la main sur un texte planaire mais elle a en plus r\u00E9ussi \u00E0 le traduire partiellement avec une seule page !</p>\n<p>Je continue \u00E0 \u00E9couter la conf\u00E9rence, elle semble avoir remarqu\u00E9 que son auditoire ne la prenait pas au s\u00E9rieux vu son air d\u00E9pit\u00E9. Je l\u2019a trouve mignonne d\u2019ailleurs. Tiens, <strong class=\"people\">SOLDAT n\u2019a pas r\u00E9ussi \u00E0 camoufler son sommeil bien longtemps.</p>\n<p>La conf\u00E9rence se termine, les applaudissements sont timides. Je me l\u00E8ve et descend vers l\u2019estrade pour aller parler \u00E0 <strong class=\"people\">ERUDIT avant qu\u2019elle s\u2019en aille.</p>\n<p>Arriv\u00E9 au pied de l\u2019estrade je jette un oeil derri\u00E8re moi. C\u2019est bon, <strong class=\"people\">SOLDAT m\u2019a suivi et tout le monde se dirige bien vers la sortie, pas question qu\u2019on nous entend parler de planaires ici. Je m\u2019avance prudement vers <strong class=\"people\">ERUDIT et l\u2019aborde :</p>\n<p>\u201C- Mademoiselle Broom, bravo pour votre expos\u00E9, votre analyse linguistique de ce document est remarquable !\u201D</p>\n<p><strong class=\"people\">ERUDIT l\u00E8ve la t\u00EAte et me fixe quelques instant, l\u2019air intrigu\u00E9 :</p>\n<p>\u201C- vous vous moquez de moi, vous aussi ?\u201C</p>\n<p>\u201C- non, pas le moins de monde mademoiselle. Mais je crois que votre auditoire n\u2019\u00E9tait pas pr\u00EAt \u00E0 recevoir votre message et je crois que vous \u00EAtre pass\u00E9 pour une mystique.\u201D</p>\n<p><strong class=\"people\">ERUDIT grima\u00E7e. Je la coupe avant qu\u2019elle ne se fache :</p>\n<p>\u201C- ce document en <strong class=\"mc\">Kagana, comme vous l\u2019appelez, est-ce le seul que vous poss\u00E9dez ? O\u00F9 l\u2019avez vous trouv\u00E9 ?\u201D</p>\n<p>\u201C- hum, c\u2019est compliqu\u00E9 \u2026 Et pourquoi je devrais vous faire confiance ?\u201D</p>\n<p>Je lui sourit et cherche le carnet \u00E9crit en planaire planaire dans ma sacoche et je lui tend. Celle-ci le pris, et le parcours, de plus en plus fr\u00E9n\u00E9tiquement alors que son visage transpire l\u2019\u00E9merveillement.</p>\n<p>\u201C- c\u2019est fabuleux, c\u2019est &nbsp;un livre entier en <strong class=\"mc\">Kagana !</p>\n<p>\u201C- pensez-vous <strong class=\"mc\">pouvoir m\u2019aider \u00E0 le traduire ?\u201D</p>\n<p>\u201C- vu le nombre de page, \u00E7a devrait devenir bien plus facile de d\u00E9duire la grammaire qu\u2019avec ma page ! Il me faudra un peu de temps ... mais oui ! Ou l\u2019avez-vous trouv\u00E9 ?\u201D</p>\n<p>J\u2019entend du bruit derri\u00E8re moi. La salle commence \u00E0 se remplir pour la prochaine conf\u00E9rence. Je r\u00E9pond \u00E0 <strong class=\"people\">ERUDIT :</p>\n<p>\u201C- la prochain conf\u00E9rence ne va pas tarder \u00E0 commencer, cela vous dirait d\u2019aller prendre un caf\u00E9 pour parler de tout \u00E7a ?\u201D</p>\n", 5));
        this.fragments.push(new Fragment(userService.chef, ["portail", "portaille", "porteil"], "Afrique du sud, Site de fouille - Ao\u00FBt 1931 - Ravitaillement", "<p>Je rentre dans la <strong class=\"mc\">grotte&nbsp;\u00E9clair\u00E9e par quelques projecteurs. Comme d\u2019habitude <strong class=\"people\">ERUDIT est assise au sol devant le mur ouest, en train de griffoner sur son cahier. En m\u2019approchant, je m'aper\u00E7ois que certains glyphes&nbsp;grav\u00E9s dans la parois brillent.</p>\n<p><strong class=\"people\">ERUDIT a d\u00FB m\u2019entendre puisque quelle se met \u00E0 parler :</p>\n<p>\u201C- Comme je m\u2019y attendais, ce ne sont pas des simples \u00E9crits. Il s\u2019agit bien de textes planaires. Du <strong class=\"mc\">plan des 5 lunes je pense. J\u2019ai r\u00E9ussi \u00E0 d\u00E9bloquer la premi\u00E8re s\u00E9curit\u00E9 et j\u2019ai acc\u00E8s \u00E0 bien plus d\u2019informations. Ce mur n\u2019est que la couverture d\u2019un livre. C\u2019est \u00E9trange je re\u00E7ois une partie de l\u2019informations directement dans ma t\u00EAte sous forme de couleurs et de sons \u00E9trange.\u201D</p>\n", 6));
        this.fragments.push(new Fragment(userService.chef, ["bague", "anneaux", "bagues"], "Afrique du sud, Site de fouille - Ao\u00FBt 1931 - Bague", "<p>Je pose le panier sur la petite table au centre de la <strong class=\"mc\">grotte et demande :</p>\n<p>\u201C- Et tu arrives \u00E0 d\u00E9coder des choses ? Tu as trouv\u00E9 le moyen de cr\u00E9er des portails ?\u201D</p>\n<p>Elle se l\u00E8ve, se retourne et s\u2019approche de moi en souriant. Elle m\u2019embrasse puis s\u2019assoit \u00E0 table.</p>\n<p>\u201C- Non, mais, il y a des informations tr\u00E8s int\u00E9ressantes sur les textes magiques. Apparemment certains livres peuvent voir leur contenu d\u00E9pendre du lien entre les plans. Si le lien est coup\u00E9, le livre peut perdre une partie de son essence.\u201D</p>\n<p>\u201C- Oh ! \u201C Je r\u00E9pond. \u201CTu penses que \u00E7a peut expliquer les livres incoh\u00E9rents que je te ram\u00E8nes de <strong class=\"mc\">mission ?\u201D</p>\n<p>\u201C- Oui, je pense que c\u2019est la cause. La prochaine fois j\u2019aimerais t\u2019accompagner \u00E0 une <strong class=\"mc\">mission d\u2019<strong class=\"mc\">infiltration&nbsp;pour essayer de traduire des documents avant que le <strong class=\"mc\">portail soit d\u00E9truit et le lien soit coup\u00E9.\u201D</p>\n<p>Nous mangeons en discutant. \u00C0 la fin du repas, je sors la petite boite contenant l\u2019alliance et je la pose devant <strong class=\"people\">ERUDIT. Elle ne dit rien, et se contente de m\u2019embrasser.</p>\n", 7));
        this.fragments.push(new Fragment(userService.chef, ["mariage", "marriage"], "France, Eglise - Mai 1932", "<p><strong class=\"people\">ERUDIT s\u2019avance vers moi au bras de <strong class=\"people\">SOLDAT. Elle a perdu son p\u00E8re et elle lui a demand\u00E9 \u00E0 <strong class=\"people\">SOLDAT de la conduire \u00E0 moi devant l\u2019autel. Elle est vraiment belle dans cette robe. J\u2019esp\u00E8re que <strong class=\"people\">SOLDAT aura pens\u00E9 aux alliances. Vu son regard, je crois qu\u2019il a devin\u00E9 \u00E0 quoi je pense.</p>\n", 8));
        this.fragments.push(new Fragment(userService.chef, ["dahona"], "Paris, Bords de Seine - 27 septembre 1936", "<p>J\u2019arrive au lieu de rendez vous. Il fait nuit et je ne vois personne. Soudain, j\u2019entend une pr\u00E9sence dans ma t\u00EAte. Je sens des instructions, je me tourne \u00E0 gauche, je vois un <strong class=\"mc\">portail contre le mur. On me demande de l\u2019emprunter, je m'ex\u00E9cute.</p>\n<p>J\u2019ai d\u00E9j\u00E0 eu l\u2019occasion de traverser quelques portails mais il est difficile de s\u2019y habituer. L\u2019impression de se r\u00E9veiller avec le sentiment que l\u2019on a jamais exist\u00E9 avant, les oreilles qui font mal ou qui se d\u00E9bouche, le froid ou la chaleur qui survient.</p>\n<p>Apr\u00E8s quelques seconde je me rend compte que je suis dans un bureau, une forme est derri\u00E8re. Mon contact je suppose. Je m\u2019assois en face de lui et dit :</p>\n<p>\u201C- Bonsoir, j\u2019ai bien re\u00E7u votre proposition de <strong class=\"mc\">mission, que se passe t-il pour prendre de tel risque pour se rencontrer plut\u00F4t que passer par les moyens traditionnels ?\u201D</p>\n<p>La cr\u00E9ature m\u2019observe puis prend la parole :\u201D</p>\n<p>\u201C- La <strong class=\"mc\">mission que j\u2019ai \u00E0 vous confier est urgente et difficile. Mais je n\u2019ai personne d\u2019autre sous la main et vous connaissez les r\u00E8gles de neutralit\u00E9 ?\u201D</p>\n<p>\u201C- Oui, les planaires ne doivent pas intervenir sur Terre. Enfin, pas directement\u201D</p>\n<p>\u201C- Exactement, les <strong class=\"mc\">Dahona sont install\u00E9s depuis quelques ann\u00E9es au ch\u00E2teaux de <strong class=\"mc\">Martinvast, en France. Pendant longtemps ils se tenaient \u00E0 la limite des r\u00E8gles et ont form\u00E9 un vaste r\u00E9seau d'influence. Nos informations nous ont livr\u00E9s des indices qui portent \u00E0 croire que tout \u00E9tait pr\u00E9m\u00E9dit\u00E9 et qu\u2019ils s'appr\u00EAte \u00E0 commettre un <strong class=\"mc\">attentat.\u201D</p>\n<p>Le briefing continue pendant plusieurs heures. La <strong class=\"mc\">mission sera presque suicidaire, tout probl\u00E8me conduira \u00E0 la mort du <strong class=\"mc\">commando. Une fois rentr\u00E9 dans le ch\u00E2teau, avec une bombe et la <strong class=\"mc\">m\u00E9moire effac\u00E9, nous devons placer la bombe et l\u2019a faire exploser \u00E0 une heure pr\u00E9cise. Le but est de casser le lien entre le moment de l\u2019ouverture du <strong class=\"mc\">portail et la venu du roi des <strong class=\"mc\">Dahona. Les d\u00E9tails s\u2019accumule, certains m\u2019arrivent directement par la pens\u00E9e. Parfois mon contact semble paniqu\u00E9, ce n\u2019est pas rassurant.</p>\n<p>Le briefing prend fin. Mon contact me remercie et me dit qu\u2019il me contactera pour donner les derniers d\u00E9tails. Un <strong class=\"mc\">portail de retour s\u2019ouvre, je l\u2019emprunte.</p>\n", 9, ["pouvoir"]));
        this.fragments.push(new Fragment(userService.chef, ["roberta", "pollack"], "Versailles, Jardin - 28 septembre 1936 - Arriv\u00E9e", "<p>\u201C- Il est l\u00E0\u201D dit <strong class=\"people\">ERUDIT</p>\n<p>Je me retourne et je vois <strong class=\"people\">SOLDAT que arrive enfin pour la r\u00E9union. J\u2019attend qu\u2019il s\u2019approche et je commence :</p>\n<p>\u201C- comme vous vous en doutez, on a une nouvelle <strong class=\"mc\">mission. Mais celle l\u00E0 a l\u2019air particuli\u00E8rement d\u00E9licate est dangereuse.\u201D</p>\n<p>\u201C- Vous \u00E9tiez donc \u00E0 nouveau aupr\u00E8s d\u2019un contact hier ? C\u2019\u00E9tait elle ?\u201D me demande <strong class=\"people\">SOLDAT</p>\n<p>\u201C- Non, ce n\u2019\u00E9tait pas elle. Des <strong class=\"mc\">Psyche\u00EFdes&nbsp;je crois. Ils sont en panique et on a juste 1 mois pour se pr\u00E9parer.\u201D</p>\n", 10, ["mission"]));
        this.fragments.push(new Fragment(userService.chef, ["commando", "comando"], "Versailles, Jardin - 28 septembre 1936 - Dahona", "<p>Je me tourne vers <strong class=\"people\">ERUDIT et demande :</p>\n<p>\u201C- Les <strong class=\"mc\">Dahona, \u00E7a te parle ?\u201D</p>\n<p>\u201C- Oui, mais je n\u2019ai pas lu beaucoup de d\u00E9tail sur eux. Ils sont un peu comme nos ogres dans nos histoires pour enfants j\u2019ai l\u2019impression. Il y a un certain tabou \u00E0 leur propos. Ils existent vraiment ?\u201D</p>\n<p>\u201C- Apriori, et il semblent qu\u2019ils aient fait un lien vers notre <strong class=\"mc\">plan, au ch\u00E2teau de <strong class=\"mc\">Martinvast. Ils planifierait un <strong class=\"mc\">attentat \u00E0 l\u2019occasion d\u2019un <strong class=\"mc\">mariage le 28 octobre, en violation de tous les trait\u00E9s de neutralit\u00E9. Et il y aurait pas mal de notable et c\u00E9l\u00E9brit\u00E9 humaines.. Mon contact a subtilement \u00E9vit\u00E9 ma question sur le genre d\u2019<strong class=\"mc\">attentat que les <strong class=\"mc\">Dahona pensent faire. \u201D</p>\n<p>\u201C- Bref, ils vont tous les tuer, d\u2019une mani\u00E8re ou d\u2019une autre, c\u2019est \u00E7a ?\u201D affirme <strong class=\"people\">SOLDAT conclus</p>\n<p>\u201C- On va supposer que c\u2019est \u00E7a.\u201D je r\u00E9pond.</p>\n<p><strong class=\"people\">ERUDIT demande :</p>\n<p>\u201C- Et il ne suffit pas de faire sauter le <strong class=\"mc\">portail, comme d\u2019habitude ?\u201D</p>\n<p>\u201C- Oui et non, apparement le ch\u00E2teaux et particuli\u00E8rement prot\u00E9g\u00E9 et les <strong class=\"mc\">Dahona se montrent prudent. Les <strong class=\"mc\">Dahona ouvrent le <strong class=\"mc\">portail avec une tr\u00E8s grande mod\u00E9ration. Ils se sont install\u00E9 avec beaucoup de discr\u00E9tion. Ils sont actuellement absent mais pr\u00E9voient d\u2019ouvrir le <strong class=\"mc\">portail pour revenir juste avant la c\u00E9r\u00E9monie. \u00C7a sera la seul opportunit\u00E9.\u201D</p>\n<p><strong class=\"people\">SOLDAT ajoute :</p>\n<p>\u201C- Vu qu\u2019il y aura surement des civils ou innocents dans le coin, je suppose que je devrais pr\u00E9parer une bombe de puissance mod\u00E9r\u00E9e, pour d\u00E9truire le lien sans d\u00E9truire tout le ch\u00E2teau...\u201D</p>\n<p>\u201C- bien vu, \u00E7a veut dire qu\u2019il faudra se montrer pr\u00E9cis sur la localisation du <strong class=\"mc\">portail, on ne peut pas se permettre de le louper\u201D ajoute <strong class=\"people\">ERUDIT</p>\n<p>J\u2019ajoute :</p>\n<p>\u201C- &nbsp;Oui, et autant mon contact m\u2019a dit qu\u2019il devrait <strong class=\"mc\">pouvoir trouver l\u2019heure exacte d\u2019ouverture du <strong class=\"mc\">portail autant personne ne sait \u00E0 quoi il ressemblera et ou il arrivera.\u201D</p>\n<p>On arrive au fond du jardin. Je d\u00E9verrouille le cabanon qui nous sert de rep\u00E8re, et je reprend en entrant:</p>\n<p>\u201C- Pour la s\u00E9curit\u00E9, il y a 2 points g\u00EAnants. D\u2019abord il y a un champ statique autour du chateaux\u2026\u201D</p>\n<p>\u201C- donc on ne pourra pas faire t\u00E9l\u00E9porter d\u2019objet \u00E0 l\u2019int\u00E9rieur du ch\u00E2teau. Un <strong class=\"mc\">t\u00E9l\u00E9kin\u00E9siste pourrait t\u00E9l\u00E9porter la bombe s\u2019il est d\u00E9j\u00E0 \u00E0 l'int\u00E9rieur du champ statique.\u201D me coupe <strong class=\"people\">ERUDIT</p>\n<p>\u201C- oui, mais il faudra trouver un t\u00E9l\u00E9porteur humano\u00EFde, sinon il ne passera pas les portes du ch\u00E2teau.\u201D</p>\n<p>\u201C- Ah mince. Je suppose que \u00E7a existe mais il va falloir se bouger pour en trouver un \u00E0 temps.\u201D</p>\n<p>J\u2019ouvre la <strong class=\"mc\">trappe&nbsp;et je descend l'\u00E9chelle sous la <strong class=\"mc\">trappe. <strong class=\"people\">ERUDIT me suit et <strong class=\"people\">SOLDAT ferme la marche. Je nettois le tableau noir. Quand je me retourne, <strong class=\"people\">ERUDIT \u00E0 trouv\u00E9 un gros livre et <strong class=\"people\">SOLDAT nous a servis \u00E0 boire. Je reprend :</p>\n<p>\u201C- D\u2019autre part, mon contact m\u2019a dit qu\u2019il y aura des statues \u00E0 l\u2019entr\u00E9e.\u201D</p>\n<p>\u201C- Donc ce qui veut dire qu\u2019on sera d\u00E9couvert d\u00E8s que l\u2019un de nous rentre dans ce chateaux\u201D dit <strong class=\"people\">ERUDIT en m\u00E9ditant</p>\n<p>\u201C- Oui, mais mon contact m\u2019a dit qu\u2019il me fournirait quelqu\u2019un pour \u00E7a : il peut une potion pour provoquer une amn\u00E9sie temporaire. Ainsi les pens\u00E9es ne pourront plus nous trahir mais d\u2019un autre c\u00F4t\u00E9 on ne se souviendra plus de pourquoi on est l\u00E0 bas. La <strong class=\"mc\">m\u00E9moire nous reviendra petit \u00E0 petit, mais des d\u00E9clencheurs peuvent nous aider \u00E0 retrouver des parcelles sp\u00E9cifique de <strong class=\"mc\">m\u00E9moire. \u201D</p>\n<p>\u201C- On a qu\u2019a tout \u00E9crire et on arrivera bien fouiller nos poches sur place pour lire nos notes et r\u00E9activer nos souvenirs ...\u201D r\u00E9pond <strong class=\"people\">SOLDAT</p>\n<p>\u201C- Non, c\u2019est pas si simple.\u201D le coupe <strong class=\"people\">ERUDIT, le nez contre le grimoire aux caract\u00E8res incongrus \u201C \u00E9coutez : \u2018[...] les statues sont capables de capter des brides de pens\u00E9es quelque soit leur support, pour elle un livre ne diff\u00E8re pas d\u2019un cerveau [...]\u2019. Donc si on vient avec notre <strong class=\"mc\">plan dans la poche, \u00E7a sera exactement comme l\u2019avoir en t\u00EAte. Il va falloir tout camoufler dans des indices futiles et d\u00E9coder l\u2019ensemble sur place.\u201D</p>\n", 11, ["pouvoir"]));
        this.fragments.push(new Fragment(userService.chef, ["codex"], "Versailles, Jardin - 28 septembre 1936 - Le plan", "<p>Tout notion d\u2019heure a disparu, je n\u2019ai plus aucune id\u00E9e de combien de temps nous travaillons au rep\u00E8re. Le <strong class=\"mc\">plan prend forme au tableau. Il est temps de faire une synth\u00E8se :</p>\n<p>\u201C- Bon, je r\u00E9sume. On trouve des invitations pour le <strong class=\"mc\">mariage et on y rentre comme invit\u00E9 en ayant oubli\u00E9 notre <strong class=\"mc\">m\u00E9moire. On arrive en avance, on devrait nous faire patienter dans un petit salon. <strong class=\"mc\">Maurice, tu auras une bombe avec toi, pr\u00E9programm\u00E9 \u00E0 la bonne heure, au cas ou on oublie. Sur place, il faudra localiser l\u2019emplacement ou le <strong class=\"mc\">portail va s\u2019ouvrir. <strong class=\"mc\">Roberta, tu es assez confiante sur le fait que sur place il y aura de la documentation sur leur <strong class=\"mc\">plan ?\u201D</p>\n<p>\u201C - Oui, quand des planaires s\u2019installent ils viennent habituellement avec leurs possessions, il est trop dangereux et co\u00FBteux de devoir ouvrir le <strong class=\"mc\">portail \u00E0 chaque fois qu\u2019ils on besoin d\u2019un livre ou d\u2019un objet quelconque.\u201D</p>\n<p>\u201C - Donc sur place, <strong class=\"mc\">Rina cherche les livres dans les pi\u00E8ces. Avec l\u2019aide du <strong class=\"mc\">plan, on les localise et le <strong class=\"mc\">t\u00E9l\u00E9kin\u00E9siste les r\u00E9cup\u00E8re. L\u00E0, on trouve les informations sur le <strong class=\"mc\">portail au plus vite. Tu es bien s\u00FBr qu\u2019elles y seront ?\u201D</p>\n<p>\u201C- Oui. C\u2019est vitale d\u2019avoir \u00E7a, sans les informations d\u2019ouverture de <strong class=\"mc\">portail tu prend le risque d\u2019\u00EAtre bloqu\u00E9 \u00E0 tout jamais si le lien se casse. Personne ne va sur un autre <strong class=\"mc\">plan sans un <strong class=\"mc\">codex&nbsp;d\u2019ouverture de <strong class=\"mc\">portail\u201D r\u00E9pond <strong class=\"people\">ERUDIT</p>\n<p>\u201C- Un fois qu\u2019on a trouv\u00E9 o\u00F9 sera le <strong class=\"mc\">portail, <strong class=\"mc\">Rina trouve l\u2019endroit et on t\u00E9l\u00E9porte la bombe l\u00E0 bas.\u201D</p>\n<p>\u201C- Oui, et je viens quand m\u00EAme. Si on ne trouve pas, \u00E7a peut \u00EAtre pas mal de <strong class=\"mc\">pouvoir d\u00E9samorcer la bombe.\u201D ajoute <strong class=\"people\">SOLDAT.</p>\n<p>Je continue :</p>\n<p>\u201C- Oui. Donc, <strong class=\"mc\">Roberta, tu t\u2019occupe de parler de cette <strong class=\"mc\">mission \u00E0 <strong class=\"mc\">Rina. <strong class=\"mc\">Maurice, tu pr\u00E9pare la bombe, il ne faut aucune \u00E9criture dessus ! Je vais arranger le transport et la logistique pour avoir un endroit ou se pr\u00E9parer avant le <strong class=\"mc\">mariage. Je connais le patron du <strong class=\"mc\">bar Mortebi\u00E8re&nbsp;\u00E0 Caen par exemple. En parall\u00E8le, tout le monde cherche \u2018discr\u00E8tement\u2019 un moyen d\u2019avoir les invitations au <strong class=\"mc\">mariage et le <strong class=\"mc\">plan du chateaux. Ah et bien sur, enqu\u00EAtez pour trouver un <strong class=\"mc\">t\u00E9l\u00E9kin\u00E9siste !\u201D</p>\n", 12, ["pouvoir"]));
        this.fragments.push(new Fragment(userService.chef, ["suzanne", "suzane"], "Versailles, Rep\u00E8re - 1936", "<p><strong class=\"people\">SOLDAT bricole dans le coin du rep\u00E8re. Je r\u00E8gle avec <strong class=\"people\">ERUDIT les derniers d\u00E9tails du <strong class=\"mc\">plan. Elle me dit :</p>\n<p>\u201C- C\u2019est bon, le contact de <strong class=\"mc\">Rina \u00E9tait fiable. On a notre <strong class=\"mc\">t\u00E9l\u00E9kin\u00E9siste, je lui ai demand\u00E9 d\u2019apprendre par coeur une formule pour r\u00E9cup\u00E9rer directement de livre de la biblioth\u00E8que.\u201D</p>\n<p>\u201C- Bien. Et c\u2019est bon pour la <strong class=\"mc\">journaliste ?\u201D</p>\n<p>\u201C- Oui, elle a bien travaill\u00E9. Elle m\u2019a envoy\u00E9 une \u00E9bauche de son <strong class=\"mc\">plan, elle a bien boss\u00E9.\u201D</p>\n<p>Tout semble bon. Je commence \u00E0 me d\u00E9tendre. <strong class=\"people\">ERUDIT ajoute :</p>\n<p>\u201C- Ah, et pour <strong class=\"mc\">Rina, tu devras l\u2019appeler <strong class=\"mc\">Suzanne. J\u2019ai aussi donn\u00E9 cette consigne \u00E0 <strong class=\"mc\">Rina et elle aura une grande cape pour ne pas \u00EAtre reconnue.\u201D</p>\n<p>\u201C- Bonne id\u00E9e, \u00E7a \u00E9vitera d\u2019avoir \u00E0 g\u00E9rer la surprise.\u201D</p>\n<p>La conversation se poursuit et d\u00E9rive. Alors qu\u2019on parle de botanique planaire, car on a le projet de faire pousser des plantes planaires dans la serre, <strong class=\"people\">SOLDAT pose une question. Je n\u2019ai pas tout suivi mais <strong class=\"people\">ERUDIT r\u00E9pond :</p>\n<p>\u201C - 15 et 53, \u00E7a irait ?\u201D</p>\n", 13));
        this.fragments.push(new Fragment(userService.chef, ["capsule", "bierre", "biere", "bouchon"], "Caen, Bar - Ce matin 8h - Arriv\u00E9e", "<p>Je ferme \u00E0 cl\u00E9 la porte du la petite salle au fond du <strong class=\"mc\">bar&nbsp;que j\u2019ai lou\u00E9 pour la journ\u00E9e. Nous devrions \u00EAtre tranquille. Je me retourne vers <strong class=\"people\">SOLDAT et je dis :</p>\n<p>\u201C- c\u2019est bon, on peut commencer. Les autres arrivent vers midi.\u201D</p>\n", 14));
        this.fragments.push(new Fragment(userService.chef, ["électronique", "electronique", "electronic", "éléctronique"], "Caen, Bar - Ce matin 8h - Pr\u00E9paration", "<p>Je me retourne, <strong class=\"people\">SOLDAT a d\u00E9j\u00E0 ouvert la <strong class=\"mc\">mallette contenant la bombe. Je ne me souviens pas de ce genre de design. Il y a beaucoup plus de fils que d\u2019habitude et aucun cadran. J\u2019ajoute:</p>\n<p>\u201C- oh, elle a l\u2019air assez diff\u00E9rente de d'habitude. C\u2019est donc \u00E7a que tu bricolais la semaine derni\u00E8re pendant que je parlais de jardinage avec <strong class=\"mc\">Roberta ?\u201D</p>\n<p>\u201C- oui, j\u2019ai vu avec elle qu\u2019il fallait \u00E9viter de faire un retardateur classique pour ne pas \u00E9veiller de soup\u00E7ons des statues. \u00C7a reste assez simple mais c\u2019est fait avec un peu d\u2019\u00E9lectronique. Les valeurs sont plus ou moins chiffr\u00E9 et il y a une s\u00E9curit\u00E9 pour rendre son d\u00E9samor\u00E7age pas trivial.\u201D</p>\n<p>\u201C- explique moi tout en d\u00E9tail, \u00E7a t\u2019aidera \u00E0 t\u2019en souvenir si il y a besoin d\u2019annuler sur place.\u201D</p>\n<p><strong class=\"people\">SOLDAT bidouille les fils et commence son explication.</p>\n<p>\u201C- il y a 16 fils, 10 sont utilis\u00E9s pour configurer le retardateur et les 6 autres sont les fils de commande. Globalement, si on connecte ou d\u00E9connecte les fils au hasard il ne se passera rien, \u00E7a ne l\u2019amorcera ou la d\u00E9samorce pas.\u201D</p>\n<p>\u201C- c\u2019est rassurant\u201D je r\u00E9pond, un peu perdu.</p>\n<p>Il continue son explication, me montre un dessin de <strong class=\"mc\">canard qui sert \u00E0 coder la bombe puis part dans des explications techniques.</p>\n<p>\u201C... a bombe s\u2019arme avec la valeur indiqu\u00E9 en minute par les fils de configuration.\u201D</p>\n<p>Je r\u00E9pond pour faire comme si j\u2019avais suivi :</p>\n<p>&nbsp;\u201C- Il vaut mieux \u00E9viter d\u2019avoir mis 1 minute par accident\u201D</p>\n<p>Il reprend. Je r\u00E9pond ponctuellement, je compte surtout sur plus pour se rappeler de ce qu\u2019il me dit. Puis \u00E0 un moment il demande :</p>\n<p>\u201C- tu as l\u2019heure d\u2019ouverture du <strong class=\"mc\">portail ?\u201D</p>\n<p>\u201C- oui, 23h47, on peut prendre une minute de s\u00E9curit\u00E9 mais il faut pas trop tarder, disons que la bombe doit exploser \u00E0 23h48.\u201D je r\u00E9pond</p>\n<p>\u201C- donc si on configure la bombe \u00E0 10h, \u00E7a fait 10h et 48 minutes soit ...\u201D</p>\n<p>\u201C - <strong class=\"mc\">648&nbsp;minutes\u201D je calcule</p>\n<p>Il fait quelques calculs sur un bout de papier, connecte&nbsp;des fils puis annonce :</p>\n<p>\u201C- voil\u00E0, j\u2019ai mis le temps et presque configur\u00E9 le <strong class=\"mc\">code d'amor\u00E7age. \u00E0 10h pile on branche ce fil\u201D</p>\n", 15));
        this.fragments.push(new Fragment(userService.chef, ["maurice"], "Caen, Bar - 10h - Le code", "<p><strong class=\"people\">SOLDAT branche le dernier fils, je replace le tissu et je ferme la <strong class=\"mc\">malette la verrouille avec le <strong class=\"mc\">code 112.</p>\n", 16, ["code"]));
        this.fragments.push(new Fragment(userService.chef, ["bar"], "Caen, Bar - Ce midi - Le briefing", "<p>\u00C7a frappe \u00E0 la porte, je m\u2019approche et frappe un coup, j\u2019entend 3 coups en r\u00E9ponses. C\u2019est <strong class=\"people\">ERUDIT ! Je d\u00E9verrouille la porte et la laisse entrer avec la personnes qu\u2019il l'accompagne. Je compte rapidement le nombre de silhouette dans la salle \u2026 5 personnes en plus de <strong class=\"people\">SOLDAT, le compte est bon. C\u2019est le moment de commencer. Je prends un soupir et prend la parole :</p>\n<p>\u201C- Bonjour \u00E0 tous. Merci d\u2019\u00EAtre l\u00E0 \u00E0 l\u2019heure. Pour des raisons de s\u00E9curit\u00E9, vous n\u2019avez pas \u00E9t\u00E9 tenu au courant de la nature exacte de cette op\u00E9ration. Normalement on vous a pr\u00E9venu que la <strong class=\"mc\">mission&nbsp;\u00E9tait dangereuse.\u201D</p>\n<p>\u201C- Oui, ils ont tous accept\u00E9 en connaissance de cause.\u201D &nbsp;confirme <strong class=\"people\">ERUDIT</p>\n", 17));
        this.fragments.push(new Fragment(userService.chef, ["mortebiere"], "Caen, Bar - Ce midi - La mission", "<p>\u201C- Le but de notre op\u00E9ration est d'emp\u00EAcher un <strong class=\"mc\">attentat, et de neutraliser tous les terroristes. Nous irons ce soir au ch\u00E2teaux nous infiltrer au <strong class=\"mc\">mariage de Hector de La Grande Marche et Marie Elisabeth d\u2019Autriche. Ce <strong class=\"mc\">mariage c\u2019est qu\u2019un pr\u00E9texte pour inviter une grande quantit\u00E9 de notable et dirigeant dans le but de les assassiner.</p>\n<p>Nous savons que l\u2019<strong class=\"mc\">attentat surviendra quand tout le monde sera rassembl\u00E9 dans la grande salle, \u00E0 partir de minuit. Nous avons une bombe et notre seule chance d'emp\u00EAcher le massacre est de la faire exploser exactement au bon moment et au bon endroit pour \u00E9liminer les terroristes \u00E0 leur arriv\u00E9e.\u201D</p>\n<p>\u201C- Pourquoi ce n\u2019est pas la police qui s\u2019occupe de \u00E7a ?\u201D &nbsp;demande une dame (<strong class=\"mc\"><strong class=\"people\">JOURNALISTE)</p>\n<p>\u201C- C\u2019est une <strong class=\"mc\">mission d\u00E9licate, et les instances dirigeantes pr\u00E9f\u00E8res ne pas \u00EAtre impliqu\u00E9es. C\u2019est pour \u00E7a que nous sommes charg\u00E9s de r\u00E9soudre le probl\u00E8me discr\u00E8tement.\u201D je r\u00E9pond.</p>\n<p>\u201C- Et je suppose que vous savez comment faire ?\u201D demande <strong class=\"people\">TELE</p>\n<p>\u201C- Oui, nous savons de source s\u00FBre l\u2019heure exacte o\u00F9 la bombe doit exploser. Et celle-ci est d\u2019ailleurs d\u00E9j\u00E0 configur\u00E9e\u201D je r\u00E9pond en montrant la valise sur la table pr\u00E8s de <strong class=\"people\">SOLDAT</p>\n<p>\u201C- Et pour l\u2019emplacement ? C\u2019est habituellement plus simple \u00E0 savoir !\u201D relance-elle</p>\n<p>\u201C- <strong class=\"mc\">Roberta, avec l\u2019aide de <strong class=\"mc\">Suzanne se chargera de localiser l\u2019emplacement, et comme vous vous en doutez, vous serez charg\u00E9 de placer la bombe.\u201D</p>\n<p>\u201C- Ma carte servira \u00E0 ce moment ? demande <strong class=\"mc\"><strong class=\"people\">JOURNALISTE</p>\n<p>\u201C- Oui, vous fournirez le <strong class=\"mc\">plan du ch\u00E2teau pour aider \u00E0 la localisation du por\u2026 de l\u2019emplacement. Et de ce que vous cherchez dans le ch\u00E2teau par la m\u00EAme occasion.\u201D</p>\n<p>\u201C- oui \u2026\u201D r\u00E9pond t-elle, \u201Cj\u2019ai le <strong class=\"mc\">plan, enfin partiellement dessin\u00E9. Je ne vois toujours pas vraiment en quoi vos instructions vont nous aider vu que je sais comment mon camouflage fonctionne. Si je suis interrog\u00E9 et menac\u00E9 je ne vous promet pas de ne rien r\u00E9v\u00E9ler.\u201D</p>\n<p>\u201CNe vous inqui\u00E9tez pas, c\u2019est l\u00E0 que notre dernier \u00E9quipier intervient\u201D.</p>\n<p>Je me tourne vers la derni\u00E8re personne tapis dans l\u2019ombre.</p>\n<p>\u201C- Monsieur, comment dois-je vous appeler ?\u201D</p>\n<p>\u201C- Heu \u2026 Jules \u2026 oui, c\u2019est \u00E7a, Docteur Jules\u201D</p>\n<p>\u201C- Bien docteur, vous avez la potion promise ?\u201D</p>\n<p>\u201C- Oui, bien s\u00FBr la voil\u00E0\u201D r\u00E9pond <strong class=\"people\">MONSTRE en montrant un petit flacon.</p>\n<p>\u201C- Juste avant d\u2019arriver au ch\u00E2teau, nous allons boire de cette potion. Ses effets sont tr\u00E8s efficaces et nous permettront de <strong class=\"mc\">pouvoir mentir et r\u00E9sister aux interrogatoire bien plus efficacement.\u201C</p>\n<p>Apr\u00E8s un petit temps de r\u00E9flections, je me souviens des invitations. Je me tourne \u00E0 nouveau vers <strong class=\"mc\"><strong class=\"people\">JOURNALISTE et lui demande :</p>\n<p>\u201C- Ah ! Avez-vous les invitations ?\u201D</p>\n<p>Elle hoche la t\u00EAte et me tend 4 cartons. Je lui en prend 3.</p>\n<p>\u201C- Gardez en une pour vous\u201D</p>\n<p>Je donne une invitation \u00E0 <strong class=\"people\">VOYANTE, une \u00E0 <strong class=\"people\">MONSTRE et je garde la derni\u00E8re. J\u2019attends quelques secondes, puis demande :</p>\n<p>\u201C- Avez vous compris ? Avez-vous des questions ?\u201D</p>\n<p>\u201C- Avez-vous mon paiement ?\u201D demande <strong class=\"people\">TELE de mani\u00E8re agressive</p>\n<p>\u201C- Oui, voici la 1er partie\u201D je dis en sortant une petite bourse de ma poche. \u201CComme convenue, je vous donne la suite en sortant du chateaux\u201D</p>\n", 18, ["pouvoir"]));
        this.fragments.push(new Fragment(userService.chef, ["mémoire", "memoire"], "Sur la route de Martinvast - Il y a quelques minutes", "<p>Le ch\u00E2teau se profile au bout de l\u2019all\u00E9e. J\u2019entend quelques petites tintement, <strong class=\"people\">MONSTRE sort les fioles et commence \u00E0 les distribuer aux autres puis prend la parole :</p>\n<p>\u201C- Buvez \u00E7a maintenant, \u00E7a va mettre quelque secondes \u00E0 agir\u201D</p>\n<p>Tout le monde ouvre son falcon, je fais de m\u00EAme et boit son contenu d\u2019une traite.</p>\n<p>\u201C- Hum, c\u2019est bon ton m\u00E9dicament, docteur !\u201D s\u2019exclame <strong class=\"people\">VOYANTE</p>\n<p>Je ne sens rien de sp\u00E9ciale, ma <strong class=\"mc\">m\u00E9moire ne semble pas encore dispara\u00EEtre. J\u2019esp\u00E8re que le produit marche !</p>\n<p>\u201C- <strong class=\"mc\">Rina \u2026 <strong class=\"mc\">Rina c\u2019est toi ? Arr\u00EAtez la voiture !\u201D s\u2019exclame <strong class=\"mc\"><strong class=\"people\">JOURNALISTE en fusillant <strong class=\"people\">VOYANTE du regard, rouge de col\u00E8re.</p>\n<p>\u201C- C\u2019est un pi\u00E8ge !\u201D s\u2019exclame <strong class=\"people\">TELE.</p>\n<p>Il fallait que \u00E7a arrive, vivement que la potion fasse effet !</p>\n", 19));
        this.fragments.push(new Fragment(userService.soldat, ["verdun", "verdin"], "Cambrai, Tranch\u00E9s - 1917", "<p>Les balles sifflaient au dessus de moi. Les gars me couvrent pendant que je pr\u00E9pare la m\u00E8che, il ne tiendront pas longtemps.</p>\n<p>La m\u00EAche est branch\u00E9e, je l\u2019allume et cale la bombe entre &nbsp;2 poutres et crie :</p>\n<p>\u201C- C\u2019est bon, on se barre, on a une minute trente !\u201D</p>\n<p>On part en courant dans la tranch\u00E9e. Des d\u00E9tonations, une balle me fr\u00F4le et touche SOLDAT2 \u00E0 la <strong class=\"mc\">jambe. Tant pis, on pourra venir le r\u00E9cup\u00E9rer quand le tunnel aura saut\u00E9.</p>\n<p>Ma bombe explose, la tranch\u00E9e est sauv\u00E9e ... pour le moment.</p>\n", 0));
        this.fragments.push(new Fragment(userService.soldat, ["afrique"], "Afrique du sud, Mine de diamant - 1919", "<p>Ah, ce connard de <strong class=\"people\">CONTREMAITRE cherche encore la merde, sur qui \u00E7a va va tomber cette fois ?</p>\n<p><strong class=\"people\">CONTREMAITRE s\u2019approche de <strong class=\"people\">ESCLAVE et comment \u00E0 l'engueuler,et comme d\u2019habitude \u00E0 le frapper.</p>\n<p>Ca me d\u00E9goute, je me reconcentre sur ma pioche tremp\u00E9e par ma sueur et je recommence \u00E0 attaquer la parois.</p>\n<p>Quelques secondes plus tard, les cris du passage \u00E0 tabac me forcent \u00E0 me retourner. <strong class=\"people\">ESCLAVE est au sol dans une marre de <strong class=\"mc\">sang et <strong class=\"people\">CONTREMAITRE continue de le frapper.</p>\n<p>Et puis merde, je m\u2019\u00E9lance et envoie <strong class=\"people\">CONTREMAITRE au tapis d\u2019un crochet dans la machoire. Je viens de perdre mon boulot, ou pire \u2026</p>\n<p>Je me penche et aide <strong class=\"people\">ESCLAVE \u00E0 se relever.</p>\n<p>\u201C- Quel est votre nom ?\u201D me crie une voix.</p>\n<p>Je l\u00E8ve la t\u00EAte, une personne se tient sur le bord de la <strong class=\"mc\">mine, en haut. Le <strong class=\"mc\">soleil \u00E9crasant d\u2019<strong class=\"mc\">Afrique du Sud m\u2019\u00E9blouie.</p>\n<p>\u201C- <strong class=\"mc\">Maurice. <strong class=\"mc\">Maurice Genevoix\u201D je r\u00E9pond</p>\n", 1));
        this.fragments.push(new Fragment(userService.soldat, ["mineur", "mineurs"], "Afrique du sud, Mine de diamant - 1919", "<p><strong class=\"people\">CHEF m\u2019attend dans son bureau. Mon poignet est douloureux mais les domestiques de <strong class=\"people\">CHEF m\u2019ont bien soign\u00E9. Il me pointe un fauteuil dans lequel je m\u2019assoit.</p>\n<p>\u201C- <strong class=\"mc\">Maurice, savez-vous ce que vous risquez \u00E0 frapper un de mes contrema\u00EEtre ?\u201D</p>\n<p>\u201C- Oui \u2026\u201D</p>\n<p>\u201C- Vous avez fait preuve de courage, j\u2019ai assist\u00E9 \u00E0 votre intervention et vous avez bien fait. Ce contrema\u00EEtre n\u2019a pas \u00E0 battre mes employ\u00E9s \u00E0 mort sous pr\u00E9texte qu\u2019ils sont noirs.\u201D</p>\n<p>\u201C- Euh \u2026 merci \u2026\u201D</p>\n<p>\u201C- Vous semblez savoir bien vous battre. Vous avez fait la guerre ?\u201D</p>\n<p>\u201C- Oui, j\u2019\u00E9tais artificier. J\u2019ai combattu \u00E0 <strong class=\"mc\">verdun et j\u2019ai re\u00E7u la croix de guerre. Apr\u00E8s la guerre j\u2019ai d\u00E9cid\u00E9 de venir en <strong class=\"mc\">Afrique du Sud mais ce n\u2019est pas si facile de trouver un boulot. Je suis plut\u00F4t chanceux de travailler dans votre <strong class=\"mc\">mine.\u201D</p>\n<p><strong class=\"people\">CHEF me regarde longuement puis me demande :</p>\n<p>\u201C- Vous n\u2019\u00EAtes pas fait pour \u00EAtre <strong class=\"mc\">mineur, que diriez vous de devenir mon majordome ? J\u2019ai pas mal de t\u00E2che \u00E0 vous confier.\u201D</p>\n", 2));
        this.fragments.push(new Fragment(userService.soldat, ["zurich"], "Zurich, Entrep\u00F4t en banlieu - 1927", "<p>Un l\u00E9ger bruit, la porte s'entrouvre et une lueur de lanterne projette des ombres dans la p\u00E9nombre de l'entrep\u00F4t.</p>\n<p>\u201C- \u00E7a y est, on les tient !\u201D chuchote <strong class=\"people\">CHEF</p>\n<p>\u201C- ils sont en avance on dirait\u201D je r\u00E9pond</p>\n<p>La lanterne s\u2019avance dans l'entrep\u00F4t, aucun bruit de pas ne semble provenir de son porteur.</p>\n<p>Je r\u00E9alise que la lanterne vient droit vers notre planque. Je sens la main de <strong class=\"people\">CHEF se poser fermement sur mon bras alors que j'allais lever mon fusil.</p>\n<p>\u201C- attends encore un peu\u201D murmure t-il \u00E0 mon oreille.</p>\n<p>La lumi\u00E8re arr\u00EAte de bouger \u00E0 quelque m\u00E8tres devant nous et j'aper\u00E7ois 2 yeux brillants l\u00E9g\u00E8rement au dessus.</p>\n<p>Soudain un rire f\u00E9minin r\u00E9sonne dans l'entrep\u00F4t.</p>\n<p>\u201C- si vous voulez les voir, vous ne regardez pas dans la bonne direction messieurs <strong class=\"mc\">Pollack et Genevoix !\u201D dit la forme</p>\n<p>Semblant mettre tout prudence de c\u00F4t\u00E9, <strong class=\"people\">CHEF s\u2019avance vers la femme. Je le suis et j'aper\u00E7ois pour la 1er fois, dans la lueur de la lampe, le beau visage de <strong class=\"people\">AGENT.</p>\n<p>\u201C- Qui \u00EAtes vous ?\u201C demande doucement <strong class=\"people\">CHEF \u00E0 <strong class=\"people\">AGENT</p>\n<p>\u201C- Peu importe. Mais je dois dire que je suis impressionn\u00E9 par votre travaille d\u2019enqu\u00EAte. Sans vous pister je ne crois pas que j\u2019aurais pu trouver le <strong class=\"mc\">portail seule. Mais il est temps d\u2019intervenir, vous allez avoir besoin de mon aide.\u201D</p>\n<p>\u201C- De quoi parlez vous ? Qu\u2019est-ce que vient faire ici cette histoire de <strong class=\"mc\">portail ? Vous aussi vous enqu\u00EAtez sur la fili\u00E8re clandestine d\u2019importation de <strong class=\"mc\">diamant. La transaction devrait avoir lieu ici d\u2019un moment \u00E0 l\u2019autre ! D'ailleurs \u00E9teignez cette lumi\u00E8re et venez vous cacher avec nous !</p>\n<p>\u201C- Oh, me cacher comme une humaine ... pourquoi pas\u201D l\u00E2cha t-elle avec un petit rire \u201Dlaissez moi juste r\u00E9gler un \u201Cd\u00E9tail\u201D, il reste encore 15 bonnes minute avant leur arriv\u00E9e.\u201D</p>\n<p><strong class=\"people\">AGENT marche tranquillement vers le mur oppos\u00E9 \u00E0 la porte de l'entrep\u00F4t posa un sac en toile sous une table pr\u00E8s d\u2019un bassin remplis d\u2019eau croupi et de tas de d\u00E9tritus. Elle recouvrir le sac d\u2019un vieux carton qui tra\u00EEnait et revient vers nous avec toujours autant d\u2019\u00E9nergie. Je demande :</p>\n<p>\u201C- qu\u2019est ce que c\u2019est ?\u201D</p>\n<p>\u201C- oh, vous les verrez bien assez vite. Venez vous planquer ici\u201D dit elle en indiquant un recoin en vu du carton.</p>\n<p>Nous nous installons et <strong class=\"people\">AGENT \u00E9teint sa lampe. Le silence revient, seuls les rats vient parfois le perturber. L\u2019obscurit\u00E9 s\u2019\u00E9claircit \u00E0 mesure que mes pupilles se remettent de l\u2019\u00E9claire de la lanterne, je vois <strong class=\"people\">CHEF regarder attentivement le visage de <strong class=\"people\">AGENT. Sa beaut\u00E9, son assurance en ce lieu et ses yeux qui brillent encore l\u00E9g\u00E8rement me font me poser des questions sur le sens de son expression \u201Cme cacher comme une humaine\u201D.</p>\n<p>Les l\u00E8vres de <strong class=\"people\">CHEF commencent \u00E0 peine \u00E0 bouger que <strong class=\"people\">AGENT le devance</p>\n<p>\u201C- votre analyse \u00E9tait vraiment bonne, Harry. Il y a bien une source croissante de <strong class=\"mc\">diamant inject\u00E9 sur le march\u00E9. Cette source vient bien de <strong class=\"mc\">Zurich et plus particuli\u00E8rement cet entrep\u00F4t, mais vous vous trompez sur la source r\u00E9el, ces <strong class=\"mc\">diamants ne viennent pas d\u2019une <strong class=\"mc\">mine concurrente. En fait ils ne viennent pas de ce <strong class=\"mc\">plan \u2026 mais d\u2019un autre <strong class=\"mc\">plan. Les Hadinos perturbe l\u2019\u00E9conomie terrienne en totale violation des trait\u00E9s de neutralit\u00E9 de ce <strong class=\"mc\">plan. Bref, il fallait agir et vous tombez bien.\u201D</p>\n<p>Elle s'arr\u00EAte, regarde le carton attentivement et me regarde :</p>\n<p>\u201C- Ils vont arriver, vous pouvez me rendre un service ?\u201D</p>\n<p>\u201C- Heu, je suppose\u201D</p>\n<p>Elle sort un petit boitier de sa poche et me le passe</p>\n<p>\u201C- Prenez \u00E7a. Quand ils seront rentr\u00E9s, tous les 3, appuyez sur le bouton.\u201D</p>\n<p>Je prend l'objet pernicieusement et porte mon attention vers le carton. 30 secondes plus tard, un flash&nbsp;blanc laisse place \u00E0 une sorte de voile iris\u00E9 &nbsp;circulaire \u00E0 2 m\u00E8tre du carton. 3 cr\u00E9atures plates et translucide en sort.</p>\n<p>Je jete un coup d\u2019oeil \u00E0 <strong class=\"people\">AGENT qui me fait une subtil geste d'approbation. J\u2019appuis sur le bouton, la bombe explose.</p>\n<p><strong class=\"people\">CHEF est envoy\u00E9 en arri\u00E8re, j\u2019amortis sa chute. Apparement il n\u2019a pas autant l\u2019habitude que moi de c\u00F4toyer des <strong class=\"mc\">explosions.</p>\n<p><strong class=\"people\">AGENT ne semble pas nom plus particuli\u00E8rement perturb\u00E9. Elle se l\u00E8ve aussit\u00F4t et s\u2019avance vers le nuage de poussi\u00E8re en allumant sa lampe.</p>\n<p>J\u2019aide <strong class=\"people\">CHEF \u00E0 se lever, j\u2019arme mon fusil et nous la suivons.</p>\n<p>La poussi\u00E8re retombe peu \u00E0 peu. Le <strong class=\"mc\">portail a disparu. Les 3 cr\u00E9atures ont pris de la hauteur, des membres sont apparus et ils commencent \u00E0 ressembler \u00E0 des humano\u00EFdes.</p>\n<p><strong class=\"people\">AGENT engage la conversation avec eux dans une langue inconnue. Apr\u00E8s quelques minutes de conversation aux intonations \u00E9tonnantes, <strong class=\"people\">AGENT se tourne vers nous et dit</p>\n<p>\u201C- F\u00E9licitation messieurs, vous venez d'arr\u00EAter vos premiers planaires !</p>\n", 3));
        this.fragments.push(new Fragment(userService.soldat, ["londres", "london", "londre"], "Londres, Colloque d\u2019arch\u00E9ologie - 1929", "<p>Les applaudissements timides me sortent de ma somnolence. Ces conf\u00E9rences d\u2019arch\u00E9ologie ont le don de m\u2019endormir.</p>\n<p>A peine les applaudissements termin\u00E9s, <strong class=\"people\">CHEF se l\u00E8ve et se dirige \u00E0 grand pas vers l\u2019estrade o\u00F9 l\u2019arch\u00E9ologue range ses notes, d\u2019un air d\u00E9pit\u00E9. Je me l\u00E8ve pour ne pas laisser <strong class=\"people\">CHEF me distancer.</p>\n<p>Arriv\u00E9 au pied de l\u2019estrade il jette un oeil derri\u00E8re lui pour v\u00E9rifier que tout le monde se dirige bien vers la sortie, puis aborde la jeune arch\u00E9ologie.</p>\n<p>\u201C- Mademoiselle Broom, bravo pour votre expos\u00E9, votre analyse linguistique de ce document est remarquable !\u201D</p>\n<p><strong class=\"people\">ERUDIT l\u00E8ve la t\u00EAte et fixe <strong class=\"people\">CHEF quelques instant, l\u2019air intrigu\u00E9 :</p>\n<p>\u201C- vous vous moquez de moi, vous aussi ?\u201C</p>\n<p>\u201C- non, pas le moins de monde mademoiselle. Mais je crois que votre auditoire n\u2019\u00E9tait pas pr\u00EAt \u00E0 recevoir votre message et je crois que vous \u00EAtre pass\u00E9 pour une mystique.\u201D</p>\n<p><strong class=\"people\">ERUDIT grimace et va r\u00E9pliquer quand <strong class=\"people\">CHEF reprend :</p>\n<p>\u201C- ce document en <strong class=\"mc\">Kagana, comme vous l\u2019appelez, est-ce le seul que vous poss\u00E9dez ? O\u00F9 l\u2019avez vous trouv\u00E9 ?\u201D</p>\n<p>\u201C- hum, c\u2019est compliqu\u00E9 \u2026 Et pourquoi je devrais vous faire confiance ?\u201D</p>\n<p><strong class=\"people\">CHEF sourit et apr\u00E8s quelques seconde \u00E0 fouiller dans sa sacoche, il sort un petit carnet prot\u00E9g\u00E9 dans un chiffon. Il le tend \u00E0 <strong class=\"people\">ERUDIT. Celle-ci le pris, et le parcours, de plus en plus fr\u00E9n\u00E9tiquement alors que son visage transpire l\u2019\u00E9merveillement.</p>\n<p>\u201C- c\u2019est fabuleux, c\u2019est &nbsp;un livre entier en <strong class=\"mc\">Kagana !</p>\n<p>\u201C- pensez-vous <strong class=\"mc\">pouvoir m\u2019aider \u00E0 le traduire ?\u201D</p>\n<p>\u201C- vu le nombre de page, \u00E7a devrait devenir bien plus facile de d\u00E9duire la grammaire qu\u2019avec ma page ! Il me faudra un peu de temps ... mais oui ! Ou l\u2019avez-vous trouv\u00E9 ?\u201D</p>\n<p><strong class=\"people\">CHEF jette un coup d'oeil rapide dans la salle derri\u00E8re lui, puis r\u00E9pond:</p>\n<p>\u201C- la prochain conf\u00E9rence ne va pas tarder \u00E0 commencer, cela vous dirait d\u2019aller prendre un caf\u00E9 pour parler de tout \u00E7a ?\u201D</p>\n<p>\u201C- Volontiers\u201D</p>\n<p>\u201C-J\u2019esp\u00E8re que &nbsp;vous aimez l\u2019aventure :)\u201D</p>\n", 4));
        this.fragments.push(new Fragment(userService.soldat, ["mariage", "marriage"], "France, Eglise - Mai 1932", "<p>En entrant dans la petite \u00E9glise, je sens le courant d\u2019air frais glisser sur mon visage. Mon noeud papillon me sert un peu trop, mais je vais devoir faire avec encore quelque temps.</p>\n<p>A mon bras, <strong class=\"people\">ERUDIT est resplendissante dans sa robe de mari\u00E9e. Elle sourit et sa timidit\u00E9 semble avoir temporairement disparu.</p>\n<p>Pr\u00E8s de l'h\u00F4tel, <strong class=\"people\">CHEF l\u2019attend. Alors que je croise son regard, je sens une pointe d\u2019inqui\u00E9tude.</p>\n<p>\u201C- Oui, j\u2019ai pens\u00E9 aux alliances\u201D je lui lance du regard.</p>\n", 5));
        this.fragments.push(new Fragment(userService.soldat, ["jambe", "jambes"], "Versailles, Chambre - 1935", "<p>Le <strong class=\"mc\">soleil se l\u00E8ve, j\u2019ouvre les yeux. Le dos nu d\u2019<strong class=\"people\">ERUDIT me fait face. Je m\u2019approche pour l\u2019enlacer \u00E0 nouveau puis mes yeux se ferment.</p>\n", 6));
        this.fragments.push(new Fragment(userService.soldat, ["trappe", "statue"], "Versailles, Jardin - Septembre 1936", "<p>J\u2019arrive en retard au rendez-vous. <strong class=\"people\">ERUDIT et <strong class=\"people\">CHEF sont d\u00E9j\u00E0 en train de discuter tout en marchant dans le jardin. <strong class=\"people\">CHEF se retourne et il a une <strong class=\"mc\">mine sombre. Je sens qu\u2019on me m\u2019a pas convoqu\u00E9 pour organiser une f\u00EAte.</p>\n<p>Je rejoins leur marche et au bout de quelques seconde <strong class=\"people\">CHEF annonce :</p>\n<p>\u201C- comme vous vous en doutez, on a une nouvelle <strong class=\"mc\">mission. Mais celle l\u00E0 a l\u2019air particuli\u00E8rement d\u00E9licate est dangereuse.\u201D</p>\n<p>\u201C- Vous \u00E9tiez donc \u00E0 nouveau aupr\u00E8s d\u2019un contact hier ? C\u2019\u00E9tait elle ?\u201D je demande</p>\n<p>\u201C- Non, ce n\u2019\u00E9tait pas elle. Des <strong class=\"mc\">Psyche\u00EFdes&nbsp;je crois. Ils sont en panique et on a juste 1 mois pour se pr\u00E9parer.\u201D</p>\n<p>Il marque une pause. Se tourne vers <strong class=\"people\">ERUDIT et demande :</p>\n<p>\u201C- Les <strong class=\"mc\">Dahona, \u00E7a te parle ?\u201D</p>\n<p>\u201C- Oui, mais je n\u2019ai pas lu beaucoup de d\u00E9tail sur eux. Ils sont un peu comme nos ogres dans nos histoires pour enfants j\u2019ai l\u2019impression. Il y a un certain tabou \u00E0 leur propos. Ils existent vraiment ?\u201D</p>\n<p>\u201C- Apriori, et il semblent qu\u2019ils aient fait un lien vers notre <strong class=\"mc\">plan, au ch\u00E2teau de <strong class=\"mc\">Martinvast. Ils planifierait un <strong class=\"mc\">attentat \u00E0 l\u2019occasion d\u2019un <strong class=\"mc\">mariage le 28 octobre, en violation de tous les trait\u00E9s de neutralit\u00E9. Et il y aurait pas mal de notable et c\u00E9l\u00E9brit\u00E9 humaines.. Mon contact a subtilement \u00E9vit\u00E9 ma question sur le genre d\u2019<strong class=\"mc\">attentat que les <strong class=\"mc\">Dahona pensent faire. \u201D</p>\n<p>\u201C- Bref, ils vont tous les tuer, d\u2019une mani\u00E8re ou d\u2019une autre, c\u2019est \u00E7a ?\u201D &nbsp;je conclus</p>\n<p>\u201C- On va supposer que c\u2019est \u00E7a.\u201D r\u00E9pond <strong class=\"people\">CHEF.</p>\n<p><strong class=\"people\">ERUDIT demande :</p>\n<p>\u201C- Et il ne suffit pas de faire sauter le <strong class=\"mc\">portail, comme d\u2019habitude ?\u201D</p>\n<p>\u201C- Oui et non, apparement le ch\u00E2teaux et particuli\u00E8rement prot\u00E9g\u00E9 et les <strong class=\"mc\">Dahona se montrent prudent. Les <strong class=\"mc\">Dahona ouvrent le <strong class=\"mc\">portail avec une tr\u00E8s grande mod\u00E9ration. Ils se sont install\u00E9 avec beaucoup de discr\u00E9tion. Ils sont actuellement absent mais pr\u00E9voient d\u2019ouvrir le <strong class=\"mc\">portail pour revenir juste avant la c\u00E9r\u00E9monie. \u00C7a sera la seul opportunit\u00E9.\u201D</p>\n<p>Je r\u00E9pond :</p>\n<p>\u201C- Vu qu\u2019il y aura surement des civils ou innocents dans le coin, je suppose que je devrais pr\u00E9parer une bombe de puissance mod\u00E9r\u00E9e, pour d\u00E9truire le lien sans d\u00E9truire tout le ch\u00E2teau...\u201D</p>\n<p>\u201C- bien vu, \u00E7a veut dire qu\u2019il faudra se montrer pr\u00E9cis sur la localisation du <strong class=\"mc\">portail, on ne peut pas se permettre de le louper\u201D ajoute <strong class=\"people\">ERUDIT</p>\n<p>\u201C- &nbsp;Oui, et autant mon contact m\u2019a dit qu\u2019il devrait <strong class=\"mc\">pouvoir trouver l\u2019heure exacte d\u2019ouverture du <strong class=\"mc\">portail autant personne ne sait \u00E0 quoi il ressemblera et ou il arrivera.\u201D</p>\n<p>Alors que le silence tombe, on arrive au fond du jardin et <strong class=\"people\">CHEF d\u00E9verrouille le cabanon, et reprend en entrant:</p>\n<p>\u201C- Pour la s\u00E9curit\u00E9, il y a 2 points g\u00EAnants. D\u2019abord il y a un champ statique autour du chateaux\u2026\u201D</p>\n<p>\u201C- donc on ne pourra pas faire t\u00E9l\u00E9porter d\u2019objet \u00E0 l\u2019int\u00E9rieur du ch\u00E2teau. Un <strong class=\"mc\">t\u00E9l\u00E9kin\u00E9siste pourrait t\u00E9l\u00E9porter la bombe s\u2019il est d\u00E9j\u00E0 \u00E0 l'int\u00E9rieur du champ statique.\u201D le coupe <strong class=\"people\">ERUDIT</p>\n<p>\u201C- oui, mais il faudra trouver un t\u00E9l\u00E9porteur humano\u00EFde, sinon il ne passera pas les portes du ch\u00E2teau.\u201D</p>\n<p>\u201C- Ah mince. Je suppose que \u00E7a existe mais il va falloir se bouger pour en trouver un \u00E0 temps.\u201D</p>\n<p><strong class=\"people\">CHEF descend l'\u00E9chelle sous la <strong class=\"mc\">trappe. Je laisse <strong class=\"people\">ERUDIT passer et je ferme la <strong class=\"mc\">trappe derri\u00E8re moi. Le rep\u00E8re est une bonne illustration du chaos, mais <strong class=\"people\">ERUDIT extrait imm\u00E9diatement quelques livre bien pr\u00E9cis et les jette sur la grande table. <strong class=\"people\">CHEF a entrepris de nettoyer le tableau noir. Je m\u2019occupe du <strong class=\"mc\">bar&nbsp;et sert 3 verres.</p>\n<p>\u201C- D\u2019autre part, mon contact m\u2019a dit qu\u2019il y aura des statues \u00E0 l\u2019entr\u00E9e.\u201D reprend <strong class=\"people\">CHEF</p>\n<p>\u201C- Donc ce qui veut dire qu\u2019on sera d\u00E9couvert d\u00E8s que l\u2019un de nous rentre dans ce chateaux\u201D dit <strong class=\"people\">ERUDIT en m\u00E9ditant</p>\n<p>\u201C- Oui, mais mon contact m\u2019a dit qu\u2019il me fournirait quelqu\u2019un pour \u00E7a : il peut provoquer une amn\u00E9sie temporaire. Ainsi les pens\u00E9es ne pourront plus nous trahir mais d\u2019un autre c\u00F4t\u00E9 on ne se souviendra plus de pourquoi on est l\u00E0 bas. La <strong class=\"mc\">m\u00E9moire nous reviendra petit \u00E0 petit, mais des d\u00E9clencheurs peuvent nous aider \u00E0 retrouver des parcelles sp\u00E9cifique de <strong class=\"mc\">m\u00E9moire. \u201D</p>\n<p>\u201C- On a qu\u2019a tout \u00E9crire et on arrivera bien fouiller nos poches sur place pour lire nos notes et r\u00E9activer nos souvenirs ...\u201D je r\u00E9pond</p>\n<p>\u201C- Non, c\u2019est pas si simple.\u201D me coupe <strong class=\"people\">ERUDIT, le nez contre un grimoire aux caract\u00E8res incongrus \u201C \u00E9coutez : \u2018[...] les statues sont capables de capter des brides de pens\u00E9es quelque soit leur support, pour elle un livre ne diff\u00E8re pas d\u2019un cerveau [...]\u2019. Donc si on vient avec notre <strong class=\"mc\">plan dans la poche, \u00E7a sera exactement comme l\u2019avoir en t\u00EAte. Il va falloir tout camoufler dans des indices futiles et d\u00E9coder l\u2019ensemble sur place.\u201D</p>\n<p>Tout notion d\u2019heure a disparu, je n\u2019ai plus aucune id\u00E9e de combien de temps nous travaillons au rep\u00E8re. Le <strong class=\"mc\">plan prend forme au tableau. <strong class=\"people\">CHEF semble soulag\u00E9 et dit:</p>\n<p>\u201C- Bon, je r\u00E9sume. On trouve des invitations pour le <strong class=\"mc\">mariage et on y rentre comme invit\u00E9 en ayant oubli\u00E9 notre <strong class=\"mc\">m\u00E9moire. On arrive en avance, on devrait nous faire patienter dans un petit salon. <strong class=\"mc\">Maurice, tu auras une bombe avec toi, pr\u00E9programm\u00E9 \u00E0 la bonne heure, au cas ou on oublie. Sur place, il faudra localiser l\u2019emplacement ou le <strong class=\"mc\">portail va s\u2019ouvrir. <strong class=\"mc\">Roberta, tu es assez confiante sur le fait que sur place il y aura de la documentation sur leur <strong class=\"mc\">plan ?\u201D</p>\n<p>\u201C - Oui, quand des planaires s\u2019installent ils viennent habituellement avec leurs possessions, il est trop dangereux et co\u00FBteux de devoir ouvrir le <strong class=\"mc\">portail \u00E0 chaque fois qu\u2019ils on besoin d\u2019un livre ou d\u2019un objet quelconque.\u201D</p>\n<p>\u201C - Donc sur place, <strong class=\"mc\">Rina cherche les livres dans les pi\u00E8ces. Avec l\u2019aide du <strong class=\"mc\">plan, on les localise et le <strong class=\"mc\">t\u00E9l\u00E9kin\u00E9siste&nbsp;les r\u00E9cup\u00E8re. L\u00E0, on trouve&nbsp;les informations sur le <strong class=\"mc\">portail au plus vite. Tu es bien s\u00FBr qu\u2019elles y seront ?\u201D</p>\n<p>\u201C- Oui. C\u2019est vitale d\u2019avoir \u00E7a, sans les informations d\u2019ouverture de <strong class=\"mc\">portail tu prend le risque d\u2019\u00EAtre bloqu\u00E9 \u00E0 tout jamais si le lien se casse. Personne ne va sur un autre <strong class=\"mc\">plan sans un <strong class=\"mc\">codex&nbsp;d\u2019ouverture de <strong class=\"mc\">portail.\u201D r\u00E9pond <strong class=\"people\">ERUDIT</p>\n<p>\u201C- Un fois qu\u2019on a trouv\u00E9 o\u00F9 sera le <strong class=\"mc\">portail, <strong class=\"mc\">Rina trouve l\u2019endroit et on t\u00E9l\u00E9porte la bombe l\u00E0 bas.\u201D</p>\n<p>\u201C- Oui, et je viens quand m\u00EAme. Si on ne trouve pas, \u00E7a peut \u00EAtre pas mal de <strong class=\"mc\">pouvoir d\u00E9samorcer la bombe.\u201D j\u2019ajoute.</p>\n<p><strong class=\"people\">CHEF continue :</p>\n<p>\u201C- Oui. Donc, <strong class=\"mc\">Roberta, tu t\u2019occupe de parler de cette <strong class=\"mc\">mission \u00E0 <strong class=\"mc\">Rina. <strong class=\"mc\">Maurice, tu pr\u00E9pare la bombe, il ne faut aucune \u00E9criture dessus ! Je vais arranger le transport et la logistique pour avoir un endroit ou se pr\u00E9parer avant le <strong class=\"mc\">mariage. Je connais le patron du <strong class=\"mc\">bar Mortebi\u00E8re&nbsp;\u00E0 Caen par exemple. En parall\u00E8le, tout le monde cherche \u2018discr\u00E8tement\u2019 un moyen d\u2019avoir les invitations au <strong class=\"mc\">mariage et le <strong class=\"mc\">plan du chateaux. Ah et bien sur, enqu\u00EAtez pour trouver un <strong class=\"mc\">t\u00E9l\u00E9kin\u00E9siste&nbsp;!\u201D</p>\n", 7, ["pouvoir"]));
        this.fragments.push(new Fragment(userService.soldat, ["15", "53"], "Versailles, Rep\u00E8re - 1936", "<p>J\u2019ai presque fini de pr\u00E9parer cette bombe. Je suis assez fier du m\u00E9canisme de chiffrement.</p>\n<p>Il me manque plus qu\u2019a mettre choisir les codes de commande.</p>\n<p><strong class=\"people\">CHEF et <strong class=\"people\">ERUDIT semble avoir fini de bosser, j\u2019ai l\u2019impression qu\u2019ils papotent de botanique planaire derri\u00E8re moi !</p>\n<p>Je demande \u00E0 tout hasard :</p>\n<p>\u201C - vous pouvez me donner 2 nombres entre 0 et 63 ?\u201D</p>\n<p>Apr\u00E8s quelques seconde <strong class=\"people\">ERUDIT r\u00E9pond :</p>\n<p>\u201C - 15 et 53, \u00E7a irait ?\u201D</p>\n", 8));
        this.fragments.push(new Fragment(userService.soldat, ["explosion", "éxplosion", "explosions"], "Caen, Bar - Ce matin 8h - Bombe", "<p>Les cris venant du <strong class=\"mc\">bar s\u2019estompent alors que <strong class=\"people\">CHEF ferme et verrouille la porte de la petite salle du fond.</p>\n<p>\u201C- c\u2019est bon, on peut commencer. Les autres arrivent vers midi.\u201D dit <strong class=\"people\">CHEF</p>\n<p>J\u2019ouvre la <strong class=\"mc\">mallette pos\u00E9 sur la table et je soul\u00E8ve le tissu qui cache la bombe.</p>\n<p><strong class=\"people\">CHEF se retourne et dit :</p>\n<p>\u201C- oh, elle a l\u2019air assez diff\u00E9rente de d'habitude. C\u2019est donc \u00E7a que tu bricolais la semaine derni\u00E8re pendant que je parlais de jardinage avec <strong class=\"mc\">Roberta ?\u201D</p>\n<p>\u201C- oui, j\u2019ai vu avec elle qu\u2019il fallait \u00E9viter de faire un retardateur classique pour ne pas \u00E9veiller de soup\u00E7ons des statues. \u00C7a reste assez simple mais c\u2019est fait avec un peu d\u2019\u00E9lectronique. Les valeurs sont plus ou moins chiffr\u00E9 et il y a une s\u00E9curit\u00E9 pour rendre son d\u00E9samor\u00E7age pas trivial.\u201D</p>\n<p>\u201C- explique moi tout en d\u00E9tail, \u00E7a t\u2019aidera \u00E0 t\u2019en souvenir si il y a besoin d\u2019annuler sur place.\u201D</p>\n<p>J\u2019isole proprement tous les fils pour qu\u2019on les voit bien.</p>\n<p>\u201C- il y a 16 fils, 10 sont utilis\u00E9s pour configurer le retardateur et les 6 autres sont les fils de commande. Globalement, si on connecte ou d\u00E9connecte les fils au hasard il ne se passera rien, \u00E7a ne l\u2019amorcera ou la d\u00E9samorce pas.\u201D</p>\n<p>\u201C- c\u2019est rassurant\u201D dit <strong class=\"people\">CHEF, pensif</p>\n", 9));
        this.fragments.push(new Fragment(userService.soldat, ["canard", "canard"], "Caen, Bar - Ce matin 8h - Canard", "<p>\u201C- les fils ne sont pas dans l\u2019ordre, pour trouver l\u2019ordre, j\u2019ai fait ce petit dessin que je comptes garder sur moi : les 6 pattes du <strong class=\"mc\">canard g\u00E9ant indiquent quels fils sont les fils de commande. Les autres sont ceux de configuration. Ils sont dans l\u2019ordre, de gauche \u00E0 droite.\u201D</p>\n<p>\u201C- joli dessin\u201D dit <strong class=\"people\">CHEF</p>\n<p>\u201C- donc il y a 2 commandes : amorcer la bombe, et la d\u00E9samorcer. \u00C9videmment, on ne peut amorcer la bombe que si elle n\u2019est pas active, et inversement. Par exemple le <strong class=\"mc\">code de d\u00E9samor\u00E7age est est 53 en binaire, soit 110101. Au moment ou le <strong class=\"mc\">code d'amor\u00E7age est est saisie sur les fils de commande, la bombe s\u2019arme avec la valeur indiqu\u00E9 en minute par les fils de configuration.\u201D</p>\n", 10));
        this.fragments.push(new Fragment(userService.soldat, ["648"], "Caen, Bar - Ce matin 8h - Minuterie", "<p>\u201C- Il vaut mieux \u00E9viter d\u2019avoir mis 1 minute par accident\u201D r\u00E9pond <strong class=\"people\">CHEF, surement pour faire croire qu\u2019il suit.</p>\n<p>\u201C- oui, mais la lumi\u00E8re indiquant que la bombe est arm\u00E9e clignote plus vite dans la derni\u00E8re heure. \u00C7a permet de v\u00E9rifier sans pour autant donner d\u2019informations aux statues. D\u2019ailleurs ce temps est juste le nombre de minutes cod\u00E9 sur les 10 fils de configuration de la m\u00EAme mani\u00E8re de que les codes de commandes.\u201D</p>\n<p>\u201C- d\u2019accord, \u00E7a a l\u2019air presque simple\u201D commente <strong class=\"people\">CHEF</p>\n<p>\u201C- tu as l\u2019heure d\u2019ouverture du <strong class=\"mc\">portail ?\u201D</p>\n<p>\u201C- oui, 23h47, on peut prendre une minute de s\u00E9curit\u00E9 mais il faut pas trop tarder, disons que la bombe doit exploser \u00E0 23h48.\u201D</p>\n<p>\u201C- donc si on configure la bombe \u00E0 10h, \u00E7a fait 10h et 48 minutes soit ...\u201D</p>\n<p>\u201C - <strong class=\"mc\">648 minutes\u201D r\u00E9pond <strong class=\"people\">CHEF</p>\n<p>Je fais les calculs sur un bout de papier et configure les fils.</p>\n<p>\u201C- voil\u00E0, j\u2019ai mis le temps et presque configur\u00E9 le <strong class=\"mc\">code d'amor\u00E7age. \u00E0 10h pile on branche ce fil\u201D</p>\n", 11));
        this.fragments.push(new Fragment(userService.soldat, ["malette", "malettes", "mallete", "mallette", "mallettes", "malettes"], "Caen, Bar - 10h - Le code", "<p>Je le branche le dernier fil. <strong class=\"people\">CHEF met un <strong class=\"mc\">code&nbsp;\u00E0 la <strong class=\"mc\">mallette et la verrouille.</p>\n", 12));
        this.fragments.push(new Fragment(userService.soldat, ["capsule", "bouchon", "bière"], "Caen, Bar - 11h - Se souvenir", "<p><strong class=\"people\">CHEF prend une capsules de <strong class=\"mc\">bi\u00E8re sur la table et la met dans sa poche. Je demande :</p>\n<p>\u201C- Pourquoi tu prend cette <strong class=\"mc\">capsule ?\u201C</p>\n<p>\u201C- Pour m\u2019aider \u00E0 me souvenir de cette sc\u00E8ne quand nous aurons perdu la <strong class=\"mc\">m\u00E9moire\u201D</p>\n<p>\u201C- Bonne id\u00E9e, je vais faire la m\u00EAme chose\u201D</p>\n", 13));
        this.fragments.push(new Fragment(userService.soldat, ["mortebiere"], "Caen, Bar - Ce midi - Le briefing", "<p>\u00C7a frappe \u00E0 la porte, <strong class=\"people\">CHEF s\u2019approche et frappe un coup, on entend 3 coups en r\u00E9ponses. &nbsp;<strong class=\"people\">CHEF d\u00E9verrouille la porte et la laisse entrer avec la personnes qu\u2019il l'accompagne. Apr\u00E8s quelque secondes <strong class=\"people\">CHEF pousse un soupir et prend la parole :</p>\n<p>\u201C- Bonjour \u00E0 tous. Merci d\u2019\u00EAtre l\u00E0 \u00E0 l\u2019heure. Pour des raisons de s\u00E9curit\u00E9, vous n\u2019avez pas \u00E9t\u00E9 tenu de la nature exacte de cette op\u00E9ration. Normalement on vous a pr\u00E9venu que la <strong class=\"mc\">mission \u00E9tait dangereuse.\u201D</p>\n<p>\u201C- Oui, ils ont tous accept\u00E9 en connaissance de cause.\u201D &nbsp;confirme <strong class=\"people\">ERUDIT</p>\n<p><strong class=\"people\">CHEF continue :</p>\n<p>\u201C- Le but de notre op\u00E9ration est d'emp\u00EAcher un <strong class=\"mc\">attentat en &nbsp;\u2026 commettant un <strong class=\"mc\">attentat pour \u00E9liminer la menace. Nous irons ce soir au ch\u00E2teaux nous infiltrer au <strong class=\"mc\">mariage de Hector de La Grande Marche et Marie Elisabeth d\u2019Autriche. Ce <strong class=\"mc\">mariage c\u2019est qu\u2019un pr\u00E9texte pour inviter une grande quantit\u00E9 de notable et dirigeant dans le but de les assassiner.</p>\n<p>Nous savons que l\u2019<strong class=\"mc\">attentat surviendra quand tout le monde sera rassembl\u00E9 dans la grande salle, \u00E0 partir de minuit. Nous avons une bombe et notre seule chance d'emp\u00EAcher le massacre est de la faire exploser exactement au bon moment et au bon endroit pour \u00E9liminer les terroristes \u00E0 leur arriv\u00E9e.\u201D</p>\n<p>\u201C- Pourquoi ce n\u2019est pas la police qui s\u2019occupe de \u00E7a ?\u201D &nbsp;demande une dame (<strong class=\"mc\"><strong class=\"people\">JOURNALISTE)</p>\n<p>\u201C- C\u2019est une <strong class=\"mc\">mission d\u00E9licate, et les instances dirigeantes pr\u00E9f\u00E8res ne pas \u00EAtre impliqu\u00E9es. C\u2019est pour \u00E7a que nous sommes charg\u00E9s de r\u00E9soudre le probl\u00E8me discr\u00E8tement.\u201D r\u00E9pond <strong class=\"people\">CHEF.</p>\n<p>\u201C- Et je suppose que vous savez comment faire ?\u201D demande <strong class=\"people\">TELE</p>\n<p>\u201C- Oui, nous savons de source s\u00FBre l\u2019heure exacte \u00E0 la bombe doit exploser. Et celle-ci est d\u2019ailleurs d\u00E9j\u00E0 configur\u00E9e\u201D r\u00E9pond <strong class=\"people\">CHEF en montrant la valise sur la table pr\u00E8s de moi</p>\n<p>\u201C- Et pour l\u2019emplacement ? C\u2019est habituellement plus simple \u00E0 savoir !\u201D relance-elle</p>\n<p>\u201C- <strong class=\"mc\">Roberta, avec l\u2019aide de <strong class=\"mc\">Suzanne se chargera de localiser l\u2019emplacement, et comme vous vous en doutez, vous serez charg\u00E9 de placer la bombe.\u201D</p>\n<p>\u201C- Ma carte servira \u00E0 ce moment ? demande une <strong class=\"mc\"><strong class=\"people\">JOURNALISTE</p>\n<p>\u201C- Oui, vous fournirez le <strong class=\"mc\">plan du ch\u00E2teau pour aider \u00E0 la localisation du por\u2026 de l\u2019emplacement. Et de ce que vous cherchez dans le ch\u00E2teau par la m\u00EAme occasion.\u201D</p>\n<p>\u201C- oui \u2026\u201D r\u00E9pond t\u2019elle, \u201Cj\u2019ai le <strong class=\"mc\">plan, enfin partiellement dessin\u00E9. Je ne vois toujours pas vraiment en quoi vos instructions vont nous aider vu que je sais comment mon camouflage fonctionne. Si je suis interrog\u00E9 et menac\u00E9 je ne vous promet pas de ne rien r\u00E9v\u00E9ler.\u201D</p>\n<p>\u201CNe vous inqui\u00E9tez pas, c\u2019est l\u00E0 que notre dernier \u00E9quipier intervient\u201D.</p>\n<p><strong class=\"people\">CHEF se tourne vers la derni\u00E8re personne tapis dans l\u2019ombre.</p>\n<p>\u201C- Monsieur, comment dois-je vous appeler ?\u201D</p>\n<p>\u201C- Heu \u2026 Jules \u2026 oui, c\u2019est \u00E7a, Docteur Jules\u201D</p>\n<p>\u201C- Bien docteur, vous avez la potion promise ?\u201D</p>\n<p>\u201C- Oui, bien s\u00FBr la voil\u00E0\u201D r\u00E9pond <strong class=\"people\">MONSTRE en montrant un petit flacon.</p>\n<p>\u201C- Juste avant d\u2019arriver au ch\u00E2teau, nous allons boire de cette potion. Ses effets sont tr\u00E8s efficaces et nous permettront de <strong class=\"mc\">pouvoir mentir et r\u00E9sister aux interrogatoire bien plus efficacement.\u201C</p>\n<p>D\u2019un coup <strong class=\"people\">CHEF se tourne vers <strong class=\"mc\"><strong class=\"people\">JOURNALISTE et lui demande :</p>\n<p>\u201C- Ah ! Avez-vous les invitations ?\u201D</p>\n<p>Elle hoche la t\u00EAte et tend les invitations \u00E0 <strong class=\"people\">CHEF</p>\n<p>\u201C- Gardez en une pour vous\u201D</p>\n<p><strong class=\"people\">CHEF donne une invitation \u00E0 <strong class=\"people\">VOYANTE, une \u00E0 <strong class=\"people\">MONSTRE et garde la derni\u00E8re.Il attends quelques secondes, puis demande :</p>\n<p>\u201C- Avez vous compris ? Avez-vous des questions ?\u201D</p>\n<p>\u201C- Avez-vous mon paiement ?\u201D demande <strong class=\"people\">TELE de mani\u00E8re agressive</p>\n<p>\u201C- Oui, voici la 1er partie\u201D r\u00E9pond <strong class=\"people\">CHEF en sortant une des petites bourses de <strong class=\"mc\">diamant que je lui ai fournis la veille. \u201CComme convenue, je vous donne la suite en sortant du chateaux\u201D</p>\n", 14, ["pouvoir"]));
        this.fragments.push(new Fragment(userService.soldat, ["mémoire", "memoire"], "Sur la route de Martinvast - Il y a quelques minutes", "<p>Le ch\u00E2teau se profile au bout de l\u2019all\u00E9e.</p>\n<p>Tr\u00E8s discr\u00E8tement je touche la <strong class=\"mc\">jambe&nbsp;de <strong class=\"people\">ERUDIT. Elle me regarde et me sourit discr\u00E8tement.</p>\n<p>J\u2019entend quelques petites tintement, <strong class=\"people\">MONSTRE sort les fioles et commence \u00E0 les distribuer aux autres puis prend la parole :</p>\n<p>\u201C- Buvez \u00E7a maintenant, \u00E7a va mettre quelque secondes \u00E0 agir\u201D</p>\n<p>Tout le monde ouvre son falcon, je fais de m\u00EAme et boit son contenu d\u2019une traite.</p>\n<p>\u201C- Hum, c\u2019est bon ton m\u00E9dicament, docteur !\u201D s\u2019exclame <strong class=\"people\">VOYANTE</p>\n<p>Je ne sens rien de sp\u00E9ciale, ma <strong class=\"mc\">m\u00E9moire ne semble pas encore dispara\u00EEtre. J\u2019esp\u00E8re que le produit marche !</p>\n<p>\u201C- <strong class=\"mc\">Rina \u2026 <strong class=\"mc\">Rina c\u2019est toi ? Arr\u00EAtez la voiture !\u201D s\u2019exclame <strong class=\"mc\"><strong class=\"people\">JOURNALISTE en fusillant <strong class=\"people\">VOYANTE du regard, rouge de col\u00E8re.</p>\n<p>\u201C- C\u2019est un pi\u00E8ge !\u201D s\u2019exclame <strong class=\"people\">TELE.</p>\n<p>Merde c\u2019\u00E9tait pas pr\u00E9vu \u00E7a !</p>\n", 15));
        this.fragments.push(new Fragment(userService.erudit, ["roberta", "pollack"], "Londres, Colloque d\u2019arch\u00E9ologie - 1929", "<p>\u00C7a commence \u00E0 discuter dans la salle, l\u2019auditoire ne me prend pas au s\u00E9rieux.</p>\n<p>\u201C- C\u2019est pourquoi je pense que vocaliser cette premi\u00E8re phrase \u00E0 modifi\u00E9 le 23\u00E8me glyphes. J\u2019ai continu\u00E9 ainsi et pu faire varier la plupart des glyphes et comprendre le sens g\u00E9n\u00E9ral.\u201D</p>\n<p>Quelqu\u2019un m\u2019interrompt :</p>\n<p>\u201C- Faites donc maintenant une d\u00E9monstration ! Comment voulez vous que l\u2019on crois \u00E0 ses foutaises alors que vous nous montrez un simple page avec quelques trais.\u201D</p>\n<p>Je rougis, ce n\u2019est pas possible, pas ici.</p>\n<p>\u201C- Ce document semble avoir besoin d\u2019un source de <strong class=\"mc\">pouvoir pour vivre. Il n\u2019est pleinement utilisable qu\u2019\u00E0 proximit\u00E9 du site de fouille dans lequel il a \u00E9t\u00E9 trouv\u00E9 et semble rapidement perdre son <strong class=\"mc\">pouvoir en s\u2019\u00E9loignant \u00E0 quelques kilom\u00E8tres.\u201D</p>\n<p>J\u2019entend des ricanements, je poursuis mon expos\u00E9. Certaines personnes quittent la salle et les autres sont agit\u00E9s. Je conclus enfin et apr\u00E8s quelques applaudissements timides l\u2019auditoire commence \u00E0 quitter l\u2019amphit\u00E9atre. Comme pr\u00E9vu personne ne m\u2019a cru, tant pis pour eux.</p>\n<p>Je commencer \u00E0 ranger mes papiers r\u00E9pandu sur la table de l\u2019estrade quand un monsieur (<strong class=\"people\">CHEF) m\u2019aborde :</p>\n<p>\u201C- Mademoiselle Broom, bravo pour votre expos\u00E9, votre analyse linguistique de ce document est remarquable !\u201D</p>\n<p>Je suis stup\u00E9faite ! Quelqu\u2019un m\u2019aurait prise au s\u00E9rieux ?</p>\n<p>\u201C- vous vous moquez de moi, vous aussi ?\u201C je demande</p>\n<p>\u201C- non, pas le moins de monde mademoiselle. Mais je crois que votre auditoire n\u2019\u00E9tait pas pr\u00EAt \u00E0 recevoir votre message et je crois que vous \u00EAtre pass\u00E9 pour une mystique.\u201D</p>\n<p>Je me crispe. Une mystique, voil\u00E0 pour quoi je passe ! Alors que je fais surement preuve de bien plus de rigueur scientifique que la plupart de \u2026 Il continue :</p>\n<p>\u201C- ce document en <strong class=\"mc\">Kagana, comme vous l\u2019appelez, est-ce le seul que vous poss\u00E9dez ? O\u00F9 l\u2019avez vous trouv\u00E9 ?\u201D</p>\n<p>\u201C- hum, c\u2019est compliqu\u00E9 \u2026 Et pourquoi je devrais vous faire confiance ?\u201D je r\u00E9pond prudemment</p>\n<p><strong class=\"people\">CHEF sourit et apr\u00E8s quelques seconde \u00E0 fouiller dans sa sacoche, il sort un petit carnet prot\u00E9g\u00E9 dans un chiffon. Il me le tend. J\u2019ouvre le carnet, et je vois avec emerveillement des caract\u00E8re <strong class=\"mc\">Kagana&nbsp;! Je tourne les pages, je vois des glyphes que je ne connais pas, des agencements \u00E9trange. Je tourne les pages de plus en plus vite, c\u2019est merveilleux. Il y a 100 fois ce que j\u2019ai sur ma simple page dans ce petit carnet !</p>\n<p>\u201C- c\u2019est fabuleux, c\u2019est &nbsp;un livre entier en <strong class=\"mc\">Kagana&nbsp;! je demande</p>\n<p>\u201C- pensez-vous <strong class=\"mc\">pouvoir m\u2019aider \u00E0 le traduire ?\u201D</p>\n<p>\u201C- vu le nombre de page, \u00E7a devrait devenir bien plus facile de d\u00E9duire la grammaire qu\u2019avec ma page ! Il me faudra un peu de temps ... mais oui ! Ou l\u2019avez-vous trouv\u00E9 ?\u201D</p>\n<p><strong class=\"people\">CHEF regarde derri\u00E8re lui. La salle commence \u00E0 se remplir pour la prochaine conf\u00E9rence. Il me demande :</p>\n<p>\u201C- la prochain conf\u00E9rence ne va pas tarder \u00E0 commencer, cela vous dirait d\u2019aller prendre un caf\u00E9 pour parler de tout \u00E7a?\u201D</p>\n<p>\u201C- Volontiers\u201D</p>\n<p>\u201C-J\u2019esp\u00E8re que &nbsp;vous aimez l\u2019aventure&nbsp;:)\u201D</p>\n", 0));
        this.fragments.push(new Fragment(userService.erudit, ["grotte", "grottes", "grote", "grotes"], "Afrique du sud, Site de fouille - Ao\u00FBt 1931 - ", "<p><strong class=\"people\">CHEF est silencieux mais son passage rapide devant un des projecteurs qui \u00E9claire la <strong class=\"mc\">grotte m\u2019a mis la puce \u00E0 l\u2019oreille. Je l\u2019ignore un instant, le temps de noter mes conclusions sur mon carnet. Ce mur est une <strong class=\"mc\">mine d\u2019information. Alors que <strong class=\"people\">CHEF s\u2019est approch\u00E9 derri\u00E8re moi, je lui dit :</p>\n<p>\u201C- Comme je m\u2019y attendais, ce ne sont pas des simples \u00E9crits. Il s\u2019agit bien de textes planaires. Du <strong class=\"mc\">plan des 5 lunes je pense. J\u2019ai r\u00E9ussi \u00E0 d\u00E9bloquer la premi\u00E8re s\u00E9curit\u00E9 et j\u2019ai acc\u00E8s \u00E0 bien plus d\u2019informations. Ce mur n\u2019est que la couverture d\u2019un livre. C\u2019est \u00E9trange je re\u00E7ois une partie de l\u2019informations directement dans m\u00EAme t\u00EAte sous forme de couleurs et de sons \u00E9trange.\u201D</p>\n<p>\u201C- Et tu arrives \u00E0 d\u00E9coder des choses ? Tu as trouv\u00E9 le moyen de cr\u00E9er des portails ?\u201D</p>\n<p>Je me l\u00E8ve et me retourne. Il a apport\u00E9 le repas, il est si \u00E9l\u00E9gant. Je m\u2019avance et l\u2019embrasse tendrement puis m'assois \u00E0 table et r\u00E9pond :</p>\n<p>\u201C- Non, mais il y a des informations tr\u00E8s int\u00E9ressantes sur les textes magiques. Apparemment certains livres peuvent voir leur contenu d\u00E9pendre du lien entre les plans. Si le lien est coup\u00E9, le livre peut perdre une partie de son essence.\u201D</p>\n<p>\u201C- Oh ! \u201C r\u00E9pond <strong class=\"people\">CHEF. \u201CTu penses que \u00E7a peut expliquer les livres incoh\u00E9rents que je te ram\u00E8nes de <strong class=\"mc\">mission ?\u201D</p>\n<p>\u201C- Oui, je pense que c\u2019est la cause. La prochaine fois j\u2019aimerais t\u2019accompagner \u00E0 une <strong class=\"mc\">mission d\u2019<strong class=\"mc\">infiltration&nbsp;pour essayer de traduire des documents avant que le <strong class=\"mc\">portail soit d\u00E9truit et le lien soit coup\u00E9.\u201D</p>\n<p>Nous mangeons en discutant. \u00C0 la fin du repas, <strong class=\"people\">CHEF sors la petite boite et la pose ouverte devant moi. Elle contient une <strong class=\"mc\">bague de fiancaille. Je ne dis rien, sourit et l\u2019embrasse.</p>\n\n<p></p>\n<p class=\"italique\">Je me souviens du <strong class=\"mc\">Kagana avanc\u00E9, et ses glyphes magiques. Il y a 10 glyphes magiques, leur ordre est important. Dans un document ou une tablette, il faut commencer par trouver les glyphes. Ensuite il faut les relier, mentalement ou en dessinant un croquis pr\u00E9cis. Il faut relier tous les glyphes. \u00C7a va donner un croisement quand il y a 4 glyphes mais \u00E7a peut \u00EAtre bien plus quand il y a plus de glyphes. Certains de ces croisements sont sur des mots. Je note le mot correspondant \u00E0 chacun des croisements, j\u2019ignore les autres.</p>\n<p class=\"italique\">Ensuite il faut que je trouve l\u2019ordre des mots. Je note aussi les glyphes qui relient directement le croisement, (ceux avec un trait qui relie le croisement \u00E0 ce glyphe sans passer par une autre croisement). J\u2019ai souvent 2 glyphes reli\u00E9 directement \u00E0 chaque croisement. Maintenant je dois trier les croisements : le croisement reli\u00E9 au glyphe de plus autre priorit\u00E9 dans l\u2019ordre de l\u2019alphabet sera le 1er croisement. Si il y a des \u00E9galit\u00E9s, on regarde le 2\u00E8me glyphe.</p>\n<p class=\"italique\">Une fois class\u00E9s, je prendre tous les mots dans le bon ordre et je cr\u00E9er une formule, un grand mot qui met les mots des croisements bout \u00E0 bout et je vocalise ou me concentre sur cette formule : si je ne me plante pas, le contenu <strong class=\"mc\">magique du livre arrive dans mon esprit. L\u2019alphabet a 10 glyphes, voici leur ordre :</p>\n<div><img src=\"/assets/symbol_priority.png\" /></div>\n", 1));
        this.fragments.push(new Fragment(userService.erudit, ["mariage"], "France, Eglise - Mai 1932", "<p>Nous entrons dans l'\u00E9glise de mon village natal, je sens le courant d\u2019air frais glisser sur mon visage et je frissonne un instant dans ma robe de mari\u00E9e. A mon bras, <strong class=\"people\">SOLDAT m\u2019accompagne \u00E0 l\u2019autel. L\u00E0 bas, resplendissant, <strong class=\"people\">CHEF m\u2019attend avec un sourire.</p>\n", 2));
        this.fragments.push(new Fragment(userService.erudit, ["infiltration", "infiltrations", "infilltration", "ainfiltration"], "Paris, internat - 31 janvier 1935 - Recrue", "<p>Je commence \u00E0 devenir dou\u00E9 en <strong class=\"mc\">infiltration. C\u2019est un peu risqu\u00E9 de venir l\u00E0 chercher dans son <strong class=\"mc\">internat mais cette petite mais si le contact dit vrai, cette petite est vraiment dou\u00E9 et nous aurons besoin d\u2019elle. L\u2019\u00E9thique de se recrutement me g\u00E8ne un peu mais l\u2019enjeu est trop grand. PRINCIPAL fait entrer <strong class=\"people\">VOYANTE et la fait asseoir de l\u2019autre cot\u00E9 de bureau.</p>\n<p>PRINCIPAL dit \u00E0 <strong class=\"people\">VOYANTE en me montrant :</p>\n<p>\u201C- Ha, <strong class=\"mc\">Rina, je t\u2019ai convoqu\u00E9 parce que Mme <strong class=\"mc\">Pollack a quelque chose d\u2019important \u00E0 te dire.\u201D</p>\n<p>Puis PRINCIPAL me dit avant de sortir du bureau :</p>\n<p>\u201C- je vous laisse mon bureau. Quand vous aurez termin\u00E9, demander \u00E0 ma secr\u00E9taire de vous raccompagner. \u201D</p>\n<p>Je regarde <strong class=\"people\">VOYANTE, elle fait tr\u00E8s jeune, 14 ou 15 ans je dirais. Elle a l\u2019aire plus intrigu\u00E9e que apeur\u00E9e et elle transpire l'intelligence. Je lui dit :</p>\n<p>\u201C- J\u2019ai dit \u00E0 ton principal que je venais pour raison familial urgente, mais en fait je dois te parler de quelque chose de tr\u00E8s important. Je sais que tu peux avoir des visions, et que ce que tu vois et toujours vrai...\u201D</p>\n<p>\u201C- Comment savez vous \u00E7a !\u201D</p>\n<p>\u201C- \u00C7a n\u2019a pas d\u2019importance, je peux juste te dire que je sais certaines choses qui pourraient t\u2019int\u00E9resser \u00E0 propos de tes visions\u201D</p>\n<p>\u201C- C\u2019est vrai ? Vous savez comment j\u2019ai eu ce <strong class=\"mc\">pouvoir ? d\u2019o\u00F9 il vient ?\u201D</p>\n<p>\u201C- Je peux r\u00E9pondre \u00E0 beaucoup de tes questions, mais je ne pense pas que le bureau du principal soit le bon endroit. Et je suis venu parce que mon mari et moi avons besoin de ton aide.\u201D</p>\n<p>\u201C- Ok, pourquoi vous avez besoin de moi ? C\u2019est pour *voir* quelque chose ?\u201D</p>\n<p>\u201C- Oui, c\u2019est pour *voir* quelque chose. Si \u00E7a te convient, je vais trouver une excuse pour que tu puisse partir avec moi aujourd\u2019hui. Tu pourras nous rendre ce petit service&nbsp;et en \u00E9change, je te dirais tout ce que je sais sur tes capacit\u00E9es.\u201D</p>\n<p>\u201C- \u00C7a marche, de toute fa\u00E7on je n\u2019avais pas envie de retourner en cours de math...\u201D</p>\n", 3));
        this.fragments.push(new Fragment(userService.erudit, ["jambe", "jambes"], "Versailles, Chambre - 1935", "<p>Quelque chose caresse mon dos nu et me r\u00E9veille. Le <strong class=\"mc\">soleil se l\u00E8ve. Derri\u00E8re moi, <strong class=\"people\">SOLDAT m\u2019enlace. Je souris et me rendors.</p>\n", 4));
        this.fragments.push(new Fragment(userService.erudit, ["psycheide", "psycheïde", "psycheïdes", "psicheide"], "Versailles, Jardin - Septembre 1936 - Mission", "<p>\u201C- Il est l\u00E0\u201D je dis</p>\n<p><strong class=\"people\">SOLDAT nous rejoint. <strong class=\"people\">CHEF se retourne vers lui. Il a vraiment l\u2019air angoiss\u00E9e. \u00C7a a l\u2019air grave. Nous reprenons la marche et au bout de quelques seconde <strong class=\"people\">CHEF annonce :</p>\n<p>\u201C- comme vous vous en doutez, on a une nouvelle <strong class=\"mc\">mission. Mais celle l\u00E0 a l\u2019air particuli\u00E8rement d\u00E9licate est dangereuse.\u201D</p>\n<p>\u201C- Vous \u00E9tiez donc \u00E0 nouveau aupr\u00E8s d\u2019un contact hier ? C\u2019\u00E9tait elle ?\u201D demande <strong class=\"people\">SOLDAT</p>\n<p>\u201C- Non, ce n\u2019\u00E9tait pas elle. Des <strong class=\"mc\">Psyche\u00EFdes&nbsp;je crois. Ils sont en panique et on a juste 1 mois pour se pr\u00E9parer.\u201D</p>\n", 5));
        this.fragments.push(new Fragment(userService.erudit, ["commando", "comando"], "Versailles, Jardin - Septembre 1936 - Dahona", "<p>Il marque une pause. Se tourne vers moi et demande :</p>\n<p>\u201C- Les <strong class=\"mc\">Dahona, \u00E7a te parle ?\u201D</p>\n<p>\u201C- Oui, mais je n\u2019ai pas lu beaucoup de d\u00E9tail sur eux. Ils sont un peu comme nos ogres dans nos histoires pour enfants j\u2019ai l\u2019impression. Il y a un certain tabou \u00E0 leur propos. Ils existent vraiment ?\u201D</p>\n<p>\u201C- Apriori, et il semblent qu\u2019ils aient fait un lien vers notre <strong class=\"mc\">plan, au ch\u00E2teau de <strong class=\"mc\">Martinvast. Ils planifierait un <strong class=\"mc\">attentat \u00E0 l\u2019occasion d\u2019un <strong class=\"mc\">mariage le 28 octobre, en violation de tous les trait\u00E9s de neutralit\u00E9. Et il y aurait pas mal de notable et c\u00E9l\u00E9brit\u00E9 humaines.. Mon contact a subtilement \u00E9vit\u00E9 ma question sur le genre d\u2019<strong class=\"mc\">attentat que les <strong class=\"mc\">Dahona pensent faire. \u201D</p>\n<p>\u201C- Bref, ils vont tous les tuer, d\u2019une mani\u00E8re ou d\u2019une autre, c\u2019est \u00E7a ?\u201D &nbsp;conclus <strong class=\"people\">SOLDAT</p>\n<p>\u201C- On va supposer que c\u2019est \u00E7a.\u201D r\u00E9pond <strong class=\"people\">CHEF.</p>\n<p>Je demande :</p>\n<p>\u201C- Et il ne suffit pas de faire sauter le <strong class=\"mc\">portail, comme d\u2019habitude ?\u201D</p>\n<p>\u201C- Oui et non, apparement le ch\u00E2teaux et particuli\u00E8rement prot\u00E9g\u00E9 et les <strong class=\"mc\">Dahona se montrent prudent. Les <strong class=\"mc\">Dahona ouvrent le <strong class=\"mc\">portail avec une tr\u00E8s grande mod\u00E9ration. Ils se sont install\u00E9 avec beaucoup de discr\u00E9tion. Ils sont actuellement absent mais pr\u00E9voient d\u2019ouvrir le <strong class=\"mc\">portail pour revenir juste avant la c\u00E9r\u00E9monie. \u00C7a sera la seul opportunit\u00E9.\u201D</p>\n<p><strong class=\"people\">SOLDAT ajoute :</p>\n<p>\u201C- Vu qu\u2019il y aura surement des civils ou innocents dans le coin, je suppose que je devrais pr\u00E9parer une bombe de puissance mod\u00E9r\u00E9e, pour d\u00E9truire le lien sans d\u00E9truire tout le ch\u00E2teau...\u201D</p>\n<p>\u201C- bien vu, \u00E7a veut dire qu\u2019il faudra se montrer pr\u00E9cis sur la localisation du <strong class=\"mc\">portail, on ne peut pas se permettre de le louper\u201D j\u2019ajoute</p>\n<p>\u201C- &nbsp;Oui, et autant mon contact m\u2019a dit qu\u2019il devrait <strong class=\"mc\">pouvoir trouver l\u2019heure exacte d\u2019ouverture du <strong class=\"mc\">portail autant personne ne sait \u00E0 quoi il ressemblera et ou il arrivera.\u201D</p>\n<p>Alors que le silence tombe, on arrive au fond du jardin et <strong class=\"people\">CHEF d\u00E9verrouille le cabanon, et reprend en entrant:</p>\n<p>\u201C- Pour la s\u00E9curit\u00E9, il y a 2 points g\u00EAnants. D\u2019abord il y a un champ statique autour du chateaux\u2026\u201D</p>\n<p>\u201C- donc on ne pourra pas faire t\u00E9l\u00E9porter d\u2019objet \u00E0 l\u2019int\u00E9rieur du ch\u00E2teau. Un <strong class=\"mc\">t\u00E9l\u00E9kin\u00E9siste pourrait t\u00E9l\u00E9porter la bombe s\u2019il est d\u00E9j\u00E0 \u00E0 l'int\u00E9rieur du champ statique.\u201D je le coupe</p>\n<p>\u201C- oui, mais il faudra trouver un t\u00E9l\u00E9porteur humano\u00EFde, sinon il ne passera pas les portes du ch\u00E2teau.\u201D</p>\n<p>\u201C- Ah mince. Je suppose que \u00E7a existe mais il va falloir se bouger pour en trouver un \u00E0 temps.\u201D</p>\n<p><strong class=\"people\">CHEF descend l'\u00E9chelle sous la <strong class=\"mc\">trappe. <strong class=\"people\">SOLDAT me laisse passer et il ferme la <strong class=\"mc\">trappe derri\u00E8re lui. Je vais chercher quelque livres sur diff\u00E9rent aspect des mondes planaires dans mes biblioth\u00E8que et je les lance sur la grande table au centre du rep\u00E8re. <strong class=\"people\">CHEF a entrepris de nettoyer le tableau noir. <strong class=\"people\">SOLDAT \u00E0 servir 3 verres.</p>\n<p>\u201C- D\u2019autre part, mon contact m\u2019a dit qu\u2019il y aura des statues \u00E0 l\u2019entr\u00E9e.\u201D reprend <strong class=\"people\">CHEF</p>\n<p>\u201C- Donc ce qui veut dire qu\u2019on sera d\u00E9couvert d\u00E8s que l\u2019un de nous rentre dans ce chateaux\u201D je r\u00E9pond.</p>\n<p>J\u2019ouvre le livre sur les statues&nbsp;pour v\u00E9rifier un doute.</p>\n<p>\u201C- Oui, mais mon contact m\u2019a dit qu\u2019il me fournirait quelqu\u2019un pour \u00E7a : il peut provoquer une amn\u00E9sie temporaire. Ainsi les pens\u00E9es ne pourront plus nous trahir mais d\u2019un autre c\u00F4t\u00E9 on ne se souviendra plus de pourquoi on est l\u00E0 bas. La <strong class=\"mc\">m\u00E9moire nous reviendra petit \u00E0 petit, mais des d\u00E9clencheurs peuvent nous aider \u00E0 retrouver des parcelles sp\u00E9cifique de <strong class=\"mc\">m\u00E9moire. \u201D</p>\n<p>\u201C- On a qu\u2019a tout \u00E9crire et on arrivera bien fouiller nos poches sur place pour lire nos notes et r\u00E9activer nos souvenirs ...\u201D dit <strong class=\"people\">SOLDAT</p>\n<p>\u201C- Non, c\u2019est pas si simple.\u201D je le coupe en montrant mon livre \u201C \u00E9coutez : \u2018[...] les statues sont capables de capter des brides de pens\u00E9es quelque soit leur support, pour elle un livre ne diff\u00E8re pas d\u2019un cerveau [...]\u2019. Donc si on vient avec notre <strong class=\"mc\">plan dans la poche, \u00E7a sera exactement comme l\u2019avoir en t\u00EAte. Il va falloir tout camoufler dans des indices futiles et d\u00E9coder l\u2019ensemble sur place.\u201D</p>\n", 6, ["pouvoir"]));
        this.fragments.push(new Fragment(userService.erudit, ["codex"], "Versailles, Jardin - Septembre 1936 - Le plan", "<p>Tout notion d\u2019heure a disparu, je n\u2019ai plus aucune id\u00E9e de combien de temps nous travaillons au rep\u00E8re. Le <strong class=\"mc\">plan prend forme au tableau. <strong class=\"people\">CHEF semble soulag\u00E9 et dit:</p>\n<p>\u201C- Bon, je r\u00E9sume. On trouve des invitations pour le <strong class=\"mc\">mariage et on y rentre comme invit\u00E9 en ayant oubli\u00E9 notre <strong class=\"mc\">m\u00E9moire. On arrive en avance, on devrait nous faire patienter dans un petit salon. <strong class=\"mc\">Maurice, tu auras une bombe avec toi, pr\u00E9programm\u00E9 \u00E0 la bonne heure, au cas ou on oublie. Sur place, il faudra localiser l\u2019emplacement ou le <strong class=\"mc\">portail va s\u2019ouvrir. <strong class=\"mc\">Roberta, tu es assez confiante sur le fait que sur place il y aura de la documentation sur leur <strong class=\"mc\">plan ?\u201D</p>\n<p>\u201C - Oui, quand des planaires s\u2019installent ils viennent habituellement avec leurs possessions, il est trop dangereux et co\u00FBteux de devoir ouvrir le <strong class=\"mc\">portail \u00E0 chaque fois qu\u2019ils on besoin d\u2019un livre ou d\u2019un objet quelconque.\u201D je r\u00E9pond</p>\n<p>\u201C - Donc sur place, <strong class=\"mc\">Rina cherche les livres dans les pi\u00E8ces. Avec l\u2019aide du <strong class=\"mc\">plan, on les localise et le <strong class=\"mc\">t\u00E9l\u00E9kin\u00E9siste les r\u00E9cup\u00E8re. L\u00E0, on trouve les informations sur le <strong class=\"mc\">portail au plus vite. Tu es bien s\u00FBr qu\u2019elles y seront ?\u201D</p>\n<p>\u201C- Oui. C\u2019est vitale d\u2019avoir \u00E7a, sans les informations d\u2019ouverture de <strong class=\"mc\">portail tu prend le risque d\u2019\u00EAtre bloqu\u00E9 \u00E0 tout jamais si le lien se casse. Personne ne va sur un autre <strong class=\"mc\">plan sans un <strong class=\"mc\">codex&nbsp;d\u2019ouverture de <strong class=\"mc\">portail.\u201D je r\u00E9pond</p>\n<p>\u201C- Un fois qu\u2019on a trouv\u00E9 o\u00F9 sera le <strong class=\"mc\">portail, <strong class=\"mc\">Rina trouve l\u2019endroit et on t\u00E9l\u00E9porte la bombe l\u00E0 bas.\u201D</p>\n<p>\u201C- Oui, et je viens quand m\u00EAme. Si on ne trouve pas, \u00E7a peut \u00EAtre pas mal de <strong class=\"mc\">pouvoir d\u00E9samorcer la bombe.\u201D ajoute <strong class=\"people\">SOLDAT.</p>\n<p><strong class=\"people\">CHEF continue :</p>\n<p>\u201C- Oui. Donc, <strong class=\"mc\">Roberta, tu t\u2019occupes de parler de cette <strong class=\"mc\">mission \u00E0 <strong class=\"mc\">Rina. <strong class=\"mc\">Maurice, tu pr\u00E9pare la bombe, il ne faut aucune \u00E9criture dessus ! Je vais arranger le transport et la logistique pour avoir un endroit ou se pr\u00E9parer avant le <strong class=\"mc\">mariage. Je connais le patron du <strong class=\"mc\">bar Mortebi\u00E8re&nbsp;\u00E0 Caen par exemple. En parall\u00E8le, tout le monde cherche \u2018discr\u00E8tement\u2019 un moyen d\u2019avoir les invitations au <strong class=\"mc\">mariage et le <strong class=\"mc\">plan du chateaux. Ah et bien sur, enqu\u00EAtez pour trouver un <strong class=\"mc\">t\u00E9l\u00E9kin\u00E9siste !\u201D</p>\n", 7, ["pouvoir"]));
        this.fragments.push(new Fragment(userService.erudit, ["attentat", "attenta", "atenta", "atentat", "attantat", "attanta", "atanta"], "Paris, Le salon de th\u00E9 Angelina rivoli - 3 octobre 1936", "<p><strong class=\"people\">VOYANTE est d\u00E9j\u00E0 l\u00E0 quand j\u2019arrive dans le salon de th\u00E9. J\u2019esp\u00E8re qu\u2019elle n\u2019a pas trop attendu. Je m\u2019assois \u00E0 sa table et je lui dis :</p>\n<p>\u201C- D\u00E9sol\u00E9, <strong class=\"mc\">Rina je suis un peu en retard.\u201D</p>\n<p>\u201C- Ce n\u2019est rien madame, pourquoi vouliez vous me voire ?\u201D</p>\n<p>\u201C- J\u2019ai une nouvelle <strong class=\"mc\">mission \u00E0 te proposer. Avant de t\u2019en dire plus, il faut que je te pr\u00E9vienne que c\u2019est une <strong class=\"mc\">mission extr\u00EAmement dangereuse. Mais aussi tr\u00E8s importante, sinon je ne ferais pas appel \u00E0 toi. Tu peux donc refuser.\u201D</p>\n<p>\u201C- \u00C7a m\u2019est \u00E9gale que ce soit dangereux. Je suis partante !\u201D</p>\n<p>\u201C- Attend un peu d\u2019avoir quelques d\u00E9tails\u2026 On va essayer de d\u00E9jouer un <strong class=\"mc\">attentat, mais on risque bien d\u2019y passer nous m\u00EAme. Et on a pas encore r\u00E9ussi \u00E0 recruter tous les talents dont on a besoin. Est-tu s\u00FBr que tu veux venir ?\u201D</p>\n<p>\u201C- Si je ne viens pas vous tenterez quand m\u00EAme d'arr\u00EAter l\u2019<strong class=\"mc\">attentat, n\u2019est-ce pas ?\u201D</p>\n<p>\u201C- Oui, les enjeux sont trop importants.\u201D</p>\n<p>\u201C- Alors je viens. Vous aurez besoins de mes visions.\u201D</p>\n<p>\u201C- Tr\u00E8s bien, je pensais bien <strong class=\"mc\">pouvoir compter sur toi. L\u2019<strong class=\"mc\">attentat doit avoir lieu le 28 octobre, lors d\u2019un <strong class=\"mc\">mariage. As-tu une tenu de soir\u00E9e qui pourrait convenir \u00E0 un <strong class=\"mc\">mariage ?\u201D</p>\n<p>\u201C- Oui, je dois avoir ce qu\u2019il faut. Et je connais une personne qui a un talent pour ce genre d\u2019op\u00E9ration. Est-ce que je peux la contacter ?\u201D</p>\n<p>\u201C- On recherche quelqu\u2019un qui a des comp\u00E9tences tr\u00E8s particuli\u00E8res, mais qui sait, peut \u00EAtre que cette personne pourra convenir.\u201D j\u2019ajoute en lui tendant ma carte :</p>\n<p>\u201C- Dites lui de me contacter directement, et assez rapidement, mais ne lui dite rien d\u2019autre.\u201C</p>\n<p>\u201C- D\u2019accord\u201D</p>\n", 8));
        this.fragments.push(new Fragment(userService.erudit, ["plan"], "Paris - 4 octobre 1936 - Plan", "<p>J\u2019arrive, dans le caf\u00E9. Je vois <strong class=\"mc\"><strong class=\"people\">JOURNALISTE. Elle ressemble vraiment \u00E0 sa fille. Quelle co\u00EFncidence tout de m\u00EAme que quelqu\u2019un d\u2019autre s\u2019int\u00E9resse \u00E0 <strong class=\"mc\">Martinvast&nbsp;!</p>\n<p>Je m\u2019approche. Je regarde <strong class=\"mc\"><strong class=\"people\">JOURNALISTE et lui demande :</p>\n<p>\u201C- <strong class=\"mc\">Louise&nbsp;?\u201D</p>\n<p>\u201C- Oui c\u2019est moi\u201D</p>\n<p>Je m\u2019assois \u00E0 sa table. Un <strong class=\"mc\">plan est pos\u00E9 sur la table, je l\u2019examine et dit :</p>\n<p>\u201C- Ha c\u2019est le <strong class=\"mc\">plan du ch\u00E2teau, bien jou\u00E9 !\u201D</p>\n<p>\u201C- Merci, \u00E7a n\u2019a pas \u00E9t\u00E9 facile \u00E0 trouver. Vous avez mon argent ?\u201D</p>\n<p>Je laisse tomber trois <strong class=\"mc\">diamant sur la table, et dit :</p>\n<p>\u201C- J\u2019ai un autre service \u00E0 vous demander, j\u2019ai besoin d\u2019invitations pour le <strong class=\"mc\">mariage qui a lieux le 28 au ch\u00E2teau\u201D</p>\n<p>\u201C- Ha oui le <strong class=\"mc\">mariage de Hector de La Grande Marche, je pense que je peux vous avoir \u00E7a. Par contre je ne veux pas \u00EAtre pay\u00E9 en <strong class=\"mc\">diamant, j\u2019ai plut\u00F4t une autre id\u00E9e\u201D</p>\n<p><strong class=\"mc\"><strong class=\"people\">JOURNALISTE ouvre la 1er page de son cahier et me le temps. Je vois la c\u00E9l\u00E8bre estampe japonaise repr\u00E9sentant une <strong class=\"mc\">vague. Elle me demande :</p>\n<p>\u201C- \u00C7a vous parle ?\u201D</p>\n", 9));
        this.fragments.push(new Fragment(userService.erudit, ["kanagawa"], "Paris - 4 octobre 1936 - Tableau", "<p>\u201C- Oui, c\u2019est la grande <strong class=\"mc\">vague de <strong class=\"mc\">Kanagawa, il me semble que ce tableau a \u00E9t\u00E9 vol\u00E9 l\u2019ann\u00E9e derni\u00E8re\u201D</p>\n<p>\u201C- J'enqu\u00EAte dessus, et je pense que le tableau se trouve dans ce ch\u00E2teau. J\u2019aimerai vous accompagner, le retrouver te le restituer aux autorit\u00E9s.\u201D</p>\n<p>\u201C- Et si le tableau ne s\u2019y trouve pas\u201D</p>\n<p>\u201C- Alors je vous aurais fournis les entr\u00E9es gratuitement\u201D</p>\n<p>\u201C- Ok, mais sachez que \u00E7a sera tr\u00E8s dangereux. Vous serez responsable d'amener les plans du ch\u00E2teau avec vous, Et de vous assurer que si vous \u00EAtes fouill\u00E9e ou interrog\u00E9 on ne puisse pas savoir ce que vous transportez\u201D</p>\n<p>On passe le reste de la matin\u00E9e \u00E0 mettre au point la meilleur m\u00E9thode pour cacher le <strong class=\"mc\">plan.</p>\n<p>On a d\u00E9cid\u00E9 de cacher les informations sur des dessins dans un <strong class=\"mc\">po\u00E8me. Elle a l\u2019air de ne pas pourquoi prendre ce genre de mesure mais je ne peux pas lui en dire trop.</p>\n", 10));
        this.fragments.push(new Fragment(userService.erudit, ["lettre"], "Versailles, Rep\u00E8re - 1936 - Pr\u00E9paration", "<p><strong class=\"people\">SOLDAT bricole dans le coin du rep\u00E8re. Je r\u00E8gle avec <strong class=\"people\">CHEF les derniers d\u00E9tails du <strong class=\"mc\">plan. Je lui annonce :</p>\n<p>\u201C- C\u2019est bon, le contact de <strong class=\"mc\">Rina \u00E9tait fiable. On a notre <strong class=\"mc\">t\u00E9l\u00E9kin\u00E9siste, je lui ai demand\u00E9 d\u2019apprendre par coeur une formule pour r\u00E9cup\u00E9rer directement de livre de la biblioth\u00E8que.\u201D</p>\n<p>\u201C- Bien. Et c\u2019est bon pour la <strong class=\"mc\">journaliste ?\u201D</p>\n<p>\u201C- Oui, elle a bien travaill\u00E9. Elle m\u2019a envoy\u00E9 une \u00E9bauche de son <strong class=\"mc\">plan, elle a bien boss\u00E9.\u201D</p>\n<p>Il semble se d\u00E9tendre. J\u2019ajoute :</p>\n<p>\u201C- Ah, et pour <strong class=\"mc\">Rina, tu devras l\u2019appeler <strong class=\"mc\">Suzanne. J\u2019ai aussi donn\u00E9 cette consigne \u00E0 <strong class=\"mc\">Rina et elle aura une grande cape pour ne pas \u00EAtre reconnue.\u201D</p>\n<p>\u201C- Bonne id\u00E9e, \u00E7a \u00E9vitera d\u2019avoir \u00E0 g\u00E9rer la surprise.\u201D</p>\n<p>La conversation se poursuit et d\u00E9rive. On se permet m\u00EAme de parler de notre projet de plantation de flore planaire dans la serre du domaine. A un moment j\u2019entend <strong class=\"people\">SOLDAT bougonner une question.pose une question.</p>\n<p>\u201C - vous pouvez me donner 2 nombres entre 0 et 63 ?\u201D</p>\n<p>Je lui r\u00E9pond.</p>\n<p>\u201C - 15&nbsp;et 53, \u00E7a irait ?\u201D</p>\n<p>Puis je reprend la conversation avec <strong class=\"people\">CHEF</p>\n", 11));
        this.fragments.push(new Fragment(userService.erudit, ["mortebiere"], "Caen, Bar - Ce midi - Le briefing", "<p>Je frappe \u00E0 la porte au fond du <strong class=\"mc\">bar. Apr\u00E8s quelques seconde, j\u2019entend 1 coup sourd. Je r\u00E9pond 3 coups en r\u00E9ponse, comme convenu. La porte se d\u00E9verrouille, <strong class=\"people\">CHEF me laisse entrer et je fais signe \u00E0 <strong class=\"people\">VOYANTE de me suivre.</p>\n<p>Apr\u00E8s quelque secondes <strong class=\"people\">CHEF pousse un soupir et prend la parole :</p>\n<p>\u201C- Bonjour \u00E0 tous. Merci d\u2019\u00EAtre l\u00E0 \u00E0 l\u2019heure. Pour des raisons de s\u00E9curit\u00E9, vous n\u2019avez pas \u00E9t\u00E9 tenu de la nature exacte de cette op\u00E9ration. Normalement on vous a pr\u00E9venu que la <strong class=\"mc\">mission \u00E9tait dangereuse.\u201D</p>\n<p>\u201C- Oui, ils ont tous accept\u00E9 en connaissance de cause.\u201D je confirme</p>\n<p><strong class=\"people\">CHEF continue :</p>\n<p>\u201C- Le but de notre op\u00E9ration est d'emp\u00EAcher un <strong class=\"mc\">attentat en &nbsp;\u2026 commettant un <strong class=\"mc\">attentat pour \u00E9liminer la menace. Nous irons ce soir au ch\u00E2teaux nous infiltrer au <strong class=\"mc\">mariage de Hector de La Grande Marche et Marie Elisabeth d\u2019Autriche. Ce <strong class=\"mc\">mariage c\u2019est qu\u2019un pr\u00E9texte pour inviter une grande quantit\u00E9 de notable et dirigeant dans le but de les assassiner.</p>\n<p>Nous savons que l\u2019<strong class=\"mc\">attentat surviendra quand tout le monde sera rassembl\u00E9 dans la grande salle, \u00E0 partir de minuit. Nous avons une bombe et notre seule chance d'emp\u00EAcher le massacre est de la faire exploser exactement au bon moment et au bon endroit pour \u00E9liminer les terroristes \u00E0 leur arriv\u00E9e.\u201D</p>\n<p>\u201C- Pourquoi ce n\u2019est pas la police qui s\u2019occupe de \u00E7a ?\u201D &nbsp;demande <strong class=\"mc\"><strong class=\"people\">JOURNALISTE</p>\n<p>\u201C- C\u2019est une <strong class=\"mc\">mission d\u00E9licate, et les instances dirigeantes pr\u00E9f\u00E8res ne pas \u00EAtre impliqu\u00E9es. C\u2019est pour \u00E7a que nous sommes charg\u00E9s de r\u00E9soudre le probl\u00E8me discr\u00E8tement.\u201D r\u00E9pond <strong class=\"people\">CHEF.</p>\n<p>\u201C- Et je suppose que vous savez comment faire ?\u201D demande <strong class=\"people\">TELE</p>\n<p>\u201C- Oui, nous savons de source s\u00FBre l\u2019heure exacte \u00E0 la bombe doit exploser. Et celle-ci est d\u2019ailleurs d\u00E9j\u00E0 configur\u00E9e\u201D r\u00E9pond <strong class=\"people\">CHEF en montrant la valise sur la table pr\u00E8s de moi</p>\n<p>\u201C- Et pour l\u2019emplacement ? C\u2019est habituellement plus simple \u00E0 savoir !\u201D relance-elle</p>\n<p>\u201C- <strong class=\"mc\">Roberta, avec l\u2019aide de <strong class=\"mc\">Suzanne se chargera de localiser l\u2019emplacement, et comme vous vous en doutez, vous serez charg\u00E9 de placer la bombe.\u201D</p>\n<p>Bien, il a pens\u00E9 \u00E0 l\u2019alias de <strong class=\"people\">VOYANTE.</p>\n<p>\u201C- Ma carte servira \u00E0 ce moment ? demande <strong class=\"mc\"><strong class=\"people\">JOURNALISTE</p>\n<p>\u201C- Oui, vous fournirez le <strong class=\"mc\">plan du ch\u00E2teau pour aider \u00E0 la localisation du por\u2026 de l\u2019emplacement. Et de ce que vous cherchez dans le ch\u00E2teau par la m\u00EAme occasion.\u201D</p>\n<p>\u201C- oui \u2026\u201D r\u00E9pond t\u2019elle, \u201Cj\u2019ai le <strong class=\"mc\">plan, enfin partiellement dessin\u00E9. Je ne vois toujours pas vraiment en quoi vos instructions vont nous aider vu que je sais comment mon camouflage fonctionne. Si je suis interrog\u00E9 et menac\u00E9 je ne vous promet pas de ne rien r\u00E9v\u00E9ler.\u201D</p>\n<p>\u201CNe vous inqui\u00E9tez pas, c\u2019est l\u00E0 que notre dernier \u00E9quipier intervient\u201D.</p>\n<p><strong class=\"people\">CHEF se tourne vers la derni\u00E8re personne tapis dans l\u2019ombre.</p>\n<p>\u201C- Monsieur, comment dois-je vous appeler ?\u201D</p>\n<p>\u201C- Heu \u2026 Jules \u2026 oui, c\u2019est \u00E7a, Docteur Jules\u201D</p>\n<p>\u201C- Bien docteur, vous avez la potion promise ?\u201D</p>\n<p>\u201C- Oui, bien s\u00FBr la voil\u00E0\u201D r\u00E9pond <strong class=\"people\">MONSTRE en montrant un petit flacon.</p>\n<p>\u201C- Juste avant d\u2019arriver au ch\u00E2teau, nous allons boire de cette potion. Ses effets sont tr\u00E8s efficaces et nous permettront de <strong class=\"mc\">pouvoir mentir et r\u00E9sister aux interrogatoire bien plus efficacement.\u201C</p>\n<p>D\u2019un coup <strong class=\"people\">CHEF se tourne vers <strong class=\"mc\"><strong class=\"people\">JOURNALISTE et lui demande :</p>\n<p>\u201C- Ah ! Avez-vous les invitations ?\u201D</p>\n<p>Elle hoche la t\u00EAte et tend 4 cartons \u00E0 <strong class=\"people\">CHEF qui lui en prend 3.</p>\n<p>\u201C- Gardez en une pour vous\u201D</p>\n<p><strong class=\"people\">CHEF donne une invitation \u00E0 <strong class=\"people\">VOYANTE, une \u00E0 <strong class=\"people\">MONSTRE et garde la derni\u00E8re.Il attends quelques secondes, puis demande :</p>\n<p>\u201C- Avez vous compris ? Avez-vous des questions ?\u201D</p>\n<p>\u201C- Avez-vous mon paiement ?\u201D demande <strong class=\"people\">TELE de mani\u00E8re agressive</p>\n<p>\u201C- Oui, voici la 1er partie\u201D r\u00E9pond <strong class=\"people\">CHEF en sortant une des petites bourses de <strong class=\"mc\">diamant que je lui ai fournis la veille. \u201CComme convenue, je vous donne la suite en sortant du chateaux\u201D</p>\n", 12, ["pouvoir"]));
        this.fragments.push(new Fragment(userService.erudit, ["mémoire", "memoire"], "Sur la route de Martinvast - Il y a quelques minutes", "<p>Le ch\u00E2teau se profile au bout de l\u2019all\u00E9e. J\u2019esp\u00E8re que je trouverais enfin un livre qui parle de la cr\u00E9ation de <strong class=\"mc\">portail.</p>\n<p>La main <strong class=\"people\">SOLDAT effleure subtilement ma <strong class=\"mc\">jambe, je croise son regard et lui sourit.</p>\n<p>J\u2019entend quelques petites tintement, <strong class=\"people\">MONSTRE sort les fioles et commence \u00E0 les distribuer aux autres puis prend la parole :</p>\n<p>\u201C- Buvez \u00E7a maintenant, \u00E7a va mettre quelque secondes \u00E0 agir\u201D</p>\n<p>Tout le monde ouvre son falcon, je fais de m\u00EAme et boit son contenu d\u2019une traite.</p>\n<p>\u201C- Hum, c\u2019est bon ton m\u00E9dicament, docteur !\u201D s\u2019exclame <strong class=\"people\">VOYANTE</p>\n<p>Je ne sens rien de sp\u00E9ciale, ma <strong class=\"mc\">m\u00E9moire ne semble pas encore dispara\u00EEtre. J\u2019esp\u00E8re que le produit marche !</p>\n<p>\u201C- <strong class=\"mc\">Rina \u2026 <strong class=\"mc\">Rina c\u2019est toi ? Arr\u00EAtez la voiture !\u201D s\u2019exclame <strong class=\"mc\"><strong class=\"people\">JOURNALISTE en fusillant <strong class=\"people\">VOYANTE du regard, rouge de col\u00E8re.</p>\n<p>\u201C- C\u2019est un pi\u00E8ge !\u201D s\u2019exclame <strong class=\"people\">TELE.</p>\n<p>Mince, quelle horreur, je savais que c\u2019\u00E9tait une mauvaise id\u00E9e de laisser <strong class=\"mc\"><strong class=\"people\">JOURNALISTE venir !</p>\n", 13));
        this.fragments.push(new Fragment(userService.erudit, ["thyrapoedae"], "\u2605 \u201CI know kung fu\u201D \u2605", "<p>En lisant ce chapitre un <strong class=\"mc\">pouvoir s\u2019insinue en moi. Je sais maintenant comment on cr\u00E9e des portails !</p>\n", 14));
        this.fragments.push(new Fragment(userService.erudit, ["planmagiepouvoir"], "\uD83D\uDCD6 Le grand livre des pouvoirs: Introduction aux pouvoirs \uD83D\uDCD6", "<p>Chaque plan diffusent un champ de magie&nbsp;diff\u00E9rent. Cela se traduit pas des pouvoirs magique sp\u00E9cifique par plan. Chaque pouvoir&nbsp;ne fonctionne que si l\u2019on se trouve dans le champ de magie correspondant.</p>\n<p>Les liens entre portail laissent fuiter un peu de champs de magie dans les environs du point d\u2019accroche du lien. Cela permet d\u2019utiliser partiellement des pouvoirs magique ailleurs que sur le plan d\u2019origine.</p>\n<p>Voici un r\u00E9sum\u00E9 des pouvoirs des plans les plus connus. Selon les derniers travaux des Sirin\u00E9en, il existerait des milliers de plan et de pouvoirs, mais la diversit\u00E9 des environnements et les connaissances lacunaire en th\u00E9orie de portail rend leur documentation lente et difficile.</p>\n", 15));
        this.fragments.push(new Fragment(userService.erudit, ["mental"], "\uD83D\uDCD6 Le grand livre des pouvoirs: Pouvoir des Psych\u00E9ides \uD83D\uDCD6", "<p>Les psych\u00E9ides ont toute sorte de pouvoirs li\u00E9 au mental.</p>\n<p>Les psych\u00E9\u00EFdes poss\u00E8de une gamme de pouvoir tr\u00E8s vaste.</p>\n<p>La plupart des psych\u00E9\u00EFdes n\u2019ont qu\u2019un seul pouvoir mais certains en cumulent plusieurs. Les pouvoirs ma\u00EEtris\u00E9s par un psych\u00E9ide ne sont pas h\u00E9r\u00E9ditaire.</p>\n<p>Dans les cas les plus classique on trouve les t\u00E9l\u00E9pathes qui peuvent \u00E9changer par la pens\u00E9e.</p>\n<p>D\u2019autre, &nbsp;surnomm\u00E9s les statues ont le pouvoir de lire dans les pens\u00E9es, sans l\u2019accord de leur propri\u00E9taire. Il para\u00EEtrait que les statues les plus exp\u00E9riment\u00E9s arrivent \u00E0 lire des pens\u00E9es sur support \u00E9crit.</p>\n<p>On trouve aussi plusieurs variante de voyance. Certains peuvent voir des reflux du pass\u00E9 du lieu dans lequel ils se trouvent. D\u2019autre peuvent voir d\u2019autres lieux, parfois m\u00EAme sur d\u2019autre plans, mais uniquement au pr\u00E9sent. Il ne semble pas exister de voyant pouvant voir n\u2019importe o\u00F9 dans le pass\u00E9.</p>\n<p>Un dernier pouvoir souvent d\u00E9nigr\u00E9 chez les psych\u00E9\u00EFdes est l\u2019effacement de m\u00E9moire. Ce pouvoir n\u2019a en effet peu d'applications pacifiques et est principalement utilis\u00E9 dans le domaine du crime ou en combat. L\u2019effacement de m\u00E9moire peut \u00EAtre \u00E9ph\u00E9m\u00E8re ou permanent en fonction de la puissance \u00E9mise par le psych\u00E9\u00EFde, la puissance est difficile \u00E0 r\u00E9guler. Certains des effaceurs les plus puissants arrivent \u00E0 cibler un groupe entier.</p>\n", 16));
        this.fragments.push(new Fragment(userService.erudit, ["avantagesformesirinéen"], "\uD83D\uDCD6 Le grand livre des pouvoirs: Pouvoir des Sirin\u00E9en \uD83D\uDCD6", "<p>Les Sirin\u00E9en&nbsp;peuvent g\u00E9n\u00E9ralement changer de forme&nbsp;ce qui leur donne de nombreux avantages.</p>\n<p>Leur art de l\u2019imitation peut \u00EAtre tr\u00E8s bonne, allant m\u00EAme jusqu'\u00E0 reproduire les m\u00E9tabolismes des cr\u00E9atures copi\u00E9es. Il est parfois possible de combiner plusieurs m\u00E9tabolismes pour cumuler les avantages de plusieurs forme de vie.</p>\n<p>Certains artistes Sirin\u00E9en ont commenc\u00E9 \u00E0 inventer des formes sorties uniquement de leur imagination et avec l\u2019aide de scientifique ils ont con\u00E7u des formes particuli\u00E8rement r\u00E9sistantes pour explorer des lieux hostiles jusqu\u2019\u00E0 lors inaccessibles.</p>\n<p>De par leur adaptativit\u00E9 les Sirin\u00E9en sont de grands voyageurs et s\u2019installent sur de nombreux plan.</p>\n<p>La vitesse de changement de forme peut \u00EAtre longue, parfois plusieurs mois pour changer totalement de forme, mais des changements rapides et tr\u00E8s localis\u00E9 peuvent \u00EAtre effectu\u00E9s, ce qui permet aux Sirin\u00E9en de &nbsp;se r\u00E9g\u00E9n\u00E9rer et ils sont consid\u00E9r\u00E9s comme amortel.</p>\n<p>M\u00EAme si les conventions planaire l'interdisent, il semblerait que leur capacit\u00E9 \u00E0 imiter les m\u00E9tabolismes permet parfois une copulation fertile et a permis la naissance d\u2019hybride cumulant les pouvoirs de plusieurs plans. Les hybrides sont tr\u00E8s rarement fertiles \u00E0 leur tour et la transmission de pouvoirs et encore plus rare dans ce cas.</p>\n", 17));
        this.fragments.push(new Fragment(userService.erudit, ["systématiquesdahonaincompatibilité"], "\uD83D\uDCD6 Le grand livre des pouvoirs: Pouvoir des Dahona \uD83D\uDCD6", "<p>Les Dahona&nbsp;sont connus pour leur exactions syst\u00E9matiques&nbsp;et leur incompatibilit\u00E9&nbsp;avec toute vie en communaut\u00E9.</p>\n<p>Les Dahona sont les cr\u00E9atures les plus dangereuses que l\u2019on connaisse.</p>\n<p>Leur terrible pouvoir est appel\u00E9 absorption : il consiste \u00E0 d\u00E9vorer une victime, et absorber tout ce qui la constitue : son esprit, ses souvenirs, ses comp\u00E9tences, physiques et intellectuelles et ses pouvoirs. L'absorption peut \u00EAtre vu comme une fusion des \u00EAtres mais le Dahona reste le ma\u00EEtre, il n\u2019est jamais dilu\u00E9 par sa victime.</p>\n<p>Leur sch\u00E9ma est classique, un chef de guerre et sa horde arrive \u00E0 cr\u00E9er un lien avec un plan, ils envoient une t\u00EAte de pont pour r\u00E9colter des informations sur le plan, souvent par absorption discrete. Ils s\u2019installent dans un rep\u00E8re, souvent un grande maison un peu \u00E0 l\u2019\u00E9cart. Le rep\u00E8re et toujours d\u00E9cor\u00E9 avec l\u2019embl\u00E8me du chef, qui est presque syst\u00E9matiquement un animal,</p>\n<p>Apr\u00E8s un temps de pr\u00E9paration et d\u2019incubation variable o\u00F9 ils sont irr\u00E9prochable et s\u2019int\u00E8grent dans le plan, ils organisent une c\u00E9r\u00E9monie mimant les moeurs du plan cibl\u00E9.</p>\n<p>Un d\u00E9vorage massif va \u00EAtre organis\u00E9e durant cette c\u00E9r\u00E9monie, souvent une f\u00EAte de tradition typique du plan attaqu\u00E9. Gr\u00E2ce \u00E0 leur r\u00E9seau mont\u00E9 pendant l\u2019incubation ils r\u00E9unissent une grande quantit\u00E9 de notables de ce plan. Le chef de guerre va souvent inviter d\u2019autre chef de guerre pour partager le festin. Le chef va absorber la plus belle prise et offrir les prises avec le plus de connaissance, pouvoir politique, information scientifique, etc, \u00E0 ses amis.</p>\n<p>Ap\u00E8s un d\u00E9vorage r\u00E9ussi, les Dahona sortent souvent de leur clandestinit\u00E9 et multiplient les d\u00E9vorages. Leur 1er d\u00E9vorage aura souvent d\u00E9capit\u00E9 une partie de l\u2019\u00E9lite du plan envahis et les absorbsions leur auront donn\u00E9 une grande quantit\u00E9 des connaissances sur le plan, ce qui les rend encore plus dangereux.</p>\n<p>Parfois les Dahona rentre dans la clandestinit\u00E9 \u00E0 nouveau.</p>\n<p>Les pouvoirs et les savoirs accumul\u00E9s par les Dahona au fil du temps devient pr\u00E9occupant. M\u00EAme s\u2019il ne sont pas tr\u00E8s bon pour utiliser les pouvoirs, \u00E0 force d'absorption ils sont devenu dangereux dans certains domaines comme le contr\u00F4le mental.</p>\n<p>Les Dahona ont des faiblesses, notamment leur confiance en eux, leur r\u00E9gularit\u00E9, et leur bureaucratie. Ils sont extr\u00EAmement proc\u00E9duriers et vont planifier leurs actions et c\u00E9r\u00E9monies \u00E0 la minute pr\u00EAt. Ils \u00E9crivent beaucoup de documentations et ne mettent pas beaucoup de z\u00E8le \u00E0 effacer leurs traces quand ils disparaissent. Cela permet de trouver quasi syst\u00E9matiquement leur plan d\u2019organisation dans des classeurs ou m\u00EAme des feuilles volantes dans les lieux infiltr\u00E9s.</p>\n<p>Cette vuln\u00E9rabilit\u00E9 est l\u2019axe d\u2019attaque principal pour contrecarrer les d\u00E9vorages.</p>\n<p>Quand ils ne sont pas en train de nous d\u00E9vorer, ils sont jovials, distingu\u00E9s et cultiv\u00E9s. Ils n\u2019ont pas de haine pour les peuble d\u00E9vor\u00E9s, mais leur faim finit toujours par couper court \u00E0 leur relations amicales initiale.</p>\n", 18));
        this.fragments.push(new Fragment(userService.erudit, ["bâtisseurstélékinésiebeaucoup", "batisseurstelekinesiebeaucoup", "bâtisseurstelekinesiebeaucoup", "batisseurstélékinesiebeaucoup", "batisseurstélekinesiebeaucoup", "batisseurstelékinesiebeaucoup"], "\uD83D\uDCD6 Le grand livre des pouvoirs: Pouvoir des Nemateliques \uD83D\uDCD6", "<p>Les N\u00E9mateliques sont un peuple b\u00E2tisseurs. Leur diff\u00E9rents pouvoirs de t\u00E9l\u00E9kin\u00E9sie&nbsp;les ont beaucoup&nbsp;aid\u00E9 dans cette t\u00E2che.</p>\n<p>Les N\u00E9mateliques sont organis\u00E9 en tribus et chacune a d\u00E9velopp\u00E9 des mani\u00E8res diff\u00E9rentes d\u2019utiliser les pouvoirs de t\u00E9l\u00E9kin\u00E9sie, avec des syntaxe sp\u00E9cifique et des effets tr\u00E8s variables.</p>\n<p>Le Natagasm est l\u2019art de d\u00E9placer des objets \u00E0 plusieurs. Les objets peuvent \u00EAtre \u00E9normes, comme des rochers, pierres, poutre, ou m\u00EAme des masses d\u2019eau ou des outils.</p>\n<p>Cette technique permet de d\u00E9placer des tr\u00E8s gros objets mais tr\u00E8s lentement. Mais les shamans ont d\u00E9velopp\u00E9 des moyens de mettre en commun les pouvoirs des dizaines, centaines ou m\u00EAme milliers d\u2019individus. La vitesse de d\u00E9placement des objets ou leur masse augmente sensiblement avec le nombre et la puissance des individus.</p>\n<p>Ces techniques de fusion de pouvoir mentale sont uniques.</p>\n<p>Le Natagasm n\u00E9cessit\u00E9 de voir l\u2019objet et les individus peuvent seulement pousser ou tirer l\u2019objet. Ainsi les ing\u00E9nieurs doivent concevoir des structures ou \u00E9chafaudages et r\u00E9partir les b\u00E2tisseurs en plusieurs groupe pour contr\u00F4ler les trajectoirs complexes des outils ou mat\u00E9riaux de constructions dans les chantiers.</p>\n<p>Le Gadoulisme permet lui de t\u00E9l\u00E9porter des objets. Contrairement aux autres techniques de t\u00E9l\u00E9kin\u00E9sie, les objets d\u00E9plac\u00E9s par le Gadoulisme le sont instantan\u00E9ment. L'objet d\u00E9plac\u00E9 suis tout de m\u00EAme un chemin mais ce chemin peut \u00EAtre partiellement obstru\u00E9 : il est en effet possible de traverser du verre, du bois ou m\u00EAme des mat\u00E9riaux plus dense si le t\u00E9l\u00E9kin\u00E9siste est tr\u00E8s puissant.</p>\n<p>Le Gadoulisme ne n\u00E9cessite ni de voir l\u2019objet, ni de voir le chemin, mais une mentalisation accompagn\u00E9 d\u2019un incantation permet de d\u00E9signer le trajet. Il est alors possible d\u2019envoyer ou r\u00E9cup\u00E9rer un objet, au choix.</p>\n<p>Les objets d\u00E9plac\u00E9 par le Gadoulisme doivent \u00EAtre de petite taille. La masse d'objets d\u00E9plac\u00E9 d\u00E9pend de la puissance du praticien.</p>\n<p>Le Nijika est une pratique ancienne mais tr\u00E8s difficile pratiqu\u00E9e que par quelque individus. Elle reste myst\u00E9rieuse mais elle consiste \u00E0 d\u00E9placer des milliers de particules \u00E0 la fois, parfois invisible et de ressentir leur mouvement et ainsi d\u00E9velopper une visualisation \u00E0 plusieurs \u00E9chelle. En prenant des particules tr\u00E8s group\u00E9s il est possible de sentir la structure de choses microscopique mais il est possible d\u2019\u00E9tendre l\u2019\u00E9chelle en sacrifiant de la pr\u00E9cision pour palper une personne, une maison, une ville, ou m\u00EAme un paysage.</p>\n", 19));
        this.fragments.push(new Fragment(userService.erudit, ["pouvoirincroyablementhumains"], "\uD83D\uDCD6 Le grand livre des pouvoirs: Cas particulier des humains \uD83D\uDCD6", "<p>Les humains&nbsp;sont incroyablement&nbsp;faible. Ils n\u2019ont aucun pouvoir&nbsp;magique.</p>\n<p>Leurs capacit\u00E9s physiques ne sont pas non plus extraordinaires. De plus, la plupart des humains ne sont pas au courant de l'existence de la magie, et des autres plans. C\u2019est un plan qui n\u2019attire pas beaucoup de convoitise, et il est rest\u00E9 assez inaper\u00E7u pendant plusieurs si\u00E8cles.</p>\n<p>Du fait de l'absence de magie, le plan des humains et id\u00E9al pour cr\u00E9er des liens et des portails. Les portails vers le plan humain laissent tr\u00E8s bien passer la magie, et sa puissance d\u00E9cro\u00EEt assez lentement quand on s\u2019\u00E9loigne du portail.</p>\n<p>\u00C7a en fait plan id\u00E9al pour les rencontres diplomatiques, les r\u00E9fugi\u00E9s politiques, ou m\u00EAme des vacances d\u00E9paysantes. Une r\u00E8gle tacite existe \u00E0 travers l\u2019ensemble des plans connus, le plan des humains, et la terre reste une zone neutre. Depuis environ 2 d\u00E9cennies cette r\u00E8gle est devenue officielle pendant le \u2018Grand Sommet Interplanaire pour une paix magique\u2019 de 1912.</p>\n<p>Le plan des humains, et la terre commencent \u00E0 \u00EAtre de plus en plus remarqu\u00E9s. Leur manque de magique et compens\u00E9 par leur progr\u00E8s technologique et leur puissance militaire, comme ils ont pu le d\u00E9montrer lors d\u2019un immense conflit plan\u00E9taire il y a quelques ann\u00E9es.</p>\n", 20));
        this.fragments.push(new Fragment(userService.erudit, ["planairecodexmecaniqueportailplan", "planairecodexmécaniqueportailplan"], "\uD83D\uDCD6 Codex de M\u00E9canique planaire \uD83D\uDCD6", "<p>Ce codex&nbsp;de m\u00E9canique&nbsp;planaire&nbsp;explique les rudiments de la cr\u00E9ation de portail&nbsp;entre les plan.</p>\n<p>Les plans peuvent \u00EAtre d\u00E9crits comme des mondes parall\u00E8les. Chaque plan a sa magie, ses peuples, ses pouvoirs.</p>\n<p>[...]</p>\n<p>Les plans sont souvent isol\u00E9 les un des autres mais il est possible de les relier avec un lien. Un lien entre les plans se cr\u00E9e quand un portail est ouvert entre 2 plans.</p>\n<p>Le lien a besoin d\u2019un point d\u2019accroche sur chaque plan et une fois un portail ouvert il est difficile d\u2019en ouvrir ailleurs que sur le lien.</p>\n<p>[...]</p>\n<p>L\u2019ouverture initial d\u2019un portail est quelques chose de tr\u00E8s complexe avec des r\u00E8gles pr\u00E9cises. Une fois le 1er portail ouvert et le lien cr\u00E9\u00E9, il est plus facile de rouvrir le portail mais maintenir un portail ouvert plus de quelques secondes est co\u00FBteux.</p>\n<p>[...]</p>\n<p>Quand un lien est cr\u00E9\u00E9, le pouvoir des 2 plans fuite par le lien et r\u00E9pand un champ de magie dans les alentours du points d'ancrage du portail. L\u2019\u00E9tendu du champ d\u00E9pend de beaucoup de param\u1EC1tre mais plus la magie locale est faible et plus le lien va fuiter vers ce plan.</p>\n<p>[...]</p>\n<p>Les liens peuvent \u00EAtre d\u00E9truits, en faisant passer une onde de choc quand un portail est ouvert. Pour limiter les risques d\u2019attentat, m\u00EAme les plus riches n\u2019ouvre de portails que quand cela est n\u00E9cessaire. Lorsqu\u2019un lien est d\u00E9truit, la zone de magie qui avait fuit\u00E9 dispara\u00EEt presque instantan\u00E9ment laissant souvent les individus sans pouvoirs. Les objets magiques priv\u00E9 de liens comme les livres ou arme magique deviennent inerte. La destruction de lien est donc extr\u00EAmement dangereuse.</p>\n<p>[...]</p>\n<p>L\u2019art de la cr\u00E9ation d\u2019un lien et de portail s\u2019appele la Thyrapoedae.</p>\n<p>[...]</p>\n<p>Les points d\u2019accroche de lien et des portails doivent r\u00E9pondre \u00E0 des crit\u00E8res bien pr\u00E9cis et doivent pr\u00E9senter des \u00E9l\u00E9ments physique ou symbolique sp\u00E9cifique aux plans \u00E0 relier. On appel ses \u00E9l\u00E9ments physique ou symbolique des marqueurs. De mani\u00E8re g\u00E9n\u00E9ral il faut rassembler les marqueurs des 2 plans des 2 cot\u00E9 du lien. Cela rend parfois l\u2019ouverture difficile et il est n\u00E9cessaire de voyager d\u2019abord depuis un autre plan pour relier 2 plans difficiles \u00E0 relier.</p>\n<p>Par exemple pour relier le plan psych\u00E9ides avec le plan sir\u00E9nien ils faut des points d\u2019ancrage</p>\n<p>Voici les marqueurs pour les principaux plans connu &nbsp;:</p>\n<ul>\n<li>Plan des Psych\u00E9\u00EFdes : </li>\n<li>Plan des Sirin\u00E9en : source de chaleur intense, relative \u00E0 l\u2019environnement local : lave, feu, \u00E9clair, etc ... </li>\n<li>Plan des Dahona : embl\u00E8me de puissance, souvent une repr\u00E9sentation de leur chef de guerre </li>\n<li>Plan des Nemateliques : Une activit\u00E9 de chimie organique, comme de la vie ou une r\u00E9action chimique </li>\n<li>Plan des Humains : de grande quantit\u00E9 d\u2019eau </li>\n</ul>\n", 21));
        this.fragments.push(new Fragment(userService.voyant, ["ruisseau", "lit", "nid", "oiseau"], "Paris - 4 juillet 1924 - Un homme gentil", "<p><strong class=\"people\">MONSTRE est de retour. Il ne vient pas souvent, mais quand il vient il s\u2019occupe toujours de moi. Je dois avoir 4 ou 5 ans. C\u2019est un de mes plus vieux souvenir. Je me rappel <strong class=\"people\">MONSTRE qui me donne une <strong class=\"mc\">sucette. Apr\u00E8s il va voir maman et il ne faut pas les d\u00E9ranger.</p>\n", 0));
        this.fragments.push(new Fragment(userService.voyant, ["plage", "soleil", "maria"], "Paris - 21 d\u00E9cembre 1930 - L\u2019incendie", "<p>Il y a un <strong class=\"mc\">incendie dans l\u2019immeuble en face. \u00C7a fait beaucoup de fum\u00E9es. Maman m\u2019a dit de rester \u00E0 l'int\u00E9rieur, mais j\u2019ai envie de mieux voire.</p>\n<p>...</p>\n<p>Je suis dans la rue. L\u2019odeur de feu est \u00E9pouvantable. Peut \u00EAtre que j\u2019aurais mieux fait de rester \u00E0 la maison finalement. En plus on ne voit pas mieux d\u2019ici.</p>\n<p>J\u2019ai la t\u00EAte qui tourne, probablement la fum\u00E9e.</p>\n<p>\u2026</p>\n<p>Je vois des images bizarres devant mes yeux. Des flashs, tr\u00E8s nettes, mais qui partent aussit\u00F4t. J\u2019ai du mal \u00E0 comprendre ce qui m\u2019arrive, maman m\u2019avait bien dit de ne pas m\u2019approcher des fum\u00E9es. Je vois <strong class=\"people\">MONSTRE en train de discuter avec <strong class=\"people\">AGENT. Ils sont sur une <strong class=\"mc\">plage. Le ciel est rouge et il y a deux soleils. C\u2019est certainement une hallucination.</p>\n", 1));
        this.fragments.push(new Fragment(userService.voyant, ["pouvoir"], "Paris, poste de police - 22 mai 1933 - Interrogatoire et visions", "<p>Maman doit aller parler avec une dame au poste de police. Elle dit qu\u2019elle n\u2019a trouv\u00E9 personne pour me garder alors je dois venir avec elle et \u00EAtre bien sage.</p>\n<p>Quand on arrive au poste de police on va dans une petite pi\u00E8ce toute sombre. Il y a <strong class=\"people\">TELE et un <strong class=\"mc\">policier&nbsp;(<strong class=\"people\">FLIC). <strong class=\"people\">FLIC n\u2019arr\u00EAte pas de fumer et la fum\u00E9e me pique les yeux. &nbsp;Maman me dit d\u2019aller attendre sur la chaise dans le coin de la pi\u00E8ce et de ne pas faire de bruit.</p>\n<p>Je m\u2019ennuie sur cette chaise \u2026 J\u2019ai la t\u00EAte qui tourne. Je commence \u00E0 voir des images, comme lors de l\u2019incendi. Cette fois les images reste plus longtemps, et je peux parfois entendre ce que le gens fonts. Je vois <strong class=\"people\">TELE. Elle est assise par terre, en tailleur. Il y a un genre d\u2019\u00E9toile dessin\u00E9 devant elle. Elle se parle \u00E0 elle m\u00EAme, comme si elle calculait ou planifiait quelque chose :</p>\n<p>\u201C- D\u2019abord je dois avancer de 3 m\u00E8tres, puis tourner vers la gauche puis \u2026 \u201C</p>\n<p>Et ensuite elle se mets \u00E0 chanter ou psalmodier quelque chose :</p>\n<p>\u201C- Gadoola boo ha ha bibbidi boo ...\u201D</p>\n<p>Et tout d\u2019un coup plein de <strong class=\"mc\">bagues et de colliers en or apparaissent devant elle, sur l\u2019\u00E9toile.</p>\n<p>Je crois que ce que je vois c\u2019est vraiment pass\u00E9. Je crois que <strong class=\"people\">TELE a vol\u00E9 des bijoux en utilisant de la <strong class=\"mc\">magie&nbsp;! Je vais le dire \u00E0 maman.</p>\n", 2));
        this.fragments.push(new Fragment(userService.voyant, ["internat", "interna", "internats"], "Paris, Internat - 15 juin 1933 - Une occasion de sortir", "<p><strong class=\"people\">TELE est venue me voir \u00E0 l\u2019\u00E9cole aujourd\u2019hui. Elle m\u2019a dit qu\u2019elle connaissait mon secret. Elle sait que je peux voir des choses. Elle a essay\u00E9 de me fait peur, elle a dit que si le gens l\u2019apprenait, je serais expuls\u00E9 de l'<strong class=\"mc\">internat. Moi je m\u2019en fiche d\u2019\u00EAtre vir\u00E9, mais si Steve l\u2019apprend, il ne voudra jamais sortir avec moi.</p>\n<p><strong class=\"people\">TELE veux que je l\u2019aide \u00E0 faire quelque chose ce soir :</p>\n<p>\u201C- Il y a une <strong class=\"mc\">clef, qui ressemble \u00E0 \u00E7a dans une maison, j\u2019ai besoin que tu trouve dans quelle pi\u00E8ce elle est\u201D. Elle me montre une image de la <strong class=\"mc\">clef.</p>\n<p>Elle a dit qu\u2019elle m\u2019aidera \u00E0 sortir du bahut. Je vais accepter, pour qu\u2019elle me laisse tranquille. Et \u00E7a me fera une bonne occasion de sortir :)</p>\n", 3));
        this.fragments.push(new Fragment(userService.voyant, ["mouchoir"], "Paris, pas tr\u00E8s loin de l\u2019internat - la nuit du 15 juin 1933 - La clef", "<p><strong class=\"people\">TELE m\u2019a fait sortir, sans probl\u00E8me. Elle est super dou\u00E9e avec les serrures. Elle m\u2019a conduit dans une ruelle, derri\u00E8re une grande maison.</p>\n<p>Je suis venu avec mon briquet et un vieux <strong class=\"mc\">mouchoir, pour faire de la fum\u00E9e. Je m\u2019assoie par terre, et fait br\u00FBler mon mouchoire, en esp\u00E9rant que \u00E7a marche. Je commence \u00E0 voir quelques images. Je ne sais pas trop comment je peux savoir o\u00F9 est cette <strong class=\"mc\">clef. <strong class=\"people\">TELE me dit de me concentrer sur l\u2019image de la <strong class=\"mc\">clef. J\u2019essaye, mais la vision dispara\u00EEt. <strong class=\"people\">TELE me fait recommencer plusieurs fois, et au bout de la troisi\u00E8me, je vois la <strong class=\"mc\">clef, dans un tiroir dans le bureau. Je suis contente, c\u2019est la premi\u00E8re fois que j\u2019arrive \u00E0 utiliser mes visions pour quelque chose d\u2019utile. Et en fait <strong class=\"people\">TELE est plut\u00F4t sympathique. Elle n\u2019a pas l\u2019aire press\u00E9e de retrouver la <strong class=\"mc\">clef et on discute de nos pouvoirs sur le chemin du retour.</p>\n", 4));
        this.fragments.push(new Fragment(userService.voyant, ["échange", "echange", "échenge", "echenge"], "Paris, internat - 31 janvier 1935 - Mme Pollack", "<p>Je suis convoqu\u00E9e par le principal. On est venu me chercher pendant la classe. C\u2019\u00E9tait des Math, du coup je suis plut\u00F4t contente d\u2019avoir une excuse pour partir. Je ne sais pas ce que le principal me veux. J\u2019ai \u00E9t\u00E9 plut\u00F4t sage ces dernier temps. Il m\u2019attends, et il y a une dame (<strong class=\"people\">ERUDIT) avec lui dans le bureau. Il me dit, en montrant <strong class=\"people\">ERUDIT :</p>\n<p>\u201C- Ha, <strong class=\"mc\">Rina, je t\u2019ai convoqu\u00E9 parce que Mme <strong class=\"mc\">Pollack a quelque chose d\u2019important \u00E0 te dire.\u201D</p>\n<p>Puis, en se tournant vers <strong class=\"people\">ERUDIT :</p>\n<p>\u201C- je vous laisse mon bureau. Quand vous aurez termin\u00E9, demander \u00E0 ma secr\u00E9taire de vous raccompagner. \u201D Et il sort du bureau.</p>\n<p>Je suis seule avec cette \u00E9trange dame. Elle est calme, et pos\u00E9e. Sa pr\u00E9sence est rassurante. Elle se tourne vers moi et me regarde dans les yeux :</p>\n<p>\u201C- J\u2019ai dit \u00E0 ton principal que je venais pour raison familial urgente, mais en fait je dois te parler de quelque chose de tr\u00E8s important. Je sais que tu peux avoir des visions, et que ce que tu vois et toujours vrai...\u201D</p>\n<p>\u201C- Comment savez vous \u00E7a !\u201D</p>\n<p>\u201C- \u00C7a n\u2019a pas d\u2019importance, je peux juste te dire que je sais certaines choses qui pourraient t\u2019int\u00E9resser \u00E0 propos de tes visions\u201D</p>\n<p>\u201C- C\u2019est vrai ? Vous savez comment j\u2019ai eu ce <strong class=\"mc\">pouvoir ? d\u2019o\u00F9 il vient ?\u201D</p>\n<p>\u201C- Je peux r\u00E9pondre \u00E0 beaucoup de tes questions, mais je ne pense pas que le bureau du principal soit le bon endroit. Et je suis venu parce que mon mari et moi avons besoin de ton aide.\u201D</p>\n<p>\u201C- Ok, pourquoi vous avez besoin de moi ? C\u2019est pour *voir* quelque chose ?\u201D</p>\n<p>\u201C- Oui, c\u2019est pour *voir* quelque chose. Si \u00E7a te convient, je vais trouver une excuse pour que tu puisse partir avec moi aujourd\u2019hui. Tu pourras nous rendre ce petit service et en \u00E9change, je te dirais tout ce que je sais sur tes capacit\u00E9es.\u201D</p>\n<p>\u201C- \u00C7a marche, de toute fa\u00E7on je n\u2019avais pas envie de retourner en cours de math...\u201D</p>\n", 5));
        this.fragments.push(new Fragment(userService.voyant, ["attentat", "attenta", "atenta", "atentat", "attantat", "attanta", "atanta"], "Paris, Le salon de th\u00E9 - 3 octobre 1936 - Une nouvelle mission", "<p>J\u2019ai rendez-vous avec <strong class=\"people\">ERUDIT dans ce salon de th\u00E9. J'esp\u00E8re qu\u2019elle va arriver, parce que j\u2019ai pris une table, et que je n\u2019ai pas les moyens de payer. Ha ! elle arrive :</p>\n<p>\u201C- D\u00E9sol\u00E9, <strong class=\"mc\">Rina je suis un peu en retard.\u201D</p>\n<p>\u201C- Ce n\u2019est rien madame, pourquoi vouliez vous me voire ?\u201D</p>\n<p>\u201C- J\u2019ai une nouvelle <strong class=\"mc\">mission \u00E0 te proposer. Avant de t\u2019en dire plus, il faut que je te pr\u00E9vienne que c\u2019est une <strong class=\"mc\">mission extr\u00EAmement dangereuse. Mais aussi tr\u00E8s importante, sinon je ne ferais pas appel \u00E0 toi. Tu peux donc refuser.\u201D</p>\n<p>\u201C- \u00C7a m\u2019est \u00E9gale que ce soit dangereux. Je suis partante !\u201D</p>\n<p>\u201C- Attend un peu d\u2019avoir quelques d\u00E9tails\u2026 On va essayer de d\u00E9jouer un <strong class=\"mc\">attentat, mais on risque bien d\u2019y passer nous m\u00EAme. Et on a pas encore r\u00E9ussi \u00E0 recruter tous les talents dont on a besoin. Est-tu s\u00FBr que tu veux venir ?\u201D</p>\n<p>\u201C- Si je ne viens pas vous tenterez quand m\u00EAme d'arr\u00EAter l\u2019<strong class=\"mc\">attentat, n\u2019est-ce pas ?\u201D</p>\n<p>\u201C- Oui, les enjeux sont trop importants.\u201D</p>\n<p>\u201C- Alors je viens. Vous aurez besoins de mes visions.\u201D</p>\n<p>\u201C- Tr\u00E8s bien, je pensais bien <strong class=\"mc\">pouvoir compter sur toi. L\u2019<strong class=\"mc\">attentat doit avoir lieu le 28 octobre, lors d\u2019un <strong class=\"mc\">mariage. As-tu une tenu de soir\u00E9e qui pourrait convenir \u00E0 un <strong class=\"mc\">mariage ?\u201D</p>\n<p>\u201C- Oui, je dois avoir ce qu\u2019il faut. Et je connais une personne qui a un talent pour ce genre d\u2019op\u00E9ration. Est-ce que je peux la contacter ?\u201D</p>\n<p>\u201C- On recherche quelqu\u2019un qui a des comp\u00E9tences tr\u00E8s particuli\u00E8res, mais qui sait, peut \u00EAtre que cette personne pourra convenir.\u201D <strong class=\"people\">ERUDIT ajoute en tendant sa carte :</p>\n<p>\u201C- Dites lui de me contacter directement, et assez rapidement, mais ne lui dite rien d\u2019autre.\u201C</p>\n<p>\u201C- D\u2019accord\u201D</p>\n", 6));
        this.fragments.push(new Fragment(userService.voyant, ["mariage", "marriage", "mariages"], "Paris - 6 octobre 1936 - On recrute", "<p>J\u2019ai retrouv\u00E9 <strong class=\"people\">TELE \u00E0 l'endroit habituel. Je lui ai dit que j\u2019ai \u00E9t\u00E9 contacter pour faire une <strong class=\"mc\">mission. \u00C7a se passera au ch\u00E2teau de <strong class=\"mc\">Martinvast, pendant un <strong class=\"mc\">mariage. \u00C7a \u00E0 l\u2019air dangereux, mais je pense qu\u2019ils la payeront bien. Les yeux de <strong class=\"people\">TELE se mettent \u00E0 briller. Elle aime l\u2019argent, \u00E7a se voit.</p>\n<p>Elle accepte, et je lui donne la carte de <strong class=\"people\">ERUDIT, en lui disant de la contacter rapidement pour plus de d\u00E9tails.</p>\n", 7));
        this.fragments.push(new Fragment(userService.voyant, ["suzanne", "suzane"], "Paris - 12 octobre 1936 - Une lettre", "<p>Je viens de recevoir une <strong class=\"mc\">lettre. Je l\u2019ouvre, c\u2019est sign\u00E9 <strong class=\"mc\">Roberta. Ce sont des pr\u00E9cisions pour l\u2019op\u00E9ration du 28. Elle me dit que je vais avoir un alias : <strong class=\"mc\">Suzanne. Je me r\u00E9p\u00E8te plusieurs fois le nom pour \u00EAtre s\u00FBr de ne pas l\u2019oublier. Et je br\u00FBle la <strong class=\"mc\">lettre.</p>\n", 8));
        this.fragments.push(new Fragment(userService.voyant, ["attendrai", "atendrai", "attandrai", "attendrai", "j'attendrai"], "Paris - 18 octobre 1936 - Enregistrement", "<p>Je me souviens de cette musique: </p>\n      <audio controls>\n       <source src=\"/assets/rina.ogg\" type=\"audio/ogg\">\n       <source src=\"/assets/rina.mp3\" type=\"audio/mpeg\">\n       Your browser does not support the audio element.\n     </audio>\n\n      ", 9));
        this.fragments.push(new Fragment(userService.voyant, ["mortebiere"], "Caen, Bar - Ce midi - Le briefing", "<p>Je suis dans une petite pi\u00E8ce sombre. J\u2019entends des rires et des chants de l\u2019autre c\u00F4t\u00E9 de la porte, venant d\u2019un <strong class=\"mc\">bar. On doit \u00EAtre six ou sept dans cette pi\u00E8ce, et dans la p\u00E9nombre je n\u2019arrive pas \u00E0 voir tous les visages. Je reconnais <strong class=\"people\">ERUDIT et son mari. C\u2019est lui qui organise ce briefing.</p>\n<p><strong class=\"people\">CHEF nous explique ce qu\u2019on fait ce soir, c\u2019est long, et je n\u2019\u00E9coute pas tout en d\u00E9tails :</p>\n<p>\u201C- Nous irons ce soir au ch\u00E2teaux nous infiltrer au <strong class=\"mc\">mariage de Hector de La Grande Marche et Marie Elisabeth d\u2019Autriche. Ce <strong class=\"mc\">mariage c\u2019est qu\u2019un pr\u00E9texte pour inviter une grande quantit\u00E9 de notables et dirigeants dans le but de les assassiner.</p>\n<p>Nous avons une bombe et notre seule chance d'emp\u00EAcher le massacre est de la faire exploser exactement au bon moment et au bon endroit pour \u00E9liminer les terroristes \u00E0 leur arriv\u00E9e.\u201D</p>\n<p>\u201C- Pourquoi ce n\u2019est pas la police qui s\u2019occupe de \u00E7a ?\u201D demande une femme un peu devant moi. Mais c\u2019est une voix que je connais ? Maman ! Qu\u2019est ce qu\u2019elle fait ici. Si elle me voit, elle va me passer un savon, et adieu la <strong class=\"mc\">mission ! Je comprend maintenant pourquoi il faut m\u2019appeler <strong class=\"mc\">Suzanne. Je me recule d\u2019un pas pour \u00EAtre sur que maman ne puisse pas me reconna\u00EEtre.</p>\n<p><strong class=\"people\">CHEF continue son briefing, sans s'apercevoir de rien.</p>\n<p>\u201C- Nous savons de source s\u00FBre l\u2019heure exacte o\u00F9 la bombe doit exploser. Et celle-ci est d\u2019ailleurs d\u00E9j\u00E0 configur\u00E9e\u201D</p>\n<p>\u201C- Et pour l\u2019emplacement ? C\u2019est habituellement plus simple \u00E0 savoir !\u201D Demande <strong class=\"people\">TELE.</p>\n<p>\u201C- <strong class=\"mc\">Roberta, avec l\u2019aide de <strong class=\"mc\">Suzanne se chargera de localiser l\u2019emplacement, et comme vous vous en doutez, vous serez charg\u00E9 de placer la bombe.\u201D</p>\n<p>\u201C- Ma carte servira \u00E0 ce moment ? demande maman</p>\n<p>\u201C- Oui, vous fournirez le <strong class=\"mc\">plan du ch\u00E2teau pour aider \u00E0 la localisation de l\u2019emplacement. Et de ce que vous cherchez dans le ch\u00E2teau par la m\u00EAme occasion.\u201D Mais qu\u2019est ce que maman peut bien chercher dans ce ch\u00E2teau ? Est-ce que c\u2019est en rapport avec ce tableau, la <strong class=\"mc\">vague de je ne sais plus qui ?</p>\n<p>\u201C- oui \u2026\u201D r\u00E9pond t-elle, \u201Cj\u2019ai le <strong class=\"mc\">plan, enfin partiellement dessin\u00E9. Je ne vois toujours pas vraiment en quoi vos instructions vont nous aider vu que je sais comment mon camouflage fonctionne. Si je suis interrog\u00E9 et menac\u00E9 je ne vous promet pas de ne rien r\u00E9v\u00E9ler.\u201D</p>\n<p>\u201C- Ne vous inqui\u00E9tez pas, c\u2019est l\u00E0 que notre dernier \u00E9quipier intervient\u201D <strong class=\"people\">CHEF r\u00E9pond, et continue en se tournant vers l\u2019homme \u00E0 c\u00F4t\u00E9 de moi :</p>\n<p>\u201C- Monsieur, comment dois-je vous appeler ?\u201D</p>\n<p>\u201C- Heu \u2026 Jules \u2026 oui, c\u2019est \u00E7a, Docteur Jules\u201D.</p>\n<p>\u201C- Bien docteur, vous avez la potion promise ?\u201D</p>\n<p>\u201C- Oui, bien s\u00FBr la voil\u00E0\u201D r\u00E9pond <strong class=\"people\">MONSTRE en montrant un petit flacon.</p>\n<p>C\u2019est \u00E9trange, j\u2019ai l\u2019impression de conna\u00EEtre cette personne. Je sens comme une \u00E9trange attirance vers lui.</p>\n<p>Le briefing continue, et maman distribue des invitations pour le <strong class=\"mc\">mariage, et <strong class=\"people\">TELE dis quelque chose, mais je ne suis pas concentr\u00E9e. Toute mon attention est retenu par cet homme.</p>\n", 10, ["pouvoir"]));
        this.fragments.push(new Fragment(userService.voyant, ["mémoire", "memoire"], "Sur la route de Martinvast - Il y a quelques minutes", "<p>Le ch\u00E2teau se profile au bout de l\u2019all\u00E9e. J\u2019entend quelques petites tintement, <strong class=\"people\">MONSTRE sort les fioles et commence \u00E0 les distribuer aux autres puis prend la parole :</p>\n<p>\u201C- Buvez \u00E7a maintenant, \u00E7a va mettre quelque secondes \u00E0 agir\u201D</p>\n<p>Tout le monde ouvre son falcon, je fais de m\u00EAme et boit son contenu d\u2019une traite.</p>\n<p>J\u2019ai toujours cette \u00E9trange attirance pour <strong class=\"people\">MONSTRE, c\u2019est la premi\u00E8re fois que je ressens \u00E7a. Il faut absolument que je d\u00E9couvre qui est ce type.</p>\n<p>Je dis :</p>\n<p>\u201C- Hum, c\u2019est bon ton m\u00E9dicament, docteur !\u201D</p>\n<p>Tout d\u2019un coup maman s'exclame :</p>\n<p>\u201C- <strong class=\"mc\">Rina \u2026 <strong class=\"mc\">Rina c\u2019est toi ? Arr\u00EAtez la voiture !\u201D</p>\n<p>Elle m\u2019a reconnu ! C\u2019est la faute de ce \u2018docteur\u2019 qui me fait perdre mes moyens. Elle est rouge de col\u00E8re. Quelle catastrophe ... J\u2019ai la t\u00EAte qui commence \u00E0 tourner.</p>\n", 11));
        this.fragments.push(new Fragment(userService.tele, ["pouvoir"], "Paris - 26 ao\u00FBt 1928 - La bijouterie", "<p>Je me balade place Vend\u00F4me. C\u2019est une belle soir\u00E9e d'ao\u00FBt, la lumi\u00E8re du <strong class=\"mc\">soleil couchant est magnifique. Je cherche l\u2019inspiration pour mes prochains tableaux. Je m\u2019attarde devant les vitrines, pleines de merveilles et de bijoux.</p>\n<p>Un magnifique pendentif &nbsp;en or, incrust\u00E9 de <strong class=\"mc\">diamant attire mon regard. J\u2019aimerais tellement en avoir un comme \u00E7a. Evidemment ce n\u2019est pas dans mes moyens. Je rentre quand m\u00EAme dans le magasin, juste pour voir. Je retrouve le pendentif dans une vitrine \u00E0 l'int\u00E9rieur. Je demande \u00E0 une vendeuse si je peux l\u2019essayer. Elle me regarde de la t\u00EAte au pied, et r\u00E9pond d\u2019un air un peu d\u00E9daigneux : \u201CJe ne crois pas que \u00E7a va \u00EAtre possible.\u201D Elle doit probablement savoir que je ne peux pas me l\u2019acheter. Je m\u2019en fiche, je suis comme captiv\u00E9e par l\u2019objet. Il brille, il est magnifique, dans cet instant, c\u2019est tout ce que je veux. Je ne sais pas combien de temps je reste l\u00E0 captiv\u00E9 par cette merveille. J\u2019ai l\u2019impression que mes l\u00E8vres bougent, est ce que je suis en train de parler ?</p>\n<p>Tout d\u2019un coup j\u2019ai l\u2019impression de me r\u00E9veiller, le pendentif dans la main. Comment est-il arriv\u00E9 l\u00E0. C\u2019est comme s\u2019il s\u2019est t\u00E9l\u00E9port\u00E9 ! La vendeuse me voit avec le pendentif et s'exclame : \u201CEt l\u00E0, je vous avais dit de ne pas y toucher ! Comment l\u2019avez vous pris, toutes ces vitrines sont ferm\u00E9es \u00E0 <strong class=\"mc\">clef ?\u201D. Je laisse tomber le pendentif, et m\u2019enfuie en courant.</p>\n", 0));
        this.fragments.push(new Fragment(userService.tele, ["gadoulisme"], "Paris - 27 ao\u00FBt 1928 - T\u00E9l\u00E9kin\u00E9sie", "<p>Je suis encore troubl\u00E9e par l\u2019incident d\u2019hier, avec le pendentif. Comment est il arriv\u00E9 dans ma main. C\u2019est clairement surnaturel, j\u2019en suis s\u00FBre. Et j\u2019ai senti comme un <strong class=\"mc\">pouvoir qui s\u2019activait en moi. Il faut que je tire \u00E7a au claire. Je une amie que crois dans le spiritisme, peut \u00EAtre qu\u2019elle pourra m\u2019aider. Je vais la voir cette apr\u00E8s midi.</p>\n<p>...</p>\n<p>Je lui ai racont\u00E9 mon aventure d\u2019hier. Elle \u00E9tait surexcit\u00E9e, en entendant \u00E7a. Elle a tout de suite sortie un vieux livre en disant qu\u2019il parlait de <strong class=\"mc\">t\u00E9l\u00E9kin\u00E9sie, et que \u00E7a ressemble \u00E0 ce que j\u2019ai fait hier. J\u2019ai pris le livre et je vais <strong class=\"mc\">pouvoir l\u2019\u00E9tudier au calme.</p>\n<p>\u2026</p>\n<p>D\u2019apr\u00E8s le livre, pour transporter un objet, il faut mat\u00E9rialiser un point d\u2019ancrage, puis prononcer une incantation pour soit amener un objet vers soit soit envoyer un objet ailleurs. J\u2019ai vraiment pas bien compris comment marche l\u2019incantation. Il semblerait que l\u2019incantation doit d\u00E9crire le chemin qu\u2019il faut faire pour aller vers l\u2019objet recherch\u00E9. C\u2019est vraiment compliqu\u00E9, et \u00E7a ne ressemble pas trop \u00E0 ce que j\u2019ai fait. Je vais faire quand m\u00EAme des essais on ne sait jamais.</p>\n<p>Je m\u2019assoie par terre et je dessine devant moi un pentacle. \u00C7a sera mon point d\u2019ancrage. Je pose un petit <strong class=\"mc\">pinceau sur le pentacle, et j\u2019essaie de l\u2019envoyer un peu plus loin, en face de moi. Je ferme les yeu, me concentre et tente l\u2019incantation suivante :</p>\n<p>\u201C- Sala boo la la gadoola\u201D. Je rouvre les yeux, et \u00E7a a march\u00E9 ! Le <strong class=\"mc\">pinceau c\u2019est d\u00E9plac\u00E9 d\u2019environ deux m\u00E8tres. C\u2019est incroyable ! Bon je n\u2019ai pas compris comment \u00E7a marche, l\u2019incantation \u00E9tait directement \u00E9crite comme \u00E7a dans le livre. Voyons si j\u2019arrive \u00E0 faire revenir le <strong class=\"mc\">pinceau. Le livre indique l\u2019incantation inverse :</p>\n<p>\u201C- Gadoola boo la la Sala\u201D. \u00C7a fonctionne ! Le <strong class=\"mc\">pinceau est revenu \u00E0 sa position initiale. Par contre ces simples incantations m\u2019ont \u00E9puis\u00E9.</p>\n<p>Je d\u00E9cide de relire le livre pour essayer de comprendre tout ce que je peux faire. Apparemment chaque mot de l\u2019incantation a une signification. Et l\u2019incantation doit d\u00E9crire le chemin que prend l\u2019objet. Il y a une histoire de vitesse, et pour les virages il faut utiliser les mot \u201Cbobbidi\u201D et \u201Cbibbidi\u201D. Et je dois <strong class=\"mc\">pouvoir faire passer les objets \u00E0 travers les vitres et le bois (mais pas les murs).</p>\n<p><strong class=\"mc\">POUVOIR <strong class=\"people\">TELE DEBLOQUE</p>\n", 1));
        this.fragments.push(new Fragment(userService.tele, ["policier"], "Paris, poste de police - 22 mai 1933 - Arrestation", "<p>Je me suis fait attrap\u00E9e. Pas de chance, j\u2019avais le <strong class=\"mc\">plan parfait. Mon contact m\u2019avait dit exactement o\u00F9 \u00E9tait les bijoux. Je commence \u00E0 vraiment bien ma\u00EEtriser la <strong class=\"mc\">t\u00E9l\u00E9kin\u00E9sie. J\u2019ai r\u00E9ussi du premier coup. Et paf, <strong class=\"people\">FLIC m\u2019attrape la main dans le sac. Comment a t-il su ce que j\u2019\u00E9tais en train de faire ?</p>\n<p>Je suis dans une salle d'interrogatoire, <strong class=\"people\">FLIC essaye de me faire parler. Mais je sais bien que tant que je ne dis rien, je ne risque rien. Ils ne peuvent pas m\u2019envoyer en prison s\u2019ils ne savent pas comment j\u2019ai pu entrer en possession des bijoux.</p>\n<p><strong class=\"people\">FLIC fait entrer <strong class=\"mc\"><strong class=\"people\">JOURNALISTE dans ma salle d'interrogatoire. Et elle est venue avec <strong class=\"people\">VOYANTE, une gamine. \u00C7a doit \u00EAtre sa fille. Je vais lui raconter les m\u00EAmes truc qu\u2019au <strong class=\"mc\">policier. \u201CJ\u2019ai trouv\u00E9 ces bijoux dans une poubelle, je n\u2019ai rien fait \u2026\u201D</p>\n", 2, ["pouvoir"]));
        this.fragments.push(new Fragment(userService.tele, ["magique", "magie"], "Paris, poste de police - 22 mai 1933 - Interrogatoire", "<p>Elle semble pas tr\u00E8s bien. Personne ne fait attention a <strong class=\"people\">VOYANTE, mais moi je l\u2019ai rep\u00E9r\u00E9e. On dirait qu\u2019elle est en trance. Peut \u00EAtre qu\u2019elle a un <strong class=\"mc\">pouvoir elle aussi.</p>\n<p>\u2026</p>\n<p>Bon ils en ont fini avec moi, je vois qu\u2019ils ne sont pas convaincu de mes arguments, mais ils ne peuvent pas faire grand chose. Je souris. Ils sont en train de sortir. La gamine se l\u00E8ve, mais avant de sortir elle dit \u00E0 <strong class=\"mc\"><strong class=\"people\">JOURNALISTE :</p>\n<p>\u201C- Je sais comment elle a fait, elle a utilis\u00E9 son <strong class=\"mc\">pouvoir <strong class=\"mc\">magique&nbsp;! \u201D</p>\n<p><strong class=\"people\">FLIC a eu l\u2019air \u00E9tonn\u00E9, mais <strong class=\"mc\"><strong class=\"people\">JOURNALISTE s'esclaffe que la <strong class=\"mc\">magie \u00E7a n\u2019existe pas et qu\u2019elle ferait mieux d\u2019\u00EAtre plus attentive \u00E0 l\u2019\u00E9cole.</p>\n", 3));
        this.fragments.push(new Fragment(userService.tele, ["peinture", "pinceau"], "Paris - 15 juin 1933 - Internat", "<p>Mes derni\u00E8res aventures nocturnes n\u2019\u00E9taient pas d\u2019un grand succ\u00E8s. J\u2019ai bien r\u00E9ussi \u00E0 voler quelques pi\u00E8ces. Rien qui me rende riche, encore moins c\u00E9l\u00E8bre. J\u2019ai m\u00EAme plus de succ\u00E8s avec mes peintures.</p>\n<p>Mais ce soir c\u2019est diff\u00E9rent. J\u2019ai eu un super tuyau. Il suffit de trouver une <strong class=\"mc\">clef. J\u2019ai m\u00EAme une image de la <strong class=\"mc\">clef. Malheureusement, elle est dans une maison immense, et extr\u00EAmement bien gard\u00E9e. J\u2019ai besoin d\u2019un peu d\u2019aide pour la trouver.</p>\n<p>...</p>\n<p>Je vais \u00E0 l\u2019<strong class=\"mc\">internat, c\u2019est l\u00E0 que <strong class=\"people\">VOYANTE se trouve. Je rentre sans difficult\u00E9 dans l\u2019<strong class=\"mc\">enceinte de l\u2019\u00E9cole, et je trouve <strong class=\"people\">VOYANTE assez facilement. Il faut que je trouve comment la faire travailler pour moi. Je lui dis que je sais qu\u2019elle a un <strong class=\"mc\">pouvoir, et laisse sous entendre que \u00E7a pourrait lui causer des probl\u00E8me. Je lui dis que j\u2019ai besoin d\u2019aide pour faire quelque chose ce soir. Au final, elle accepte assez vite de m\u2019accompagner.</p>\n", 4));
        this.fragments.push(new Fragment(userService.tele, ["clé", "clef", "cle"], "Internat - 15 juin 1933 - Le vol de la clef", "<p>On arrive pr\u00E8s de la maison. Je lui montre le dessin de la <strong class=\"mc\">clef&nbsp;que je cherche. Elle accepte d\u2019utiliser ses talents. Apparemment <strong class=\"people\">VOYANTE ne sais pas tr\u00E8s bien se servir de son <strong class=\"mc\">pouvoir. Elle utilise de la fum\u00E9e venant d\u2019un <strong class=\"mc\">mouchoir&nbsp;qui br\u00FBle. Ce n\u2019est certainement pas le meilleur moyen. Au bout de trois essais, elle arrive a me d\u00E9crire o\u00F9 se trouve la <strong class=\"mc\">clef. Je vais la ramener \u00E0 l\u2019\u00E9cole, j'irais chercher la <strong class=\"mc\">clef apr\u00E8s \u00E7a.</p>\n<p>Il faut que je reste en bon termes avec elle, son talent peut \u00EAtre tr\u00E8s pratique.</p>\n", 5));
        this.fragments.push(new Fragment(userService.tele, ["martinvast"], "Paris - 06 octobre 1936 - Une mission int\u00E9ressante", "<p>Je rencontre <strong class=\"people\">VOYANTE \u00E0 l\u2019endroit habituel. Je me suis prise d\u2019affection pour cette petite. Elle a quelque chose d\u2019important \u00E0 me dire, je la vois tr\u00E9pigner d'impatience.</p>\n<p>Elle me dit qu\u2019elle a une <strong class=\"mc\">mission, au ch\u00E2teau <strong class=\"mc\">Martinvast. C\u2019est int\u00E9ressant, cet endroit doit regorger de richesses. Il faut absolument que je profite de l\u2019occasion pour r\u00E9cup\u00E9rer quelque chose de pr\u00E9cieux. Ha ! et en plus je vais \u00EAtre grassement pay\u00E9. Elle me tend une carte de visite en me disant d\u2019envoyer une <strong class=\"mc\">lettre&nbsp;\u00E0 cette personne, pour les d\u00E9tails.</p>\n", 6));
        this.fragments.push(new Fragment(userService.tele, ["télékinésie", "télékinésiste", "telekinesi"], "Paris - 12 octobre 1936 - Formule", "<p>J\u2019ai re\u00E7u une <strong class=\"mc\">lettre de la part de <strong class=\"people\">ERUDIT. Elle me demande d\u2019apprendre par coeur une formule de <strong class=\"mc\">t\u00E9l\u00E9kin\u00E9sie pour r\u00E9cup\u00E9rer des livres depuis un lieu pr\u00E9d\u00E9termin\u00E9. Il faudra se tourner vers l\u2019ouest puis lancer la formule pour suivre ce trajet :</p>\n<p>Hum, la formule doit \u00EAtre :</p>\n<p>Je vais tester la formule ce soir dans la rue.</p>\n<p class=\"italique\">Bien jou\u00E9, tu te souviens de ton pouvoir de t\u00E9l\u00E9kin\u00E9sie. <a href=\"#/tele\">Tu peux t'entrainer ici.</a></p>\n", 7));
        this.fragments.push(new Fragment(userService.tele, ["mortebiere"], "Caen, Bar - Ce midi - Le briefing", "<p>Je suis dans une petite pi\u00E8ce sombre. J\u2019entends des rires et des chants de l\u2019autre c\u00F4t\u00E9 de la porte, venant d\u2019un <strong class=\"mc\">bar. On doit \u00EAtre six ou sept dans cette pi\u00E8ce, et dans la p\u00E9nombre je n\u2019arrive pas \u00E0 voir tous les visages. Je reconnais <strong class=\"people\">ERUDIT et la personne \u00E0 cot\u00E9 doit \u00EAtre son mari. Il commence la r\u00E9union en disant :</p>\n<p>\u201C- Bonjour \u00E0 tous. Merci d\u2019\u00EAtre l\u00E0 \u00E0 l\u2019heure. Pour des raisons de s\u00E9curit\u00E9, vous n\u2019avez pas \u00E9t\u00E9 tenu au courant de la nature exacte de cette op\u00E9ration. Normalement on vous a pr\u00E9venu que la <strong class=\"mc\">mission \u00E9tait dangereuse.\u201D</p>\n<p>\u201C- Oui, ils ont tous accept\u00E9 en connaissance de cause.\u201D &nbsp;confirme <strong class=\"people\">ERUDIT</p>\n<p>\u201C- Le but de notre op\u00E9ration est d'emp\u00EAcher un <strong class=\"mc\">attentat, et de neutraliser tous les terroristes. Nous irons ce soir au ch\u00E2teaux nous infiltrer au <strong class=\"mc\">mariage de Hector de La Grande Marche et Marie Elisabeth d\u2019Autriche. Ce <strong class=\"mc\">mariage c\u2019est qu\u2019un pr\u00E9texte pour inviter une grande quantit\u00E9 de notable et dirigeant dans le but de les assassiner.</p>\n<p>Nous savons que l\u2019<strong class=\"mc\">attentat surviendra quand tout le monde sera rassembl\u00E9 dans la grande salle, \u00E0 partir de minuit. Nous avons une bombe et notre seule chance d'emp\u00EAcher le massacre est de la faire exploser exactement au bon moment et au bon endroit pour \u00E9liminer les terroristes \u00E0 leur arriv\u00E9e.\u201D</p>\n<p>\u201C- Pourquoi ce n\u2019est pas la police qui s\u2019occupe de \u00E7a ?\u201D &nbsp;demande une dame (<strong class=\"mc\"><strong class=\"people\">JOURNALISTE)</p>\n<p>\u201C- C\u2019est une <strong class=\"mc\">mission d\u00E9licate, et les instances dirigeantes pr\u00E9f\u00E8res ne pas \u00EAtre impliqu\u00E9es. C\u2019est pour \u00E7a que nous sommes charg\u00E9s de r\u00E9soudre le probl\u00E8me discr\u00E8tement.\u201D r\u00E9pond <strong class=\"people\">CHEF.</p>\n<p>J\u2019essaye de faire avancer la r\u00E9union, et je demande :</p>\n<p>\u201C- Et je suppose que vous savez comment faire ?\u201D</p>\n<p>\u201C- Oui, nous savons de source s\u00FBre l\u2019heure exacte o\u00F9 la bombe doit exploser. Et celle-ci est d\u2019ailleurs d\u00E9j\u00E0 configur\u00E9e\u201D je r\u00E9pond en montrant la valise sur la table pr\u00E8s de <strong class=\"people\">SOLDAT</p>\n<p>\u201C- Et pour l\u2019emplacement ? C\u2019est habituellement plus simple \u00E0 savoir !\u201D</p>\n<p>\u201C- <strong class=\"mc\">Roberta, avec l\u2019aide de <strong class=\"mc\">Suzanne se chargera de localiser l\u2019emplacement, et comme vous vous en doutez, vous serez charg\u00E9 de placer la bombe.\u201D Evidemment je vais devoir placer la bombe.&nbsp;</p>\n<p>\u201C- Ma carte servira \u00E0 ce moment ? demande <strong class=\"mc\"><strong class=\"people\">JOURNALISTE</p>\n<p>\u201C- Oui, vous fournirez le <strong class=\"mc\">plan du ch\u00E2teau pour aider \u00E0 la localisation du por\u2026 de l\u2019emplacement. Et de ce que vous cherchez dans le ch\u00E2teau par la m\u00EAme occasion.\u201D</p>\n<p>Tiens apparemment <strong class=\"people\">CHEF allait dire quelque chose d\u2019autre. Il nous cache des choses, mais ce n\u2019est pas bien \u00E9tonnant. Et <strong class=\"mc\"><strong class=\"people\">JOURNALISTE cherche quelque chose, elle n\u2019est pas toute blanche non plus. Peut \u00EAtre que \u00E7a a de la valeure !&nbsp;</p>\n<p><strong class=\"people\">CHEF se tourne vers la derni\u00E8re personne tapie dans l\u2019ombre.</p>\n<p>\u201C- Monsieur, comment dois-je vous appeler ?\u201D</p>\n<p>\u201C- Heu \u2026 Jules \u2026 oui, c\u2019est \u00E7a, Docteur Jules\u201D</p>\n<p>\u201C- Bien docteur, vous avez la potion promise ?\u201D</p>\n<p>\u201C- Oui, bien s\u00FBr la voil\u00E0\u201D r\u00E9pond <strong class=\"people\">MONSTRE en montrant un petit flacon.</p>\n<p>\u201C- Juste avant d\u2019arriver au ch\u00E2teau, nous allons boire de cette potion. Ses effets sont tr\u00E8s efficaces et nous permettront de <strong class=\"mc\">pouvoir mentir et r\u00E9sister aux interrogatoire bien plus efficacement.\u201C</p>\n<p>\u00C7a me parait louche cette histoire de potion ...</p>\n<p><strong class=\"people\">CHEF&nbsp;se tourne \u00E0 nouveau vers <strong class=\"mc\"><strong class=\"people\">JOURNALISTE et lui demande :</p>\n<p>\u201C- Ah ! Avez-vous les invitations ?\u201D</p>\n<p>Elle hoche la t\u00EAte et <strong class=\"people\">CHEF prend les cartons qu\u2019elle lui tend.</p>\n<p>\u201C- Gardez en une pour vous\u201D</p>\n<p>Il distribue les invitation, apparemment je n\u2019en ai pas, je dois \u00EAtre sur la m\u00EAme invitation que <strong class=\"people\">VOYANTE.</p>\n<p><strong class=\"people\">CHEF semble avoir fini, il demande si on a des questions. Il a oubli\u00E9 un \u00E9l\u00E9ment assez important :</p>\n<p>\u201C- Avez-vous mon paiement ?\u201D je demande</p>\n<p>\u201C- Oui, voici la 1er partie\u201D je dis en sortant une petite bourse de ma poche. \u201CComme convenue, je vous donne la suite en sortant du chateaux\u201D</p>\n", 8, ["pouvoir"]));
        this.fragments.push(new Fragment(userService.tele, ["mémoire", "memoire"], "Sur la route de Martinvast - Il y a quelques minutes", "<p>Le ch\u00E2teau se profile au bout de l\u2019all\u00E9e. J\u2019entend quelques petites tintement, <strong class=\"people\">MONSTRE sort les fioles et commence \u00E0 les distribuer aux autres puis prend la parole :</p>\n<p>\u201C- Buvez \u00E7a maintenant, \u00E7a va mettre quelque secondes \u00E0 agir\u201D</p>\n<p>Tout le monde ouvre son falcon, je vois que <strong class=\"people\">CHEF boit son flacon, \u00E7a me rassure et je fais de m\u00EAme. Je reste suspicieuse malgr\u00E9 tout. <strong class=\"people\">MONSTRE n\u2019a pas bu le contenu de sa <strong class=\"mc\">fiole ! C\u2019est un pi\u00E8ge, il nous a tous empoisonn\u00E9 ! Je m\u2019exclame :</p>\n<p>\u201C- C\u2019est un pi\u00E8ge !\u201D</p>\n", 9));
        this.fragments.push(new Fragment(userService.journalist, ["journaliste", "presse", "louise", "..."], "Paris - 24 novembre 1918 - Une soir\u00E9e torride", "<p>J\u2019arrive au <strong class=\"mc\">bar, vers 20h, <strong class=\"people\">MONSTRE est d\u00E9j\u00E0 l\u00E0, il m\u2019attend. Il m\u2019a promis un scoop, et que je pourrais publier un article retentissant. On s\u2019installe \u00E0 une table, et je lui demande tout de suite de raconter son histoire. Ce qu\u2019il s\u2019empresse de faire, avec beaucoup de d\u00E9tails. C\u2019est une histoire \u00E0 dormir debout, et je lui dis :</p>\n<p>\u201C- Il faudrait des sorci\u00E8res ou des magiciens pour que ce soit possible\u201D</p>\n<p>\u201C- et pourquoi pas\u201D me r\u00E9pond-il avec un sourire.</p>\n<p>J'\u00E9clate de rire. Je comprend que tout \u00E7a c\u2019\u00E9tait une excuse pour me voire.</p>\n<p>La soir\u00E9e est vraiment charmante, c\u2019est rare rencontrer un homme qui autant de conversation. Il me dit qu\u2019il est conservateur dans un mus\u00E9e. Pourtant il a l\u2019air \u00E0 peine plus vieux que moi. Il me dit qu\u2019il est sp\u00E9cialiste de l\u2019art japonais. Il me raconte toute l\u2019histoire d\u2019un tableau magnifique, qui repr\u00E9sente une immense <strong class=\"mc\">vague.</p>\n", 0));
        this.fragments.push(new Fragment(userService.journalist, ["enceinte", "encinte", "anceinte", "ancinte"], "Paris - 28 janvier 1919 - Une nouvelle inattendu", "<p>Je crois que je suis <strong class=\"mc\">enceinte. Il faut que je lui dise, je ne sais pas comment il va r\u00E9agir. Et on est pas mari\u00E9. Quelque part, heureusement que mes parents ne sont plus l\u00E0, ils n'auraient pas support\u00E9 la nouvelle. Ha voila <strong class=\"people\">MONSTRE qui arrive. Je vais lui dire que c\u2019est lui le p\u00E8re.</p>\n<p>\u2026</p>\n<p>\u201C- Je suis <strong class=\"mc\">enceinte, tu vas \u00EAtre papa !\u201D</p>\n<p>\u201C- Comment ! Et c\u2019est moi le p\u00E8re ?? C\u2019est pas possible. J\u2019\u00E9tais s\u00FBr que ce n\u2019\u00E9tait pas possible ! Tu es sur que c\u2019est moi le p\u00E8re ?\u201D</p>\n<p>\u201C- \u00C9videmment que c\u2019est toi le p\u00E8re ! \u201D, il commence \u00E0 m\u2019\u00E9nerver, qu\u2019est ce qu\u2019il insinue l\u00E0 !</p>\n<p>\u201C- Tu sais que rester \u00E9lever un enfant n\u2019a jamais \u00E9t\u00E9 dans mes plans, et n\u2019attends pas de moi une demande en <strong class=\"mc\">mariage !\u201D</p>\n<p>\u201C- Je sais ! Et t\u2019inqui\u00E8te pas, je suis bien assez forte pour m\u2019occuper toute seule d\u2019un gamin. Tu n\u2019auras rien \u00E0 faire, tu peux m\u00EAme partir tout de suite !\u201D</p>\n", 1));
        this.fragments.push(new Fragment(userService.journalist, ["rina"], "Paris - 21 ao\u00FBt 1919 - Accouchement", "<p>Haaa, Je suis \u00E9puis\u00E9e ! \u00C7a a dur\u00E9 plus de 24 heures ! Quelle douleur, et quelle joie. Aujourd\u2019hui j\u2019ai mis au monde ma fille. Je vais l\u2019appeler <strong class=\"mc\">Rina. Peut-\u00EAtre que <strong class=\"people\">MONSTRE voudra la voire</p>\n", 2));
        this.fragments.push(new Fragment(userService.journalist, ["incendie", "insandi"], "Paris - 21 d\u00E9cembre 1930 - Incendie", "<p>Il y a un <strong class=\"mc\">incendie&nbsp;dans l'immeuble d\u2019en face. J\u2019ai dit \u00E0 <strong class=\"people\">VOYANTE de rester \u00E0 l\u2019int\u00E9rieur, mais \u00E9videmment elle ne m\u2019a pas \u00E9cout\u00E9e. Elle est descendue voir.</p>\n", 3));
        this.fragments.push(new Fragment(userService.journalist, ["clé", "clef", "cle"], "Paris - 22 mai 1933 - Un \u00E9trange vol", "<p>Un contact <strong class=\"mc\">policier (<strong class=\"people\">FLIC) me raconte qu\u2019une femme vient d'\u00EAtre arr\u00EAt\u00E9e pour un vol, de bijoux chez un riche notable de la ville. Les bijoux on \u00E9t\u00E9 retrouv\u00E9 en sa possession, mais il ne comprend pas comment elle a pu les r\u00E9cup\u00E9rer sans laisser de trace. Les bijoux \u00E9taient dans une pi\u00E8ce ferm\u00E9e \u00E0 <strong class=\"mc\">clef de l\u2019int\u00E9rieur, et le notable et sa femme dormait dedans, et ils n\u2019ont rien entendu. Aucune trace. Il marmonne que \u00E7a doit \u00EAtre une sorci\u00E8re. Quelle idiot, de croire encore aux sorci\u00E8re ... J\u2019aimerai comprendre comment elle a fait.</p>\n<p>\u201C- Est- ce que je pourrait la voir et lui poser quelques questions ?\u201D</p>\n<p>\u201C- Oui\u201D</p>\n", 4));
        this.fragments.push(new Fragment(userService.journalist, ["pouvoir", "policier"], "Paris, poste de police - 22 mai 1933 - Interrogatoire", "<p>Je rentre dans la salle d'interrogatoire, il y a <strong class=\"people\">TELE menott\u00E9e et <strong class=\"people\">FLIC est en face d\u2019elle, il est en train de fumer et on voit \u00E0 peine le mur du fond.</p>\n<p>Je dis \u00E0 <strong class=\"people\">VOYANTE d\u2019aller attendre sur la chaise dans le coin de la pi\u00E8ce et de ne pas faire de bruit. J\u2019essaye de lui tirer les vers du nez mais elle m\u2019assure que ce n\u2019est pas elle et qu\u2019on l\u2019a pi\u00E9g\u00E9e. Au moment de sortire de la salle <strong class=\"people\">VOYANTE provoque un fou-rire, en s'exclamant \u201CMaman, je sais comment elle a fait, elle a utilis\u00E9 de la <strong class=\"mc\">magie\u201D</p>\n", 5));
        this.fragments.push(new Fragment(userService.journalist, ["kanagawa"], "Paris - 25 novembre 1935 - La grande vague", "<p>Je suis \u00E0 table avec un journal. La une est le vol de la grande <strong class=\"mc\">vague de <strong class=\"mc\">Kanagawa. Le tableau \u00E0 myst\u00E9rieusement disparue du louvre, pendant la nuit. Les alarmes se sont d\u00E9clench\u00E9es, mais quand la police est arriv\u00E9e, elle a trouv\u00E9 le gardien inconscient, et le tableau manquait.</p>\n<p>Je me souviendrais toujours de nos premiers moments, avec <strong class=\"people\">MONSTRE. Il aimait l\u2019art, et c\u2019\u00E9tait un de ses tableaux pr\u00E9f\u00E9r\u00E9s. Dommage que son m\u00E9tier d\u2019<strong class=\"mc\">espion l\u2019\u00E9loignait si souvent.</p>\n<p>Ce tableau me rappellera toujours ces moments pass\u00E9s avec <strong class=\"people\">MONSTRE</p>\n<div><img src=\"/assets/vague.png\" /></div>\n", 6));
        this.fragments.push(new Fragment(userService.journalist, ["martinvast"], "Archives de Caen - 26 avril 1936 - Le plan du ch\u00E2teau", "<p>Je suis \u00E0 l'h\u00F4tel de ville, dans les archives du cadastre. J\u2019ouvre et recherche quelque chose dans des livres, et des classeurs. Apr\u00E8s plusieures heures infructueuses, je trouve enfin ce que je cherche : le <strong class=\"mc\">plan&nbsp;du ch\u00E2teau. J\u2019en dessine une copie.</p>\n", 7));
        this.fragments.push(new Fragment(userService.journalist, ["vague"], "Paris, dans un caf\u00E9 - 4 octobre 1936 - Une mission int\u00E9ressante", "<p>J\u2019arrive dans un caf\u00E9. Je commande un th\u00E9 \u00E0 la menthe et je m\u2019installe en attendant mon contact. Je sors le <strong class=\"mc\">plan de ma sacoche. C\u2019est \u00E9tonnant que quelqu\u2019un d\u2019autre que moi s\u2019int\u00E9resse aussi au ch\u00E2teau de <strong class=\"mc\">Martinvast. Je sens qu\u2019il pr\u00E9pare un casse, c\u2019est peut \u00EAtre une occasion unique pour moi de retrouver La <strong class=\"mc\">Vague.</p>\n<p>Mon contact (<strong class=\"people\">ERUDIT) arrive, c\u2019est une femme qui a la trentaine, elle est poussi\u00E9reuse, j\u2019ai l\u2019impression qu\u2019elle revient d\u2019un voyage. Elle me regarde et me demande</p>\n<p>\u201C- <strong class=\"mc\">Louise ?\u201D</p>\n<p>\u201C- Oui c\u2019est moi\u201D</p>\n<p>Elle s\u2019installe \u00E0 ma table, regarde le <strong class=\"mc\">plan qui est sur la table, et dit</p>\n<p>\u201C- Ha c\u2019est le <strong class=\"mc\">plan du ch\u00E2teau, bien jou\u00E9 !\u201D</p>\n<p>\u201C- Merci, \u00E7a n\u2019a pas \u00E9t\u00E9 facile \u00E0 trouver. Vous avez mon argent ?\u201D</p>\n<p><strong class=\"people\">ERUDIT laisse tomber trois <strong class=\"mc\">diamant de sa main, et dit :</p>\n<p>\u201C- J\u2019ai un autre service \u00E0 vous demander, j\u2019ai besoin d\u2019invitations pour le <strong class=\"mc\">mariage qui a lieux le 28 au ch\u00E2teau\u201D</p>\n<p>\u201C- Ha oui le <strong class=\"mc\">mariage de Hector de La Grande Marche, je pense que je peux vous avoir \u00E7a. Par contre je ne veux pas \u00EAtre pay\u00E9 en <strong class=\"mc\">diamant, j\u2019ai plut\u00F4t une autre id\u00E9e\u201D</p>\n<p>J\u2019ouvre la premi\u00E8re page de mon cahier et je le tends \u00E0 <strong class=\"people\">ERUDIT en lui demandant :</p>\n<p>\u201C- \u00C7a vous parle ?\u201D</p>\n<p>\u201C- Oui, c\u2019est la grande <strong class=\"mc\">vague de <strong class=\"mc\">Kanagawa, il me semble que ce tableau a \u00E9t\u00E9 vol\u00E9 l\u2019ann\u00E9e derni\u00E8re\u201D</p>\n", 8));
        this.fragments.push(new Fragment(userService.journalist, ["poème", "poeme"], "Paris, dans un caf\u00E9 - 4 octobre 1936 - Po\u00E8me", "<p>\u201C- J'enqu\u00EAte dessus, et je pense que le tableau se trouve dans ce ch\u00E2teau. J\u2019aimerai vous accompagner, le retrouver te le restituer aux autorit\u00E9s.\u201D</p>\n<p>\u201C- Et si le tableau ne s\u2019y trouve pas\u201D</p>\n<p>\u201C- Alors je vous aurais fournis les entr\u00E9es gratuitement\u201D</p>\n<p>\u201C- Ok, mais sachez que \u00E7a sera tr\u00E8s dangereux. Vous serez responsable d'amener les plans du ch\u00E2teau avec vous, Et de vous assurer que si vous \u00EAtes fouill\u00E9e ou interrog\u00E9 on ne puisse pas savoir ce que vous transportez\u201D</p>\n<p>On passe le reste de la matin\u00E9e \u00E0 mettre au point la meilleur m\u00E9thode pour cacher le <strong class=\"mc\">plan.</p>\n<p>On a d\u00E9cid\u00E9 de cacher les informations sur des dessins dans un <strong class=\"mc\">po\u00E8me. Je trouve que c\u2019est un peu excessif comme syst\u00E8me, \u00E7a serait plus simple de l\u2019apprendre par coeur. Elle semblait y tenir.</p>\n<p>L\u2019id\u00E9e est de d\u00E9couper le <strong class=\"mc\">plan en 4 images, il suffit de les superposer pour avoir le <strong class=\"mc\">plan complet. Je mettrais une croix dans la salle ou on nous fera probablement patienter. Je ne peux pas marqu\u00E9 le nom des salles sur le <strong class=\"mc\">plan, apparement \u00E7a se serait trop dangereux, donc j\u2019ai num\u00E9rot\u00E9 les salles. <strong class=\"people\">ERUDIT avait peur que je n\u2019arrive pas \u00E0 m\u00E9moriser les noms des salles donc on bidouill\u00E9 un <strong class=\"mc\">po\u00E8me pour s\u2019en servir de moyen mn\u00E9motechnique tir\u00E9 par les cheveux. Le <strong class=\"mc\">po\u00E8me a 4 strophes et 21 vers, un vers pour chaque salle. Chaque strophe donnent un mot et il faut que j\u2019associe dans ma <strong class=\"mc\">m\u00E9moire ce mot \u00E0 la liste des lieux correspondant aux num\u00E9ros de vers.</p>\n", 9));
        this.fragments.push(new Fragment(userService.journalist, ["lezard", "lézard"], "L\u00E9zard", "<p>Bureau Mer</p>\n<p>Reserve</p>\n<p>Cabinet <strong class=\"mc\">Oiseau</p>\n<p>Lavoir</p>\n<p>Terrasse</p>\n<p>Chambre d\u2019enfant</p>\n", 10));
        this.fragments.push(new Fragment(userService.journalist, ["vipère", "vipere"], "Vip\u00E8re", "<p>Biblioth\u00E8que</p>\n<p>Crypte</p>\n<p>Laboratoire</p>\n<p>Salle de bain</p>\n<p>Grande salle</p>\n<p>Salon polaire</p>\n", 11));
        this.fragments.push(new Fragment(userService.journalist, ["panda"], "Panda", "<p>Bureau <strong class=\"mc\">Afrique</p>\n<p>Chambre Roi</p>\n<p>Grenier</p>\n<p>Hall</p>\n<p>Cave</p>\n", 12));
        this.fragments.push(new Fragment(userService.journalist, ["ours"], "Ours", "<p>Entr\u00E9e</p>\n<p>Serre</p>\n<p>Bureau Chasse</p>\n<p>Cuisine</p>\n", 13));
        this.fragments.push(new Fragment(userService.journalist, ["mortebiere"], "Caen, Bar - Ce midi - Le briefing", "<p>Je suis dans une petite pi\u00E8ce sombre. J\u2019entends des rires et des chants de l\u2019autre c\u00F4t\u00E9 de la porte, venant d\u2019un <strong class=\"mc\">bar. On doit \u00EAtre six ou sept dans cette pi\u00E8ce, et dans la p\u00E9nombre je n\u2019arrive pas \u00E0 voir les visages. Je reconnais <strong class=\"people\">ERUDIT et <strong class=\"people\">CHEF l\u2019un \u00E0 cot\u00E9 de l\u2019autre. Il y a aussi <strong class=\"people\">SOLDAT, ce doit \u00EAtre leur majordome. <strong class=\"people\">CHEF commence la r\u00E9union en disant :</p>\n<p>\u201C- Bonjour \u00E0 tous. Merci d\u2019\u00EAtre l\u00E0 \u00E0 l\u2019heure. Pour des raisons de s\u00E9curit\u00E9, vous n\u2019avez pas \u00E9t\u00E9 tenu au courant de la nature exacte de cette op\u00E9ration. Normalement on vous a pr\u00E9venu que la <strong class=\"mc\">mission \u00E9tait dangereuse.\u201D</p>\n<p>\u201C- Oui, ils ont tous accept\u00E9 en connaissance de cause.\u201D &nbsp;confirme <strong class=\"people\">ERUDIT</p>\n<p>\u201C- Le but de notre op\u00E9ration est d'emp\u00EAcher un <strong class=\"mc\">attentat, et de neutraliser tous les terroristes. Nous irons ce soir au ch\u00E2teaux nous infiltrer au <strong class=\"mc\">mariage de Hector de La Grande Marche et Marie Elisabeth d\u2019Autriche. Ce <strong class=\"mc\">mariage c\u2019est qu\u2019un pr\u00E9texte pour inviter une grande quantit\u00E9 de notable et dirigeant dans le but de les assassiner.</p>\n<p>Nous savons que l\u2019<strong class=\"mc\">attentat surviendra quand tout le monde sera rassembl\u00E9 dans la grande salle, \u00E0 partir de minuit. Nous avons une bombe et notre seule chance d'emp\u00EAcher le massacre est de la faire exploser exactement au bon moment et au bon endroit pour \u00E9liminer les terroristes \u00E0 leur arriv\u00E9e.\u201D</p>\n<p>\u201C- Pourquoi ce n\u2019est pas la police qui s\u2019occupe de \u00E7a ?\u201D &nbsp;je demande</p>\n<p>\u201C- C\u2019est une <strong class=\"mc\">mission d\u00E9licate, et les instances dirigeantes pr\u00E9f\u00E8res ne pas \u00EAtre impliqu\u00E9es. C\u2019est pour \u00E7a que nous sommes charg\u00E9s de r\u00E9soudre le probl\u00E8me discr\u00E8tement.\u201D r\u00E9pond <strong class=\"people\">CHEF.</p>\n<p>\u201C- Et je suppose que vous savez comment faire ?\u201D demande s\u00E8chement une dame \u00E0 c\u00F4t\u00E9 de moi (<strong class=\"people\">TELE)</p>\n<p>\u201C- Oui, nous savons de source s\u00FBre l\u2019heure exacte o\u00F9 la bombe doit exploser. Et celle-ci est d\u2019ailleurs d\u00E9j\u00E0 configur\u00E9e\u201D r\u00E9pond <strong class=\"people\">CHEF en montrant la valise sur la table pr\u00E8s de <strong class=\"people\">SOLDAT</p>\n<p>\u201C- Et pour l\u2019emplacement ? C\u2019est habituellement plus simple \u00E0 savoir !\u201D relance-elle</p>\n<p>\u201C- <strong class=\"mc\">Roberta, avec l\u2019aide de <strong class=\"mc\">Suzanne se chargera de localiser l\u2019emplacement, et comme vous vous en doutez, vous serez charg\u00E9 de placer la bombe.\u201D</p>\n<p>\u201C- Ma carte servira \u00E0 ce moment ? je demande</p>\n<p>\u201C- Oui, vous fournirez le <strong class=\"mc\">plan du ch\u00E2teau pour aider \u00E0 la localisation du por\u2026 de l\u2019emplacement. Et de ce que vous cherchez dans le ch\u00E2teau par la m\u00EAme occasion.\u201D</p>\n<p>\u201C- oui \u2026\u201D r\u00E9pondis-je, \u201Cj\u2019ai le <strong class=\"mc\">plan, enfin partiellement dessin\u00E9. Je ne vois toujours pas vraiment en quoi vos instructions vont nous aider vu que je sais comment mon camouflage fonctionne. Si je suis interrog\u00E9 et menac\u00E9 je ne vous promet pas de ne rien r\u00E9v\u00E9ler.\u201D</p>\n<p>\u201CNe vous inqui\u00E9tez pas, c\u2019est l\u00E0 que notre dernier \u00E9quipier intervient\u201D.</p>\n<p><strong class=\"people\">CHEF se tourne vers la derni\u00E8re personne tapie dans l\u2019ombre.</p>\n<p>\u201C- Monsieur, comment dois-je vous appeler ?\u201D</p>\n<p>\u201C- Heu \u2026 Jules \u2026 oui, c\u2019est \u00E7a, Docteur Jules\u201D</p>\n<p>\u201C- Bien docteur, vous avez la potion promise ?\u201D</p>\n<p>\u201C- Oui, bien s\u00FBr la voil\u00E0\u201D r\u00E9pond <strong class=\"people\">MONSTRE en montrant un petit flacon.</p>\n<p>\u201C- Juste avant d\u2019arriver au ch\u00E2teau, nous allons boire de cette potion. Ses effets sont tr\u00E8s efficaces et nous permettront de <strong class=\"mc\">pouvoir mentir et r\u00E9sister aux interrogatoire bien plus efficacement.\u201C</p>\n<p><strong class=\"people\">CHEF se tourne vers moi et demande :</p>\n<p>\u201C- Ah ! Avez-vous les invitations ?\u201D</p>\n<p>Je sors de mon sac une grande enveloppe d\u2019o\u00F9 j\u2019extrais 4 petits cartons d\u2019invitation. Il m\u2019en prend 3.</p>\n<p>\u201C- Gardez en une pour vous\u201D</p>\n<p>Il distribue les invitations aux deux personnes les plus loin de moi. Impossible de voir leur visage, on dirait qu\u2019ils se cachent dans l\u2019ombre.</p>\n", 14, ["pouvoir"]));
        this.fragments.push(new Fragment(userService.journalist, ["mémoire", "memoire"], "Sur la route de Martinvast - Il y a quelques minutes", "<p>Le ch\u00E2teau se profile au bout de l\u2019all\u00E9e. J\u2019entend quelques petites tintement, <strong class=\"people\">MONSTRE sort les fioles et commence \u00E0 les distribuer aux autres puis prend la parole :</p>\n<p>\u201C- Buvez \u00E7a maintenant, \u00E7a va mettre quelque secondes \u00E0 agir\u201D</p>\n<p>Tout le monde ouvre son falcon, je fais de m\u00EAme et boit son contenu d\u2019une traite.</p>\n<p>\u201C- Hum, c\u2019est bon ton m\u00E9dicament, docteur !\u201D s\u2019exclame <strong class=\"people\">VOYANTE. Je r\u00E9alise que je connais sa voix ! C\u2019est ma fille ! Qu\u2019est ce qu\u2019elle fait ici ? Elle est beaucoup trop jeune et c\u2019est trop dangereux ! Je m\u2019exclame :</p>\n<p>\u201C- <strong class=\"mc\">Rina&nbsp;\u2026 <strong class=\"mc\">Rina c\u2019est toi ? Arr\u00EAtez la voiture !\u201D</p>\n", 15));
        this.fragments.push(new Fragment(userService.monstre, ["paris"], "Paris - 25 novembre 1918 - Une nuit torride", "<p>Le <strong class=\"mc\">soleil se l\u00E8ve, je suis encore dans le <strong class=\"mc\">lit. Il est bien situ\u00E9 cet appartement. Si un jour je devais m\u2019installer quelque part, \u00E7a serait dans ce genre d\u2019endroit. <strong class=\"mc\"><strong class=\"people\">JOURNALISTE \u00E0 c\u00F4t\u00E9 de moi dors encore. Je n\u2019ai pas besoin de beaucoup de sommeil, c\u2019est une particularit\u00E9 de mon m\u00E9tabolisme. La soir\u00E9e d\u2019hier \u00E9tait vraiment agr\u00E9able. Je n\u2019avais pas pr\u00E9vu qu\u2019on se retrouverait au <strong class=\"mc\">lit ensemble. Pendant une seconde je me demande si je pars discr\u00E8tement, mais cette fille est chouette, et j\u2019ai bien envie de la revoire.</p>\n", 0));
        this.fragments.push(new Fragment(userService.monstre, ["mariage", "marriage"], "Paris - 28 janvier 1919 - Je suis papa", "<p>Comment <strong class=\"mc\">enceinte ? Elle est <strong class=\"mc\">enceinte, et de moi en plus ! Jamais j\u2019aurais cru \u00E7a possible. Pas \u00E0 moi. Quelle catastrophe. Je ne peux pas me marier, et m\u2019installer, et certainement pas avec une humaine !</p>\n<p>Pendant une seconde je me demande si je ne vais pas utiliser mon <strong class=\"mc\">pouvoir. Mais je me ravise, ce n\u2019est pas mon genre, et elle ne m\u00E9rite pas \u00E7a. Pour certain de mon esp\u00E8ce c\u2019est une habitude de s'\u00E9chapper comme \u00E7a, mais pas moi.</p>\n", 1));
        this.fragments.push(new Fragment(userService.monstre, ["sucette", "bonbon", "sucreries"], "Paris - 04 juillet 1924 - De retour", "<p>\u00C7a fait des mois que je ne suis pas venu. <strong class=\"mc\"><strong class=\"people\">JOURNALISTE ne m\u2019en veut pas trop, et elle est toujours contente de me voire. Elle a fini par comprendre que je ne peux pas rester longtemps. \u201CMon m\u00E9tier m\u2019en emp\u00EAche\u201D. <strong class=\"mc\"><strong class=\"people\">JOURNALISTE m\u2019ouvre la porte :</p>\n<p>\u201C- Bonjour, je n\u2019attendais pas ta visite\u201D</p>\n<p>\u201C- Bonjour, je passe juste voir <strong class=\"people\">VOYANTE. \u00C7a fait longtemps, et je lui ai apport\u00E9 des <strong class=\"mc\">sucreries.\u201D</p>\n<p>\u201C- Je l\u2019appel, tu resteras pour d\u00EEner ?\u201D</p>\n<p>...</p>\n", 2));
        this.fragments.push(new Fragment(userService.monstre, ["espion"], "Une \u00E9trange plan\u00E8te - 01 f\u00E9vrier 1925 - \u00C9chapp\u00E9 de justesse", "<p>Ils sont juste derri\u00E8re moi. Je cours sans me retourner. J\u2019arrive dans grande pi\u00E8ce carr\u00E9e, je ferme la porte derri\u00E8re moi. Elle \u00E0 l\u2019air solide, \u00E7a devrait les retenir quelque secondes. Je glisse une chaise sous la poign\u00E9e pour bloquer la porte. Je cherche un moyen de me sortir de l\u00E0. La pi\u00E8ce est assez grande, une chemin\u00E9e, deux grandes fen\u00EAtres sur chacun des murs, et on est au 3\u00E8me \u00E9tage. Et une seule porte. Il n\u2019y a pas d\u2019autre issue. Ils arrivent, Je les entends tapper sur la porte. Ces monstres ne vont pas mettre longtemps \u00E0 la d\u00E9foncer.</p>\n<p>Je crois que c\u2019est la fin, je vais mourir ici. La porte commence \u00E0 craquer, je sors mon r\u00E9volver. J\u2019ai 6 balles, ils sont au moins quatres, je ne pense pas que \u00E7a suffise. Je renverse le bureau qui est au milieu de la pi\u00E8ce, et je me mets en embuscade derri\u00E8re.</p>\n<p>\u00C7a y est un des monstre commence \u00E0 passer. Je lui tire quatre balles, en essayant de viser les points faible. Il ralentit \u00E0 peine. Je tire mes 2 derniers coups. Je ne sais pas si ces cr\u00E9atures ont des points faibles\u2026</p>\n<p>Alors que les 4 cr\u00E9atures rentrent dans la pi\u00E8ce, la fen\u00EAtre derri\u00E8re mon dos s\u2019ouvre en grand. Une jeune femme, v\u00EAtue de noir, saute par la fen\u00EAtre, elle a d\u00FB venir de l\u2019\u00E9tage du dessus. Une corde pend dans l\u2019ouverture de la fen\u00EAtre.</p>\n<p>Elle court vers moi, et lance un objet rond qu\u2019elle tient dans la main. L\u2019objet passe au dessus de ma t\u00EAte et atterrit entre les quatres monstre. D\u2019un bond souple, et efficace elle me plaque au sol, derri\u00E8re la table. Une <strong class=\"mc\">explosion d\u2019une puissance incroyable fait trembler toute la pi\u00E8ce. Avant que j\u2019ai pu reprendre mes esprits, elle me rel\u00E8ve en m'attrapant par le dos de ma chemise, et me pousse vers la fen\u00EAtre. Bizarrement, je me laisse faire. Peut \u00EAtre que je suis sous le choc, ou bien que je suis d\u00E9j\u00E0 sous son charme.</p>\n<p>J\u2019attrape la corde et me laisse glisser, elle me suis de pr\u00E8s. <strong class=\"people\">AGENT m\u2019a sauv\u00E9 la vie.</p>\n", 3));
        this.fragments.push(new Fragment(userService.monstre, ["zurich"], "Zurich, Entrep\u00F4t en banlieu - 05 f\u00E9vrier 1927 -&nbsp;Une op\u00E9ration d\u00E9licate", "<p><strong class=\"people\">AGENT m\u2019a demand\u00E9e de venir l\u2019aider sur une op\u00E9ration un peu tendue. Peut \u00EAtre qu\u2019elle aura besoin d\u2019effacer la <strong class=\"mc\">m\u00E9moire de deux humains. Elle sait que je ne peux rien lui refuser.</p>\n<p>\u2026</p>\n<p>On a d\u00E9cid\u00E9 que je resterai en arri\u00E8re, sans me faire rep\u00E9rer. Je n\u2019interviendrais que s\u2019il y a besoin. La connaissant il n\u2019y aura pas besoin, elle se d\u00E9brouille bien toute seule. Je la soup\u00E7onne d\u2019avoir utilis\u00E9 cette <strong class=\"mc\">mission comme excuse pour me voir. Depuis deux ans qu\u2019on se conna\u00EEt, on ne devrait plus avoir besoin de ce genre d\u2019excuse.</p>\n<p>Je la suis de loin, comme pr\u00E9vue. Elle rencontre <strong class=\"people\">CHEF et <strong class=\"people\">SOLDAT, je me demande si elle va leur dire que c\u2019est gr\u00E2ce \u00E0 eux qu\u2019elle a trouv\u00E9 le <strong class=\"mc\">portail. Elle a pos\u00E9e la bombe, je pense qu\u2019elle ne leur a pas dit que ce que c\u2019\u00E9tait. Ils vont avoir une dr\u00F4le de surprise.</p>\n<p>La bombe a explos\u00E9 au bon moment, et le <strong class=\"mc\">portail est d\u00E9finitivement ferm\u00E9, la <strong class=\"mc\">mission et un succ\u00E8s.</p>\n<p>Je vais <strong class=\"mc\">pouvoir rentrer avec <strong class=\"people\">AGENT. J\u2019ai lou\u00E9 une chambre d'h\u00F4tel pour la nuit, \u00E7a sera parfait !</p>\n", 4));
        this.fragments.push(new Fragment(userService.monstre, ["vacances", "plage", "maria"], "Une \u00E9trange plan\u00E8te - 21 d\u00E9cembre 1930 - De d\u00E9licieuses vacances", "<p>Le ciel est magnifique sur ce <strong class=\"mc\">plan. Les deux soleils se couchent presque en m\u00EAme temps et \u00E9clairent la mer d\u2019un rouge pastel. On est les deux seules personnes sur cette <strong class=\"mc\">plage, assis main dans la main. Je n\u2019ai jamais vu d'endroit aussi beau. Peut \u00EAtre est-ce aussi parce que j\u2019y suis avec <strong class=\"people\">AGENT.</p>\n<p>\u00C7a fait une semaine qu\u2019on est sur ce <strong class=\"mc\">plan. Personne ne sait qu\u2019on est ici. Ni mes sup\u00E9rieur&nbsp;ni les siens. Je n\u2019ai jamais \u00E9t\u00E9 aussi heureux.</p>\n", 5));
        this.fragments.push(new Fragment(userService.monstre, ["psycheïde", "psycheïdes", "psycheide"], "Sur mon plan - 08 octobre 1936 - Home sweet home", "<p>J\u2019ai \u00E9t\u00E9 convoqu\u00E9 par <strong class=\"people\">SUPERIEUR. Je pense qu\u2019il s\u2019inqui\u00E8te que je passe trop de temps \u00E0 rechercher <strong class=\"people\">AGENT plut\u00F4t qu'\u00E0 m\u2019occuper des missions qu\u2019il me donne. Mais \u00E7a fait des mois qu\u2019elle n\u2019a pas donn\u00E9e signe de vie. Impossible de retrouver sa trace.</p>\n<p>Malgr\u00E9 tout, \u00E7a fait plaisir de se retrouver sur le <strong class=\"mc\">plan <strong class=\"mc\">psyche\u00EFde. La terre c\u2019est bien, mais il n\u2019y a rien de mieux que d\u2019\u00EAtre chez soi.</p>\n", 6));
        this.fragments.push(new Fragment(userService.monstre, ["pouvoir"], "Sur mon plan - 08 octobre 1936 - Une nouvelle mission", "<p>J\u2019arrive dans le bureau de <strong class=\"people\">SUPERIEUR. Il est assis derri\u00E8re son grand bureau, un verre de whisky \u00E0 la main, et me dit :</p>\n<p>\u201C- Je n'irais pas par quatres chemins, je sais que vous passez le plus claire de votre temps \u00E0 la recherche de <strong class=\"mc\">Maria. Et votre <strong class=\"mc\">mission actuelle n\u2019avance pas.\u201D</p>\n<p>\u201C- ...\u201D</p>\n<p>\u201C- J\u2019ai donc d\u00E9cid\u00E9 d\u2019annuler votre <strong class=\"mc\">mission actuelle \u2026 Et de vous donner une autre <strong class=\"mc\">mission. On sait o\u00F9 va se trouver <strong class=\"mc\">Maria. Elle devrait arriver au Ch\u00E2teau de <strong class=\"mc\">Martinvast&nbsp;le 28 octobre.\u201D</p>\n<p>\u201C- Le ch\u00E2teau de <strong class=\"mc\">Martinvast&nbsp;! Mais c\u2019est le rep\u00E8re des <strong class=\"mc\">Dahona&nbsp;! Ils l\u2019ont captur\u00E9e ? Il faut que j\u2019aille la sortie de l\u00E0 !\u201D, je m'exclame.</p>\n<p>\u201C- Calmez vous ! Je ne veux pas d\u2019incident. Rappelez-vous c\u2019est sur terre, un <strong class=\"mc\">plan neutre. Si on agit ouvertement la bas, tous les autres plans vont nous tomber dessus. Laissez moi finir.\u201D</p>\n<p>\u201C- Je vous \u00E9coute\u201D dis-je un peu plus calme.</p>\n<p>\u201C- On pense que le <strong class=\"mc\">Dahona&nbsp;veulent prendre le contr\u00F4le sur terre. S\u2019ils y arrivent, c\u2019est la fin de l\u2019\u00E9quilibre actuel, et il y aura une guerre ouverte entre tous les plans connu. Et les terriens que vous avez l\u2019air d'appr\u00E9cier risque de ne pas survivre bien longtemps.\u201D</p>\n<p><strong class=\"people\">SUPERIEUR s'arr\u00EAte pour boire une gorg\u00E9e, et reprend:</p>\n<p>\u201C- On pense qu\u2019ils veulent d\u00E9vorer les \u00E2mes d\u2019un maximum de dignitaires et de personnes bien plac\u00E9s, pendant une c\u00E9r\u00E9monie. La c\u00E9r\u00E9monie se d\u00E9roulera dans exactement 20 jours.\u201D</p>\n<p>\u201C- Comment voulez vous que je proc\u00E8de. Si on ne peut pas intervenir directement \u00E7a va \u00EAtre dure de les arr\u00EAter.\u201D</p>\n<p>\u201C- Ils y a quelques humains qui vont intervenir le jour de la c\u00E9r\u00E9monie. <strong class=\"mc\">Maria&nbsp;se trouvera l\u00E0, prisonni\u00E8re des <strong class=\"mc\">Dahona. Votre <strong class=\"mc\">mission est d\u2019aider les humains \u00E0 entrer dans le ch\u00E2teau. Ils devront passer des sentinelles qui peuvent lire dans les pens\u00E9e. Il vous suffira d\u2019utiliser votre <strong class=\"mc\">pouvoir pour leur permettre de passer\u201D</p>\n<p>\u201C- Il y a un risque que leur <strong class=\"mc\">m\u00E9moire ne revienne pas \u00E0 temps vous savez !\u201D</p>\n<p>\u201C- Ils sont d\u00E9j\u00E0 au courant des risques, et si vous maitrisez bien votre <strong class=\"mc\">pouvoir tout devrait bien se passer.\u201D</p>\n<p><strong class=\"people\">SUPERIEUR se penche vers moi, et me regarde dans les yeux et dit :</p>\n<p>\u201C- En aucun cas vous ne devez prendre part \u00E0 la <strong class=\"mc\">mission, vous devez seulement les faire rentrer. Ils sont brief\u00E9s \u00E0 propos de <strong class=\"mc\">Maria. J\u2019ai insist\u00E9 pour que ce soit vous qui vous chargiez de cette <strong class=\"mc\">mission, ne me faites pas regretter \u00E7a.\u201D</p>\n<p>Il faut que j\u2019aille sur place, je ne fais pas confiance aux humains. Je trouverais forc\u00E9ment dans le ch\u00E2teaux des documents indiquant o\u00F9 est <strong class=\"mc\">Maria est tenu captive !</p>\n", 7));
        this.fragments.push(new Fragment(userService.monstre, ["fiole"], "Caen, Bar - Ce midi - Le briefing", "<p>Je suis dans une petite pi\u00E8ce sombre, parfait pour la discr\u00E9tion. J\u2019entends des rires et des chants de l\u2019autre c\u00F4t\u00E9 de la porte, venant d\u2019un <strong class=\"mc\">bar. On doit \u00EAtre six ou sept dans cette pi\u00E8ce, et dans la p\u00E9nombre c\u2019est difficile de savoir qui est qui. Je reconnais <strong class=\"people\">ERUDIT et <strong class=\"people\">CHEF l\u2019un \u00E0 cot\u00E9 de l\u2019autre. Et \u00E9videmment <strong class=\"people\">SOLDAT est avec eu. Je ressens une pr\u00E9sence que je n\u2019ai pas vu depuis longtemps. C\u2019est <strong class=\"mc\"><strong class=\"people\">JOURNALISTE, et sa fille est l\u00E0. Il faut que je fasse en sorte qu\u2019elles ne me reconnaissent pas. <strong class=\"people\">CHEF commence la r\u00E9union, et j\u2019\u00E9coute d\u2019une oreille distraite.</p>\n<p>Il ne parle pas de <strong class=\"people\">AGENT, mais \u00E7a ne veut pas dire qu\u2019il n\u2019est pas au courrant pour elle.</p>\n<p>Ha, <strong class=\"people\">CHEF me parle, il faut que je sois un peu plus attentif, il se tourne vers moi et dit :</p>\n<p>\u201C- Monsieur, comment dois-je vous appeler ?\u201D</p>\n<p>\u201C- Heu \u2026 Jules \u2026 oui, c\u2019est \u00E7a, Docteur Jules\u201D, j\u2019invente ce nom un peu au hasard. Il m\u2019a pris de court.</p>\n<p>\u201C- Bien docteur, vous avez la potion promise ?\u201D</p>\n<p>\u201C- Oui, bien s\u00FBr la voil\u00E0\u201D je r\u00E9ponds en montrant un petit flacon. Ils ne savent pas qu\u2019en r\u00E9alit\u00E9 ce n\u2019est que de l\u2019eau sucr\u00E9e avec un peu de colorant. C\u2019est tout ce que j\u2019ai trouv\u00E9 pour cacher mon <strong class=\"mc\">pouvoir. <strong class=\"people\">CHEF continue :</p>\n<p>\u201C- Juste avant d\u2019arriver au ch\u00E2teau, nous allons boire de cette potion. Ses effets sont tr\u00E8s efficaces et nous permettront de <strong class=\"mc\">pouvoir mentir et r\u00E9sister aux interrogatoire bien plus efficacement.\u201C</p>\n<p>Il y a <strong class=\"people\">VOYANTE qui se rapproche de moi, on dirait qu\u2019elle essaye de voir qui je suis. J\u2019esp\u00E8re qu\u2019elle ne m\u2019a pas reconnue.</p>\n<p><strong class=\"people\">CHEF finit le briefing en distribuant les invitations qui nous permettrons de rentrer au ch\u00E2teau.</p>\n", 8));
        this.fragments.push(new Fragment(userService.monstre, ["mémoire", "memoire"], "Sur la route de Martinvast - Il y a quelques minutes", "<p>Le ch\u00E2teau se profile au bout de l\u2019all\u00E9e. Je sors les fioles et commence \u00E0 les distribuer aux autres puis je prends la parole :</p>\n<p>\u201C- Buvez \u00E7a maintenant, \u00E7a va mettre quelque secondes \u00E0 agir\u201D</p>\n<p>Tout le monde est occup\u00E9 \u00E0 boire cette fausse potion, c\u2019est le moment de lancer mon sort. Je murmure la formule, et fait les gestes discr\u00E8tement. Pour un sort de cette importance, normalement j\u2019aurais du prendre mon temps, parler \u00E0 voix haute et faire de grands gestes... J\u2019esp\u00E8re que \u00E7a va fonctionner comme pr\u00E9vu. Si j\u2019efface trop de chose on ne se souviendra plus de rien, et \u00E7a va \u00EAtre difficile de faire la <strong class=\"mc\">mission. Et si je n'efface pas assez, on se fera prendre \u00E0 l\u2019entr\u00E9e et c\u2019est la mort assur\u00E9e.</p>\n<p>Tout d\u2019un coup <strong class=\"people\">TELE s\u2019exclame :</p>\n<p>\u201C- C\u2019est un pi\u00E8ge !\u201D</p>\n<p>Mince, j\u2019ai oublier de boire ma <strong class=\"mc\">fiole, et maintenant elle doit croire que je les ai empoisonn\u00E9.</p>\n<p>Heureusement mon sort commence \u00E0 faire effet.</p>\n", 9));
    }
    FragmentService.prototype.getById = function (id) {
        return this.fragments.find(function (f) { return f.id === id; });
    };
    return FragmentService;
}());
FragmentService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__users_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__users_service__["a" /* UserService */]) === "function" && _a || Object])
], FragmentService);

var _a;
//# sourceMappingURL=fragment.service.js.map

/***/ }),

/***/ "../../../../../src/app/memories.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"memory main\">\n  <div class=\"header\">\n    <app-menu></app-menu>\n    <h1 class=\"center\">Ma mémoire !</h1>\n  </div>\n\n  <section>\n    <article class=\"mem\" *ngIf=\"memoryService.saved.length === 0\">\n      J'ai perdu la mémoire ! Ce doit être une amnésie temporaire.\n      Peut être qu'en cherchant bien, je vais réussir à retrouver la mémoire.\n    </article>\n    <article class=\"mem\" *ngFor=\"let fragment of memoryService.saved\"\n    (click)=\"fragment.isOpened = !fragment.isOpened\">\n      <div *ngIf=\"fragment != null\">\n        <div class=\"mem-title\" [innerHTML]=\"fragment.title\"></div>\n        <div class=\"mem-body\" [innerHTML]=\"fragment.details | replace:memoryService?.people\" *ngIf=\"fragment.isOpened\"></div>\n      </div>\n    </article>\n\n    <div class=\"bottom\">\n      <a class=\"button search-bg\" href=\"#/search\">Chercher un souvenir</a>\n    </div>\n\n  </section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/memories.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__memory_service__ = __webpack_require__("../../../../../src/app/memory.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MemoryComponent = (function () {
    function MemoryComponent(memoryService) {
        this.memoryService = memoryService;
    }
    return MemoryComponent;
}());
MemoryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-memory',
        template: __webpack_require__("../../../../../src/app/memories.component.html"),
        styles: [__webpack_require__("../../../../../src/app/memory.component.sass")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__memory_service__["a" /* MemoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__memory_service__["a" /* MemoryService */]) === "function" && _a || Object])
], MemoryComponent);

var _a;
//# sourceMappingURL=memories.component.js.map

/***/ }),

/***/ "../../../../../src/app/memory.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* green */\n/* Peter River */\n/* purple */\n/* yellow */\n/* orange */\n/* red */\n/* gray */\n.mem-title {\n  font-size: 0.9rem;\n  font-weight: normal;\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/memory.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fragment_service__ = __webpack_require__("../../../../../src/app/fragment.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MemoryService = (function () {
    function MemoryService(fragmentService) {
        this.saved = [];
        this.people = {
            CONTREMAITRE: '☯',
            SOLDAT: '♞',
            AGENT: '☂',
            ERUDIT: '☀',
            JOURNALISTE: '★',
            TELE: '☢',
            MONSTRE: '❤',
            VOYANTE: '☎',
            ESCLAVE: '⚓',
            CHEF: '⚐',
            FLIC: '♬',
            SUPERIEUR: '☘'
        };
        var ids = (JSON.parse(localStorage.getItem('fragments')) || []);
        this.saved = ids.map(function (id) { return fragmentService.getById(id); });
    }
    MemoryService.prototype.save = function (fragment) {
        if (this.saved.find(function (f) { return f != null && fragment.id === f.id; }) == null) {
            this.saved.push(fragment);
            this.saved.sort(function (a, b) { return a.order - b.order; });
            localStorage.setItem('fragments', JSON.stringify(this.saved.map(function (f) { return f.id; })));
        }
    };
    MemoryService.prototype.clear = function () {
        this.saved = [];
        localStorage.removeItemsetItem('fragments');
    };
    return MemoryService;
}());
MemoryService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__fragment_service__["a" /* FragmentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__fragment_service__["a" /* FragmentService */]) === "function" && _a || Object])
], MemoryService);

var _a;
//# sourceMappingURL=memory.service.js.map

/***/ }),

/***/ "../../../../../src/app/menu.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* green */\n/* Peter River */\n/* purple */\n/* yellow */\n/* orange */\n/* red */\n/* gray */\n#main-nav {\n  position: fixed;\n  width: 250px;\n  top: 0;\n  bottom: 0;\n  left: -260px;\n  background-color: #222;\n  color: #eee;\n  transition: .2s linear; }\n  #main-nav.open {\n    left: 0; }\n  #main-nav ul {\n    padding: 0;\n    margin: 0; }\n  #main-nav li {\n    list-style: none; }\n    #main-nav li.align-right {\n      text-align: right; }\n    #main-nav li a {\n      text-decoration: none;\n      font-size: 1.2rem;\n      color: #eee;\n      padding: 1rem;\n      display: block; }\n      #main-nav li a:hover {\n        background-color: #3c3b3b; }\n\n.fa.fa-bars {\n  font-size: 2rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MenuComponent = (function () {
    function MenuComponent() {
        this.isOpen = false;
    }
    return MenuComponent;
}());
MenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-menu',
        template: "\n  <i class=\"fa fa-bars\" aria-hidden=\"true\" (click)=\"isOpen = true\"></i>\n  <nav id=\"main-nav\" [ngClass]=\"{open: isOpen}\">\n    <ul>\n      <li class=\"align-right\"><a (click)=\"isOpen = false\">Fermer</a></li>\n      <li><a href=\"#/memory\">Ma m\u00E9moire</a></li>\n      <li><a href=\"#/search\">Se creuser la t\u00EAte</a></li>\n      <li><a href=\"#/people\">Qui est qui ?</a></li>\n    </ul>\n  </nav>\n  ",
        styles: [__webpack_require__("../../../../../src/app/menu.component.sass")]
    })
], MenuComponent);

//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/people.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"memory main\">\n  <div class=\"header\">\n    <app-menu></app-menu>\n    <h1 class=\"center\">Qui est qui ?</h1>\n  </div>\n\n  <section>\n    <article >\n      <div class=\"qui-line\" *ngFor=\"let p of defaultPeople\">\n        <div>{{ p.value }}:</div> <input type=\"text\" [(ngModel)]=\"memoryService.people[p.name]\"/>\n      </div>\n    </article>\n\n    <div class=\"bottom\">\n      <a class=\"button search-bg\" href=\"#/search\">Chercher un souvenir</a>\n    </div>\n\n  </section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/people.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeopleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__memory_service__ = __webpack_require__("../../../../../src/app/memory.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PeopleComponent = (function () {
    function PeopleComponent(memoryService) {
        this.memoryService = memoryService;
        this.defaultPeople = [
            { name: 'CONTREMAITRE', value: '☯' },
            { name: 'SOLDAT', value: '♞' },
            { name: 'AGENT', value: '☂' },
            { name: 'JOURNALISTE', value: '★' },
            { name: 'ERUDIT', value: '☀' },
            { name: 'MONSTRE', value: '❤' },
            { name: 'TELE', value: '☢' },
            { name: 'VOYANTE', value: '☎' },
            { name: 'CHEF', value: '⚐' },
            { name: 'ESCLAVE', value: '⚓' },
            { name: 'FLIC', value: '♬' },
            { name: 'SUPERIEUR', value: '☘' }
        ];
    }
    return PeopleComponent;
}());
PeopleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-people',
        template: __webpack_require__("../../../../../src/app/people.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__memory_service__["a" /* MemoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__memory_service__["a" /* MemoryService */]) === "function" && _a || Object])
], PeopleComponent);

var _a;
//# sourceMappingURL=people.component.js.map

/***/ }),

/***/ "../../../../../src/app/replace.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReplacePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ReplacePipe = (function () {
    function ReplacePipe() {
    }
    ReplacePipe.prototype.transform = function (value, expr) {
        if (!value) {
            return value;
        }
        var names = [];
        for (var name in expr) {
            if (expr.hasOwnProperty(name)) {
                names.push(name);
            }
        }
        return value.replace(new RegExp('\\b(' + names.join(')|(') + ')\\b', 'g'), function (match, p1, p2, p3, offset, string) {
            for (var i = 1; i < arguments.length - 2; ++i) {
                if (expr[arguments[i]] != null) {
                    return expr[arguments[i]];
                }
            }
            return match;
        });
    };
    return ReplacePipe;
}());
ReplacePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'replace'
    })
], ReplacePipe);

//# sourceMappingURL=replace.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"search main\">\n  <div class=\"header\">\n    <app-menu></app-menu>\n    <h1 class=\"center\">Creuse toi la tête, ça va te revenir !</h1>\n  </div>\n\n\n  <section>\n    <p class=\"description\">Rentre un mot issus\n      de ton passé, peut-être qu'un souvenir te reviendras</p>\n    <textarea [ngModel]=\"words\" (ngModelChange)=\"onChange($event)\"></textarea>\n    <div class=\"description\" *ngIf=\"fragments.length === 0 && hasTxt\">Continue à chercher</div>\n    <div *ngFor=\"let fragment of fragments\">\n      <button  type=\"button\" (click)=\"fragment.isOpened = !fragment.isOpened\">{{fragment.title}}</button>\n      <div class=\"mem-body\" [innerHTML]=\"fragment.details | replace:memoryService.people\" *ngIf=\"fragment.isOpened\"></div>\n    </div>\n\n    <div class=\"bottom\">\n      <a class=\"bottom button memory-bg\" href=\"#/memory\">Ma mémoire </a>\n    </div>\n  </section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_service__ = __webpack_require__("../../../../../src/app/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__memory_service__ = __webpack_require__("../../../../../src/app/memory.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchComponent = (function () {
    function SearchComponent(searchService, router, memoryService) {
        this.searchService = searchService;
        this.router = router;
        this.memoryService = memoryService;
        this.fragments = [];
        this.hasTxt = false;
    }
    SearchComponent.prototype.onChange = function (text) {
        this.hasTxt = text.length > 0;
        var words = text.toLowerCase()
            .replace(/[\n\r ,.;:-_]+/gm, '|')
            .split('|')
            .filter(function (w) { return w.length > 0; })
            .map(function (w) { return w.trim(); })
            .sort();
        this.fragments = this.searchService.findAll(words);
        if (this.fragments.length > 0) {
            for (var i = 0; i < this.fragments.length; ++i) {
                console.log("save", this.fragments[i].title);
                this.memoryService.save(this.fragments[i]);
            }
        }
    };
    SearchComponent.prototype.gotoFragment = function (f) {
        if (f != null) {
            this.router.navigate(['fragment', f.id]);
        }
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-search',
        template: __webpack_require__("../../../../../src/app/search.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__search_service__["a" /* SearchService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__memory_service__["a" /* MemoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__memory_service__["a" /* MemoryService */]) === "function" && _c || Object])
], SearchComponent);

var _a, _b, _c;
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ "../../../../../src/app/search.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__users_service__ = __webpack_require__("../../../../../src/app/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fragment_service__ = __webpack_require__("../../../../../src/app/fragment.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchService = (function () {
    function SearchService(users, fragmentService) {
        this.users = users;
        this.fragments = fragmentService.fragments;
    }
    SearchService.prototype.setFragments = function (fragments) {
        this.fragments = fragments;
    };
    SearchService.prototype.findAll = function (idea) {
        var _this = this;
        return this.fragments.filter(function (f) {
            if (f.user !== _this.users.getCurrentUser()) {
                return false;
            }
            var found = false;
            var _loop_1 = function (i) {
                if (f.words[0].find(function (w) { return w === idea[i]; }) !== undefined) {
                    found = true;
                    if (f.word2 == null) {
                        return { value: true };
                    }
                }
            };
            for (var i = 0; i < idea.length; ++i) {
                var state_1 = _loop_1(i);
                if (typeof state_1 === "object")
                    return state_1.value;
            }
            if (f.word2 == null || !found) {
                return false;
            }
            var _loop_2 = function (j) {
                if (f.word2.find(function (w) { return w === idea[j]; }) !== undefined) {
                    return { value: true };
                }
            };
            for (var j = 0; j < idea.length; ++j) {
                var state_2 = _loop_2(j);
                if (typeof state_2 === "object")
                    return state_2.value;
            }
            return false;
        });
    };
    return SearchService;
}());
SearchService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__users_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__users_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__fragment_service__["a" /* FragmentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__fragment_service__["a" /* FragmentService */]) === "function" && _b || Object])
], SearchService);

var _a, _b;
//# sourceMappingURL=search.service.js.map

/***/ }),

/***/ "../../../../../src/app/tele.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"memory main\">\n  <div class=\"header\">\n    <app-menu></app-menu>\n    <h1 class=\"center\">Télékinesie</h1>\n  </div>\n\n  <div [ngSwitch]=\"testResult\">\n\n    <section *ngSwitchCase=\"'empty'\">\n      <p>\n        L'incantation est vide, il ne se passe rien.\n      </p>\n      <button type=\"button\" (click)=\"ok()\">Ok !</button>\n    </section>\n    <section *ngSwitchCase=\"'tooshort'\">\n      <p>\n        Rien ne se passe, cette incantation semble un peu courte ...\n      </p>\n      <button type=\"button\" (click)=\"ok()\">Ok !</button>\n    </section>\n\n    <section *ngSwitchCase=\"'wrong'\">\n      <p>\n        Rien ne se passe, cette incantation n'a pas l'air correcte ...\n      </p>\n      <button type=\"button\" (click)=\"ok()\">Ok !</button>\n    </section>\n\n    <section *ngSwitchCase=\"'wall'\">\n      <p>\n        L'incantation à l'air de fonctionner, mais rien ne semble se téléporter.\n        Peut être qu'il y a un obstacle sur le chemin...\n      </p>\n      <button type=\"button\" (click)=\"ok()\">Ok !</button>\n    </section>\n\n    <section *ngSwitchCase=\"'position'\">\n      <p>\n        Je sens quelque chose bouger ! J'arrive même à visualiser un chemin.\n      </p>\n      <div>\n        <pre class=\"parcour\">{{parcour}}</pre>\n      </div>\n      <p *ngIf=\"currentLevelIndex === 1\">\n        Je pense être arrivé au premier étage.\n      </p>\n      <p *ngIf=\"currentLevelIndex > 1\">\n        Je pense être arrivé au sous-sol.\n      </p>\n      <button type=\"button\" (click)=\"ok()\">Ok !</button>\n    </section>\n\n    <section *ngSwitchDefault>\n      <div style=\"margin-bottom: 12px;\">\n        <div>\n          <i>Je regarde vers le :</i>\n        </div>\n        <button class=\"orientation-btn\" [ngClass]=\"{enabled: orientation === 0}\" type=\"button\" (click)=\"orientation = 0\">Nord</button>\n        <button class=\"orientation-btn\" [ngClass]=\"{enabled: orientation === 2}\" type=\"button\" (click)=\"orientation = 2\">Sud</button>\n        <button class=\"orientation-btn\" [ngClass]=\"{enabled: orientation === 3}\" type=\"button\" (click)=\"orientation = 3\">Est</button>\n        <button class=\"orientation-btn\" [ngClass]=\"{enabled: orientation === 1}\" type=\"button\" (click)=\"orientation = 1\">Ouest</button>\n      </div>\n\n      <i>Testez votre incantation :</i>\n      <div class=\"incantation\">{{incantation}}</div>\n      <div style=\"margin: 10px -10px;\">\n        <button class=\"incantation-bt\" type=\"button\" (click)=\"add('bobidi')\">Bobidi</button>\n        <button class=\"incantation-bt\" type=\"button\" (click)=\"add('la')\">La</button>\n        <button class=\"incantation-bt\" type=\"button\" (click)=\"add('boo')\">Boo</button>\n        <button class=\"incantation-bt\" type=\"button\" (click)=\"add('bibidi')\">Bibidi</button>\n        <button class=\"incantation-bt\" type=\"button\" (click)=\"add('gadoola')\">Gadoola</button>\n        <button class=\"incantation-bt\" type=\"button\" (click)=\"add('sala')\">Sala</button>\n      </div>\n\n      <button type=\"button\" (click)=\"tester()\">Tester</button>\n      <div>&nbsp;</div>\n      <button type=\"button\" (click)=\"clear()\">Clear</button>\n    </section>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/tele.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TeleComponent = (function () {
    function TeleComponent() {
        this.incantation = '';
        this.mots = [];
        this.testResult = '';
        this.position = [0, 0];
        this.currentLevelIndex = 0;
        this.orientation = 0;
        this.origin = [19, 13];
        this.levels = [[
                '0211111201111111111201111111111111111112',
                '73655                                  3',
                '7 111  37                              3',
                '655555 471        547                  3',
                '011111 2027      3027                  3',
                '7      3737      3737                  3',
                '7      3737      3737                  3',
                '655555 47          37                  3',
                '011111 27          37                  3',
                '7      365        54655 555 5555 55    3',
                '7      3027      301120 120 1201 127   3',
                '655555 47365    547  37           37   3',
                '011111 27 127  301   37  37  37   37   3',
                '0                  X     37  37   37   3',
                '0      365546  4655554655465 465 5465  4',
                '0 55   3                 011 20  1111  2',
                '0 126  3                 67            3',
                '65555554                  67 37        3',
                '                           6547        3',
                '                              6555555554',
            ], [
                'x  0112011111111111111120112',
                '   7      55555555         3',
                '   655437301111112737  365 4',
                '   0112373        737  301 2',
                '   7   373        737      3',
                '   7  3373        736 5465 4',
                '   6554373        73030120 2',
                '   011136455555555647   27 3',
                '   7   3            73  37 3',
                '   65554            7 120  3',
                '                    7  37  3',
                '                    7      3',
                '                    7  37  3',
                '                    7  37  3',
                '                    65546554',
            ], [
                '01110112',
                '7 54   3',
                '7      3',
                '7      3',
                '65555554',
            ], [
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '  012',
                '  7 3',
                '  7 3',
                '  653',
                '  654',
            ]];
        this.parcour = '';
        this.currentParcour = [];
        this.emptyLevel = [
            '                                        ',
            '                                        ',
            '                                        ',
            '                                        ',
            '                                        ',
            '                                        ',
            '                                        ',
            '                                        ',
            '                                        ',
            '                                        ',
            '                                        ',
            '                                        ',
            '                                        ',
            '                                        ',
            '                                        ',
            '                                        ',
            '                                        ',
            '                                        ',
            '                                        ',
            '                                        ',
            '                                        ',
        ];
    }
    TeleComponent.prototype.add = function (mot) {
        this.mots.push(mot);
        this.incantation += mot + ' ';
    };
    TeleComponent.prototype.clear = function () {
        this.mots = [];
        this.incantation = ' ';
    };
    TeleComponent.prototype.tester = function () {
        if (this.mots.length === 0) {
            this.testResult = 'empty';
            return;
        }
        if (this.mots.length < 4) {
            this.testResult = 'tooshort';
            return;
        }
        if ((this.mots[0] !== 'gadoola' && this.mots[0] !== 'sala') ||
            (this.mots[this.mots.length - 1] !== 'gadoola' && this.mots[this.mots.length - 1] !== 'sala') ||
            (this.mots[0] === this.mots[this.mots.length - 1])) {
            this.testResult = 'wrong';
            return;
        }
        var orientation = 160 + this.orientation;
        var vitesse = 0;
        var position = this.origin.slice();
        this.currentParcour = this.emptyLevel.slice();
        this.currentLevelIndex = 0;
        console.log(position, orientation, this.currentParcour);
        for (var i = 1; i < this.mots.length - 1; ++i) {
            switch (this.mots[i]) {
                case 'gadoola':
                    this.testResult = 'wrong';
                    return;
                case 'boo':
                    vitesse += 1;
                    break;
                case 'bobidi':
                    vitesse = 0;
                    orientation -= 1;
                    break;
                case 'bibidi':
                    vitesse = 0;
                    orientation += 1;
                    break;
                case 'la':
                    if (vitesse === 0) {
                        this.testResult = 'wrong';
                        return;
                    }
                    try {
                        position = this.move(position, orientation, vitesse);
                    }
                    catch (e) {
                        this.testResult = 'wall';
                        console.log(e);
                        return;
                    }
                    break;
                case 'sala':
                    this.testResult = 'wrong';
                    return;
            }
        }
        this.position = position;
        this.parcour = this.currentParcour.join('\n');
        this.testResult = 'position';
    };
    TeleComponent.prototype.getValueAt = function (from) {
        return this.levels[this.currentLevelIndex][from[1]][from[0]];
    };
    TeleComponent.prototype.getAllowedOrientations = function (value) {
        if (value == null) {
            return [];
        }
        switch (value) {
            case '0':
                return [2, 3];
            case '1':
                return [1, 2, 3];
            case '2':
                return [1, 2];
            case '3':
                return [0, 1, 2];
            case '4':
                return [0, 1];
            case '5':
                return [0, 1, 3];
            case '6':
                return [0, 3];
            case '7':
                return [0, 2, 3];
            default:
                return [0, 1, 2, 3];
        }
    };
    TeleComponent.prototype.moveOne = function (from, ori) {
        switch (ori) {
            case 0:
                return [from[0], from[1] - 1];
            case 1:
                return [from[0] - 1, from[1]];
            case 2:
                return [from[0], from[1] + 1];
            case 3:
                return [from[0] + 1, from[1]];
            default:
                throw new Error('What ??');
        }
    };
    TeleComponent.prototype.move = function (from, orientation, distance) {
        if (distance < 0) {
            throw new Error('distance should be > 0');
        }
        if (from[0] < 0 || from[1] < 0) {
            throw new Error('from should be > 0');
        }
        var tmp = this.currentParcour[from[1]];
        this.currentParcour[from[1]] = tmp.substr(0, from[0]) + 'x' + tmp.substr(from[0] + 1);
        if (distance === 0) {
            return from;
        }
        var ori = orientation % 4;
        console.log('move', from, distance, ori, this.getValueAt(from));
        var allowedOrientations = this.getAllowedOrientations(this.getValueAt(from));
        if (allowedOrientations.find(function (v) { return v == ori; }) === undefined) {
            throw new Error('C\'est un mur');
        }
        var p = this.moveOne(from, ori);
        if (this.currentLevelIndex === 0 || this.currentLevelIndex === 1) {
            if (p[1] === 5 && (p[0] === 8 || p[0] === 9 || p[0] === 18 || p[0] === 19)) {
                this.currentLevelIndex = this.currentLevelIndex === 0 ? 1 : 0;
            }
        }
        else if (this.currentLevelIndex === 0 || this.currentLevelIndex === 2) {
            if (p[0] === 3 && (p[1] === 0 || p[1] === 1)) {
                this.currentLevelIndex = this.currentLevelIndex === 0 ? 2 : 0;
            }
        }
        else if (this.currentLevelIndex === 0 || this.currentLevelIndex === 3) {
            if (p[0] === 1 && p[1] === 17) {
                this.currentLevelIndex = this.currentLevelIndex === 0 ? 3 : 0;
            }
        }
        return this.move(p, orientation, distance - 1);
    };
    TeleComponent.prototype.ok = function () {
        this.testResult = '';
        this.position = [0, 0];
    };
    return TeleComponent;
}());
TeleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-tele',
        template: __webpack_require__("../../../../../src/app/tele.component.html")
    }),
    __metadata("design:paramtypes", [])
], TeleComponent);

//# sourceMappingURL=tele.component.js.map

/***/ }),

/***/ "../../../../../src/app/users.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var User = (function () {
    function User(name, id, avatar) {
        this.name = name;
        this.id = id;
        this.avatar = avatar;
    }
    return User;
}());

var UserService = (function () {
    function UserService() {
        this.chef = new User('Chef', 'wduSg', 'avatar-chef');
        this.soldat = new User('soldat', 'oYwfm', 'avatar-soldat');
        this.erudit = new User('erudit', 'PJyKU', 'avatar-erudit');
        this.tele = new User('tele', 'pVObb', 'avatar-tele');
        this.voyant = new User('voyant', 'wvJZn', 'avatar-voyant');
        this.journalist = new User('journalist', 'Dotrh', 'avatar-journalist');
        this.monstre = new User('monstre', 'fkBqe', 'avatar-monstre');
    }
    UserService.prototype.getCurrentUser = function () {
        var id = localStorage.getItem('userId') || '';
        var user = [
            this.chef,
            this.soldat,
            this.tele,
            this.voyant,
            this.erudit,
            this.monstre,
            this.journalist,
        ].find(function (u) { return u.id === id; });
        if (user == null) {
            throw new Error('User should not be null !');
        }
        return user;
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], UserService);

// yVdSJ
// oXgbW
// OOcDO
// jyQfF
// yyfJq
// tmzTU
// ttARA
// IIEvH
// VjxGA
// XmXgW
// ipEfL
// jLtIT
// Jzayt
// oBiby
// xeZBM
// tbPLp
// yXsFO
// vXFYT
// WBWCG
// cSecz
// tUaVi
// nXUUO
// uYmPt
// ILOBT
// jisFt
// adReP
// PgXVE
// RbSmn
// hbejT
// UgTNN
// GPhYu
// ZhwcV
// phMcS
// sDCpm
// JYjJI
// wKaXT
//# sourceMappingURL=users.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map