// en el modulo "moviedb", defino el controlador
//el primer parametro le añado el servicio --> $scope
angular.module("moviedb").controller("MenuController", ["$scope","$location", function($scope, $location) {

    /* Inicializar el $scope */
    //x defecto va a la pestaña "movies"
    $scope.model = {
        //mirar la referencia de la pestaña en la q estoy
        selectedItem: "movies"
    };

    /* Scope Methods */
    /*
        //1º Es el onclick
        $scope.setSelectedItem = function(item) {
            $scope.model.selectedItem = item;
        };
    */
    //2º Dado un item devuelve la clase css para que se represente
    $scope.getClassForItem = function(item) {
        if ($scope.model.selectedItem == item) {
            return "active";

        } else {
            return "";
        }
    };

    /* Scope Watches */
    /*
        // Observar el selectedItem y cuando varie
        $scope.$watch("model.selectedItem", function(newValue, oldValue) {
            //console.log("WATCH", arguments);
            //$scope.$emit("OnMenuChange", $scope.model.selectedItem);
            $scope.$emit("OnMenuChange", newValue);
        });
    */
    $scope.$on("$locationChangeSuccess", function(evt, currentRoute) {
        $scope.model.selectedItem = $location.path();
    });
}]);