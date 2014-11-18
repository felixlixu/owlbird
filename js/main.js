/**
 * Created by felix on 14-11-8.
 */
require.config({
   paths:{
       // base js
       angular:"../lib/angular/1.2.7/angular.min",
       angular_route:"../lib/angular/1.2.7/angular-route.min",
       bootstrap:"../lib/bootstrap/3.3.0/bootstrap.min",
       jquery:'../lib/jquery/2.1.1/jquery-2.1.1.min',

       //the third js control
       select2:'../lib/select2/3.5.2/select2.min',
       zTree:'../lib/ztree/3.5.16/jquery.ztree.all-3.5.min',
       dataTables:'../lib/datatables/1.10.4/jquery.dataTables',
       fineUpload:'../lib/upload/5.0.8/all.fineuploader-5.0.8.min',
       jqzoom:'../lib/jqzoom/2.3/jquery.jqzoom-core',
       slidebox:'../lib/slidebox/1.2.0314/jquery.slideBox',

       //the directive
       angular_select2:'directive/angular_select2',
       angular_tree:'directive/angular_ztree',
       angular_grid:'directive/angular_grid',
       angular_upload:'directive/angular_upload',
       angular_menu:'directive/angular_menu',
       angularslidebox:'directive/angular_slidebox',
       angularzoom:'directive/angular_zoom',

       //the service
       createcontrollerservice:'service/dynamiccreateService',

       // the adventrue controller
       angular_searchbox:'directive/angular_searchbox',
       angular_form:'directive/angular_form',

       //util
       util:'util/util',

       //data
       gridJson:'../data/gridjson',
       framedata:'../data/JSFreamData',
       rundata:'../data/JSRunData'

   }, shim:{
      'bootstrap':{
          deps:['jquery'],
          exports:'bootstrap'
      },'select2':{
            deps:['jquery'],
            exports:'select2'
        },'zTree':{
            deps:['jquery'],
            exports:'zTree'
        }
    }
});

define([
    'angular',
    'app',
    'route',
    'bootstrap',
    'controllers/indexController',
    'controllers/elecbusiness',
    'config'
],function($angular){
    angular.element(document).ready(function() {
        angular.bootstrap(document,['app',function($interpolateProvider){
            $interpolateProvider.startSymbol('{{');
            $interpolateProvider.endSymbol('}}');
        }]);
    });
});
