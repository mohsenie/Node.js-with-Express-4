'use strict';

// Declare app level module which depends on filters, and services

angular.module('myApp', [
  'ui.router',
  'myApp.main',
  'myApp.title',
  'myApp.chart',
  'myApp.currency.selector',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  // 3rd party dependencies
  'btford.socket-io'
]).config(function($stateProvider){
    $stateProvider
        .state('index', {
            url: "",
            views: {
                "viewA": {
                    templateUrl: "/partials/partial1",
                    controller: 'TitleCtrl'
                },
                "viewB": {
                    templateUrl: '/partials/partial2',
                    controller: 'CurrencyCtrl'
                },
				        "viewC": {
                    templateUrl: '/partials/partial3',
                    controller: 'ChartCtrl'
                }
            }
        })
    });