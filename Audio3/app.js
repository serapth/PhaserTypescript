/// <reference path="phaser.d.ts"/>
var SimpleGame = (function () {
    function SimpleGame() {
        this.game = new Phaser.Game(640, 480, Phaser.AUTO, 'content', { create: this.create, preload: this.preload, render: this.render });
    }
    SimpleGame.prototype.preload = function () {
        this.game.load.audio("sfx", ["GunSounds.ogg", "GunSounds.wav"]);
    };
    SimpleGame.prototype.render = function () {
        this.game.debug.soundInfo(this.sound, 0, 100);
    };
    SimpleGame.prototype.create = function () {
        var _this = this;
        this.sound = this.game.add.audio('sfx');
        this.sound.addMarker("gunCock", 0, 0.785);
        this.sound.addMarker("gunShoot", 0.786, 1.49);

        this.sound.play("gunCock");
        this.sound.onMarkerComplete.add(function () {
            _this.sound.play("gunShoot");
        });
    };
    return SimpleGame;
})();

window.onload = function () {
    var game = new SimpleGame();
};
//# sourceMappingURL=app.js.map
