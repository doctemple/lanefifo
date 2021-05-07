var app = angular.module("myApp", []);

app.controller("myCtrl", function ($scope, $http, $interval,$timeout,$window) {

  $scope.system_name = "FIFO VISUALIZATION - SORTING TO PRE-LOAD SAMRONG YARD";
  $scope.title_cl1 ="Shifting Instruction Board";
  $scope.title_cl2 ="Sorting Area Visualization";    
  $scope.interval = 3000;
  $interval(function () {
    $scope.CurrentDate = new Date();
  }, $scope.interval);

  $scope.getmain = function(){
  
  // API URL
  $scope.ip = api_fifo_bp;
  $scope.api_json = "http://"+ $scope.ip+"/api/";
  
  $scope.dv[0] = $scope.api_json+'standards/1'
  $scope.dv[1] = $scope.api_json+'lanes/1';
  $scope.dv[2] = $scope.api_json+'lanes/2';
  $scope.dv[3] = $scope.api_json+'lanes/3';
  $scope.dv[4] = $scope.api_json+'lanes/4';
  $scope.dv[5] = $scope.api_json+'lanes/5';
  $scope.dv[6] = $scope.api_json+'lanes/6';
  $scope.dv[7] = $scope.api_json+'lanes/7';




  $interval(function () {
        $http.get($scope.dv[0]).then(function(response) { $scope.sensor[0] = response.data; });
        $http.get($scope.dv[1]).then(function(response) { $scope.sensor[1] = response.data; $scope.time1 = Date.parse($scope.sensor[1].time); });
        $http.get($scope.dv[2]).then(function(response) { $scope.sensor[2] = response.data; $scope.time2 = Date.parse($scope.sensor[2].time);  });
        $http.get($scope.dv[3]).then(function(response) { $scope.sensor[3] = response.data; $scope.time3 = Date.parse($scope.sensor[3].time);  });
        $http.get($scope.dv[4]).then(function(response) { $scope.sensor[4] = response.data; $scope.time4 = Date.parse($scope.sensor[4].time);  });
        $http.get($scope.dv[5]).then(function(response) { $scope.sensor[5] = response.data; $scope.time5 = Date.parse($scope.sensor[5].time);  });
        $http.get($scope.dv[6]).then(function(response) { $scope.sensor[6] = response.data; $scope.time6 = Date.parse($scope.sensor[6].time);  });
        $http.get($scope.dv[7]).then(function(response) { $scope.sensor[7] = response.data; $scope.time7 = Date.parse($scope.sensor[7].time);  });

    }, $scope.interval);

  };


  $scope.getmain();

});
