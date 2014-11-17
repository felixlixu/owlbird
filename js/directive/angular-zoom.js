/**
 * Created by P0017359 on 2014/11/17.
 */
define(['app','jqzoom'],function(app) {
   add.directive('zoom',function(){
        var option={
            link:function(scope,element,attr){
                $('.jqzoom').jqzoom({
                    zoomType: 'standard',
                    lens:true,
                    preloadImages: false,
                    alwaysOn:false,
                    zoomWidth: 200,
                    zoomHeight: 200,
                    xOffset:90,
                    yOffset:30,
                    position:'left'
                });
            }
        };
       return option;
   });
});