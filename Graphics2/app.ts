/// <reference path="phaser.d.ts"/>
class SimpleGame {
    game: Phaser.Game;
    jetSprite: Phaser.Sprite;

    constructor() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { create: this.create, preload: this.preload });
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

        this.jetSprite.pivot.x = this.jetSprite.width / 2;
        this.jetSprite.pivot.y = this.jetSprite.height / 2;
        this.jetSprite.position.x = this.jetSprite.position.y = 0.0;
    }
}

window.onload = () => {
    var game = new SimpleGame();
};
