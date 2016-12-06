"use strict";

/**
 * SceneManager.js
 * 
 * author: jxyi
 * date: 2016-11-3
 * purpose: 管理场景切换和场景内事件
 */

(function(){
    var SceneManager = function(){
        // 当前场景的对象
        this._curScene = null;

        this._sceneMap = {};

        // 注册场景类
        this.regScene = function(name, cls, res){
            if (this._sceneMap[name] === undefined){
                this._sceneMap[name] = {instructor: cls, resource: res};
            }
            else{
                Logger(debugLevel.warn, "[SceneManager] scene " + name + " has already registered!");
            }
        };

        // 注销场景类
        this.unregScene = function(name){
            if (this._sceneMap[name] !== undefined){
                this._sceneMap[name] = undefined;
            }
            else {
                Logger(debugLevel.warn, "[SceneManager] scene " + name + " is not registered!");
            }
        };

        // 切换场景
        this.enterScene = function(name){
            if (this._sceneMap[name] === undefined){
                Logger(debugLevel.error, "[SceneManager] scene " + name + " is not registered!");
                return false;
            }
            else{
                if (this._curScene != null){
                    this._curScene.onUnload();
                    Laya.stage.removeChild(this._curScene);
                    this._curScene.destroy();
                    this._curScene = null;
                    if (Conflux.eventDispatcher){
                        Conflux.eventDispatcher.offAll();
                    }
                }

                this.onLoad = function(sceneName){
                    var newScene = new this._sceneMap[sceneName].instructor();
                    newScene.onLoad();
                    Laya.stage.addChild(newScene);
                    this._curScene = newScene;
                };
                
                if (this._sceneMap[name].resource){
                    Laya.loader.load(this._sceneMap[name].resource, laya.utils.Handler.create(this, this.onLoad, [name])
                        , null, laya.net.Loader.ATLAS);
                }
                else {
                    this.onLoad(name);
                }
            }
        };
    };

    Laya.class(SceneManager, "core.SceneManager", null);
})();








