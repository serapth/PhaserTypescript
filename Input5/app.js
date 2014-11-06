/// <reference path="phaser.d.ts"/>
// This code demonstrates polling for touch or mouse clicks
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
        var _this = this;
        var image = this.game.cache.getImage("jet");
        this.jetSprite = this.game.add.sprite(this.game.width / 2 - image.width / 2, this.game.height / 2 - image.height / 2, "jet");

        this.jetSprite.pivot.x = this.jetSprite.width / 2;
        this.jetSprite.pivot.y = this.jetSprite.height / 2;

        // You can handle mouse input by registering a callback as well
        // The following registers a callback that will be called each time the mouse is moved
        this.game.input.moveCallback = function (pointer, x, y) {
            _this.jetSprite.position.set(x, y);
        };

        // This one registers a mouse click handler that will be called
        this.game.input.onDown.add(SimpleGame.prototype.mouseDown);
    };

    SimpleGame.prototype.mouseDown = function (event) {
        alert("Mouse is down " + event.button);
    };
    return SimpleGame;
})();

window.onload = function () {
    var game = new SimpleGame();
};
//# sourceMappingURL=app.js.map
