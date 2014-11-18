/**
 * Created by felix on 14-11-14.
 */
define([],function(){
    util={
        //生成METRO样式的控件，其中格式是2个控件为一行
        generate2ControlsOfRow:function(key,value,scope,element,prefix,valueModel){
            var row=key;
            if(key%2==1) row=key-1;
            var searchElement='',searchlabel='',model=value.name,rowkey="row"+prefix+row,formgroupkey="group"+prefix+row,
            fullmodel=valueModel+"."+value.name,formgroup="<div class='form-group' id=\""+formgroupkey+"\"></div>";
            if(value.control=="text"){
                searchlabel="<lebel for=\""+model+"\" style='text-align: right' class=\"col-lg-2 col-sm-2 control-label\" >"+value.labelName+":</lable>";
                searchElement= "<div class='col-lg-4'><input class='form-control' type=\"text\" id=\""+model+"\" ng-model=\""+fullmodel+"\" \></div>";
            }else{
                searchElement='';
            }

            //设置元素生成样式
            if(key%2==0) {
                element.append(formgroup);
            }
            $("#"+formgroupkey).append(searchlabel);
            $("#"+formgroupkey).append(searchElement);
            //设置MVVM 双向绑定
            if(value.control=="text") {
                $("#" + model).bind("keyup", function () {
                    scope.$apply(function () {
                        scope[valueModel][model] = $("#" + model).val();
                    });
                });
            }
            scope.$watch(fullmodel,function(oldval,newval){
                $("#"+model).val(scope[valueModel][model]);
            });
        },
        generatefor2subimtandcancelbtn:function(key,element,prefix){
            var submit="",formgroupkey="",formgroup="",
                blank="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
            if(key%2==1) {
                key = key - 1;
                formgroupkey="group"+prefix+key;
                submit="<div class='col-lg-offset-3 col-lg-3'><button type='button' id=\""+prefix+"search\" class='btn btn-success'><i class=\"icon-search\"></i>" +
                "&nbsp;&nbsp;查  询</button>"+blank+"<button class='btn btn-warning' id=\""+prefix+"cancel\" '><i class=\" icon-remove\"></i>&nbsp;&nbsp;取  消</button></div>"
            }else{
                formgroupkey="group"+prefix+key;
                formgroup="<div class='form-group' id=\""+formgroupkey+"\"></div>"
                submit="<div class='col-lg-offset-9 col-lg-3'><button type='button' id=\""+prefix+"search\" class='btn btn-success'><i class=\"icon-search\"></i>" +
                "&nbsp;&nbsp;查  询</button>"+blank+"<button class='btn btn-warning' id=\""+prefix+"cancel\"><i class=\" icon-remove\"></i>&nbsp;&nbsp;取  消</button></div>"
                $(element).append(formgroup);
            }
            $("#"+formgroupkey).append(submit);
        },

        genRow:function(key,ctrl){
            var id="row"+key;
            ctrl.append("<div id=\""+id+"\" class='row'></div>");
            return $("#"+id);
        },

        genOneCntlPreRow:function(key,ctrl,prefix,formname,scope){
           var id=prefix+key.name,name=key.name,groupid="group"+prefix+key.name,groupdiv,elemctrl;
           if(key.require[0].required) {
               groupdiv = "<div ng-class=\"{'form-group':" + formname + "." + name + ".$valid,'form-group has-error':" + formname + "." + name + ".$invalid}\" id=" + groupid + "></div>";
               elemctrl="<input type='text' ng-required='true' name='"+name+"' id='"+id+"'>"
           }
            ctrl.append(groupdiv);
            var group=$("#"+groupid);
            scope.$watch(group.attr['ngClass'],function(){

            });
            var lebel="<label style='text-align: right' class=\"col-lg-3 col-sm-3 control-label\">"+key.labelName+"</label>";
            group.append(lebel);
            group.append(elemctrl);
            return $('#'+id);
        }

    };
    return util;
});
