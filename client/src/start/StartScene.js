/**
 * StartScene.js
 * 
 * author: jxyi
 * date: 2016-11-2
 * purpose: 开始场景的管理类，封装开始场景 UI 并提供操作的方法。
 */

"use strict";

(function(window){
    var Conflux = window.Conflux || {};

    var StartScene = function(){
        StartScene.__super.call(this);

        this.onLoad = function(){
            var onStartClicked = function(){
                Logger(debugLevel.debug, "start clicked!");
            };

            var onEditClicked = function(){
                Logger(debugLevel.debug, "edit clicked");
                Conflux.sceneManager.enterScene("edit");
            };

            this.startBtn.clickHandler = laya.utils.Handler.create(this, onStartClicked, null, false);
            this.editBtn.clickHandler = laya.utils.Handler.create(this, onEditClicked, null, false);
        };

        this.onUnload = function(){

        };
    };

    Laya.class(StartScene, "StartScene", ui.start.startUI);
    Laya.imps(StartScene, {"SceneInterface": true});
})(window);


