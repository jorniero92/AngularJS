// en el modulo "moviedb", defino el controlador
//el primer parametro le añado el servicio --> $scope
angular.module("moviedb").controller("MenuController", 
	["$scope", function($scope) {
		//inicializar el $scope
		$scope.model = {
			//mirar la referencia de la pestaña en la q estoy
			selectedItem: "movies"
		};
	}]
);