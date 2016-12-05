"use strict";

/**
 * Framework.js
 * 
 * author: jxyi
 * date: 2016-10-28
 * 游戏启动入口，用于管理游戏的框架
 */

(function(window){
    // 用于保存全局对象，如玩家信息、牌库配置等。
    window.Conflux = window.Conflux || {};

    var Framework = function(){
        this.init = function(){
            Config.showCanvasMark = true;
            Laya.init(1280, 720, laya.webgl.WebGL);
            Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
            Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;

            Conflux.eventDispatcher = new Laya.EventDispatcher();

            var sceneManager = new core.SceneManager();
            Conflux.sceneManager = sceneManager;
            sceneManager.regScene("start", start.StartScene, Conflux.RES["StartScene"]);
            sceneManager.regScene("edit", edit.EditScene, Conflux.RES["EditScene"]);

            var gameData = new core.GameData();
            Conflux.gameData = gameData;
            gameData.init();

            var dataManager = new core.DataManager();
            Conflux.dataManager = dataManager;
            dataManager.init();
        };

        this.run = function(){
            var sceneManager = Conflux.sceneManager;
            sceneManager.enterScene("start");
        };
    };

    Laya.class(Framework, "Framework", null);

    var framework = new Framework();
    Conflux.framework = framework;

    framework.init();
    framework.run();
})(window);










