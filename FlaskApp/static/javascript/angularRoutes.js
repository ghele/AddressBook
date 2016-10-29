var myApp = angular.module('addressBookApp', ['ngRoute']);

myApp.config(["$routeProvider", function($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "../static/partials/home.html",
    });
    $routeProvider.when("/contacts", {
        templateUrl: "../static/partials/contacts.html",
        controller: "ContactsCtrl"
    });
    $routeProvider.when("/contacts/addContact", {
        templateUrl: "../static/partials/addContact.html",
        controller: "AddCtrl"
    });
}]);
