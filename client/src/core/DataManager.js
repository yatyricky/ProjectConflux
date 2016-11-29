/**
 * DataManager.js
 * 
 * author: jxyi
 * date: 2016-11-29
 * purpose: 保存游戏的全局数据
 */

'use strict';

(function(){
    var DataManager = function(){
        this._cardList = [];

        this.init = function(){

        };

        this.getCardList = function(){
            return this._cardList;
        }
        this.setCardList = function(list){
            // TODO(jxyi): check if list is valid
            this._cardList = list;
        }

    };

    Laya.class(DataManager, "core.DataManager", null);
})();
