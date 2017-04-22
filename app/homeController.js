(function(){
    "use strict";
    angular.module('angularFormsApp')
           .controller('HomeController',['$scope','$location','$modal','DataService',homeController]);

    function homeController($scope, $location,$modal, DataService){
        
        $scope.showCreateEmployeeForm = function(){
            $location.path('/newEmployeeForm');
            // $modal.open({
            //     templateUrl: 'app/EmployeeForm/efTemplate.html',
            //     controller: 'efController'
            // })
        }

        $scope.updateEmployeeForm = function(id){
            $location.path('/updateEmployeeForm/' + id);
        }
    }
})();