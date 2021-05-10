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
          $scope.was['batchCO'] = plan.co[0].batchAssigned;
          $scope.was['repairCO'] = plan.co[0].repair;
          $scope.was['depositCO'] = plan.co[0].deposit;
          $scope.was['totalCO'] = plan.co[0].total;

          /* TODAY */
          $scope.was['batchToday'] = plan.today[0].batchAssigned;
          $scope.was['repairToday'] = plan.today[0].repair;
          $scope.was['depositToday'] = plan.today[0].deposit;
          $scope.was['totalToday'] = plan.today[0].total;
          
          /* TOTAL */
          $scope.was['batchTotal'] = plan.total[0].batchAssigned;
          $scope.was['repairTotal'] = plan.total[0].repair;
          $scope.was['depositTotal'] = plan.total[0].deposit;
          $scope.was['totalTotal'] = plan.total[0].total;

          /* PLAN TODAY */
          $scope.was['batchPlanToday'] = plan.planToday[0].batchAssigned;
          $scope.was['repairPlanToday'] = plan.planToday[0].repair;
          $scope.was['depositPlanToday'] = plan.planToday[0].deposit;
          $scope.was['totalPlanToday'] = plan.planToday[0].total;

          /* REMAIN */
          $scope.was['batchRemain'] = plan.remain[0].batchAssigned;
          $scope.was['repairRemain'] = plan.remain[0].repair;
          $scope.was['depositRemain'] = plan.remain[0].deposit;
          $scope.was['totalRemain'] = plan.remain[0].total;


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

              
          var netTotal = res.data['totalResult'];

          /* TOTAL */
          $scope.was['okTotal'] = netTotal.ok;
          $scope.was['ngTotal'] = netTotal.ng;
          $scope.was['total'] = netTotal.total;
          

        });

    }, $scope.interval);





});
