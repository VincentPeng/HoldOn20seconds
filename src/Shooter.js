var Shooter = {
		bulletSet:null,
		plane:null,
		
		ctor:function (plane) {
			this.bulletSet = New Array;
			this.bulletSet.length = 500;
			this.plane = plane;
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
			
		}
		
};