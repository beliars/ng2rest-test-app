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
var router_1 = require('@angular/router');
var api_service_1 = require('../../shared/api.service');
var LoginComponent = (function () {
    function LoginComponent(apiService, router) {
        this.apiService = apiService;
        this.router = router;
        this.userData = {
            username: '',
            password: ''
        };
        this.loginData = {};
    }
    LoginComponent.prototype.onSubmit = function (form, usernameInput) {
        var _this = this;
        console.log(form);
        if (form.valid) {
            this.apiService.loginUser(this.userData).then(function (loginData) {
                console.log(loginData);
                if (loginData.success) {
                    _this.message = 'Logging in...';
                    var link_1 = ['/products'];
                    setTimeout(function () {
                        _this.router.navigate(link_1);
                    }, 2000);
                }
                else {
                    _this.message = loginData.message;
                    usernameInput.focus();
                    _this.userData.password = '';
                }
                return _this.loginData = loginData;
            });
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-login',
            templateUrl: 'login.component.html',
            styleUrls: ['login.component.css']
        }), 
        __metadata('design:paramtypes', [api_service_1.ApiService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map