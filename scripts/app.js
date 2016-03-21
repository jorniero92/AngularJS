//defino el modul0 "moviedb" e 
//inicializo las dependencias con --> []
angular.module("moviedb", ['ngRoute']).config(
    ["$routeProvider", function($routeProvider) {

        //configuro las URLs de la aplicacion
        $routeProvider.when('/movies/', {
        	templateUrl: 'views/MoviesList.html'
        }).when('/series/', {
        	templateUrl: 'views/SeriesList.html'
        }).when('/people/', {
        	templateUrl: 'views/PeopleList.html'
        }).when('/', {
        	redirectTo: '/movies'
        }).otherwise({
        	templateUrl: 'views/404.html'
        });
    }]);