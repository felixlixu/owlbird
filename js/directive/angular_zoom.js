/**
 * Created by P0017359 on 2014/11/17.
 */
define(['app','slidebox'],function(app) {
   app.directive('zoom',function(){
        var option={
            link:function(scope,element,attr){
                var model=attr.ngModel;
                var datasource=scope[model];
            }
        };
       return option;
   });
});