"use strict";

/**
 * SceneInterface.js
 * 
 * author: jxyi
 * date: 2016-11-3
 * purpose: 场景接口，定义场景需要具有的接口
 */

var SceneInterface = function(){
    function SceneInterface(){

    };

    var __proto = SceneInterface.prototype;

    // 场景进入时由场景管理器调用
    __proto.onLoad = function(){

    };

    // 场景退出时由场景管理器调用
    __proto.onUnload = function(){

    };
    
    return SceneInterface;
}();

Laya.interface("core.SceneInterface", SceneInterface);

