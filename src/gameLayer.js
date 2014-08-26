
var gameLayer = cc.Layer.extend({
	sprite:null,
	timeElapsed:0.0,
	coolingPeriod:0.0,
	shooter:null,
	gameState:0,
	ctor:function () {
		//////////////////////////////
		// 1. super init first
		this._super();

		// add "HelloWorld" splash screen"
		this.sprite = new cc.Sprite(res.plane_png);
		this.addChild(this.sprite, 0);
		this.shooter = new Shooter (this, this.sprite);
	
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
		
		this.init()
		return true;
	},
	
	
	init:function (){
		this.sprite.attr({
			x: cc.winSize.width / 2,
			y: cc.winSize.height / 2,
			scale: 0.5,
			rotation: 0
		});
		this.timeElapsed = 0.0;
		this.coolingPeriod = 0;
		this.scheduleUpdate();
	},
	
	processEvent:function (event) {
		if (this.gameState == 0)
			return;
		var delta = event.getDelta();
		var curPos = cc.p(this.sprite.x, this.sprite.y);
		curPos = cc.pAdd(curPos, delta);
		curPos = cc.pClamp(curPos, cc.p(0, 0), cc.p(cc.winSize.width, cc.winSize.height));
		this.sprite.x = curPos.x;
		this.sprite.y = curPos.y;
		curPos = null;
	},
	
	update:function (dt) {
		if (this.gameState == 0)
			return;
		this.timeElapsed += dt;
		this.coolingPeriod += dt;
		if (this.coolingPeriod > 2.0){
			this.shooter.fireBullets (10);
			this.coolingPeriod = 0.0;
		}
/*		if (this.shooter.planedShooted()){
			cc.log("Game Over");
		}*/
	},
});
