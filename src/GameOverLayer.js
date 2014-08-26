// game over layer
var gameOverLayer = cc.Layer.extend({
	theGameLayer:null,
	ctor:function (myGameLayer) {
		//////////////////////////////
		this._super();
		this.theGameLayer = myGameLayer;
		
		var overLogo = new cc.Sprite(res.gameover_png);
		overLogo.attr({
			anchorX: 0,
			anchorY: 0,
			x: cc.winSize.width / 2 - 170,
			y: 600
		});
		this.addChild(overLogo);
		
		var intro_Label = new cc.LabelTTF('Score: ' + Math.floor(this.theGameLayer.timeElapsed) + ' s',  'Times New Roman', 40, cc.size(600,80), cc.TEXT_ALIGNMENT_CENTER);
		var size = cc.winSize;
		intro_Label.setPosition(size.width/2, size.height/2 - 50);
		this.addChild(intro_Label);
		
		var playAgainNormal = new cc.Sprite(res.menu_png, cc.rect(378, 0, 126, 33));
		var playAgainSelected = new cc.Sprite(res.menu_png, cc.rect(378, 33, 126, 33));
		var playAgainDisabled = new cc.Sprite(res.menu_png, cc.rect(378, 33 * 2, 126, 33));
		
		var playAgain = new cc.MenuItemSprite(playAgainNormal, playAgainSelected, playAgainDisabled, function(){
			this.onResetGame();
		}.bind(this) );
		playAgain.scale = 2.0;

		var menu = new cc.Menu(playAgain);
		this.addChild(menu);
		menu.x = cc.winSize.width / 2;
		menu.y = 400;
		
		return true;
	},

	onResetGame:function(){
		cc.log("Game resets");
		this.removeFromParent();
		this.theGameLayer.init();
	},

/*	onAbout:function(){
		cc.log("About us");
	}*/
});
