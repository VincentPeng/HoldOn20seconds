
// pre game layer
var preGameLayer = cc.Layer.extend({
	theGameLayer:null,
	
	ctor:function (myGameLayer) {
		//////////////////////////////
		// 1. super init first
		
		this._super();
		this.theGameLayer = myGameLayer;
		var intro_Label = new cc.LabelTTF('Move the plane to avoid bullets',  'Times New Roman', 40, cc.size(600,80), cc.TEXT_ALIGNMENT_CENTER);
		var size = cc.winSize;
		intro_Label.setPosition(size.width/2, size.height/2 + 200.0);
		this.addChild(intro_Label);
		
		var newGameNormal = new cc.Sprite(res.menu_png, cc.rect(0, 0, 126, 33));
		var newGameSelected = new cc.Sprite(res.menu_png, cc.rect(0, 33, 126, 33));
		var newGameDisabled = new cc.Sprite(res.menu_png, cc.rect(0, 33 * 2, 126, 33));
		
		var aboutNormal = new cc.Sprite(res.menu_png, cc.rect(252, 0, 126, 33));
		var aboutSelected = new cc.Sprite(res.menu_png, cc.rect(252, 33, 126, 33));
		var aboutDisabled = new cc.Sprite(res.menu_png, cc.rect(252, 33 * 2, 126, 33));
		
		var newGame = new cc.MenuItemSprite(newGameNormal, newGameSelected, newGameDisabled, function () {
			//this.onButtonEffect();
			this.onNewGame();
			//flareEffect(flare, this, this.onNewGame);
		}.bind(this))
		var about = new cc.MenuItemSprite(aboutNormal, aboutSelected, aboutDisabled, this.onAbout, this);
		
		newGame.scale = 2.0;
		about.scale = 2.0;
		
		var menu = new cc.Menu(newGame,about);
		menu.alignItemsVerticallyWithPadding(20);
		
		menu.x = cc.winSize.width / 2;
		menu.y = cc.winSize.height / 2 - 220;
		this.addChild(menu);
//		this.init();
		return true;
	},
	
	onNewGame:function(){
		cc.log("Game starts");
		this.removeFromParent();
		this.theGameLayer.init();
	},
	
	onAbout:function(){
		cc.log("About us");
	}
});

