var app = angular.module("myApp", []);

app.controller("myCtrl", function ($scope, $http, $interval,$timeout,$window,dateFilter) {
  // API URL
  $scope.ip = api_fifo_sr;
  $scope.api_json = "http://"+$scope.ip+"/api/lanes/"+lane;

  $scope.interval = 1000;

 var enable = 0;
 var today=null;

  $scope.updateTime = function(){
      $interval(function () {

        $http.get($scope.api_json).then(function (response) {
          $scope.sensor = response.data;

          if (enable==0)
            today = new Date("2021-03-31 00:00:00");

          if (enable != $scope.sensor.enable)
          {
            if ($scope.sensor.enable ==1 ){
              today = new Date($scope.sensor.time);
            }

          }

          enable = $scope.sensor.enable;
          if (enable==1)
                      today.setSeconds(today.getSeconds()+1); 


          $scope.startTime = (dateFilter(today, 'mm:ss'));
          //$scope.updateTime();

        });

      }, $scope.interval);
  }

  $scope.updateTime();

});
