(function () {
    "use strict";
    angular.module('angularFormsApp')
        .factory('DataService', [DataService]);

    function DataService() {
        var employee1 = {
                    id: 123,
                    fullName: "Rashed",
                    notes: "The ideal employee. Just don't touch his pen",
                    department: "Administration",
                    perkCar: true,
                    perkStock: false,
                    perkSixWeeks: true,
                    payrollType: "none"
                };
        return {
            insertEmployee: insertEmployee,
            updateEmployee: updateEmployee,
            getEmployee: getEmployee
        }

        function insertEmployee(employee) {
            return true;
        }

        function updateEmployee(employee) {
            return employee1 = employee;
        }

        function getEmployee(id) {
            if (id == '123') {
                return employee1;
            }else{
                return undefined;
            }
        }
    }
})();