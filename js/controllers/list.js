/**
 * Created by felix on 14-11-8.
 */
define(['angular_select2'],function($select){
   var listController= ["$scope", "$rootScope", function ($scope, $rootScope) {
       $scope.list={
           test:"2003,2004",
           group:2
       }
       $scope.sourceGroup=[{id:"1",text:"小学一年级"},{id:"2",text:"小学二年级"},{id:"3",text:"小学三年级"},{id:"4",text:"小学四年级"},]
       $scope.source=[{id:"2005",text:"文本2005"},{id:"2004",text:"文本2004"},{id:"2003",text:"文本2003"},{id:"2002",text:"文本2002"},]
   }];
    return listController;
});