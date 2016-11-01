/**
 * Card.js
 * 
 * author: jxyi
 * date: 2016-10-30
 * purpose: 定义通用的 card 类，封装一张牌的展示以及相关数据
 */


var card = function(){
    card.super(this);

    // this.loadConfig = function() 这样写才能被外部调用。
    // function loadConfig() 这样写不能被外部调用，因为这种写法等价于 var loadConfig = function()，是个临时变量。
    this.loadConfig = function(config){
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
};

Laya.class(card, "game.card", ui.share.cardUI);



