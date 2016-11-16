"use strict";

/**
 * StartScene.js
 * 
 * author: jxyi
 * date: 2016-11-2
 * purpose: 开始场景的管理类，封装开始场景 UI 并提供操作的方法。
 */

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

            // 迷雾移动效果
            var fogLayer = function(speed, height, alpha) {
                var fogContainer = new Laya.Sprite();
                Laya.stage.addChild(fogContainer);
                var fog1 = new Laya.Sprite().loadImage("./main_screen/fog.png");
                var fog2 = new Laya.Sprite().loadImage("./main_screen/fog.png");
                fogContainer.zOrder = 10;
                fogContainer.alpha = alpha;
                fogContainer.addChild(fog1);
                fogContainer.addChild(fog2);

                fog2.pos(1280, 0);
                fogContainer.pos(0, height);

                Laya.timer.frameLoop(1, this, function(e) {
                    fogContainer.x -= speed;
                    if (fogContainer.x <= -1280) {
                        fogContainer.x = 0;
                    }
                });
            };

            fogLayer(2, 440, 0.9); // front fog
            fogLayer(1, 335, 0.7); // back fog
        };

        this.onUnload = function(){

        };
    };

    Laya.class(StartScene, "start.StartScene", ui.start.startUI);
    Laya.imps(StartScene, {"core.SceneInterface": true});
})(window);


