/**
 * Created by felix on 14-11-15.
 */
define([],function(){
   runData={
      menuData:[
          {"name":"前端控件",
              "submenuList":[{
                  "name":"基础控件",
                  "url":"#/formcomponent"
              },{
                  "name":"查询框控件",
                  "url":"#/searchbox"
              },{
                  "name":"Form Wizard",
                  "url":"index.html"
              },{
                  "name":"Form Validation",
                  "url":"#list"
              },{
                  "name":"Image Upload",
                  "url":"index.html"
              },{
                  "name":"Image Cropping",
                  "url":"index.html"
              }
              ]},{"name":"高级控件",
              "submenuList":[{
                  "name":"表格控件",
                  "url":"#/grid"
              },{
                  "name":"表单控件",
                  "url":"#/form"
              },{
                  "name":"Dynamic Table",
                  "url":"index.html"
              },{
                  "name":"Advanced Table",
                  "url":"index.html"
              },{
                  "name":"Editable Table",
                  "url":"index.html"
              }]
          }
      ]
   }
    return runData;
});