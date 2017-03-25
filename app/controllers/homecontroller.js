boxoffice.controller('homecontroller', function($scope, $http,dataservice) {
    
    $http.get("movies.json")
    .then(function(response) {
        $scope.myWelcome = response.data;
     $scope.click=function(){
     	console.log(this.x);
     	$scope.xobj=this.x;
     	dataservice.imge($scope.xobj);
     }

    });


});
