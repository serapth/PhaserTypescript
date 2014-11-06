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

    SimpleGame.prototype.moveLeft = function () {
        this.jetSprite.position.add(-1, 0);
    };
    SimpleGame.prototype.moveRight = function () {
        this.jetSprite.position.add(1, 0);
    };
    SimpleGame.prototype.moveUp = function (e) {
        if (e.ctrlKey) {
            this.jetSprite.position.add(0, -5);
        } else
            this.jetSprite.position.add(0, -1);
    };
    SimpleGame.prototype.moveDown = function (e) {
        if (e.ctrlKey) {
            this.jetSprite.position.add(0, 1);
        } else
            this.jetSprite.position.add(0, 1);
    };

    SimpleGame.prototype.create = function () {
        var image = this.game.cache.getImage("jet");
        this.jetSprite = this.game.add.sprite(this.game.width / 2 - image.width / 2, this.game.height / 2 - image.height / 2, "jet");

        this.W = this.game.input.keyboard.addKey(Phaser.Keyboard.W);

        //this.game.input.keyboard.addKeyCapture(Phaser.Keyboard.W);
        this.A = this.game.input.keyboard.addKey(Phaser.Keyboard.A);
        this.S = this.game.input.keyboard.addKey(Phaser.Keyboard.S);
        this.D = this.game.input.keyboard.addKey(Phaser.Keyboard.D);

        this.W.onDown.add(SimpleGame.prototype.moveUp, this);
        this.A.onDown.add(SimpleGame.prototype.moveLeft, this);
        this.S.onDown.add(SimpleGame.prototype.moveDown, this);
        this.D.onDown.add(SimpleGame.prototype.moveRight, this);
    };
    return SimpleGame;
})();

window.onload = function () {
    var game = new SimpleGame();
};
//# sourceMappingURL=app.js.map
