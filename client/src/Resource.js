"use strict";

/**
 * Resource.js
 * 
 * author: jxyi
 * date: 2016-11-5
 * purpose: 列举编辑场景使用到的资源
 */

(function(){
    var conflux = window.Conflux || {};

    //------------------------------------
    conflux.RES = {};
    conflux.RES["StartScene"] = [
        "res/atlas/comp.json", 
        "res/atlas/common.json", 
        "res/atlas/res.json",
        "res/atlas/main_screen.json"
    ];

    conflux.RES["EditScene"] = [
        "res/atlas/comp.json", 
        "res/atlas/common.json",
        "res/atlas/res.json", 
        "res/atlas/edit.json"
    ];

    conflux.RES['MatchScene'] = [

    ];

    //---------------------------------------
    conflux.CONFIG = {};
    conflux.CONFIG.cards = "res/test.json";
})();
