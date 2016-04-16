/// <reference path="/Users/ayoko001/Desktop/angularJS/tutorial/scripts/angular.min.js" />

//module
var myApp = angular.module("myModule", [])
				   .controller("myController", function ($scope) {
					   var employees = [
					                   {firstName:"Ben", lastName:"Hasting", gender:"Male", Salary:55000},
					                   {firstName:"Sara", lastName:"Paul", gender:"Female", Salary:68000},
					                   {firstName:"Mark", lastName:"Holland", gender:"Male", Salary:57000},
					                   {firstName:"Pam", lastName:"Macintosh", gender:"Female", Salary:53000},
					                   {firstName:"Todd", lastName:"Barber", gender:"Male", Salary:60000}					           
					                   ];
					   $scope.employees = employees;
					   
					   //nested array
					   var countries = [
						                    {
						                    name: "UK",
						                    cities : [
						                              {name: "London"},
						                              {name: "Manchester"},
						                              {name: "Birmingham"}
						                              ]
						                    },
						                    {
							                    name: "USA",
							                    cities : [
							                              {name: "Los Angeles"},
							                              {name: "Chicago"},
							                              {name: "Houston"}
							                              ]
							                },
						                    {
							                    name: "India",
							                    cities : [
							                              {name: "Hyderabad"},
							                              {name: "Chennai"},
							                              {name: "Mumbai"}
							                              ]
						                    }
					                    ];
					   $scope.countries = countries;
					   
				   });