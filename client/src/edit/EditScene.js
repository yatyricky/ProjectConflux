/**
 * EditScene.js
 * 
 * author: jxyi
 * date: 2016-11-2
 * purpose: 卡组编辑场景管理类，封装编辑界面 UI 以及相关方法
 */

(function(){
    var EditScene = function(){
        EditScene.__super.call(this);
        
        var Conflux = window.Conflux || {};
        var dataManager = Conflux.dataManager;

        // 保存牌库中的卡牌
        this.cardsArray = [];

        // 保存卡组中的卡牌
        this.deckArray = [];
        
        // 保存卡组中的卡牌数据
        this.deckCardList = [];

        /**
         * 加载卡表
         * @param list,卡表配置
         */
        this.loadCardList = function(list){
            for (var card in this.cardlist){
                if (this.cardlist[card] != null){
                    this.card_list.removeChild(this.cardlist[card]);
                }
            }

            var index = 0;
            for (var i in list){
                var tempCard = new game.card();
                tempCard.loadConfig(list[i]);
                tempCard.pos((tempCard.width + 2) * index, 1);
                this.card_list.addChild(tempCard);
                this.cardsArray[index] = tempCard;
                tempCard.clickFunc = function(){
                    if (Conflux.eventDispatcher){
                        Conflux.eventDispatcher.event(Conflux.EditEvent.libraryCardClicked, this.config);
                    }
                };
                ++index;
            }
        }

        /**
         * 添加一张卡牌到卡组
         * @param config，卡牌配置信息
         */
        this.addCardToDeck = function(config){
            var tempCard = new game.card();
            tempCard.loadConfig(config);
            DLOG("[EditScene] length = " + this.deckCardList.length);
            tempCard.pos((tempCard.width + 2) * this.deckCardList.length, 1);
            this.deckCardList[this.deckCardList.length] = config;
            this.deckArray[this.deckArray.length] = tempCard;
            this.deck_list.addChild(tempCard);

            tempCard.clickFunc = function(){
                    if (Conflux.eventDispatcher){
                        Conflux.eventDispatcher.event(Conflux.EditEvent.deckCardClicked, this.config);
                    }
                };
        };

        this.removeCardFromDeck = function(config){
            
        }

        // override
        this.onLoad = function(){
            var closeBtnClick = function(){
                Conflux.sceneManager.enterScene("start");
            };
            this.closeBtn.clickHandler = laya.utils.Handler.create(this, closeBtnClick, null, false);

            this.loadCardList(Conflux.gameData.getCardsConfig());

            if (Conflux.eventDispatcher){
                Conflux.eventDispatcher.on(Conflux.EditEvent.libraryCardClicked, this, function(config){
                    DLOG("[EditScene] handle library card clicked");
                    dump(config);
                    this.addCardToDeck(config);
                });

                Conflux.eventDispatcher.on(Conflux.EditEvent.deckCardClicked, this, function(config){
                    DLOG("[EditScene] handle deck card clicked");
                    dump(config);

                });
            }
        };

        // override
        this.onUnload = function(){

        };

        this.saveDeck = function(){
            dataManager.setCardList(this.deckCardList);
        };

        this.loadDeck = function(){
            this.deckCardList = dataManager.getCardList();
            for (let [index, elem] of this.deckArray.entries()){
                elem.destroy();
            }
            this.deckArray = [];

            var index = 0;
            var list = this.deckCardList;
            for (var i in list){
                var tempCard = new game.card();
                tempCard.loadConfig(list[i]);
                tempCard.pos((tempCard.width + 2) * index, 1);
                this.deck_list.addChild(tempCard);
                this.deckArray[index] = tempCard;
                tempCard.clickFunc = function(){
                    if (Conflux.eventDispatcher){
                        Conflux.eventDispatcher.event(Conflux.EditEvent.deckCardClicked, this.config);
                    }
                };
                ++index;
            }
        };

    };

    Laya.class(EditScene, "edit.EditScene", ui.edit.editUI);
    Laya.imps(EditScene, {"core.SceneInterface": true});
})();

