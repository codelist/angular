angular.module('CodeListApp').config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "main.htm"
    })
    .when("/menu_1", {
        templateUrl : "menu_1.htm"
    })
    .when("/menu_2", {
        templateUrl : "menu_2.htm",
        controller : "Page2Controller",
        controllerAs: "page2Ctrl"
    })
    .when("/menu_3", {
        templateUrl : "menu_3.htm"
    });
});
