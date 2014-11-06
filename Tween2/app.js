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
        this.sprite = this.game.add.sprite(0, 0, "decepticon");
        this.game.add.tween(this.sprite).to({ x: 400 }, 5000, Phaser.Easing.Elastic.InOut, true, 0, Number.MAX_VALUE, true);
    };
    return SimpleGame;
})();

window.onload = function () {
    var game = new SimpleGame();
};
//# sourceMappingURL=app.js.map
