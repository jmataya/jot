(function() {
  'use strict';

  var app = angular.module('jot', []);

  app.controller('MainCtrl', [
    '$scope',
    function mainCtrl($scope) {
      $scope.welcome = 'Welcome to Angular Jot';
    }
  ]);
})();
