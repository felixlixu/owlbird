/**
 * Created by felix on 14-11-17.
 */

define(['app','slidebox'],function(app){
   app.directive("imgslidebox",function(){
       var option={
           require:'ngModel',
           link:function(scope,element,attr){
               var model=attr.ngModel;
               var datasource=scope[model];
               $(element).append("<ul class='items' id='"+model+"'></ul>");
               $.each(datasource,function(key,value){
                   var ll="<li><a href='"+value.href+"' title='"+value.title+"'><img src='"+value.src+"'></a></li>"
                   //scope.$apply(
                   //    function() {
                           $("#" + model).append(ll);
                   //    }
                   //);
               });
               $(element).slideBox();
           }
       };
       return option;
   });
});
