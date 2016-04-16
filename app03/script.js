/// <reference path="/Users/ayoko001/Desktop/angularJS/tutorial/scripts/angular.min.js" />

//module
var myApp = angular.module("myModule", []);

//controller
myApp.controller("myController", 
	function($scope) {
		var employee = {
				firstName: "David",
				lastName: "Hastings",
				gender: "Male"
		};
		$scope.employeeObject = employee;
	}
);