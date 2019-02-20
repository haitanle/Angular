'use strict';

/**
 * @ngdoc service
 * @name udaciMealsAngularApp.foodFinder
 * @description
 * # foodFinder
 * Service in the udaciMealsAngularApp.
 */
angular.module('udaciMealsAngularApp')
  .service('foodFinder', function () {
  	this.getMenu = function(){
  		return $.get('/menu/menu.json');
  	};
  });
