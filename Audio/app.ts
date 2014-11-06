/// <reference path="phaser.d.ts"/>
class SimpleGame {
    game: Phaser.Game;
    sound: Phaser.Sound;

    constructor() {
        this.game = new Phaser.Game(640, 480, Phaser.AUTO, 'content', { create: this.create, preload: this.preload });
    }
    preload() {
        this.game.load.audio("GameMusic", ["song.mp3","song.ogg"]);
    }
    create() {
        this.sound = this.game.add.audio('GameMusic');
        this.sound.play();
    }
}

window.onload = () => {
    var game = new SimpleGame();
};
