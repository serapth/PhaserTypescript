/// <reference path="phaser.d.ts"/>
var SimpleGame = (function () {
    function SimpleGame() {
        this.game = new Phaser.Game(640, 480, Phaser.AUTO, 'content', {
            create: this.create, preload: this.preload, render: this.render
        });
    }
    SimpleGame.prototype.preload = function () {
        this.game.load.image("decepticon", "decepticon.png");
    };
    SimpleGame.prototype.render = function () {
    };
    SimpleGame.prototype.create = function () {
        var _this = this;
        this.sprite = this.game.add.sprite(0, 0, "decepticon");
        var tween = this.game.add.tween(this.sprite);
        tween.to({ x: 400 });

        tween.onStart.addOnce(function () {
            _this.sprite.scale.setMagnitude(0.5);
        });
        tween.onComplete.addOnce(function () {
            _this.game.add.tween(_this.sprite).to({ x: 0 }).start();
        }, this);
        tween.start();
    };
    return SimpleGame;
})();

window.onload = function () {
    var game = new SimpleGame();
};
//# sourceMappingURL=app.js.map
