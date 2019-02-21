'use strict';

/**
 * @ngdoc function
 * @name udaciMealsAngularApp.controller:ItemCtrl
 * @description
 * # ItemCtrl
 * Controller of the udaciMealsAngularApp
 */
angular.module('udaciMealsAngularApp')
  .controller('ItemCtrl', ['$stateParams', 'foodFinder', function ($stateParams, foodFinder) {

  	var vm = this;

  	foodFinder.getItem($stateParams.id).then(function(data){
  		//console.log(data);
  		//debugger
  		vm.data = data; 
  	});

  }]);
