/// <reference path="phaser.d.ts"/>
// In this example we illustrate input events can be applied to Sprites
var SimpleGame = (function () {
    function SimpleGame() {
        this.game = new Phaser.Game(640, 480, Phaser.AUTO, 'content', {
            create: this.create, preload: this.preload
        });
    }
    SimpleGame.prototype.preload = function () {
        var loader = this.game.load.image("jet", "jet.png");
    };

    SimpleGame.prototype.create = function () {
        var image = this.game.cache.getImage("jet");
        this.jetSprite = this.game.add.sprite(this.game.width / 2 - image.width / 2, this.game.height / 2 - image.height / 2, "jet");

        this.jetSprite.pivot.x = this.jetSprite.width / 2;
        this.jetSprite.pivot.y = this.jetSprite.height / 2;

        // First enable the sprite to receive input
        this.jetSprite.inputEnabled = true;

        // Then add an event handler for input over
        this.jetSprite.events.onInputOver.add(function () {
            alert("The mouse passed over the sprite!");
        });
    };
    return SimpleGame;
})();

window.onload = function () {
    var game = new SimpleGame();
};
//# sourceMappingURL=app.js.map
