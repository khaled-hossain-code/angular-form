(function(){
    "use strict";
    var angularFormsApp = angular.module('angularFormsApp',["ngRoute","ui.bootstrap"]);

    angularFormsApp.config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/home',{
                templateUrl: 'app/home.html',
                controller: 'HomeController'
            })
            .when('/newEmployeeForm',{
                templateUrl: 'app/EmployeeForm/efTemplate.html',
                controller: 'efController'
            })
            .when('/updateEmployeeForm/:id',{
                templateUrl: 'app/EmployeeForm/efTemplate.html',
                controller: 'efController'
            })
            .otherwise({
                redirectTo: '/home'
            })
    }])
})();