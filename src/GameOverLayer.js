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
			x: 0,
			y: 500
		});
		this.addChild(logo);
		
		var playAgainNormal = new cc.Sprite(res.menu_png, cc.rect(378, 0, 126, 33));
		var playAgainSelected = new cc.Sprite(res.menu_png, cc.rect(378, 33, 126, 33));
		var playAgainDisabled = new cc.Sprite(res.menu_png, cc.rect(378, 33 * 2, 126, 33));
		
		var playAgain = new cc.MenuItemSprite(playAgainNormal, playAgainSelected, playAgainDisabled, function(){
			this.onResetGame();
		}.bind(this) );

		var menu = new cc.Menu(playAgain);
		this.addChild(menu);
		menu.x = winSize.width / 2;
		menu.y = 220;
		
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
