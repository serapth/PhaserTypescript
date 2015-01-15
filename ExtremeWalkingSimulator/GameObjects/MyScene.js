var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var GameFromScratch;
(function (GameFromScratch) {
    var MyScene = (function (_super) {
        __extends(MyScene, _super);
        function MyScene(game, x, y) {
            _super.call(this, game, x, y, "scene", 0);
            this.nextFrame = new Phaser.Sprite(this.game, this.width, 0, "scene", 0);
            this.game.add.existing(this.nextFrame);
        }
        return MyScene;
    })(Phaser.Sprite);
    GameFromScratch.MyScene = MyScene;
})(GameFromScratch || (GameFromScratch = {}));
//# sourceMappingURL=MyScene.js.map
