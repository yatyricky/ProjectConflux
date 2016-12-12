/**
 * OriginSkill.js
 * 
 * author: jxyi
 * date: 2016-12-12
 * purpose: 定义初版的所有技能
 */

'use strict';

(function(){
    var conflux = window.Conflux;
    conflux.skill.origin = {};

    var attack = function(match, source, target){

    };
    attack.name = '攻击';
    attack.description = '对指定生物或玩家造成该卡攻击力数值的伤害';
    attack.targetType = {
        total: 1,
        creature: 1,
        hero: 1
    };
    attack.trigger = ['select'];
    conflux.skill.origin['attack'] = attack;

})();
