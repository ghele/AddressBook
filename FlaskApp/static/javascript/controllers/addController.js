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
