/// <reference path="/Users/ayoko001/Desktop/angularJS/tutorial/scripts/angular.min.js" />

//this is how to declear a module, basically a main function
var myApp = angular.module("myModule", []);


//this is how to declear a controller
var myController = function($scope) {
	$scope.message = "AngularJS Tutorial";
};

myApp.controller("myController", myController);

// or

myApp.controller("myController2", 
	function($scope) {
		$scope.message = "AngularJS Tutorial";
	}
);