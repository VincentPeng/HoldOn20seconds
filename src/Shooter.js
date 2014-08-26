var Shooter = cc.Class.extend({
		bulletSet:null,
		plane:null,
		gamelayer:null,
		
		ctor:function (plane) {
			this.bulletSet = [];
			this.bulletSet.length = 1000;
			this.plane = plane;
			for(var i=0;i<1000;i++) {
				bulletSet[i] = new Bullet();
				bulletSet[i].active = false;
				bulletSet[i].xVelocity = 0;
				bulletSet[i].yVelocity = 0;
			}
		},
		
		fireBullets:function (bNum) {
			var upNum;
			var downNum;
			var leftNum;
			var rightNum;
			var tmp = Math.floor(bNum/2);
			var tmp2 = bNum - tmp;
			upNum = Math.floor(tmp/3*1);
			leftNum = tmp - upNum;
			downNum = Math.floor(tmp2/3*1);
			rightNum = tmp2 - downNum;
			
			var zs = cc.winSize;
			var uparr = randomGenerate(upNum,0,zs.width);
			var leftarr = randomGenerate(leftNum,0,zs.height);
			var downarr = randomGenerate(downNum,0,zs.width);
			var rightarr = randomGenerate(rightNum,0,zs.height);
			var startpoints = [];
			for(var i=0;i<uparr.length;i++) {
				startpoints.push(new cc.size(uparr[i],0));
			}
			for(var i=0;i<leftarr.length;i++) {
				startpoints.push(new cc.size(0,leftarr[i]));
			}
			for(var i=0;i<downarr.length;i++) {
				startpoints.push(new cc.size(downarr[i],zs.height));
			}
			for(var i=0;i<rightarr.length;i++) {
				startpoints.push(new cc.size(0,rightarr[i]));
			}
			var inactArr = [];
			for(var i=0;i<bulletSet.length;i++) {
				var j=0;
				if(!bulletSet[i].active) {
					bulletSet[i].active = true;
					bulletSet[i].xVelocity = startpoints[j].x;
					bulletSet[i].yVelocity = startpoints[j].y;
					inactArr.push(bulletSet[i]);
					j++;
				}
			}
			
		},
		
		// total: how many random number generated
		// start, end: range of random number
		randomGenerate:function (total,start,end) {
			var arr = [];
			//arr.length = end-start;
			for(var i=start;i<end;i++) {
				arr[i] = i;
			}
			arr.sort(function(a,b) {return 0.5 - Math.random();});
			var retarr = []
			for(var i=0;i<total;i++) {
				retarr[i] = arr[i];
			}
			return retarr;
		}
		
});

