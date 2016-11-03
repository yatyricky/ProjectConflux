/**
 * SceneManager.js
 * 
 * author: jxyi
 * date: 2016-11-3
 * purpose: 管理场景切换和场景内事件
 */

var sceneManager = function(){
    var EventDispatcher = laya.events.EventDispatcher;

    var __proto = sceneManager.prototype;

    function SceneManager(){
        // 当前场景的事件分发器引用
        __proto.eventDispatcher = null;

        // 当前场景的对象
        __proto.curScene = null;

        __proto._sceneMap = {};
    };

    // 注册场景类
    __proto.regScene = function(name, cls){
        if (this._sceneMap[name] === undefined){
            this._sceneMap[name] = cls;
        }
        else{
            Logger(debugLevel.warn, "[SceneManager] scene " + name + " has already registered!");
        }
    };

    // 注销场景类
    __proto.unregScene = function(name, cls){
        if (this._sceneMap[name] !== undefined){
            this._sceneMap[name] = undefined;
        }
        else {
            Logger(debugLevel.warn, "[SceneManager] scene " + name + " is not registered!");
        }
    };

    // 切换场景
    __proto.enterScene = function(name){
        if (this._sceneMap[name] === undefined){
            Logger(debugLevel.error, "[SceneManager] scene " + name + " is not registered!");
            return false;
        }
        else{
            if (this._curScene != null){
                this._curScene.onUnload();
                Laya.stage.removeChild(this._curScene);
                this._curScene = null;
            }

            var newScene = this._sceneMap[name]();
            newScene.onLoad();
            Laya.stage.addChild(newScene);
            this._curScene = newScene();
        }
    };
};

Laya.class(sceneManager, "SceneManager", null);







