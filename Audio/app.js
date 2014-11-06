/// <reference path="phaser.d.ts"/>
var SimpleGame = (function () {
    function SimpleGame() {
        this.game = new Phaser.Game(640, 480, Phaser.AUTO, 'content', { create: this.create, preload: this.preload });
    }
    SimpleGame.prototype.preload = function () {
        this.game.load.audio("GameMusic", ["song.mp3", "song.ogg"]);
    };
    SimpleGame.prototype.create = function () {
        this.sound = this.game.add.audio('GameMusic');
        this.sound.play();
    };
    return SimpleGame;
})();

window.onload = function () {
    var game = new SimpleGame();
};
//# sourceMappingURL=app.js.map
