'use strict';

/**
 * @ngdoc function
 * @name udaciMealsAngularApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the udaciMealsAngularApp
 */
angular.module('udaciMealsAngularApp')
  .controller('MenuCtrl', ['foodFinder', function (menu) {

    var vm = this;

    menu.getMenu().then(function(data){
      vm.items = data;
    });

    this.increment = function(item){
      item.rating++;
    },
     this.decrement = function(item){
      item.rating--;
    }
  }]);
