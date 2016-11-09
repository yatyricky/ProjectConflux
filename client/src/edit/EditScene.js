"use strict";

/**
 * EditScene.js
 * 
 * author: jxyi
 * date: 2016-11-2
 * purpose: 卡组编辑场景管理类，封装编辑界面 UI 以及相关方法
 */

(function(){
    var EditScene = function(){
        EditScene.__super.call(this);
        
        this.onLoad = function(){
            var closeBtnClick = function(){
                Conflux.sceneManager.enterScene("start");
            };
            this.closeBtn.clickHandler = laya.utils.Handler.create(this, closeBtnClick, null, false);

            
        };

        this.onUnload = function(){

        };
    };

    Laya.class(EditScene, "edit.EditScene", ui.edit.editUI);
    Laya.imps(EditScene, {"core.SceneInterface": true});
})();

