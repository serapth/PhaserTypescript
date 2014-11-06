/// <reference path="phaser.d.ts"/>

// Demonstrate the use of arrow keys in a Phaser app
// This application demonstrates creation of a Cursor and polling for input
class SimpleGame {
    game: Phaser.Game;
    jetSprite: Phaser.Sprite;

    constructor() {
        this.game = new Phaser.Game(640, 480, Phaser.AUTO, 'content', {
            create: this.create, preload: this.preload
        });
    }

    preload() {
        var loader = this.game.load.image("jet", "jet.png");
    }

    create() {
        var image = <Phaser.Image>this.game.cache.getImage("jet");
        this.jetSprite = this.game.add.sprite(
            this.game.width / 2 - image.width / 2,
            this.game.height / 2 - image.height / 2,
            "jet");

        if (this.game.input.gamepad.supported && this.game.input.gamepad.active)
            alert("Gamepad");

        this.game.input.gamepad.onConnectCallback = () => {
            alert("Connected");
        }

        this.game.input.gamepad.onDownCallback = () => {
            alert("DFSDF");
        }
    }


}

window.onload = () => {
    var game = new SimpleGame();
};
