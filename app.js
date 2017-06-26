var app = angular.module('LunchCheck', []);
app.controller('LunchCheckController', function($scope) {
    $scope.lunch_menu = function(list){
      $scope.data = $scope.list;
      if($scope.data){
        $scope.result = $scope.data.split(",");
        if($scope.result.length == 0){
          $scope.message = "Please enter data first";
        }
        else{
          console.log($scope.result.length);
          console.log($scope.result);
        if($scope.result.length <= 3){
          $scope.message = "Enjoy";
        }
        else{
          $scope.message = "Too Much";
        }
      }
    }
    else{
      $scope.message = "Please enter data first";
    }
  }
});
