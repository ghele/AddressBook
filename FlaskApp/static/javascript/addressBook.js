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

myApp.controller("AddCtrl", ["$scope", function($scope) {
    $scope.firstLastPattern = new RegExp(/^\b[A-Z][a-z]*(\s*\b[A-Z][a-z]*\b)*$/);

    $scope.checkDirtyAndInvalid = function() {
        if(($scope.addressBookForm.firstName.$dirty) && ($scope.addressBookForm.firstName.$invalid)) {
            return true;
        }
        return false;
    }

    $scope.checkDirtyAndRequired = function() {
        if(($scope.addressBookForm.firstName.$dirty) && ($scope.addressBookForm.firstName.$error.required)) {
            return true;
        }
        return false;
    }
}]);

myApp.controller("ContactsCtrl", ["$scope", function($scope) {
    // var self = this;
    $scope.contactEntries = [ {name:"erf"} ];
    $scope.contactsList = function() {
        if($scope.contactEntries.length != 0) {
            return true;
        }
        return false;
    }
    // self.contactsListSee = function() {
    //     return self.con
    // }
}])

// myApp.controller('TestController', ['$scope', '$http', function($scope, $http) {
//   $scope.greeting = 'Hola!';
//
//   $http({
//       method: 'GET',
//       url: '/index'
//   }).then(function successCallback(response) {
//       console.log(response.data)
//   }, function errorCallback(response) {
//       console.log(response.data)
//   });
// }]);

// Filters
// var app = angular.module('app', []);
//
// app.filter('makeUppercase', function () {
//   return function (item) {
//       return item.toUpperCase();
//   };
// });
//
// app.controller('PersonCtrl', function () {
//   this.username = 'Todd Motto';
// });
