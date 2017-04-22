(function () {
    "use strict";
    angular.module('angularFormsApp')
        .factory('DataService', [DataService]);

    function DataService() {
        return {
            insertEmployee: insertEmployee,
            updateEmployee: updateEmployee,
            getEmployee: getEmployee
        }

        function insertEmployee(employee) {
            return true;
        }

        function updateEmployee(employee) {
            return true;
        }

        function getEmployee(id) {
            if (id == '123') {
                return {
                    fullName: "Rashed",
                    notes: "The ideal employee. Just don't touch his pen",
                    department: "Administration",
                    perkCar: true,
                    perkStock: false,
                    perkSixWeeks: true,
                    payrollType: "none"

                }
            }else{
                return undefined;
            }
        }
    }
})();