(function () {
    "use strict";
    angular.module('angularFormsApp')
        .controller('efController', ['$scope', 'efService', efController]);

    function efController($scope, efService) {
        $scope.employee = efService.employee;
        $scope.departments = [
            "Engineering",
            "Marketing",
            "Finance",
            "Administration"
        ]
        $scope.submitForm = function (){
            console.log($scope.employee);
        }
    }
})();