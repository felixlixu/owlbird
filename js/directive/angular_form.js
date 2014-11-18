/**
 * Created by felix on 14-11-16.
 */
define(['app'],function(app){
   app.directive("realtimingform",['$compile',function(compile){
       var option={
           require:'ngModel',
           compile:function(element,attrs){
               var model=attrs.ngModel;
               var formName="form"+model;
               var form="<form action='#' novalidate name='"+formName+"'></form>";
               return function link(scope,element,attrs){
                   element.append(form);
                   compile(form)(scope);
                   var formelements=scope[model];
                   var formctrl=scope[formName];
                   var eleform=$("form[name="+formName+"]");
                   $.each(formelements,function(key,value){

                       var groupctrl=util.genGroupDiv(value,eleform,formName);
                       //formctrl.$addControl(groupctrl);
                       //compile(groupctrl)(scope);

                       //add label
                       util.genLabel(value,groupctrl,model);

                       //add control
                       var ctrl=util.genCtrl(value,groupctrl,model);
                       // register control
                       //ormctrl.$addControl(groupctrl);
                       //formctrl.$addClass(ctrl);
                       //compile(ctrl)(scope);

                   });

                   compile(element.contents())(scope);


                   console.log(scope.$$watchers);
               };
           }
       };
       return option;
   }]);
});