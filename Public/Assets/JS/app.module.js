(function(){
	app=angular.module('myApp',['ui.router','airlineCard','resFlight','bForm']);
	app.config(function($stateProvider) {
  		var homeState = {
    	name: 'home',
    	url: '/home',
    	component: 'airlineCard'
  	}
  	var bookingsState = {
    	name: 'bookings',
    	url: '/bookings',
    	component: 'resFlight'
  	}
	var formState = {
		name: 'form',
		url: '/form/{flightId}',
		component: 'bForm',
		resolve: {
		  flight: function(myService,$transition$) {
			return myService.getFlight($transition$.params().flightId)
		  }
		}
	  }
	  
  	$stateProvider.state(homeState);
	$stateProvider.state(bookingsState);
	$stateProvider.state(formState);
	});


	app.service('myService',function($http){
		var self=this;
		self.getUsers=function(){
			var promise = $http.get("/airlines").then(function(response) {
     			return response.data;
    		});
			return promise;

		};
		self.getFlights=function(ddate,dest,aloc){
			var promise = $http.get("/airlines"+"/"+dest+"/"+aloc+"/"+ddate).then(function(response) {
     			return response.data;
    		});
			return promise;

		};
		self.getRes=function(id){
			var promise = $http.get("/reservations"+"/"+id).then(function(response) {
     			return response.data;
    		});
			return promise;
		};
		self.getFlight=function(id){
			var promise = $http.get("/flight/"+id).then(function(response) {
				return response.data;
		   });
		   return promise;
		}
		
	});
	// app.controller('myCtrl', function($scope,$http,myService){
	// 	myService.getUsers().then(response=>$scope.name=response[0].Airline);
	// });
	
}());