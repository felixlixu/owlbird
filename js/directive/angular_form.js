/**
 * Created by felix on 14-11-16.
 */
define(['app'],function(app){
   app.directive("realtimingform",function(){
       var option={
           require:'ngModel',
           compile:function(element,attrs){
               var model=attrs.ngModel;
               return function link(scope,element,attrs,controller){
                   var formelements=scope[model];
                   var formctrl=scope[attrs.name];
                   $.each(formelements,function(key,value){
                       //it is setting style,
                       var row=util.genRow(key,element);
                       //it is setting level
                       //ngModelCtr.$name = scope.$eval(iAttrs.dyName);
                       var ctrl=util.genOneCntlPreRow(value,row,model,attrs.name,scope);
                       // register control
                       formctrl.$addControl(ctrl);

                       scope.$watch(model+".title",function(){
                          alert(1233);
                       });
                   });
               };
           }
       };
       return option;
   });
});