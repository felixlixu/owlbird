/**
 * Created by P0017359 on 2014/11/10.
 */
define(['app','zTree'],function(app,$ztree){
    app.directive('tree',function() {
        var option={
            compile:function compile(tElement, tAttrs) {
                var isNullOrEmpty=function(obj){
                    if(obj==null ||obj==""||obj==undefined){
                        return false;
                    }else{
                        return true;
                    }
                }
                return function(scope, tElement, tAttrs, controller){
                    var newCount=100,className = "dark";
                    var customerSetting=scope[tAttrs.ngSource];
                    var model=scope[tAttrs.ngModel];
                    var addHoverDom=function(treeId, treeNode) {
                        var sObj = $("#" + treeNode.tId + "_span");
                        if (treeNode.editNameFlag || $("#addBtn_"+treeNode.tId).length>0) return;
                        var addStr = "<span class='button add' id='addBtn_" + treeNode.tId
                            + "' title='add node' onfocus='this.blur();'></span>";
                        sObj.after(addStr);
                        var btn = $("#addBtn_"+treeNode.tId);
                        if (btn) btn.bind("click", function(){
                            var zTree = $.fn.zTree.getZTreeObj(tAttrs.id);
                            model.pId=treeNode.tId;
                            if(customerSetting.AddCallback()) {
                                zTree.addNodes(treeNode, {id: (100 + newCount), pId: treeNode.tId, name: "new node" + (newCount++)});
                            }
                            return false;
                        });
                    };
                    var removeHoverDom=function (treeId, treeNode) {
                        $("#addBtn_"+treeNode.tId).unbind().remove();
                    };

                    function beforeRename(treeId, treeNode) {
                        model.id = treeNode.tId;
                        customerSetting.EditCallback();
                        return false;
                    }

                    var beforeRemove=function(treeId, treeNode){
                        className = (className === "dark" ? "":"dark");
                        var zTree = $.fn.zTree.getZTreeObj(tAttrs.id);
                        zTree.selectNode(treeNode);
                        return confirm("Do you confirm to delete node -- " + treeNode.name + " ?");
                    }
                    var onRemove=function(e, treeId, treeNode){
                        model.id=treeNode.tId;
                        return customerSetting.DeleteCallback()
                    }
                    var setting={
                        view:isNullOrEmpty(customerSetting.view)?customerSetting.view:{},
                        edit:isNullOrEmpty(customerSetting.edit)?customerSetting.edit:{},
                        callback:isNullOrEmpty(customerSetting.callback)?customerSetting.callback:{}
                    }
                    if(setting.edit.enable==undefined){
                        setting.edit.enable=false;
                        setting.edit.showRemoveBtn=false;
                        setting.edit.showRenameBtn=false;
                    }
                    if(customerSetting.allowAdd){
                        if(setting.view.addHoverDom==undefined){
                            setting.view.addHoverDom=addHoverDom;
                        }
                        if(setting.view.removeHoverDom==undefined){
                            setting.view.removeHoverDom=removeHoverDom;
                        }
                    }
                    if(customerSetting.allowEdit){
                        setting.edit.enable=true;
                        setting.edit.showRenameBtn=true;
                        if(setting.callback.beforeEditName==undefined){
                            setting.callback.beforeEditName=beforeRename;
                        }
                    }
                    if(customerSetting.allowDelete){
                        setting.edit.enable=true;
                        setting.edit.showRemoveBtn=true;
                        if(setting.callback.beforeRemove==undefined){
                            setting.callback.beforeRemove=beforeRemove;
                        }
                        if(setting.callback.onRemove==undefined){
                            setting.callback.onRemove=onRemove;
                        }
                    }
                    $.fn.zTree.init($(tElement),setting,customerSetting.datasource)
                }
            }
        };
        return option;
    });
});
