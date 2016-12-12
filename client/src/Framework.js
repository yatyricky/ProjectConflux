"use strict";

/**
 * Framework.js
 * 
 * author: jxyi
 * date: 2016-10-28
 * 游戏启动入口，用于管理游戏的框架
 */

(function(){
    var conflux = window.Conflux;    

    var Framework = function(){
        this.init = function(){
            Config.showCanvasMark = true;
            Laya.init(1280, 720, laya.webgl.WebGL);
            Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
            Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;

            conflux.eventDispatcher = new Laya.EventDispatcher();

            var sceneManager = new SceneManager();
            conflux.sceneManager = sceneManager;
            sceneManager.regScene("start", StartScene, conflux.RES["StartScene"]);
            sceneManager.regScene("edit", EditScene, conflux.RES["EditScene"]);
            sceneManager.regScene('match', MatchScene, conflux.RES['MatchScene']);

            var gameData = new GameData();
            conflux.gameData = gameData;
            gameData.init();

            var dataManager = new DataManager();
            conflux.dataManager = dataManager;
            dataManager.init();
        };

        this.run = function(){
            var sceneManager = conflux.sceneManager;
            sceneManager.enterScene("start");
        };
    };

    Laya.class(Framework, "Framework", null);

    var framework = new Framework();
    conflux.framework = framework;

    framework.init();
    framework.run();
})();










