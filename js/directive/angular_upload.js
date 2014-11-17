/**
 * Created by P0017359 on 2014/11/11.
 */
define(['app','fineUpload'],function(app,$upload) {
    app.directive('upload',function(){
        var option= {
            require:'ngModel',
            templateUrl:config.rootpath+'/template/uploadTemplate.html',
            compile: function (element, attrs) {
                return function (scope, element, attr, controller) {
                    var ngModel=scope[attr.ngModel];
                    var triggerid=attr.ngModel+"_trigger";
                    var url=scope[attr.ngUrl];
                    $(element).parent().append("<div id='"+triggerid+"' class='btn btn-primary'><i class='icon-upload icon-white'></i>UpLoad Now</div>");
                    var manualuploader=$(element).fineUploader({
                        request: {
                            endpoint: url
                        },
                        autoUpload: false,
                        editFilename: {
                            enabled: true
                        },

                        validation: {
                            allowedExtensions: ['jpeg', 'jpg', 'gif', 'png']
                        }
                    }).on('error',function (event, id, name, errorReason, xhrOrXdr){
                        var $fileEl = $(this).fineUploaderS3("getItemByFileId", id),
                        $viewBtn = $fileEl.find(".qq-upload-cancel");
                        $viewBtn.show();
                    });
                    $("#"+triggerid).bind("click",function(){
                        manualuploader.fineUploader('uploadStoredFiles');
                    });
                }
            }
        }
        return option;
    });
});