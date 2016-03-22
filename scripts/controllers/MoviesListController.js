angular.module("moviedb").controller("MoviesListController", ["$scope", "$log", "MovieService", function($scope, $log, MovieService) {

    //  $scope.uiState = 'blank';
    /* Scope model init */
    $scope.model = [];

    $scope.uiState = 'loading';
    /* controller start*/
    MovieService.getMovies().then(
        // promesa resuelta
        function(response) {
            $log.log("SUCCESS", response.data);
            $scope.model = response.data;
            if ($scope.model.length == 0) {
                $scope.uiState = 'blank';
            } else {
                $scope.uiState = 'ideal';
            }
        },
        // promesa rechazada
        function(response) {
            $log.error("ERROR", response);
            $scope.uiState = 'error';
        }

    );
}]);