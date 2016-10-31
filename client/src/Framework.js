/**
 * Framework.js
 * 
 * author: jxyi
 * date: 2016-10-28
 * 游戏启动入口，用于管理游戏的框架
 */

Laya.class(function(){
    this.run = function(){
        Config.showCanvasMark = true;
        Laya.init(960, 640, laya.webgl.WebGL);
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
    }

    this.addUI = function(){
        var startUI = new ui.startUI();
        startUI.version.dataSource = {text: version};
        Laya.stage.addChild(startUI);
        Logger(debugLevel.debug, "test log");
    }

    this.addCommon  = function(){
        var card = new ui.cardUI();
        card.dataSource = {x:0, y:0, scaleX:0.3, scaleY:0.3};
        Laya.stage.addChild(card);
    }
}, "Framework", null);

var framework = new Framework();
framework.run();

Laya.loader.load("res/atlas/comp.json", laya.utils.Handler.create(framework, framework.addUI), null, laya.net.Loader.ATLAS);
Laya.loader.load("res/atlas/common.json", laya.utils.Handler.create(framework, framework.addCommon), null, laya.net.Loader.ATLAS);



