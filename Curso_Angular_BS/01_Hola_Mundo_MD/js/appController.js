//invocar al modulo instanciado

angular.module("appMain")
.controller("AppController", AppController)

AppController.$inject = ['$scope'];
function AppController ($scope){
    this.titulo='Curso de Angular JS y BS';
    this.autor='Busco Colegio';
    console.log(this);
    console.log($scope);
    this.borrar=function(){
        this.nombre='';
        console.info('se ha pulsado el boton');
        console.log(this);
    }
}