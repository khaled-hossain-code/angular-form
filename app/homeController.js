(function(){
    "use strict";
    angular.module('angularFormsApp')
           .controller('HomeController',['$scope','$location','DataService',homeController]);

    function homeController($scope, $location, DataService){
        
        $scope.showCreateEmployeeForm = function(){
            $location.path('/newEmployeeForm');
        }

        $scope.updateEmployeeForm = function(id){
            $location.path('/updateEmployeeForm/' + id);
        }
    }
})();