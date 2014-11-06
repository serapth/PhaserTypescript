/// <reference path="phaser.d.ts"/>
var SimpleGame = (function () {
    function SimpleGame() {
        this.game = new Phaser.Game(640, 480, Phaser.AUTO, 'content', { create: this.create, preload: this.preload, render: this.render });
    }
    SimpleGame.prototype.preload = function () {
        this.game.load.audio("GameMusic", ["song.mp3", "song.ogg"]);
        this.game.load.image("button", "button.png", false);
    };
    SimpleGame.prototype.render = function () {
        this.game.debug.soundInfo(this.sound, 0, 100);
    };
    SimpleGame.prototype.create = function () {
        var _this = this;
        this.sound = this.game.add.audio('GameMusic');

        // Set up sound event handlers on the sound object
        this.sound.onPlay.add(function () {
            alert("Played");
        });
        this.sound.onPause.add(function () {
            alert("Paused");
        });

        // Play Button
        this.playButton = this.game.add.button(0, 0, "button", function () {
            if (_this.sound.currentTime > 0)
                _this.sound.resume();
            else
                _this.sound.play();
        }, this);
        this.playButton.addChild(new Phaser.Text(this.game, 17, 18, "Play", { fill: '#ff0000' }));

        // Pause Button
        this.pauseButton = this.game.add.button(95, 0, "button", function () {
            _this.sound.pause();
        }, this);
        this.pauseButton.addChild(new Phaser.Text(this.game, 12, 18, "Pause", { fill: '#ff0000' }));

        // Stop Button
        this.stopButton = this.game.add.button(190, 0, "button", function () {
            if (_this.sound.isPlaying) {
                _this.sound.stop();
                _this.sound.currentTime = 0;
            }
        }, this);
        this.stopButton.addChild(new Phaser.Text(this.game, 17, 18, "Stop", { fill: '#ff0000' }));

        // Volume Up Button
        this.volUpButton = this.game.add.button(300, 0, "button", function () {
            _this.sound.volume += 0.1;
        }, this);
        this.volUpButton.addChild(new Phaser.Text(this.game, 17, 18, "Vol +", { fill: '#ff0000' }));

        // Volume Down Button
        this.volDownButton = this.game.add.button(400, 0, "button", function () {
            _this.sound.volume -= 0.1;
        }, this);
        this.volDownButton.addChild(new Phaser.Text(this.game, 17, 18, "Vol -", { fill: '#ff0000' }));

        // Mute Button
        this.volDownButton = this.game.add.button(500, 0, "button", function () {
            // Global mute!  Use this.sound.mute to mute a single sound
            _this.game.sound.mute = !_this.game.sound.mute;
        }, this);
        this.volDownButton.addChild(new Phaser.Text(this.game, 17, 18, "Mute", { fill: '#ff0000' }));
    };
    return SimpleGame;
})();

window.onload = function () {
    var game = new SimpleGame();
};
//# sourceMappingURL=app.js.map
