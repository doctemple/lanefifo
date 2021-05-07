var app = angular.module("myApp", []);

app.controller("myCtrl", function ($scope, $http, $interval,$timeout,$window) {

  $scope.system_name = "Washing & Repair Operation Result";
  $scope.title_cl1 ="Shifting Instruction Board";
  $scope.title_cl2 ="Sorting Area Visualization";    
  $scope.interval = 1000;

    // API URL
    $scope.ip = api_was_gw;
    $scope.api_json = "http://"+ $scope.ip+"/api/";

  $interval(function () {
    $scope.CurrentDate = new Date();
  },1000);

  $scope.dv = $scope.api_json+'dashboards/1'
$scope.was = [];
  $interval(function () {
        $http.get($scope.dv).then(function(res) { 

          $scope.was['taktTime'] = res.data.taktTime;
          $scope.was['todayPlan'] = res.data.todayPlan;
          $scope.was['finishPlan'] = res.data.finishPlan;
          $scope.was['plan'] = res.data.plan;
          $scope.was['actual'] = res.data.actual;
          $scope.was['diff'] = res.data.diff;

          /*////  DETAIL RESULT TABLE /////*/
          var plan = res.data['detailsPlan'];

          /* C/O */
          var co = plan.co.split(',');
          $scope.was['batchCO'] = co[0];
          $scope.was['repairCO'] = co[1];
          $scope.was['depositCO'] = co[2];
          $scope.was['totalCO'] = co[3];

          /* TODAY */
          var today = plan.today.split(',');
          $scope.was['batchToday'] = today[0];
          $scope.was['repairToday'] = today[1];
          $scope.was['depositToday'] = today[2];
          $scope.was['totalToday'] = today[3];
          
          /* TOTAL */
          var total = plan.total.split(',');
          $scope.was['batchTotal'] = total[0];
          $scope.was['repairTotal'] = total[1];
          $scope.was['depositTotal'] = total[2];
          $scope.was['totalTotal'] = total[3];

          /* PLAN TODAY */
          var planToday = plan.planToday.split(',');
          $scope.was['batchPlanToday'] = planToday[0];
          $scope.was['repairPlanToday'] = planToday[1];
          $scope.was['depositPlanToday'] = planToday[2];
          $scope.was['totalPlanToday'] = planToday[3];

          /* REMAIN */
          var remain = plan.remain.split(',');
          $scope.was['batchRemain'] = remain[0];
          $scope.was['repairRemain'] = remain[1];
          $scope.was['depositRemain'] = remain[2];
          $scope.was['totalRemain'] = remain[3];


          /*////  DETAIL RESULT TABLE /////*/

          /* OWN YARD */
          var actual = res.data['detailsResult'];
          $scope.was['text_own_yard'] = actual[0].source;

              /* OWN YARD NEW CAR */
              $scope.was['text_own_newcar'] = actual[0].categories[0].category;
              $scope.was['ownOkNewcar'] = actual[0].categories[0].ok;
              $scope.was['ownNgNewcar'] = actual[0].categories[0].ng;
              $scope.was['ownTotalNewcar'] = actual[0].categories[0].total;

              /* OWN YARD REPAIR */
              $scope.was['text_own_repair'] = actual[0].categories[1].category;
              $scope.was['ownOkRepair'] = actual[0].categories[1].ok;
              $scope.was['ownNgRepair'] = actual[0].categories[1].ng;
              $scope.was['ownTotalRepair'] = actual[0].categories[1].total;

              /* OWN YARD : DEPOSIT */
              $scope.was['text_own_deposit'] = actual[0].categories[2].category;
              $scope.was['ownOkDeposit'] = actual[0].categories[2].ok;
              $scope.was['ownNgDeposit'] = actual[0].categories[2].ng;
              $scope.was['ownTotalDeposit'] = actual[0].categories[2].total;


          /* OTHER YARD */
          $scope.was['text_ot_yard'] = actual[1].source;

              /* OTHER YARD : NEW CAR */
              $scope.was['text_ot_newcar'] = actual[1].categories[0].category;
              $scope.was['otOkNewcar'] = actual[1].categories[0].ok;
              $scope.was['otNgNewcar'] = actual[1].categories[0].ng;
              $scope.was['otTotalNewcar'] = actual[1].categories[0].total;

              /* OTHER YARD : REPAIR */
              $scope.was['text_ot_repair'] = actual[1].categories[1].category;
              $scope.was['otOkRepair'] = actual[1].categories[1].ok;
              $scope.was['otNgRepair'] = actual[1].categories[1].ng;
              $scope.was['otTotalRepair'] = actual[1].categories[1].total;

          /* TOTAL */
          $scope.was['okTotal'] = actual[2].total[0].ok;
          $scope.was['ngTotal'] = actual[2].total[0].ng;
          $scope.was['total'] = actual[2].total[0].total;
          

        });

    }, $scope.interval);





});
