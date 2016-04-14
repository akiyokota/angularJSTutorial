/// <reference path="/Users/ayoko001/Desktop/angularJS/tutorial/scripts/angular.min.js" />

//module
var myApp = angular.module("myModule", [])
				   .controller("myController", function ($scope) {
					   var employee = {
							   firstName : "Ben",
							   lastName : "Hastings",
							   gender : "Male"
					   };
					   $scope.employee = employee;
				   });