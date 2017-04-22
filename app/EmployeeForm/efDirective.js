(function(){
    "use strict";

    angular.module('angularFormsApp')
           .directive('employeeForm',[employeeForm]);

    function employeeForm(){
        return {
            restrict: 'E',
            templateUrl: 'app/EmployeeForm/efTemplate.html'
        }
    }
})();