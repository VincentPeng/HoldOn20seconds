var Shooter = cc.Class.extend({
		bulletSet:null,
		plane:null,
		gamelayer:null,
		
		ctor:function (layer, plane) {
			this.bulletSet = [];
			this.plane = plane;
			this.gamelayer = layer;
		},
		
		fireBullets:function (bNum) {
			var upNum;
			var downNum;
			var leftNum;
			var rightNum;
			var tmp = Math.floor(bNum/2);
			var tmp2 = bNum - tmp;
			upNum = Math.floor(tmp/3*2);
			leftNum = tmp - upNum;
			downNum = Math.floor(tmp2/3*2);
			rightNum = tmp2 - downNum;
			
			var bullet = new Bullet (1,2);
		}
		
});

