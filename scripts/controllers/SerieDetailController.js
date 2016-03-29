angular.module("moviedb").controller("SerieDetailController", ["$scope", "$routeParams", "$location", "APIClient", "paths",
        function($scope, $routeParams, $location, APIClient, paths) {
            //scope init
            $scope.model = {};
            $scope.uiState = 'loading';

            // COntroller init
            $scope.$emit("ChangeTitle", "Loading...");
            APIClient.getSerie($routeParams.id).then(
                //serie encontrada
                function(serie) {
                    $scope.model = serie;
                    $scope.uiState = 'ideal';
                    $scope.$emit("ChangeTitle", $scope.model.title);
                },
                //serie no encontrada
                function(error) {
                    $location.url(paths.notFound);
                }
            );

        }
    ]

);