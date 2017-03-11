app.service('service', function($http){
  this.getName = function() {
    return $http({
      method: 'GET',
      url: 'http://localhost:5000/name'
    });
  };
});
