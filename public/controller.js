app.controller('controller', function($scope, service){
  $scope.getName = function() {
    service.getName().then(function(response) {
      console.log(response);
      $scope.name = response.data.name;
    });
  };
  $scope.getName();
});
