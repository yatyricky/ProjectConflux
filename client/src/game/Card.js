/**
 * Card.js
 * 
 * author: jxyi
 * date: 2016-10-30
 * purpose: 定义通用的 card 类，封装一张牌的展示以及相关数据
 */

"use strict";


(function(){
    var Conflux = window.Conflux || {};

    var Card = function(){
        Card.__super.call(this);

        this.config = {};

        // 点击回调函数
        this.clickFunc = null;

        // 长按回调函数
        this.holdFunc = null;

        this.size(this.bg.width, this.bg.height);

        this._onPicLoaded = function(res){
            DLOG("[Card] onPicLoaded: " + res);
            this.picture.skin = res;
        };

        this._onSkinLoaded = function(res){
            DLOG("[Card] onSkinLoaded: " + res);
            this.bg.skin = res;
        };

        // config from cards.json
        this.loadConfig = function(config){
            this.config = config;
            if (config.picture){
                DLOG("[Card] load picture: " + config.picture);
                if (Laya.loader.getRes(config.picture)){
                    this._onPicLoaded(config.picture);
                }
                else{
                    Laya.loader.load(config.picture, laya.utils.Handler.create(this
                        , this._onPicLoaded, [config.picture]));
                }
            }
            if (config.name){
                this.name.changeText(config.name);
                this.name.archorX = 0.5;
                this.name.pos(107, 159);
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
            if (config.color){
                var skin = "";
                switch(config.color){
                    case "red":
                        skin = "common/card_frame_red.png";
                    break;
                    case "blue":
                        skin = "common/card_frame_blue.png";
                    break;
                    case "green":
                        skin = "common/card_frame_green.png";
                    break;
                    case "white":
                        skin = "common/card_frame_white.png";
                    break;
                }

                if (skin != ""){
                    if (Laya.loader.getRes(skin)){
                        this._onSkinLoaded(skin);
                    }
                    else{
                        Laya.loader.load(skin, laya.utils.Handler.create(this, this._onSkinLoaded, [skin]));
                    }
                }
            }
        };

        this.getId = function(){
            return this.config.id || "-1";
        };
        this.getName = function(){
            return this.config.name || "";
        };

        this.on(Laya.Event.DISPLAY, this, function(){
            
        });
        this.on(Laya.Event.UNDISPLAY, this, function(){

        });

        this.on(Laya.Event.CLICK, this, function(){
            DLOG("[Card] clicked");
            if (this.clickFunc && typeof(this.clickFunc) == "function"){
                this.clickFunc();
            }
        });
        
    };

    Laya.class(Card, "game.card", ui.share.cardUI);
})();





