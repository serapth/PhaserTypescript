var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var GameFromScratch;
(function (GameFromScratch) {
    var GamePlayState = (function (_super) {
        __extends(GamePlayState, _super);
        function GamePlayState() {
            _super.call(this);
        }
        GamePlayState.prototype.preload = function () {
        };
        GamePlayState.prototype.create = function () {
            this.myScene = new GameFromScratch.MyScene(this.game, 0, 0);
            this.player = new GameFromScratch.Player(this.game, 0, this.game.height - 50);

            this.game.add.existing(this.myScene);
            this.game.add.existing(this.player);

            this.game.world.setBounds(0, 0, this.myScene.width * 2, this.myScene.height);
            this.game.camera.follow(this.player);
        };
        return GamePlayState;
    })(Phaser.State);
    GameFromScratch.GamePlayState = GamePlayState;
})(GameFromScratch || (GameFromScratch = {}));
//# sourceMappingURL=GamePlayState.js.map
