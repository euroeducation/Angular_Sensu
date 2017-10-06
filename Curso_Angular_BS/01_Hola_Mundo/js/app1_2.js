//controller en angular js en formato angular js 1.2

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

angular.module("appMain",[])
.controller("AppController", AppController)
//instancia: angular.module("appMain",[])
//llamar: angular.module("appMain")



    