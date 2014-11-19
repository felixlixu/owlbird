/**
 * Created by felix on 14-11-16.
 */
define(['app','metroformservice'],function(app){
   app.directive("realtimingform",['$compile','metroformservice',function(compile,metro){
       var option={
           require:'ngModel',
           compile:function(element,attrs){
               var model=attrs.ngModel;
               var formName="form"+model;
               var form="<form action='#' novalidate name='"+formName+"'></form>";
               element.append(form);
               return function link(scope,element,attrs){
                   var formelements=scope[model];
                   var eleform=$("form[name="+formName+"]");
                   var resultModel="";
                   if(attrs.ngResultModel==""||attrs.ngResultModel==undefined||attrs.ngResultModel==null){
                       resultModel=model+"Model";
                       scope[resultModel]={};
                   }else{
                       resultModel=attrs.ngResultModel;
                   }
                   $.each(formelements,function(key,value){
                       var groupctrl=metro.genGroupDiv(value,eleform,formName);
                       metro.genLabel(value,groupctrl,formName);
                       metro.genCtrl(value,groupctrl,resultModel);
                       metro.genValidLabel(value,groupctrl,formName);
                       metro.validate(scope,value,resultModel,formName);
                   });
                   compile(element.contents())(scope);
               };
           }
       };
       return option;
   }]);
});