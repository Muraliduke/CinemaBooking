boxoffice.controller("confirmcontroller",function($scope,$rootScope,dataservice){
$scope.datas=[];
var rand = Math.floor(100000 + Math.random() * 900000);
    $scope.randno = rand;
$scope.datas=dataservice.confirmdetail();
console.log($scope.datas);

})