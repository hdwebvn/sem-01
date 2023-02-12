// Khai bao Angular App
var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/", { templateUrl: "./views/home.html" })
        .when("/index.html", { templateUrl: "./views/home.html" })
        .when("/bio", { templateUrl: "./views/detail-biography.html" })
    // .otherwise({ redirectTo: '/' })
    // $locationProvider.html5Mode(true);
});

app.controller('myControll', function ($scope, $http) {


});