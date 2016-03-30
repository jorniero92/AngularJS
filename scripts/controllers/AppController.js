angular.module("moviedb").controller("AppController", 
    ["$scope", "$location", "paths", function($scope, $location, paths) {
    var controller = this;


    /* Propiedades de los controladores */
    controller.titles = {};
    controller.titles[paths.movies] = "Movies List";
    controller.titles[paths.series] = "Series List";
    controller.titles[paths.people] = "People List";


    /* Inicializar el $scope */
    $scope.model = {
        //mirar la referencia de la pestaña en la q estoy
        title: ""
    }

    $scope.$on("$locationChangeSuccess", function(evt, currentRoute) {
        console.log("$locationChangeSuccess", $location.path());
        $scope.model.title = controller.titles[$location.path()] || "404 Not Found";
    });

    $scope.$on("ChangeTitle", function(evt, title) {
        $scope.model.title = title;
    });

}]);
