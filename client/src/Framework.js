/**
 * Framework.js
 * 
 * author: jxyi
 * date: 2016-10-28
 * 游戏启动入口，用于管理游戏的框架
 */

// 用于保存全局对象，如玩家信息、牌库配置等。
Conflux = {};

Laya.class(function(){
    this.run = function(){
        Config.showCanvasMark = true;
        Laya.init(960, 640, laya.webgl.WebGL);
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;

        Laya.loader.load(["res/atlas/comp.json", "res/atlas/common.json", "res/atlas/res.json"]
            , laya.utils.Handler.create(this, this.addUI), null, laya.net.Loader.ATLAS);
    }

    this.addUI = function(){
        var startUI = new ui.start.startUI();
        startUI.version.dataSource = {text: version};
        Laya.stage.addChild(startUI);
    }
}, "Framework", null);

var framework = new Framework();
Conflux.framework = framework;

framework.run();









