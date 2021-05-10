var app = angular.module("washingApp", ["ngRoute"]);

app.constant("conf", {
  web_ip: "192.168.20.125/fifo/",
  api_ip: "192.168.20.248",
  port: "94",
  protocal: "http",
  path: "api",
  default: "1",
});

app.config(function ($routeProvider) {
  $routeProvider

    .when("/", {
      templateUrl: "pages/main-washing.html",
      controller: "mainController",
    })

    .when("/lane/:lane", {
      templateUrl: "pages/lane-washing.html",
      controller: "laneController",
    });
});

app.controller(
  "mainController",
  function ($scope, $http, $interval, $timeout, $window, conf) {
    $scope.api_json =
      conf.protocal +
      "://" +
      conf.api_ip +
      ":" +
      conf.port +
      "/" +
      conf.path +
      "/";

    $scope.system_name = "Washing & Repair Operation Result";
    $scope.title_cl1 = "Shifting Instruction Board";
    $scope.title_cl2 = "Sorting Area Visualization";
    $scope.interval = 1000;

    $interval(function () {
      $scope.CurrentDate = new Date();
    }, 1000);

    $scope.dv = $scope.api_json + "dashboards/1";
    $scope.was = [];
    $interval(function () {
      $http.get($scope.dv).then(function (res) {
        $scope.was["taktTime"] = res.data.taktTime;
        $scope.was["todayPlan"] = res.data.todayPlan;
        $scope.was["finishPlan"] = res.data.finishPlan;
        $scope.was["plan"] = res.data.plan;
        $scope.was["actual"] = res.data.actual;
        $scope.was["diff"] = res.data.diff;

        /*////  DETAIL RESULT TABLE /////*/
        var plan = res.data["detailsPlan"];

        /* C/O */
        $scope.was["batchCO"] = plan.co[0].batchAssigned;
        $scope.was["repairCO"] = plan.co[0].repair;
        $scope.was["depositCO"] = plan.co[0].deposit;
        $scope.was["totalCO"] = plan.co[0].total;

        /* TODAY */
        $scope.was["batchToday"] = plan.today[0].batchAssigned;
        $scope.was["repairToday"] = plan.today[0].repair;
        $scope.was["depositToday"] = plan.today[0].deposit;
        $scope.was["totalToday"] = plan.today[0].total;

        /* TOTAL */
        $scope.was["batchTotal"] = plan.total[0].batchAssigned;
        $scope.was["repairTotal"] = plan.total[0].repair;
        $scope.was["depositTotal"] = plan.total[0].deposit;
        $scope.was["totalTotal"] = plan.total[0].total;

        /* PLAN TODAY */
        $scope.was["batchPlanToday"] = plan.planToday[0].batchAssigned;
        $scope.was["repairPlanToday"] = plan.planToday[0].repair;
        $scope.was["depositPlanToday"] = plan.planToday[0].deposit;
        $scope.was["totalPlanToday"] = plan.planToday[0].total;

        /* REMAIN */
        $scope.was["batchRemain"] = plan.remain[0].batchAssigned;
        $scope.was["repairRemain"] = plan.remain[0].repair;
        $scope.was["depositRemain"] = plan.remain[0].deposit;
        $scope.was["totalRemain"] = plan.remain[0].total;

        /*////  DETAIL RESULT TABLE /////*/

        /* OWN YARD */
        var actual = res.data["detailsResult"];
        $scope.was["text_own_yard"] = actual[0].source;

        /* OWN YARD NEW CAR */
        $scope.was["text_own_newcar"] = actual[0].categories[0].category;
        $scope.was["ownOkNewcar"] = actual[0].categories[0].ok;
        $scope.was["ownNgNewcar"] = actual[0].categories[0].ng;
        $scope.was["ownTotalNewcar"] = actual[0].categories[0].total;

        /* OWN YARD REPAIR */
        $scope.was["text_own_repair"] = actual[0].categories[1].category;
        $scope.was["ownOkRepair"] = actual[0].categories[1].ok;
        $scope.was["ownNgRepair"] = actual[0].categories[1].ng;
        $scope.was["ownTotalRepair"] = actual[0].categories[1].total;

        /* OWN YARD : DEPOSIT */
        $scope.was["text_own_deposit"] = actual[0].categories[2].category;
        $scope.was["ownOkDeposit"] = actual[0].categories[2].ok;
        $scope.was["ownNgDeposit"] = actual[0].categories[2].ng;
        $scope.was["ownTotalDeposit"] = actual[0].categories[2].total;

        /* OTHER YARD */
        $scope.was["text_ot_yard"] = actual[1].source;

        /* OTHER YARD : NEW CAR */
        $scope.was["text_ot_newcar"] = actual[1].categories[0].category;
        $scope.was["otOkNewcar"] = actual[1].categories[0].ok;
        $scope.was["otNgNewcar"] = actual[1].categories[0].ng;
        $scope.was["otTotalNewcar"] = actual[1].categories[0].total;

        /* OTHER YARD : REPAIR */
        $scope.was["text_ot_repair"] = actual[1].categories[1].category;
        $scope.was["otOkRepair"] = actual[1].categories[1].ok;
        $scope.was["otNgRepair"] = actual[1].categories[1].ng;
        $scope.was["otTotalRepair"] = actual[1].categories[1].total;

        var total = res.data["totalResult"];
        /* TOTAL */
        $scope.was["okTotal"] = total.ok;
        $scope.was["ngTotal"] = total.ng;
        $scope.was["total"] = total.Total;
      });
    }, $scope.interval);
  }
);

app.controller(
  "laneController",
  function (
    $scope,
    $http,
    $interval,
    $timeout,
    $window,
    dateFilter,
    conf,
    $routeParams
  ) {
    $scope.lane = $routeParams.lane;

    $scope.api_json =
      conf.protocal +
      "://" +
      conf.api_ip +
      ":" +
      conf.port +
      "/" +
      conf.path +
      "/devices/" +
      $scope.lane;

    $scope.interval = 1000;
    $scope.takttime = 7;

    var enable = 0;
    var today = null;

    $scope.updateTime = function () {
      $interval(function () {
        $http.get($scope.api_json).then(function (response) {
          $scope.sensor = response.data;

          if (enable == 0) today = new Date("2021-03-31 00:00:00");

          if (enable != $scope.sensor.enable) {
            if ($scope.sensor.enable == 1) {
              today = new Date($scope.sensor.time);
            }
          }

          enable = $scope.sensor.enable;
          if (enable == 1) today.setSeconds(today.getSeconds() - 1);

          $scope.startTime = dateFilter(today, "mm:ss");
        });
      }, $scope.interval);
    };

    $scope.updateTime();
  }
);
