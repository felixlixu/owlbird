/**
 * Created by felix on 14-11-9.
 */
define(['app','select2'],function(app,select2){
    app.directive('select2',function(){
        var option = {
            replace: true,
            require: 'ngModel',
            compile:function compile(tElement, tAttrs) {
                var isMultiple=tAttrs.multiple;
                var convertToAngularModel = function(select2_data) {
                    var model;
                    if(isMultiple){
                        temp=[];
                        $.each(select2_data,function(index,value){
                            if(value.id!="") {
                                temp.push(value.id);
                            }
                        })
                        model=temp.toString();
                    }else{
                        model=select2_data.id;
                    }
                    return model;
                };
                var convertToSelect2Model=function(Angular_data){
                    var model;
                    if(isMultiple){
                        model=[];
                        var temp=Angular_data.split(',');
                        $.each(temp,function(index,value){
                            model.push({"id":value});
                        });
                    }else{
                        model=Angular_data;
                    }
                    return model;
                }
                var setDataSource=function(lista){
                    $(tElement).empty();
                    $(tElement).append("<option value=''>--请选择--</option>");
                    $.each(lista, function (index, value) {
                        $(tElement).append("<option value='" + value.id + "'>" + value.text + "</option>");
                    });
                }
                return function(scope, tElement, tAttrs, controller){
                    $(tElement).select2({
                        placeholder: "Search Users"
                    });
                    //init source
                    var list=scope[tAttrs.ngSource];
                    setDataSource(list);

                    // change model
                    scope.$watch(tAttrs.ngModel, function(current, old) {
                        if (isMultiple) {
                            var keys=convertToSelect2Model(controller.$viewValue);
                            var model=[];
                            var listSource=scope[tAttrs.ngSource];
                            $.each(keys,function(index,keyvalue){
                                if(keyvalue.id!="") {
                                    var text;
                                    var list=[];
                                    $.each(listSource,function(key,value){
                                        if(value.id==keyvalue.id){
                                            text= value.text;
                                        }else{
                                            list.push(value);
                                        }
                                    });
                                    listSource=list;
                                    model.push({id: keyvalue.id, text: text});
                                }
                            });
                            $(tElement).select2('data', model);
                            setDataSource(listSource);
                        } else {
                            $(tElement).select2('val', controller.$viewValue);
                        }
                    }, true);

                    //bind change event
                    $(tElement).bind('change',function(){
                        scope.$apply(function(){
                            if(isMultiple){
                                controller.$setViewValue(
                                    convertToAngularModel($(tElement).select2('data'))
                                );
                            }
                            else
                            {
                                controller.$setViewValue(
                                    convertToAngularModel($(tElement).select2('data'))
                                );
                            }
                        });
                    })
                }
            }
        }
        return option;
    });
});
