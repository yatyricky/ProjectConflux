var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var startUI=(function(_super){
		function startUI(){
			
		    this.startBtn=null;
		    this.gameName=null;
		    this.editBtn=null;
		    this.version=null;

			startUI.__super.call(this);
		}

		CLASS$(startUI,'ui.startUI',_super);
		var __proto__=startUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(startUI.uiView);
		}

		STATICATTR$(startUI,
		['uiView',function(){return this.uiView={"type":"View","props":{"width":960,"height":640},"child":[{"type":"Button","props":{"y":200,"x":362,"width":199,"var":"startBtn","skin":"comp/button.png","name":"startBtn","labelSize":40,"label":"start","height":109}},{"type":"Label","props":{"y":70,"x":372,"width":172,"var":"gameName","text":"Conflux","height":48,"fontSize":40,"color":"#fbfbfb","align":"center"}},{"type":"Button","props":{"y":369,"x":365,"width":200,"var":"editBtn","skin":"comp/button.png","name":"编辑卡组","labelSize":40,"label":"edit","height":100}},{"type":"Label","props":{"y":604,"x":14,"width":84,"var":"version","text":"v0.0.1","name":"版本号","height":26,"fontSize":20,"color":"#ffffff","align":"center"}}]};}
		]);
		return startUI;
	})(View);