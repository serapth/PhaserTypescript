/// <reference path="phaser.d.ts"/>
// Demonstrate the use of arrow keys in a Phaser app
// This application demonstrates creation of a Cursor and polling for input
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

        if (this.game.input.gamepad.supported && this.game.input.gamepad.active)
            alert("Gamepad");

        this.game.input.gamepad.onConnectCallback = function () {
            alert("Connected");
        };

        this.game.input.gamepad.onDownCallback = function () {
            alert("DFSDF");
        };
    };
    return SimpleGame;
})();

window.onload = function () {
    var game = new SimpleGame();
};
//# sourceMappingURL=app.js.map
