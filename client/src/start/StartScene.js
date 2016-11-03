/**
 * StartScene.js
 * 
 * author: jxyi
 * date: 2016-11-2
 * purpose: 开始场景的管理类，封装开始场景 UI 并提供操作的方法。
 */

var StartScene = function(_super){
    function StartScene(){
        StartScene.__super.call(this);

        var onStartClicked = function(){
            Logger(debugLevel.debug, "start clicked!");
        };

        var onEditClicked = function(){
            Logger(debugLevel.debug, "edit clicked");
        };

        this.startBtn.clickHandler = laya.utils.Handler.create(this, onStartClicked, null, false);
        this.editBtn.clickHandler = laya.utils.Handler.create(this, onEditClicked, null, false);
    }
    Laya.class(StartScene, "start.StartScene", _super);

    var __proto = StartScene.prototype;

    function startScene(){
        var onStartClicked = function(){
            Logger(debugLevel.debug, "start clicked!");
        };

        var onEditClicked = function(){
            Logger(debugLevel.debug, "edit clicked");
        };

        __proto.startBtn.clickHandler = laya.utils.Handler.create(this, onStartClicked, null, false);
        __proto.editBtn.clickHandler = laya.utils.Handler.create(this, onEditClicked, null, false);
    };
}(ui.start.startUI);




