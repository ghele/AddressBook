var myApp = angular.module('addressBookApp', ['ngRoute']);

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
