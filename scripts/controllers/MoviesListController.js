angular.module("moviedb").controller("MoviesListController", ["$scope", "$log", "MovieService", function($scope, $log, MovieService) {

    //  $scope.uiState = 'blank';
    /* Scope model init */
    $scope.model = [];

    $scope.uiState = 'loading';
    /* controller start*/
    MovieService.getMovies().then(
        // promesa resuelta
        function(data) {
            $log.log("SUCCESS", data);
            $scope.model = data;
            if ($scope.model.length == 0) {
                $scope.uiState = 'blank';
            } else {
                $scope.uiState = 'ideal';
            }
        },
        // promesa rechazada
        function(data) {
            $log.error("ERROR", data);
            $scope.uiState = 'error';
        }

    );
}]);