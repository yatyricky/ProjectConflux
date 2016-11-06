"use strict";

/**
 * Card.js
 * 
 * author: jxyi
 * date: 2016-10-30
 * purpose: 定义通用的 card 类，封装一张牌的展示以及相关数据
 */


var Card = function(_super){
    function Card(){
        Card.__super.call(this);
    }

    Laya.class(Card, "game.card", _super);

    var __proto = Card.prototype;

    __proto.loadConfig = function(config){
        if (config.bg){
            this.bg.skin = config.bg;
        }
        if (config.name){
            this.name.text = config.name;
        }
        if (config.description){
            this.description.text = config.description;
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
    }
}(ui.share.cardUI);





