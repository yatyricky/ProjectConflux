/**
 * EditScene.js
 * 
 * author: jxyi
 * date: 2016-11-2
 * purpose: 卡组编辑场景管理类，封装编辑界面 UI 以及相关方法
 */

var EditScene = function(_super){
    function EditScene(){
        EditScene.__super.call(this);
    };
    Laya.class(EditScene, "edit.EditScene", _super);

    var __proto = EditScene.prototype;

    return EditScene;
}(ui.edit.editUI);

