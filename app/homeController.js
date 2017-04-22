(function(){
    "use strict";
    angular.module('angularFormsApp')
           .controller('HomeController',['$scope','$location',homeController]);

    function homeController($scope, $location){
        $scope.addNewEmployee = function(){
            $location.path('/newEmployeeForm');
        }
        console.log($scope);
    }
})();