/**
 * Created by felix on 14-11-16.
 */
define(['angular_form','framedata'],function(){
   var formcontroller=['$scope',function($scope){
        $scope.data={
          name:''
        };

        $scope.event=frameData.evenform;
    }] ;
    return formcontroller;
});