(function(){
  app = angular.module('resFlight')
  app.component('resFlight',{
  	templateUrl: './Assets/JS/Components/resflight/resflight.template.html',
  	controller: function($scope,myService){
      $scope.submit = function(){
        myService.getRes($scope.CNIC).then((data)=>{
          $scope.flights=data});
      };
  	}
  })
}());