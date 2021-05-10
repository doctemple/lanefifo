var app = angular.module("myApp", []);

app.controller("myCtrl", function ($scope, $http, $interval,$timeout,$window,dateFilter) {
  // API URL
  $scope.ip = api_was_gw;

  $scope.api_json = "http://"+$scope.ip+"/api/devices/"+lane;

  $scope.interval = 1000;
  $scope.takttime = 7;

 var enable = 0;
 var today=null;

 var date2 = new Date('June 18, 2016 02:30:00');

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
          {
            if(today.getSeconds() > 0)
            {
              today.setSeconds(today.getSeconds()-1);
            }
          }
                  
          if(dateFilter(today, 'mm:ss')==='00:00'){
            $scope.startTime = '00:00';
          }else{
          $scope.startTime = (dateFilter(today, 'mm:ss'));
          }

        });

      }, $scope.interval);
  }

  $scope.updateTime();

});
