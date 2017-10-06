// controller de angular js en formato de angular js 1.5 (EmmaScript6)



class AppController {
    
    //inyectamos el scope unicamente para poder mostrar por consola
    //como parte del objeto controller (i.e. this)
    constructor($scope){
        this.$scope=$scope;
    }

    $onInit(){
        this.titulo='Curso de Angular JS y BS';
        this.autor='Busco Colegio';
        console.log(this);
    }

    borrar(){
        this.nombre='';
        console.info('se ha pulsado el boton');
        console.log(this);
    }
}

angular.module("appMain")
.controller("AppController", AppController)

/* Angular 2:
@ngComponent {
    template
    vista

}
class App...
*/