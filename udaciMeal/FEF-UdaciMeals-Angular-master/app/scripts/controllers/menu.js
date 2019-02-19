'use strict';

/**
 * @ngdoc function
 * @name udaciMealsAngularApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the udaciMealsAngularApp
 */
angular.module('udaciMealsAngularApp')
  .controller('MenuCtrl', function () {
      this.id = 'strawberry-pudding';
      this.name = 'Strawberry Pudding';
      this.img = 'strawberry-pudding.jpg';
      this.rating = 5;
  });
