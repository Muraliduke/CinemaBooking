boxoffice.controller("infocontroller",function($scope,dataservice,$location,$log,$rootScope){

          
     	$scope.val=dataservice.newimge();
          $scope.percent=30;
     	$scope.myvalu=false;
           $scope.gow=false;
           
          $scope.GetValue=function(valu){
               $scope.percent=60;
              
               if(valu=="Single"){
                   $scope.valu=1; 
                   $scope.gow=true;
                   $scope.a=1;
                   $scope.b=1;
                    
               }
               else if(valu=="Bulk"){
                  $scope.valu=2; 
                  $scope.gow=true;
                  $scope.a=2;
                  $scope.b=100;  
               }
               else{
                    $scope.gow=false;
               }
               
          }
     	
     	$scope.confirm=function(){
               $scope.myvalu=true;
     		
     	}


   
})


boxoffice.controller('ModalDemoCtrl', function ($scope, $uibModal, $log) {

  

  $scope.open = function (size) {

    var modalInstance = $uibModal.open({
       size: size,
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl'
    });

   
  };

 $scope.submit=function(){
             $scope.emailerror=false;
              var email=$scope.emaill;
              var rev=email.endsWith(".com");
            if(rev==false){
              $scope.emailerror=true;

            }
            
            
          }
  

});

// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

boxoffice.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance,$location,$rootScope,dataservice) {

 

  $scope.ok = function () {
    $uibModalInstance.close();
    $rootScope.nn=$scope.name;
     $scope.a=[];
    $scope.a.push($scope.name,$scope.mobile,$scope.emaill,$scope.address);
    console.log($scope.a);
    dataservice.details($scope.a);
          
     $location.path('/confirm');
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});
