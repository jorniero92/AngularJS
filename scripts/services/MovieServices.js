angular.module("moviedb").service("MovieService", ["$http", "$q", function($http, $q) {

    this.getMovies = function() {


        // Crear el objeto diferido
        var deffered = $q.defer();

        // hacer asincrono el trabajo
        $http.get('/api/movies/').then(
            //peticion ok
            function(response) {
                //resolver la promesa
                deffered.resolve(response.data);
            },
            //peticion KO
            function(response) {
                //rechazar la promesa
                deffered.resolve(response.data);
            }
        );
        return deffered.promise;

    };
}]);