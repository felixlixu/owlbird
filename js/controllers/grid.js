/**
 * Created by P0017359 on 2014/11/11.
 */
define(['angular_grid','gridJson'],function($datatable){
    var gridController= ["$scope", "$rootScope", function ($scope, $rootScope) {
        $scope.model={

        };
        $scope.datasource=gridJson.data;
        $scope.option={
            head:["name","title","office","extn","start_date","salary"],
            columns: [
                { "data": "name" },
                { "data": "position" },
                {"data":"office"},
                {"data":"extn"},
                {"data":"start_date"},
                {"data":"salary"}
            ]
        }
    }];
    return gridController;
});