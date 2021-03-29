var app = angular.module("myApp", []);

app.controller("myCtrl", function ($scope, $http, $interval,$timeout,$window) {
  // API URL
  $scope.api_json = "http://192.168.20.248:88/api/lanes/"+lane;
  //$scope.api_json = "api/lene.json";

  $scope.system_name = "FIFO";

  $scope.interval = 1000;

  $interval(function () {
    $http.get($scope.api_json).then(function (response) {
      $scope.sensor = response.data;
      $scope.minutes = $scope.sensor.time.substring(0,2);
      $scope.seconds = $scope.sensor.time.substring(3,5);
    });
  }, $scope.interval);


});
