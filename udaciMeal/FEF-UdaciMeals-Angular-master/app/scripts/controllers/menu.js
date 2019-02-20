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
      this.items = [
        {id : 'chicken-pudding',
        name : 'Strawberry Pudding',
        img : 'blackberry-water.jpg',
        rating : 2
      },
        {id : 'strawberry-pudding',
        name : 'Strawberry Pudding',
        img : 'strawberry-yogurt.jpg',
        rating : 2
      },
        {id : 'bananan-pudding',
        name : 'banana Pudding',
        img : 'bbq-pork-combo.jpg',
        rating : 2
      }
      ];

      this.increment = function(item){
        item.rating++;
      },
       this.decrement = function(item){
        item.rating--;
      }
  });
