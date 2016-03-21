// en el modulo "moviedb", defino el controlador
//el primer parametro le añado el servicio --> $scope
angular.module("moviedb").controller("MenuController", ["$scope", function($scope) {

    /* inicializar el $scope */
    //x defecto va a la pestaña "movies"
    $scope.model = {
        //mirar la referencia de la pestaña en la q estoy
        selectedItem: "movies"
    };

    /* scope methods */

    //es el onclick
    $scope.setSelectedItem = function(item) {
        $scope.model.selectedItem = item;
    };
    //dado un item devuelve la clase css para que se represente
    $scope.getClassForItem = function(item) {
        if ($scope.model.selectedItem == item) {
            return "active";

        } else {
            return "";
        }
    };
}]);