/* 
	Un "value" no se uede inyectar en fase de configuracion 
	Un "constant" si se puede inyectar en fase de configuracion 
*/
angular.module("moviedb").constant("paths", {
    home: "/",
    movies: "/movies/",
    series: "/series/",
    people: "/people/"
});