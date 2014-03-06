'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', ['angularjs-gravatardirective']);

function myController($scope) {
    $scope.email = 'jim.lavin@jimlavin.net';
}