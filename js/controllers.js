'use strict';

/* Controllers */
var phonecatApp = angular.module('phonecatApp', ['ngRoute']);

phonecatApp.config(['$routeProvider', '$locationProvider', function($routeProvide, $locationProvider){
  $routeProvide
      .when('/',{
        templateUrl:'template/home.html',
        controller:'PhoneListCtrl'
      })
      .when('/about',{
        templateUrl:'template/about.html',
        controller:'AboutCtrl'
      })
      .when('/contact',{
        templateUrl:'template/contact.html',
        controller:'ContactCtrl'
      })
      .when('/phones/:phoneId', {
        templateUrl:'template/phone-detail.html',
        controller:'PhoneDetailCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
}]);

phonecatApp.controller('PhoneListCtrl',['$scope','$http', '$location', function($scope, $http, $location) {
  console.log('$location.url() - ', $location.url());
  console.log('$location.path() - ', $location.path());
  console.log('$location.search() - ', $location.search());
  console.log('$location.hash() - ', $location.hash());

  $http.get('phones/phones.json').success(function(data, status, headers, config) {
    $scope.phones = data;
  });

}]);
//About Controller
phonecatApp.controller('AboutCtrl',['$scope','$http', '$location', function($scope, $http, $location) {

}]);
//Contact Controller
phonecatApp.controller('ContactCtrl',['$scope','$http', '$location', function($scope, $http, $location) {

}]);
//Phone Detail Controller
phonecatApp.controller('PhoneDetailCtrl',['$scope','$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams) {
  $scope.phoneId = $routeParams.phoneId;
}]);


