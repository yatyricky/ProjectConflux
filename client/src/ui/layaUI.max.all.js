var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var testUI=(function(_super){
		function testUI(){
			

			testUI.__super.call(this);
		}

		CLASS$(testUI,'ui.testUI',_super);
		var __proto__=testUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(testUI.uiView);
		}

		STATICATTR$(testUI,
		['uiView',function(){return this.uiView={"type":"View","props":{"width":960,"height":640},"child":[{"type":"Button","props":{"y":2,"x":4,"skin":"comp/button.png","label":"label"}}]};}
		]);
		return testUI;
	})(View);