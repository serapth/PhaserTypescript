/// <reference path="phaser.d.ts"/>
var SimpleGame = (function () {
    function SimpleGame() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { create: this.create, preload: this.preload });
    }
    SimpleGame.prototype.preload = function () {
        this.game.load.image("title", "TitleScreen.png");
    };
    SimpleGame.prototype.create = function () {
        this.titleScreenImage = this.game.add.sprite(0, 0, "title");
    };
    return SimpleGame;
})();

window.onload = function () {
    var game = new SimpleGame();
};
//# sourceMappingURL=app.js.map
