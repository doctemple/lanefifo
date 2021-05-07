var app = angular.module("myApp", []);

app.controller("myCtrl", function ($scope, $http, $interval,$timeout,$window) {

  $scope.system_name = "FIFO VISUALIZATION - SORTING TO PRE-LOAD SAMRONG YARD";
  $scope.title_cl1 ="Shifting Instruction Board";
  $scope.title_cl2 ="Sorting Area Visualization";    

  
  // API URL
  $scope.ip = "192.168.20.248:91"
  //$scope.ip ="localhost:88";
  $scope.api_json = "http://"+ $scope.ip+"/api/";

  $interval(function () {
    $scope.CurrentDate = new Date();
  }, $scope.interval);

  //$scope.dv1= "api/lene.json";
  $scope.dv1 = $scope.api_json+'lanes/1';
  $scope.dv2 = $scope.api_json+'lanes/2';
  $scope.dv3 = $scope.api_json+'lanes/3';
  $scope.dv4 = $scope.api_json+'lanes/4';
  $scope.dv5 = $scope.api_json+'lanes/5';
  $scope.dv6 = $scope.api_json+'lanes/6';
  $scope.dv7 = $scope.api_json+'lanes/7';
  $scope.dv8 = $scope.api_json+'lanes/8';
  $scope.dv9 = $scope.api_json+'lanes/9';
  $scope.dv = $scope.api_json+'standards/1'

  $scope.interval = 5000;

  $interval(function () {
        $http.get($scope.dv1).then(function(response) { $scope.sensor1 = response.data; $scope.time1 = Date.parse($scope.sensor1.time); });
        $http.get($scope.dv2).then(function(response) { $scope.sensor2 = response.data; $scope.time2 = Date.parse($scope.sensor2.time);  });
        $http.get($scope.dv3).then(function(response) { $scope.sensor3 = response.data; $scope.time3 = Date.parse($scope.sensor3.time);  });
        $http.get($scope.dv4).then(function(response) { $scope.sensor4 = response.data; $scope.time4 = Date.parse($scope.sensor4.time);  });
        $http.get($scope.dv5).then(function(response) { $scope.sensor5 = response.data; $scope.time5 = Date.parse($scope.sensor5.time);  });
        $http.get($scope.dv6).then(function(response) { $scope.sensor6 = response.data; $scope.time6 = Date.parse($scope.sensor6.time);  });
        $http.get($scope.dv7).then(function(response) { $scope.sensor7 = response.data; $scope.time7 = Date.parse($scope.sensor7.time);  });
        $http.get($scope.dv8).then(function(response) { $scope.sensor8 = response.data; $scope.time8 = Date.parse($scope.sensor8.time);  });
        $http.get($scope.dv9).then(function(response) { $scope.sensor9 = response.data; $scope.time9 = Date.parse($scope.sensor9.time);  });
        $http.get($scope.dv).then(function(response) { $scope.sensor_foot = response.data; });
    }, $scope.interval);


});
