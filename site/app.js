(function () {
'use strict';
	
	angular.module('ShoppingListCheckOff', [])
	.controller('ToBuyShoppingController', ToBuyShoppingController)
	.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

	ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyShoppingController(ShoppingListCheckOffService) {
		var toBuy = this;
		toBuy.toBuyArray = ShoppingListCheckOffService.getToBuy();
		toBuy.migrate = function (index) {
			ShoppingListCheckOffService.migrate(index);
		};
	}

	AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
		var alreadyBought = this;
		alreadyBought.alreadyBoughtArray = ShoppingListCheckOffService.getAlreadyBought();
	}

	function ShoppingListCheckOffService() {
  		var service = this;
  		var toBuyArray = [
	  		{quantity: 10, type: "Cookies"},
	  		{quantity: 20, type: "Cookies"},
	  		{quantity: 30, type: "Cookies"},
	  		{quantity: 40, type: "Cookies"},
	  		{quantity: 50, type: "Cookies"},
	  		{quantity: 60, type: "Cookies"},
	  		{quantity: 70, type: "Cookies"},
	  		{quantity: 80, type: "Cookies"},
	  		{quantity: 90, type: "Cookies"}
  		];
  		var alreadyBoughtArray = [];
  		service.migrate = function (index) {
  			var item = toBuyArray[index];
  			toBuyArray.splice(index, 1);
  			alreadyBoughtArray.push(item);
  		};
  		service.getToBuy = function () {
    		return toBuyArray;
  		};
  		service.getAlreadyBought = function () {
    		return alreadyBoughtArray;
  		};
  	}

})();