/// <reference path="phaser.d.ts"/>
var SimpleGame = (function () {
    function SimpleGame() {
        this.game = new Phaser.Game(640, 480, Phaser.AUTO, 'content', {
            create: this.create, preload: this.preload, render: this.render
        });
    }
    SimpleGame.prototype.preload = function () {
        this.game.load.atlasXML("jet", "jet.png", "jet.xml");
    };
    SimpleGame.prototype.render = function () {
    };
    SimpleGame.prototype.create = function () {
        this.jet = this.game.add.sprite(0, 0, "jet", 0);

        // Make it bigger so we can see
        this.jet.scale.setMagnitude(3);
        this.jet.animations.add("fly");
        this.jet.animations.play("fly", 15, true);
    };
    return SimpleGame;
})();

window.onload = function () {
    var game = new SimpleGame();
};
//# sourceMappingURL=app.js.map
