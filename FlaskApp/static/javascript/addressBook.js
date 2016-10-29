var myApp = angular.module('addressBookApp', ['ngRoute']);

myApp.controller("AddCtrl", ["$scope", "$http", function($scope, $http) {
    $scope.firstLastPattern = new RegExp(/^\b[A-Z][a-z]*(\s*\b[A-Z][a-z]*\b)*$/);
    $scope.addressPattern = new RegExp(/^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/);
    $scope.cityCountryPattern = new RegExp(/^[a-zA-Z\s]*$/);

    $scope.checkDirtyAndInvalid = function(fieldName) {
        if(($scope.addressBookForm[fieldName].$dirty) && ($scope.addressBookForm[fieldName].$invalid)) {
            return true;
        }
        return false;
    }

    $scope.checkDirtyAndRequired = function(fieldName) {
        if(($scope.addressBookForm[fieldName].$dirty) && ($scope.addressBookForm[fieldName].$error.required)) {
            return true;
        }
        return false;
    }

    $scope.checkInput = function(fieldName, criterion) {
        if(($scope.addressBookForm[fieldName].$dirty) && ($scope.addressBookForm[fieldName].$error[criterion])) {
            return true;
        }
        return false;
    }

    // function to submit the form after all validation has occurred
    $scope.submitForm = function() {
        // check to make sure the form is completely valid
        if ($scope.addressBookForm.$valid) {
            $http({
                method: 'POST',
                url: '/addContact',
                data: {
                    contactData: $scope.contact
                }
            }).then(function successCallback(response) {
                console.log(response)
            }, function errorCallback(response) {
                console.log(response)
            });
        }
    }
}]);

myApp.controller("ContactsCtrl", ["$scope", "$http", function($scope, $http) {
    $http({
        method: 'GET',
        url: '/contacts'
    }).then(function successCallback(response) {
        $scope.contactEntries = response.data;
        if($scope.contactEntries.length != 0) {
                $scope.contactListNotEmpty = true
        } else {
            $scope.contactListNotEmpty = false
        }
        console.log('contact', response.data)
    }, function errorCallback(error) {
        console.log(error)
    });
}]);

// myApp.controller('TestController', ['$scope', '$http', function($scope, $http) {
//   $scope.greeting = 'Hola!';
//
  // $http({
  //     method: 'GET',
  //     url: '/index'
  // }).then(function successCallback(response) {
  //     console.log(response.data)
  // }, function errorCallback(response) {
  //     console.log(response.data)
  // });
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
