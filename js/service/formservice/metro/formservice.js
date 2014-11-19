/**
 * Created by P0017359 on 2014/11/19.
 */
define(["app"],function(app){
    app.factory('metroformservice',function(){
        var metroform={
            genGroupDiv:function(key,ctrl,model){
                var groupid="group"+key.name,groupdiv;
                groupdiv = "<div ng-class=\"{'form-group':" + model + "." + key.name + ".$valid,'form-group has-error':" + model + "." + key.name + ".$invalid}\" id=" + groupid + "></div>";
                ctrl.append(groupdiv);
                return $("#"+groupid);
            },
            genLabel:function(key,ctrl,model){
                var id="label"+key.name,label;
                label="<lebel style='text-align: right'  >"+key.labelName+":</lable>"
                ctrl.append(label);
                return label;
            },
            genCtrl:function(key,ctrl,model){
                var elem;
                model=model+"."+key.name;
                if(key.control=="text") {
                    elem = "<input type='text'  class='form-control' name=\"" + key.name + "\" ng-Model='" + model + "'";
                    if (key.require[0].required) {
                        elem = elem + " ng-required='true'";
                    }
                    elem = elem + " >";
                }else if(key.control=="email"){
                    elem = "<input type='email'  class='form-control' name=\"" + key.name + "\" ng-Model='" + model + "'";
                    if (key.require[0].required) {
                        elem = elem + " ng-required='true'";
                    }
                    elem = elem + " >";
                }else if(key.control=="number"){
                    elem = "<input type='number'  class='form-control' name=\"" + key.name + "\" ng-Model='" + model + "'";
                    if (key.require[0].required) {
                        elem = elem + " ng-required='true'";
                    }
                    elem = elem + " >";
                }
                ctrl.append(elem);
                return elem;
            },
            genValidLabel:function(key,ctrl,model){
                var elem;
                model=model+"."+key.name
                if(key.require[0].minlength>0){
                    elem="<p ng-show=\""+model+".$invalid&&"+model+".$error.minlength\" class=\"help-block\">Your input is too short,please input "+key.require[0].minlength+"characters at least.</p>"
                }
                ctrl.append(elem);
                elem="";
                if(key.require[0].maxlength>0){
                    elem="<p ng-show=\""+model+".$invalid&&"+model+".$error.maxlength\" class=\"help-block\">Your input is too long,please input "+key.require[0].maxlength+"characters at more.</p>"
                }
                ctrl.append(elem);
                elem="";
                //html valid
                if(key.require[0].patternNote!=null&&key.require[0].patternNote!=undefined&&key.require[0].patternNote!=""){
                    valid="";
                    if(key.require[0].regularpattern!=undefined&&key.require[0].regularpattern!=null){
                        valid="regularpattern";
                    }else{
                        valid=key.control;
                    }
                    elem="<p ng-show=\""+model+".$invalid&&"+model+".$error."+valid+"\" class=\"help-block\">"+key.require[0].patternNote+"</p>"
                }
                ctrl.append(elem);
            },
            validate:function(scope,value,resultModel,formname) {
                var watch = resultModel + "." + value.name, min = value.require[0].minlength, max = value.require[0].maxlength,
                    regular = value.require[0].regularpattern;
                if (min > 0 || max > 0 || (regular != undefined && regular != "" && regular != null)) {

                    // valid minlength
                    scope.$watch(watch, function (newval) {
                        var length = util.realLength(newval);
                        var contrl = scope[formname][value.name];
                        if (length > 0) {
                            if (min > 0) {
                                if (length < min) {
                                    contrl.$setValidity('minlength', false);
                                } else {
                                    contrl.$setValidity('minlength', true);
                                }
                            }
                            if (max > 0) {
                                if (length > max) {
                                    contrl.$setValidity('maxlength', false);
                                } else {
                                    contrl.$setValidity('maxlength', true);
                                }
                            }
                            if(regular!=null&&regular!=""&&regular!=undefined){
                                if(newval.match(regular)){
                                    contrl.$setValidity('regularpattern', true);
                                }else{
                                    contrl.$setValidity('regularpattern', false);
                                }
                            }
                        }
                    });
                }
            }
        };
        return metroform;
    });
});
