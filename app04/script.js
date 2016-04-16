/// <reference path="/Users/ayoko001/Desktop/angularJS/tutorial/scripts/angular.min.js" />

//module
var myApp = angular.module("myModule", [])
				   .controller("myController", function ($scope) {
					   var country = {
							   name: "USA",
							   capital:"Washington, D.C.",
							   flag: "../Img/usFlag.png"
					   };
					   $scope.country = country;
				   });