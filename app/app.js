var boxoffice=angular.module("boxoffice",['ngRoute','ui.bootstrap']);

boxoffice.config(function($routeProvider) {
    $routeProvider
        .when('/', {

            templateUrl: 'pages/home.html',
            controller: 'homecontroller'
        })
        .when('/info',{
        	templateUrl: 'pages/info.html',
            controller: 'infocontroller'

        })
        .when('/confirm', {

            templateUrl: 'pages/confirm.html',
            controller: 'confirmcontroller'
        })
    });