angular.module("moviedb").service("MovieService", ["$http", "$q", "apiPaths", "URL", function($http, $q, apiPaths, URL) {

    this.apiRequest = function(url) {
        // Crear el objeto diferido
        var deffered = $q.defer();

        // hacer asincrono el trabajo
        $http.get(url).then(
            //peticion ok
            function(response) {
                //resolver la promesa
                deffered.resolve(response.data);
            },
            //peticion KO
            function(response) {
                //rechazar la promesa
                deffered.reject(response.data);
            }
        );
        //devolver la promesa
        return deffered.promise;
    };


    this.getMovies = function() {
        return this.apiRequest(apiPaths.movies);
    };

    this.getMovie = function(movieId) {
        var url = URL.resolve(apiPaths.movieDetail, { id: movieId });
        return this.apiRequest(url);
    };

}]);