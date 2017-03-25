var app=angular.module("boxoffice",[]);

app.controller('myCtrl', function($scope, $http) {
    $http.get("movies.json")
    .then(function(response) {
        $scope.myWelcome = response.data;
        console.log($scope.myWelcome);
    });
});
