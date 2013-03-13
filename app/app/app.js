'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', ['md5', 'ui-gravatar']);

function myController($scope) {
    $scope.email = 'jlavin@jimlavin.net';
}