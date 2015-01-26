'use strict';

/* Controllers */
var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl',['$scope','$http', function($scope, $http) {

    $http.get('phones/phones.json').success(function(data, status, headers, config) {
        $scope.phones = data;
    });

}]);



