/**
 * StartScene.js
 * 
 * author: jxyi
 * date: 2016-11-2
 * purpose: 开始场景的管理类，封装开始场景 UI 并提供操作的方法。
 */

var startScene = function(){
    var onStartClicked = function(){
        Logger(debugLevel.debug, "start clicked!");
    };

    var onEditClicked = function(){
        Logger(debugLevel.debug, "edit clicked");
    };

    startScene.super(this);
    this.startBtn.clickHandler = laya.utils.Handler.create(this, onStartClicked, null, false);
    this.editBtn.clickHandler = laya.utils.Handler.create(this, onEditClicked, null, false);
};

Laya.class(startScene, "start.StartScene", ui.start.startUI);


