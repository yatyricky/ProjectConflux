/**
 * MatchScene.js
 * 
 * author: jxyi
 * date: 2016-12-8
 * purpose: 战斗场景管理类，用于管理战斗场景中的数据与逻辑。
 */

'use strict';

(function(){
    var conflux = Window.Conflux || {};

    var MatchScene = function(){
        MatchScene.__super.call(this);

    };

    Laya.class(MatchScene, "MatchScene", ui.match.matchUI);
    Laya.imps(MatchScene, {"SceneInterface": true});
})();

