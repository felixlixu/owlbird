/**
 * Created by P0017359 on 2014/11/13.
 */
define(['angular_searchbox','framedata'],function(){
   var searchboxController=['$scope',function($scope) {

       $scope.callback=function(){
           alert($scope.searchModel.title);
       };

       $scope.singleCallback=function(){
         alert($scope.searchSingleModel.title1);
       };

       $scope.searchBox = {
           "searchCondition":frameData.oddSearchCondition,
           "searchCallback":$scope.callback
       };

       $scope.searchSingleBox={
           "searchCondition":frameData.evenSearchCondition,
           "searchCallback":$scope.singleCallback
       };

   }];
   return searchboxController;
});
