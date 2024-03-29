cc.game.onStart = function(){
    cc.view.adjustViewPort(true);
    cc.view.setDesignResolutionSize(640, 960, cc.ResolutionPolicy.FIXED_WIDTH);
    cc.view.resizeWithBrowserSize(true);
    //load resources
    cc.LoaderScene.preload(g_resources, function () {
    	cc.director.runScene(new gameScene());
    }, this);
};
cc.game.run();