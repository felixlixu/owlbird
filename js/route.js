/**
 * Created by felix on 14-11-8.
 */
define(['app',
    'controllers/list',
    'controllers/tree',
    'controllers/grid',
    'controllers/upload',
    'controllers/formcomponentsController',
    'controllers/searchbox',
    'controllers/form'
],function(app,
           list,
           tree,
           grid,
           upload,
           formcomponents,
           searchbox,
           form
){
   return app.config(['$routeProvider',function($routeProvider){
       $routeProvider
           .when('/list',{templateUrl:'./view/list.html',controller:list})
           .when('/tree',{templateUrl:'./view/tree.html',controller:tree})
           .when('/grid',{templateUrl:'./view/grid.html',controller:grid})
           .when('/upload',{templateUrl:'./view/upload.html',controller:upload})
           .when('/formcomponent',{templateUrl:'./view/formcomponents.html',controller:formcomponents})
           .when('/searchbox',{templateUrl:'./view/searchbox.html',controller:searchbox})
           .when('/form',{templateUrl:'./view/form.html',controller:form});
   }]);
});