(function () {
    "use strict";
    angular.module('angularFormsApp')
        .controller('efController', ['$scope', 'DataService','$window','$routeParams','$modalInstance', efController]);

    function efController($scope, DataService, $window, $routeParams, $modalInstance) {
        
        if($routeParams.id){
            $scope.employee = DataService.getEmployee($routeParams.id);    
        }else{
            $scope.employee = { id: 0}
        }

        $scope.editableEmployee = angular.copy($scope.employee);

        $scope.departments = [
            "Engineering",
            "Marketing",
            "Finance",
            "Administration"
        ];

        $scope.submitForm = function (){
            if($scope.employee.id == 0){
                //create new employee
                DataService.createEmployee($scope.editableEmployee);
            }else{
                //update employee data
                DataService.updateEmployee($scope.editableEmployee);
            }

            $scope.employee = angular.copy($scope.editableEmployee);
            //$window.history.back();
            $modalInstance.close();
        }
        $scope.cancelForm = function (){
             $scope.editableEmployee = angular.copy($scope.employee);
             //$window.history.back();
             $modalInstance.dismiss();
        }
    }
})();