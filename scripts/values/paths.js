angular.module("moviedb").constant("paths", {
    home: "/",
    movies: "/movies/",
    movieDetail: "/movies/:id",
    series: "/series/",
    serieDetail: "/series/:id",
    people: "/people/",
    notFound: "/sorry"
});
/* 
	Un "value" no se uede inyectar en fase de configuracion 
	Un "constant" si se puede inyectar en fase de configuracion 
*/
