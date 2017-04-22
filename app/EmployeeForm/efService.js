(function(){
    "use strict";
    angular.module('angularFormsApp')
           .factory('efService',[efService]);

    function efService(){
        return {
            employee:{
                fullName: "Rashed",
                notes: "The ideal employee. Just don't touch his pen",
                department: "Administration",
                perkCar: true,
                perkStock: false,
                perkSixWeeks: true,
                payrollType: "none"

            }
        }
    }
})();