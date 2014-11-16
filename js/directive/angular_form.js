/**
 * Created by felix on 14-11-16.
 */
define(['app'],function(app){
   app.directive("realtimingform",function(){
       var option={
           require:'ngModel',
           compile:function(element,attrs){
               return function link(scope,elements,attrs,controller){
                   var model=attrs.ngModel;
                   alert("123");
                   //增加form
                   var form="<form ng-form='form' name=\""+model+"form\"></form>"
                   elements.append(form);
                   //formelement
                   var formelement=$("form[name="+model+"]");
                   var formelements=scope[model];
                   $.each(formelements,function(key,value){

                   });
               };
           }
       };
       return option;
   });
});