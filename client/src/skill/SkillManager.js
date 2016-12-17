/**
 * SkillManager.js
 * 
 * author: jxyi
 * date: 2016-12-12
 * purpose: 卡牌技能管理类
 */

'use strict';

/**
 * 每个回合的流程为：回合开始阶段(begin)、抽牌阶段(draw)、准备阶段1(prepare1)、
 *      战斗选择阶段(select)、战斗响应阶段(response)、战斗结算阶段(result)、
 *      弃牌阶段(discard)、回合结束阶段(end)。
 * 
 * 技能作用对象分为：生物(creature)、英雄(hero)。（待补充）
 * 
 * 所有技能都是一个 function，并且都有技能名称(name)、描述(description)、作用对象(targetType)、触发时机(trigger)的属性。
 * 实例请参看 OriginSkill.attack 技能。
 */

(function(){
    var conflux = window.Conflux || {};

    var SkillManager = function(){
        
    };

    Laya.class(SkillManager, "SkillManager", null);
})();

