/// <reference path="phaser.d.ts"/>
class SimpleGame {
    game: Phaser.Game;
    titleScreenImage: Phaser.Sprite;

    constructor() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { create: this.create, preload: this.preload });
    }
    preload() {
        this.game.load.image("title", "TitleScreen.png");
    }
    create() {
        this.titleScreenImage = this.game.add.sprite(0, 0, "title");
    }
}

window.onload = () => {
    var game = new SimpleGame();
};
