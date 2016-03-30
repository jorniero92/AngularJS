/* 
en el modulo "moviedb", defino el controlador
el primer parametro le añado el servicio --> $scope 
*/
angular.module("moviedb").controller("MenuController", ["$scope", "$location", "paths", function($scope, $location, paths) {

    /* Inicializar el $scope */
    //x defecto va a la pestaña "movies"
    $scope.model = {
        //mirar la referencia de la pestaña en la q estoy
        selectedItem: paths.movies
    };

    $scope.paths = paths;


    /* Scope Methods */
    //2º Dado un item devuelve la clase css para que se represente
    $scope.getClassForItem = function(item) {
        if ($scope.model.selectedItem == item) {
            return "active";

        } else {
            return "";
        }
    };

    /* Scope Watches */

    // Observar el selectedItem y cuando varie
    $scope.$watch("model.selectedItem", function(newValue, oldValue) {
        $scope.$emit("OnMenuChange", newValue);
    });

    $scope.$on("$locationChangeSuccess", function(evt, currentRoute) {
        $scope.model.selectedItem = $location.path();
    });
}]);
