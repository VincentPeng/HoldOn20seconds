var Shooter = cc.Class.extend({
		bulletSet:null,
		plane:null,
		gamelayer:null,
		
		ctor:function (layer, plane) {
			cc.log("asdasfdfdsfd");
			this.bulletSet = [];
			this.bulletSet.length = 1000;
			this.plane = plane;
			this.gamelayer = layer;
			for(var i=0;i<1000;i++) {
				this.bulletSet[i] = new Bullet(0,0);
				this.bulletSet[i].active = false;
				this.bulletSet[i].setPositionX(1);
				this.bulletSet[i].setPositionY(1);
			}
		},
		
		// total: how many random number generated
		// start, end: range of random number
		randomGenerate:function (total,start,end) {
			var arr = [];
			//arr.length = end-start;
			for(var i=start;i<(end-start)/20;i++) {
				arr[i] = i*20;
			}
			arr.sort(function(a,b) {return 0.5 - Math.random();});
			var retarr = []
			for(var i=0;i<total;i++) {
				retarr[i] = arr[i];
			}
			return retarr;
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
			var uparr = this.randomGenerate(upNum,0,zs.width);
			var leftarr = this.randomGenerate(leftNum,0,zs.height);
			var downarr = this.randomGenerate(downNum,0,zs.width);
			var rightarr = this.randomGenerate(rightNum,0,zs.height);
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
				startpoints.push(new cc.size(zs.width,rightarr[i]));
			}
			var inactArr = [];
			var j=0;
			for(var i=0;i<this.bulletSet.length;i++) {
				//cc.log(i);
				if(!this.bulletSet[i].active) {
					var b = new Bullet(0,0);
					b.scale = 0.5;
					this.bulletSet[i] = b;
					
					this.gamelayer.addChild(this.bulletSet[i]);
					this.bulletSet[i].active = true;
					this.bulletSet[i].setPositionX(startpoints[j].width);//startpoints[j].width;
					this.bulletSet[i].setPositionY(startpoints[j].height);//startpoints[j].height;
					inactArr.push(this.bulletSet[i]);
					j++;
				}
				if(j==bNum)
					break;
			} 
//			
			
			for(var i=0;i<inactArr.length;i++) {
				//cc.log("aaaa %d",inactArr[i].x);
				var myx = inactArr[i].x;
				var myy = inactArr[i].y;
				var px = this.plane.x;
				var py = this.plane.y;
				var ratio = (py-myy)/(px-myx);
				var sum = Math.sqrt(Math.pow(px-myx, 2) + Math.pow(py-myy, 2));
				var tmp = sum / 90;
				var sign;
				if(px-myx < 0) {
					sign = -1;
				}
				else {
					sign = 1;
				}
				var vx = sum / Math.sqrt(1+Math.pow(ratio, 2)) * sign;
				var vy = vx * ratio;
				
				cc.log(vx);
				cc.log(vy);
				var a = Math.abs(Math.random()-0.5)+1;
				inactArr[i].xVelocity = vx/tmp*a;
				inactArr[i].yVelocity = vy/tmp*a;
			}
			
		},
		
		isCollide:function (a, b) {
			var ax = a.x, ay = a.y, bx = b.x, by = b.y;
			if (Math.abs(ax - bx) > MAX_CONTAINT_WIDTH || Math.abs(ay - by) > MAX_CONTAINT_HEIGHT)
				return false;

			var aRect = a.collideRect(ax, ay);
			var bRect = b.collideRect(bx, by);
			return cc.rectIntersectsRect(aRect, bRect);
		},
		
		isTargetDead:function() {
			for(var i=0;i<bulletSet.length;i++) {
				if(bulletSet[i].active && this.isCollide(bulletSet[i], this.plane))
					return true;
			}
			return false;
		}
		
		
});

