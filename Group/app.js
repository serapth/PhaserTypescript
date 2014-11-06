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
        this.group = this.game.add.group();

        var sprite1 = this.group.create(0, 0, "decepticon");
        this.group.create(100, 100, "decepticon");
        this.group.create(200, 200, "decepticon");

        sprite1.alive = false;
        this.group.forEachDead(function (entity) {
            entity.visible = false;
        }, this);

        this.game.add.tween(this.group).to({ x: 250 }, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true).start();
    };
    return SimpleGame;
})();

window.onload = function () {
    var game = new SimpleGame();
};
//# sourceMappingURL=app.js.map
