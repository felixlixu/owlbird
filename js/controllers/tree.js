/**
 * Created by P0017359 on 2014/11/10.
 */
define(['angular_tree'],function($tree){
    var treeController= ["$scope", "$rootScope", function ($scope, $rootScope) {
         var zNodes =[
            { name:"Test-1 OPEN", open:true,
                children: [
                    { name:"Test11 - CLOASE",
                        children: [
                            { name:"Test111"},
                            { name:"Test112"},
                            { name:"Test113"},
                            { name:"Test114"}
                        ]},
                    { name:"Test12 - CLOASE",
                        children: [
                            { name:"Test121"},
                            { name:"Test122"},
                            { name:"Test123"},
                            { name:"Test124"}
                        ]},
                    { name:"Test13 - NONE-NODE", isParent:true}
                ]},
            { name:"Test2 - CLOASE",
                children: [
                    { name:"Test21 - OPEN", open:true,
                        children: [
                            { name:"Test211"},
                            { name:"Test212"},
                            { name:"Test213"},
                            { name:"Test214"}
                        ]},
                    { name:"Test22 - CLOASE",
                        children: [
                            { name:"Test221"},
                            { name:"Test222"},
                            { name:"Test223"},
                            { name:"Test224"}
                        ]},
                    { name:"Test23 - CLOASE",
                        children: [
                            { name:"Test231"},
                            { name:"Test232"},
                            { name:"Test233"},
                            { name:"Test234"}
                        ]}
                ]},
            { name:"Test3 - NONE-NODE", isParent:true}
        ];
        $scope.node={
            id:"",
            pId:""
        }
        var addCallback=function(){
          alert($scope.node.pId);
        };

        var editCallback=function(){
            alert($scope.node.id);
        };

        var deleteCallback=function() {
            alert($scope.node.id);
        }
        $scope.ztree={
            datasource:zNodes//,
            //allowAdd:true,
            //AddCallback:addCallback,
            //allowEdit:true,
            //EditCallback:editCallback,
            //allowDelete:true,
            //DeleteCallback:deleteCallback
        }
    }];
    return treeController;
});