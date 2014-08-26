
//bullet
var Bullet = cc.Sprite.extend({
	active:false,
	xVelocity:0,
	yVelocity:0,
	
	ctor:function (xVec, yVec) {
		this._super(res.bullet);
		this.xVelocity= xVec
		this.yVelocity = yVec;
		this.scheduleUpdate();
	},
	update:function (dt) {
		if (this.active == false)
			return;
		var x = this.x, y = this.y;
		this.x = x + this.xVelocity * dt;
		this.y = y + this.yVelocity * dt;
		if (x < 0 || x > cc.winSize.width || y < 0 || y > cc.winSize.height) {
			this.active = false;
			this.visible = false;
		}
	}

});