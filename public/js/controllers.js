'use strict';

/* Controllers */
angular.module('myApp.main', []).
  controller('AppCtrl', function ($scope, socket) {
    socket.on('send:name', function (data) {
      $scope.name = data.name;
    });
  });


angular.module("myApp.title", []).
  controller('TitleCtrl', function ($scope, socket) {
    socket.on('send:market', function (data) {
      $scope.m_data = data.market_data;
    });
});

angular.module("myApp.chart", ['chart.js']).
controller("ChartCtrl", function ($scope, socket) { 
  $scope.series = ['Series A'];  
  $scope.options = {
      animation: false,
      showScale: false,
      showTooltips: false,
      pointDot: false,
      datasetStrokeWidth: 0.5
    };
   socket.on('send:market.currencies', function (data) {  
      var array = JSON.parse(data.market_data);
      $scope.labels = array;
  });

   socket.on('send:market.rates', function (data) {  
      var array = JSON.parse("[" + data.market_data + "]");     
      $scope.data = array;
  });
});


angular.module('myApp.currency.selector', []).
controller("CurrencyCtrl", function ($scope, socket) {
    socket.on('send:currency', function (data) {             
      var array = JSON.parse(data.currs);      
      $scope.currs = array;
     }); 

    $scope.changeCurrency = function(value) {
    $scope.selected_item = value;
    socket.emit('currency.type', {
    CURRENCY_TYPE: $scope.selected_item
    });
    }
  });