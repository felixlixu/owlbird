/**
 * Created by felix on 14-11-15.
 */

define([],function(){
    frameData={
        //偶数查询条件
        oddSearchCondition:[{
            "name": "title",
            "control":"text",
            "labelName":"标题"
        },{
            "name":"name",
            "control":"text",
            "labelName":"姓名"
        }, {
            "name": "group",
            "control":"text",
            "labelName":"所在小组"
        },{
            "name":"class",
            "control":"text",
            "labelName":"班级"
        }],
        //奇数查询条件
        evenSearchCondition:[{
            "name": "title1",
            "control":"text",
            "labelName":"标题"
        }],
        //奇数表单
        evenform:[{
            "name":"title",
            "labelName":"标题",
            "require":[{
                "required":true,
                "maxlength":50,
                "minlength":10
            }],
            "control":"text"
        }]
    }
})