webpackJsonp([4],{

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var apiUrl = 'https://testinghost3476.000webhostapp.com/api/';
// let apiUrl = 'http://localhost/testing/'
/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthServiceProvider = /** @class */ (function () {
    function AuthServiceProvider(http) {
        this.http = http;
        //console.log('Hello AuthServiceProvider Provider');
    }
    AuthServiceProvider.prototype.postData = function (type, body) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Accept', 'application/json');
            headers.append('Content-Type', 'application/json');
            var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
            _this.http.post(apiUrl + type, JSON.stringify(body), options)
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthServiceProvider.prototype.getData = function (type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Accept', 'application/json');
            var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
            _this.http.get(apiUrl + type, options)
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], AuthServiceProvider);
    return AuthServiceProvider;
    var _a;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the CommonProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CommonProvider = /** @class */ (function () {
    function CommonProvider(loadingCtrl) {
        this.loadingCtrl = loadingCtrl;
    }
    CommonProvider.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({ content: "Loading..." });
        this.loader.present();
    };
    CommonProvider.prototype.closeLoading = function () {
        this.loader.dismiss();
    };
    CommonProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["e" /* LoadingController */]])
    ], CommonProvider);
    return CommonProvider;
}());

//# sourceMappingURL=common.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailProdukPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_common__ = __webpack_require__(128);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the DetailProdukPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailProdukPage = /** @class */ (function () {
    function DetailProdukPage(navCtrl, navParams, toastCtrl, authService, common) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.authService = authService;
        this.common = common;
    }
    DetailProdukPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log(this.navParams.get('id_produk'));
        var id = this.navParams.get('id_produk');
        this.getIdProduk = { id_produk: id };
        console.log(this.getIdProduk);
        this.common.presentLoading();
        this.authService.postData('getDataProduk', this.getIdProduk).then(function (result) {
            _this.getDataProduk = result;
            console.log(_this.getDataProduk);
            if (_this.getDataProduk.detailProduk) {
                _this.dataProduk = _this.getDataProduk.detailProduk;
                _this.common.closeLoading();
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: "Gagal mengambil data",
                    duration: 2000
                });
                _this.common.closeLoading();
                toast.present();
            }
        }, function (err) {
            var toast = _this.toastCtrl.create({
                message: 'Gagal koneksi ke server.' + err,
                duration: 210000
            });
            _this.common.closeLoading();
            toast.present();
        });
    };
    DetailProdukPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detail-produk',template:/*ion-inline-start:"F:\Ionic\ionicApk1\src\pages\detail-produk\detail-produk.html"*/'<!--\n  Generated template for the ProdukPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>detail produk</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<!-- <ion-content *ngFor="let data of dataProduk"> -->\n<ion-content>\n  <ion-slides autoplay="5000" class="ion-slide-position" pager="true" loop="true" speed="300">\n\n    <ion-slide>\n      <img src="https://testinghost3476.000webhostapp.com/assets/{{slider1}}" alt="slider">\n    </ion-slide>\n    <ion-slide>\n      <img src="https://testinghost3476.000webhostapp.com/assets/{{slider2}}" alt="slider">\n    </ion-slide>\n    <ion-slide>\n      <img src="https://testinghost3476.000webhostapp.com/assets/{{slider3}}" alt="slider">\n    </ion-slide>\n    \n  \n  </ion-slides>\n\n  <ion-item class="ion-item">\n    <P>Luas Bangunan</P>\n    <div class="container-icon">\n      <img src="../../assets/icon/maximize.png" alt="icon">\n      <!-- <p class="icon-text">{{data.tipe}}</p> -->\n    </div>\n  </ion-item>\n\n  <ion-item class="ion-item">\n    <P>Fasilitas Bangunan</P>\n    <div class="container-icon">\n      <img src="../../assets/icon/bed.png" alt="icon">\n      <!-- <p class="icon-text">{{data.kamar_tidur}} Kamar Tidur</p> -->\n    </div>\n    <div class="container-icon">\n      <img src="../../assets/icon/shower.png" alt="icon">\n      <!-- <p class="icon-text">{{data.kamar_mandi}} Kamar Mandi</p> -->\n    </div>\n    <div class="container-icon">\n      <img src="../../assets/icon/light-bulb.png" alt="icon">\n      <!-- <p class="icon-text">Listrik {{data.listrik}} Watt</p> -->\n    </div>\n  </ion-item>\n\n  <ion-item class="ion-item">\n    <ion-grid fixed="true">\n      <ion-row>\n        <ion-col size="2">\n          <p>Pondasi</p>\n          <!-- <p class="data-text">{{data.pondasi}}</p> -->\n        </ion-col>\n        <ion-col size="2">\n          <p>Plafon</p>\n          <!-- <p class="data-text">{{data.plafon}}</p> -->\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-item>\n\n  <ion-item class="ion-item">\n    <ion-grid>\n      <ion-row>\n        <ion-col size="2">\n          <p>Sanitasi</p>\n          <!-- <p class="data-text">{{data.sanitasi}}</p> -->\n        </ion-col>\n        <ion-col size="2">\n          <p>Carpot</p>\n          <!-- <p class="data-text">{{data.carpot}}</p> -->\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-item>\n\n  <ion-item class="ion-item">\n    <ion-grid>\n      <ion-row>\n        <ion-col size="2">\n          <p>Daun Pintu</p>\n          <!-- <p>{{data.daun_pintu}}</p> -->\n        </ion-col>\n        <ion-col size="2">\n          <p>Lantai</p>\n          <!-- <p class="data-text">{{data.lantai}}</p> -->\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-item>\n\n  <ion-item class="ion-item">\n    <ion-grid>\n      <ion-row>\n        <ion-col size="2">\n          <p>Rangka Atap</p>\n          <!-- <p class="data-text">{{data.rangka_atap}}</p> -->\n        </ion-col>\n        <ion-col size="2">\n          <p>Pagar</p>\n          <!-- <p class="data-text">{{data.pagar}}</p> -->\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-item>\n\n  <ion-item class="ion-item">\n    <ion-grid>\n      <ion-row>\n        <ion-col size="2">\n          <p>Dinding</p>\n          <!-- <p class="data-text">{{data.dinding}}</p> -->\n        </ion-col>\n        <ion-col size="2">\n          <p>Kusen</p>\n          <!-- <p class="data-text">{{data.kusen}}</p> -->\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-item>\n\n</ion-content>\n'/*ion-inline-end:"F:\Ionic\ionicApk1\src\pages\detail-produk\detail-produk.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_common_common__["a" /* CommonProvider */]])
    ], DetailProdukPage);
    return DetailProdukPage;
}());

//# sourceMappingURL=detail-produk.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarketingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MarketingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MarketingPage = /** @class */ (function () {
    function MarketingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MarketingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MarketingPage');
    };
    MarketingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-marketing',template:/*ion-inline-start:"F:\Ionic\ionicApk1\src\pages\marketing\marketing.html"*/'<!--\n  Generated template for the MarketingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>marketing</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"F:\Ionic\ionicApk1\src\pages\marketing\marketing.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], MarketingPage);
    return MarketingPage;
}());

//# sourceMappingURL=marketing.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LokasiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet__ = __webpack_require__(658);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_leaflet__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the LokasiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LokasiPage = /** @class */ (function () {
    function LokasiPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LokasiPage.prototype.ionViewDidLoad = function () {
        this.loadmap();
    };
    LokasiPage.prototype.loadmap = function () {
        this.map = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.map('map').setView([-7.9702611, 112.6369973], 16);
        __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attributions: 'www.tphangout.com',
            maxZoom: 18
        }).addTo(this.map);
        var markPoint = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.marker([-7.9702611, 112.6369973]);
        markPoint.bindPopup('<p>Elecomp Software House</p>');
        this.map.addLayer(markPoint);
    };
    LokasiPage.prototype.ionViewWillLeave = function () {
        this.map.remove();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], LokasiPage.prototype, "mapContainer", void 0);
    LokasiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lokasi',template:/*ion-inline-start:"F:\Ionic\ionicApk1\src\pages\lokasi\lokasi.html"*/'<!--\n  Generated template for the LokasiPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>lokasi</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div id="map" style="width:100%; height:50%;"></div>\n</ion-content>\n'/*ion-inline-end:"F:\Ionic\ionicApk1\src\pages\lokasi\lokasi.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], LokasiPage);
    return LokasiPage;
}());

//# sourceMappingURL=lokasi.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProdukPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_common__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__detail_produk_detail_produk__ = __webpack_require__(151);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ProdukPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProdukPage = /** @class */ (function () {
    function ProdukPage(navCtrl, navParams, toastCtrl, authService, common) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.authService = authService;
        this.common = common;
    }
    ProdukPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.common.presentLoading();
        this.authService.getData('getProduk').then(function (result) {
            _this.getDataProduk = result;
            if (_this.getDataProduk.dataProduk) {
                _this.dataProduk = _this.getDataProduk.dataProduk;
                _this.common.closeLoading();
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: "Gagal mengambil data",
                    duration: 2000
                });
                _this.common.closeLoading();
                toast.present();
            }
        }, function (err) {
            var toast = _this.toastCtrl.create({
                message: 'Gagal koneksi ke server.' + err,
                duration: 2500
            });
            _this.common.closeLoading();
            toast.present();
        });
    };
    ProdukPage.prototype.goToDetail = function (idProduk) {
        console.log(idProduk);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__detail_produk_detail_produk__["a" /* DetailProdukPage */], { id_produk: idProduk });
    };
    ProdukPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-produk',template:/*ion-inline-start:"F:\Ionic\ionicApk1\src\pages\produk\produk.html"*/'<!--\n  Generated template for the ProdukPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>produk</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<!-- <ion-content >\n  <ion-slides *ngIf="dataSlider && dataSlider.length" autoplay="5000" class="ion-slide-position" pager="true" loop="true" speed="300">\n\n    <ion-slide *ngFor="let data of dataSlider">\n      \n    </ion-slide>\n  \n  </ion-slides>\n\n  <ion-item class="ion-item">\n    <h2>Npe : 36</h2 >\n    <h2>Harga : 20000000</h2>\n  </ion-item>\n</ion-content> -->\n<ion-content class="card-background-page">\n\n  <!-- <ion-card> -->\n  <ion-card *ngFor="let data of dataProduk">\n    <img src="https://testinghost3476.000webhostapp.com/api/assets/{{data.gambar_produk}}" alt="gambar" (click)="goToDetail(data.id_produk)">\n    <!-- <img src="../../assets/imgs/logo.png" alt="img"> -->\n    <ion-card-content class="container">      \n      <p class="card-title">{{data.harga_produk}}</p>\n      <!-- <p class="card-title">PAKDPKSFS</p> -->\n      <button ion-button color="primary" (click)="goToDetail(data.id_produk)" style="margin-left: 18px;">Detail</button>\n    </ion-card-content>\n\n  </ion-card>\n\n  <!-- <ion-card>\n    <img src="../../assets/imgs/logo.png" alt="img">\n    <ion-card-content class="container">      \n    <p class="card-title">PAKDPKSFS</p>\n    <button ion-button color="primary" (click)="goToDetail()">Detail</button>\n    </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <img src="../../assets/imgs/logo.png" alt="img">\n      <ion-card-content class="container">      \n      <p class="card-title">PAKDPKSFS</p>\n      <button ion-button color="primary" (click)="goToDetail()">Detail</button>\n      </ion-card-content>\n      </ion-card> -->\n</ion-content>\n'/*ion-inline-end:"F:\Ionic\ionicApk1\src\pages\produk\produk.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_common_common__["a" /* CommonProvider */]])
    ], ProdukPage);
    return ProdukPage;
}());

//# sourceMappingURL=produk.js.map

/***/ }),

/***/ 165:
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
webpackEmptyAsyncContext.id = 165;

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/detail-produk/detail-produk.module": [
		680,
		3
	],
	"../pages/lokasi/lokasi.module": [
		682,
		2
	],
	"../pages/marketing/marketing.module": [
		681,
		1
	],
	"../pages/produk/produk.module": [
		683,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 209;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__produk_produk__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lokasi_lokasi__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__marketing_marketing__ = __webpack_require__(152);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.goToProduk = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__produk_produk__["a" /* ProdukPage */]);
    };
    HomePage.prototype.goToLokasi = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__lokasi_lokasi__["a" /* LokasiPage */]);
    };
    HomePage.prototype.goToMarketing = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__marketing_marketing__["a" /* MarketingPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"F:\Ionic\ionicApk1\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="card-background-page">\n  <ion-card (click)="goToProduk()">\n    <img src="../../assets/imgs/logo.png"/>\n    <div class="card-title">Produk</div>\n  </ion-card>\n\n  <ion-card (click)="goToLokasi()">\n    <img src="../../assets/imgs/logo.png"/>\n    <div class="card-title">Lokasi</div>\n  </ion-card>\n\n  <ion-card (click)="goToMarketing()">\n    <img src="../../assets/imgs/logo.png"/>\n    <div class="card-title">Marketing</div>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"F:\Ionic\ionicApk1\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(356);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_produk_produk__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_lokasi_lokasi__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_marketing_marketing__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_detail_produk_detail_produk__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_auth_service_auth_service__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_http__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_common_common__ = __webpack_require__(128);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_produk_produk__["a" /* ProdukPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_lokasi_lokasi__["a" /* LokasiPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_marketing_marketing__["a" /* MarketingPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_detail_produk_detail_produk__["a" /* DetailProdukPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/detail-produk/detail-produk.module#DetailProdukPageModule', name: 'DetailProdukPage', segment: 'detail-produk', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/marketing/marketing.module#MarketingPageModule', name: 'MarketingPage', segment: 'marketing', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lokasi/lokasi.module#LokasiPageModule', name: 'LokasiPage', segment: 'lokasi', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/produk/produk.module#ProdukPageModule', name: 'ProdukPage', segment: 'produk', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_produk_produk__["a" /* ProdukPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_lokasi_lokasi__["a" /* LokasiPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_marketing_marketing__["a" /* MarketingPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_detail_produk_detail_produk__["a" /* DetailProdukPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_common_common__["a" /* CommonProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 679:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(350);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"F:\Ionic\ionicApk1\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"F:\Ionic\ionicApk1\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[351]);
//# sourceMappingURL=main.js.map