(function(){
	angular.module('airlineCard')
	.component('airlineCard', {
  		templateUrl: './Assets/JS/Components/airlinecard/airlinecard.template.html',
  		controller: function($scope,$http,myService){
  		
  			$scope.submit = function(){
  				var ddate=$scope.departuredate.getFullYear()+"-"+($scope.departuredate.getMonth()+1)+"-"+$scope.departuredate.getDate();
  				var dest=$scope.destination;
  				var aloc=$scope.departureloc;

  				console.log(ddate+dest+aloc)
  				myService.getFlights(ddate,dest,aloc).then(response=>{
					  $scope.airline=response
					  if(response.length===0){
							$scope.flag=true;
					  }else{
						$scope.flag=false;
					  }
					});
			}
			$scope.book = function(id){
				console.log(id);
				$http.post('/test',data={a:1});
			}
  		}
	});
}())