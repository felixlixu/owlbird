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
        }],
        elecimgdata:[{
            href:"www.sina.com.cn",
            title:"TEST1",
            src:"/angular/img/1.jpg"
        },{
            href:"www.ifeng.com",
            title:"TEST2",
            src:"/angular/img/2.jpg"
        },{
            href:"www.sohu.com",
            title:"TEST3",
            src:"/angular/img/3.jpg"
        }]
    }
})