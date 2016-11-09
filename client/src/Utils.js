"use strict";

/**
 * Utils.js
 * 
 * 定义全局常量和方法，以及游戏的基础信息
 */

(function(){
    // 游戏版本号
    window.VERSION = "v0.0.0.1";

    // 游戏构建版本号，与版本号对应，对应规则为 aa.bb.cc.dd -> aabbccdd。例如：v1.2.3.4 -> 10203040
    window.VERSION_CODE = 1;

    window.debugLevel = {
        debug : 1,
        info : 2,
        warn : 3,
        error : 4,
        fatal : 5,
        off : 6
    };

    var debugModel = debugLevel.debug;

    /**
     * printLog
     * 该方法用于输出 log，目前只在控制台输出，后续添加输出到文件。
     */
    var printLog = function(msg){
        console.log(msg);
    };

    /**
     * Logger
     * 全局方法，用于程序内打印各种等级的日志。根据日志输出方式不同，可以输出到控制台或者日志文件中
     * param：
     *      level，日志等级，取 debugLevel 中的值。
     *      msg，需要打印的日志内容
     */
    window.Logger = function(level, msg){
        if (typeof(level) != "number"){
            printLog("[error] Logger level error for " + level);
            return;
        }

        switch(level){
            case debugLevel.debug:
                if (debugModel <= debugLevel.debug ){
                    printLog("[debug] " + msg);
                }
                break;
            case debugLevel.info:
                if (debugModel <= debugLevel.info ){
                    printLog("[info] " + msg);
                }
                break;
            case debugLevel.warn:
                if (debugModel <= debugLevel.warn ){
                    printLog("[warn] " + msg);
                }
                break;
            case debugLevel.error:
                if (debugModel <= debugLevel.error ){
                    printLog("[error] " + msg);
                }
                break;
            case debugLevel.fatal:
                if (debugModel <= debugLevel.fatal ){
                    printLog("[fatal] " + msg);
                }
                break;
            default:
                break;
        }
    };

    window.DLOG = function(msg){
        Logger(debugLevel.debug, msg);
    }

    var temp_dump = function (arr,level) {
        var dumped_text = "";
        if(!level) level = 0;

        var level_padding = "";
        for(var j=0;j<level+1;j++) level_padding += "    ";

        if(typeof(arr) == 'object') {  
            for(var item in arr) {
                var value = arr[item];

                if(typeof(value) == 'object') { 
                    dumped_text += level_padding + "'" + item + "' ...\n";
                    dumped_text += temp_dump(value,level+1);
                } else {
                    dumped_text += level_padding + "'" + item + "' => \"" + value + "\"\n";
                }
            }
        } else { 
            dumped_text = "===>"+arr+"<===("+typeof(arr)+")";
        }
        return dumped_text;
    }

    window.dump = function(arr,level){
        Logger(debugLevel.debug, temp_dump(arr, level));
    };
})();





