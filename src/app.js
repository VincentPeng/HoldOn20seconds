var gameScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new gameLayer();
        var preLayer = new PreGameLayer(layer);
        this.addChild(layer);
        this.addChild(preLayer);
    }
});

