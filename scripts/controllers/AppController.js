angular.module("moviedb").controller("AppController", ["$scope", function($scope) {
    /* Inicializar el $scope */
    $scope.model = {
        //mirar la referencia de la pestaña en la q estoy
        title: ""
    }

    /* Scope Methods */
    //$on son eventos del scope de angular para capturar lo q nosotros digamos
    //en este caso capturamos "OnMenuChange"
    $scope.$on("OnMenuChange", function(evt, data) {
        //console.log("OnMenuChange", arguments);
        //$scope.model.title = arguments[1];
        $scope.model.title = data;
    });
}]);