'use strict';

/* Controllers */
var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl',['$scope','$http', function($scope, $http) {
    $scope.title = 'Телефоны';

    $http.get('phones/phones.json').success(function(data, status, headers, config) {
        console.log('This is Data:',data,'\n\nThis is Status:',status,'\n\nThis is Headers:',headers,'\n\nThis is config:',config);
        $scope.phones = data;
    });

    //Filter
    var date = new Date();

    $scope.today = date;

    $scope.doneAndFilter = function(phoneItem) {
      return phoneItem.name && phoneItem.priority > 1 && phoneItem.status === true;
    }

    $scope.sortField = undefined;
    $scope.reverse = false;

    $scope.sort = function(fieldName) {
      if ($scope.sortField === fieldName) {
        $scope.reverse = !$scope.reverse;
      } else {
        $scope.sortField = fieldName;
        $scope.reverse = false;
      }
    };
    $scope.isSortUp = function(fieldName) {
      return $scope.sortField === fieldName && !$scope.reverse;
    };
    $scope.isSortDown = function(fieldName) {
      return $scope.sortField === fieldName && $scope.reverse;
    };
}]);



