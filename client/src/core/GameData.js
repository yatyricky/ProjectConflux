"use strict";

/**
 * GameData.js
 * 
 * author: jxyi
 * date: 2016-11-7
 * purpose: 用于存储全局数据的管理类
 */

(function(){
    var Conflux = window.Conflux || {}

    var GameData = function(){
        this.cards = {};
        this.cardsLoaded = false;

        this.init = function(){
            Laya.loader.load(Conflux.CONFIG.cards, laya.utils.Handler.create(this, this.onCardsLoaded)
                , null, laya.net.Loader.JSON, 1, false);
        };

        this.onCardsLoaded = function(obj){
            this.cards = obj;
            for (var item in this.cards){
                this.cards[item].id = item;
            }
            this.cardsLoaded = true;
        };

        this.getCardsConfig = function(){
            return this.cards;
        }
    };

    Laya.class(GameData, "core.GameData", null);
})();
