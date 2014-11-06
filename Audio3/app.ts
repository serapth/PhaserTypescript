/// <reference path="phaser.d.ts"/>
class SimpleGame {
    game: Phaser.Game;
    sound: Phaser.Sound;

    constructor() {
        this.game = new Phaser.Game(640, 480, Phaser.AUTO, 'content', { create: this.create, preload: this.preload, render: this.render });
    }
    preload() {
        this.game.load.audio("sfx", ["GunSounds.ogg", "GunSounds.wav"]);
    }
    render() {
        this.game.debug.soundInfo(this.sound, 0, 100);
    }
    create() {
        this.sound = this.game.add.audio('sfx');
        this.sound.addMarker("gunCock", 0, 0.785);
        this.sound.addMarker("gunShoot", 0.786, 1.49);

        this.sound.play("gunCock");
        this.sound.onMarkerComplete.add(() => {
            this.sound.play("gunShoot");
        });
    }
}

window.onload = () => {
    var game = new SimpleGame();
};
