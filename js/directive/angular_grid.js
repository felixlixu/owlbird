/**
 * Created by P0017359 on 2014/11/11.
 */
define(['app','dataTables'],function(app,$datatable) {
    app.directive('datatable', function () {
        var addHead=function(list){
            var title="<thead><tr>";
            $.each(list,function(index,value){
                title+="<td>"+value+"</td>";
            });
            return title+="</tr></thead><tbody></tbody>";
        }
        var option = {
            replace: true,
            require: 'ngModel',
            compile:function(element,attrs){
              return function(scope,element,attrs,controller){
                  var datasource=scope[attrs.ngSource];
                  var gridoption=scope[attrs.ngOptions];
                  var model=scope[attrs.ngModel];
                  var thead=addHead(gridoption.head);
                  $(element).append(thead);
                  $(element).DataTable({
                      head:gridoption.head,
                      columns:gridoption.columns,
                      data:datasource
                      /*"oLanguage" : {
                          "sLengthMenu": "ÿҳ��ʾ _MENU_ ����¼",
                          "sZeroRecords": "��Ǹ�� û���ҵ�",
                          "sInfo": "�� _START_ �� _END_ /�� _TOTAL_ �����",
                          "sInfoEmpty": "û�����",
                          "sInfoFiltered": "(�� _MAX_ ������м���)",
                          "sZeroRecords": "û�м��������",
                          "sSearch": "���:",
                          "oPaginate": {
                              "sFirst": "��ҳ",
                              "sPrevious": "ǰһҳ",
                              "sNext": "��һҳ",
                              "sLast": "βҳ"
                          }
                      }*/
                  });

              }
            }
        };
        return option;
    });
});