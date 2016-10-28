/**
 * Framework.js
 * 
 * author: jxyi
 * date: 2016-10-28
 * 游戏启动入口，用于管理游戏的框架
 */

Laya.class(function(){
    this.run = function(){
        Laya.init(960, 640, laya.webgl.WebGL);
    }

    this.addUI = function(){
        var tempUI = new ui.testUI();
        Laya.stage.addChild(tempUI);
    }
}, "Framework", null);

var framework = new Framework();
framework.run();

Laya.loader.load("res/atlas/comp.json", laya.utils.Handler.create(framework, framework.addUI), null, laya.net.Loader.ATLAS);



