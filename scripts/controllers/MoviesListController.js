angular.module("moviedb").controller("MoviesListController", 
    ["$scope", "MovieService", function($scope, MovieService) {

    $scope.uiState = 'blank';
    /* Scope model init */
    $scope.model = [];

    /*Scope Wathec*/
    $scope.$watch("model", function(newValue, oldValue) {
        if (newValue.length == 0) {
            $scope.uiState = 'blank';
        } else {
            $scope.uiState = 'ideal';
        }
    });

    /* controller start*/
    $scope.model = MovieService.getMovies();
}]);