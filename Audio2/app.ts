/// <reference path="phaser.d.ts"/>
class SimpleGame {
    game: Phaser.Game;
    sound: Phaser.Sound;
    playButton: Phaser.Button;
    pauseButton: Phaser.Button;
    stopButton: Phaser.Button;
    volUpButton: Phaser.Button;
    volDownButton: Phaser.Button;
    muteButton: Phaser.Button;

    constructor() {
        this.game = new Phaser.Game(640, 480, Phaser.AUTO, 'content', { create: this.create, preload: this.preload, render: this.render });
    }
    preload() {
        this.game.load.audio("GameMusic", ["song.mp3", "song.ogg"]);
        this.game.load.image("button", "button.png", false);
    }
    render() {
        this.game.debug.soundInfo(this.sound, 0, 100);
    }
    create() {
        this.sound = this.game.add.audio('GameMusic');

        // Set up sound event handlers on the sound object
        this.sound.onPlay.add(() => {
            alert("Played");
        });
        this.sound.onPause.add(() => {
            alert("Paused");
        });

        // Play Button
        this.playButton = this.game.add.button(0, 0, "button", () => {
            if (this.sound.currentTime > 0)
                this.sound.resume();
            else
                this.sound.play();
        }
            , this);
        this.playButton.addChild(new Phaser.Text(this.game, 17, 18, "Play", { fill: '#ff0000' }));

        // Pause Button
        this.pauseButton = this.game.add.button(95, 0, "button", () => {
            this.sound.pause();
        }
            , this);
        this.pauseButton.addChild(new Phaser.Text(this.game, 12, 18, "Pause", { fill: '#ff0000' }));

        // Stop Button
        this.stopButton = this.game.add.button(190, 0, "button", () => {
            if (this.sound.isPlaying) {
                this.sound.stop();
                this.sound.currentTime = 0;
            }
        }
            , this);
        this.stopButton.addChild(new Phaser.Text(this.game, 17, 18, "Stop", { fill: '#ff0000' }));

        // Volume Up Button
        this.volUpButton = this.game.add.button(300, 0, "button", () => {
            this.sound.volume += 0.1;
        }
            , this);
        this.volUpButton.addChild(new Phaser.Text(this.game, 17, 18, "Vol +", { fill: '#ff0000' }));

        // Volume Down Button
        this.volDownButton = this.game.add.button(400, 0, "button", () => {
            this.sound.volume -= 0.1;
        }
            , this);
        this.volDownButton.addChild(new Phaser.Text(this.game, 17, 18, "Vol -", { fill: '#ff0000' }));

        // Mute Button
        this.volDownButton = this.game.add.button(500, 0, "button", () => {
            // Global mute!  Use this.sound.mute to mute a single sound
            this.game.sound.mute = !this.game.sound.mute;
        }
            , this);
        this.volDownButton.addChild(new Phaser.Text(this.game, 17, 18, "Mute", { fill: '#ff0000' }));
    }
}

window.onload = () => {
    var game = new SimpleGame();
};
