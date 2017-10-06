//controller en angular js en formato original
//anterior a angular js 1.2
angular.module("appMain",[])
.controller("AppController", [ '$scope', function($scope){
    $scope.titulo='Curso de Angular JS y BS';
    $scope.autor='Busco Colegio';
    console.log($scope);
    $scope.borrar=function(){
        $scope.nombre='';
        console.info('se ha pulsado el boton');
        console.log($scope);
    }
}])
//instancia: angular.module("appMain",[])
//llamar: angular.module("appMain")
