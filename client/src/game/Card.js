"use strict";

/**
 * Card.js
 * 
 * author: jxyi
 * date: 2016-10-30
 * purpose: 定义通用的 card 类，封装一张牌的展示以及相关数据
 */

(function(){
    var Card = function(){
        Card.__super.call(this);
        this.config = {};

        // config from cards.json
        this.loadConfig = function(config){
            this.config = config;
            if (config.picture){
                var onPicLoaded = function(){
                    this.bg.skin = config.picture;
                }
                if (Laya.loader.getRes(config.picture)){
                    this.onPicLoaded();
                }
                else{
                    Laya.loader.load(config.picture, laya.utils.Handler.create(this, onPicLoaded));
                }
            }
            if (config.name){
                this.name.text = config.name;
            }
            if (config.category){
                switch(config.category){
                    case "creature":
                        this.category.skin = "common/card_type_creature.png";
                    break;
                    case "enchantment":
                        this.category.skin = "common/card_type_enchantment.png";
                    break;
                    case "spell":
                        this.category.skin = "common/card_type_spell.png";
                    break;
                }
            }
        };

        this.getId = function(){
            return this.config.id || "-1";
        };
        this.getName = function(){
            return this.config.name || "";
        };
    };

    Laya.class(Card, "game.card", ui.share.cardUI);
})();





