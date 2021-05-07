var app = angular.module("myApp", []);

app.controller("myCtrl", function ($scope, $http, $interval) {

  $scope.system_name = "FIFO VISUALIZATION - SORTING TO PRE-LOAD SAMRONG YARD";
  $scope.title_cl1 ="Shifting Instruction Board";
  $scope.title_cl2 ="Sorting Area Visualization";    

  
  // API URL
  $scope.ip = "192.168.20.248:92";
  //$scope.ip ="localhost";
  $scope.api_json = "http://"+ $scope.ip+"/api/";

  $scope.interval = 1000;
  $scope.sensor =[];
  $scope.dvs = [];

  $interval(function () {
    $scope.CurrentDate = new Date();
  }, $scope.interval);


  $scope.dvs[0] = $scope.api_json+'standards';
  $scope.dvs[1] = $scope.api_json+'lanes/1';
  $scope.dvs[2] = $scope.api_json+'lanes/2';
  $scope.dvs[3] = $scope.api_json+'lanes/3';
  $scope.dvs[4] = $scope.api_json+'lanes/4';
  $scope.dvs[5] = $scope.api_json+'lanes/5';
  $scope.dvs[6] = $scope.api_json+'lanes/6';
  $scope.dvs[7] = $scope.api_json+'lanes/7';
  $scope.dvs[8] = $scope.api_json+'lanes/8';
  $scope.dvs[9] = $scope.api_json+'lanes/9';
  $scope.dvs[10] = $scope.api_json+'lanes/10';
  $scope.dvs[11] = $scope.api_json+'lanes/11';
  $scope.dvs[12] = $scope.api_json+'lanes/12';
  $scope.dvs[13] = $scope.api_json+'lanes/13';
  $scope.dvs[14] = $scope.api_json+'lanes/14';
  $scope.dvs[15] = $scope.api_json+'lanes/15';
  $scope.dvs[16] = $scope.api_json+'lanes/16';
  $scope.dvs[17] = $scope.api_json+'lanes/17';
  $scope.dvs[18] = $scope.api_json+'lanes/18';
  $scope.dvs[19] = $scope.api_json+'lanes/19';
  $scope.dvs[20] = $scope.api_json+'lanes/20';
  $scope.dvs[21] = $scope.api_json+'lanes/21';
  $scope.dvs[22] = $scope.api_json+'lanes/22';
  $scope.dvs[23] = $scope.api_json+'lanes/23';


  //$scope.dv1= "api/lene.json";



  $interval(function () {

    $http.get($scope.dvs[0]).then(function(response) { $scope.sensor[0] = response.data; });
    $http.get($scope.dvs[1]).then(function(response) { $scope.sensor[1] = response.data; });
    $http.get($scope.dvs[2]).then(function(response) { $scope.sensor[2] = response.data; });
    $http.get($scope.dvs[3]).then(function(response) { $scope.sensor[3] = response.data; });
    $http.get($scope.dvs[4]).then(function(response) { $scope.sensor[4] = response.data; });
    $http.get($scope.dvs[5]).then(function(response) { $scope.sensor[5] = response.data; });
    $http.get($scope.dvs[6]).then(function(response) { $scope.sensor[6] = response.data; });
    $http.get($scope.dvs[7]).then(function(response) { $scope.sensor[7] = response.data; });
    $http.get($scope.dvs[8]).then(function(response) { $scope.sensor[8] = response.data; });
    $http.get($scope.dvs[9]).then(function(response) { $scope.sensor[9] = response.data; });
    $http.get($scope.dvs[10]).then(function(response) { $scope.sensor[10] = response.data; });
    $http.get($scope.dvs[11]).then(function(response) { $scope.sensor[11] = response.data; });
    $http.get($scope.dvs[12]).then(function(response) { $scope.sensor[12] = response.data; });
    $http.get($scope.dvs[13]).then(function(response) { $scope.sensor[13] = response.data; });
    $http.get($scope.dvs[14]).then(function(response) { $scope.sensor[14] = response.data; });
    $http.get($scope.dvs[15]).then(function(response) { $scope.sensor[15] = response.data; });
    $http.get($scope.dvs[16]).then(function(response) { $scope.sensor[16] = response.data; });
    $http.get($scope.dvs[17]).then(function(response) { $scope.sensor[17] = response.data; });
    $http.get($scope.dvs[18]).then(function(response) { $scope.sensor[18] = response.data; });
    $http.get($scope.dvs[18]).then(function(response) { $scope.sensor[19] = response.data; });
    $http.get($scope.dvs[20]).then(function(response) { $scope.sensor[20] = response.data; });
    $http.get($scope.dvs[21]).then(function(response) { $scope.sensor[21] = response.data; });
    $http.get($scope.dvs[22]).then(function(response) { $scope.sensor[22] = response.data; });
    $http.get($scope.dvs[23]).then(function(response) { $scope.sensor[23] = response.data; });    


    }, $scope.interval);


});
