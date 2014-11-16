/**
 * Created by P0017359 on 2014/11/12.
 */
define(["../app","angular_menu","rundata"],function(app){
    return app.controller("IndexController",function($scope){
        $scope.menucallback=function(value){
            $scope.menu.active=value.name;
        }

        $scope.menu={
            "submenu":runData.menuData,
            "active":"",
            "click":$scope.menucallback
        };

    });
});