/**
 * Created by P0017359 on 2014/11/13.
 */
define(['app','util'],function(app,genutil){
    app.directive('search2controlforrow',function(){

        var option={
            link:function(scope,element,attrs){
                var searchBox=scope[attrs.ngModel],model;
                if(attrs.ngCondition!=null&&attrs.ngCondition!=""&&attrs.ngCondition!=undefined) {
                    scope[attrs.ngCondition] = {};
                    model=attrs.ngCondition;
                }else{
                    scope["searchModel"]={};
                    model="searchModel";
                }
                var search=function(){
                    searchBox.searchCallback();
                };
                var cancel=function(){
                    $.each(searchBox.searchCondition,function(key,value){
                        scope.$apply(function(){
                            scope[model][value.name]='';
                        });
                    });
                };

                $.each(searchBox.searchCondition,function(key,value){
                    util.generate2ControlsOfRow(key,value,scope,element,attrs.ngModel,model)
                });
                util.generatefor2subimtandcancelbtn(searchBox.searchCondition.length,element,attrs.ngModel);
                $("#"+attrs.ngModel+"search").bind('click',function(){
                    search();
                });
                $("#"+attrs.ngModel+"cancel").bind('click',function(){
                    cancel();
                });
            }
        };
        return option;
    });
});