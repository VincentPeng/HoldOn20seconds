
var gameLayer = cc.Layer.extend({
	sprite:null,
	bullet:null,
	ctor:function () {
		//////////////////////////////
		// 1. super init first
		this._super();
		var size = cc.winSize;

		// add "HelloWorld" splash screen"
		this.sprite = new cc.Sprite(res.plane_png);
		this.sprite.attr({
			x: size.width / 2,
			y: size.height / 2,
			scale: 0.5,
			rotation: 180
		});
		this.addChild(this.sprite, 0);
		
		this.bullet = new cc.Sprite(res.bullet_png);
		this.bullet.attr({
			x: 20,
			y: 20
		});
		this.addChild(this.bullet, 0);
		var director = cc.director;
		var s = director.getWinSize();
		var actionTo = cc.moveTo(20, cc.p(s.width - 40, s.height - 40));
		this.bullet.runAction(actionTo);
		
		if (cc.sys.capabilities.hasOwnProperty('touches')){
			cc.log("touches detected");
			cc.eventManager.addListener({
				event: cc.EventListener.TOUCH_ALL_AT_ONCE,
				onTouchesMoved:function (touches, event) {
					var touch = touches[0];
					event.getCurrentTarget().processEvent(touches[0]);
				}
			}, this);
			
		}
		else{
			cc.log("no touches detected");
		}
		
		this.scheduleUpdate();
		return true;
	},
	
	processEvent:function (event) {
		var delta = event.getDelta();
		var curPos = cc.p(this.sprite.x, this.sprite.y);
		curPos = cc.pAdd(curPos, delta);
	//	curPos = cc.pClamp(curPos, cc.p(0, 0), cc.p(winSize.width, winSize.height));
		this.sprite.x = curPos.x;
		this.sprite.y = curPos.y;
		curPos = null;
	},
	
	update:function (dt) {
		
	},


});
