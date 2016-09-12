var routeApp = angular.module("routeApp", ["ngRoute"]);

var appConfig = function($routeProvider, $locationProvider) {
	$routeProvider.when("/home", {
		templateUrl: "templates/home.html",
		controller: "homeController"
	}).when("/aboutus", {
		templateUrl: "templates/aboutus.html",
		controller: "aboutusController"
	}).when("/products", {
		templateUrl: "templates/products.html",
		controller: "productsController"
	}).when("/prodInfo/:name", {
		templateUrl: "templates/prodInfo.html",
		controller: "prodInfoController"
	}).otherwise({
		redirectTo: "/home"
	});

	$locationProvider.html5Mode(true);
};

routeApp.config(appConfig);

var homeController = function($scope) {
	$scope.pageTitle = "My Home";
};

var aboutusController = function($scope) {
	$scope.pageTitle = "About Us";
};

var productsController = function($scope) {
	$scope.pageTitle = "Our Products";
};

var prodInfoController = function($scope, $routeParams) {
	$scope.name = $routeParams.name;
};

routeApp.controller("homeController", homeController);
routeApp.controller("aboutusController", aboutusController);
routeApp.controller("productsController", productsController);
routeApp.controller("prodInfoController", prodInfoController);