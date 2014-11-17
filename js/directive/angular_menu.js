/**
 * Created by P0017359 on 2014/11/12.
 */
define(['app'],function(app){
    app.directive('menu',function(){
        var option= {
            require: 'ngModel',
            templateUrl: config.rootpath+'/template/menuTemplate.html',
            compile: function (element, attrs) {
                return function postLink(scope, element, attrs, controller) {
                    var menuList=scope[attrs.ngModel];
                    scope.$watch(menuList,function(a){
                        var accordion_head=$(".sidebar-menu >li >a"),
                            accordion_body=$(".sidebar-menu li > .sub");
                        accordion_head.on('click',function(event){
                            event.preventDefault();
                            if($(this).attr('class')!='active'){
                                accordion_body.slideUp("normal");
                                $(this).next().stop(true,true).slideToggle('normal');
                                accordion_head.removeClass('active');
                                $(this).addClass('active');
                            }
                        });
                    });
                    //element.
                }
            }
        }
        return option;
    });
});