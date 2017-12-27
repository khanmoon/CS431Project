(function(){
  app = angular.module('bForm')
  app.component('bForm',{
    bindings: { flight: '<' },
  	templateUrl: './Assets/JS/Components/bform/bform.template.html',
  	controller: function($http){
      var self=this;
      self.xs=["Adult","Child"];
      this.submit=function(){
        console.log(self.flight.FID)
        $http.post('/book',data=[{
          fid:self.flight.FID,
          cnic:self.cnic,
          firstname:self.fname,
          lastname:self.lname,
          type:self.type,
          cardholder:self.cname,
          cardnumber:self.cnum,
          sec:self.csec,
          ctype:self.ctype,
          e:self.edate,
          sa:self.sarea,
          city:self.city,
          state:self.state,
          country:self.country
        }]);
        
      }
    }
  })
}());