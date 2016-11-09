"use strict";

/**
 * Resource.js
 * 
 * author: jxyi
 * date: 2016-11-5
 * purpose: 列举编辑场景使用到的资源
 */

(function(window){
    window.Conflux = window.Conflux || {};
    var Conflux = window.Conflux;
    Conflux.RES = {};
    Conflux.RES["StartScene"] = [
        "res/atlas/comp.json", 
        "res/atlas/common.json", 
        "res/atlas/res.json"
    ];

    Conflux.RES["EditScene"] = [
        "res/atlas/comp.json", 
        "res/atlas/common.json",
        "res/atlas/res.json", 
        "res/atlas/edit.json"
    ];

    Conflux.CONFIG = {};
    Conflux.CONFIG.cards = "res/test.json";
})(window);
