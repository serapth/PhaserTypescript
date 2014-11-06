/// <reference path="phaser.d.ts"/>
var SimpleGame = (function () {
    function SimpleGame() {
        this.game = new Phaser.Game(640, 480, Phaser.AUTO, 'content', {
            create: this.create, preload: this.preload, render: this.render
        });
    }
    SimpleGame.prototype.preload = function () {
        // Load the spritesheet containing the frames of animation of our bird
        // The cells of animation are 240x314 and there are 22 of them
        this.game.load.spritesheet("ss", "robin.png", 240, 314, 22);
    };
    SimpleGame.prototype.render = function () {
    };
    SimpleGame.prototype.create = function () {
        this.bird = this.game.add.sprite(0, 0, "ss", 0);

        // Create an animation using all available frames
        this.bird.animations.add("fly");

        // Play the animation we just created at 10fps, looping forever
        this.bird.play("fly", 10, true);
    };
    return SimpleGame;
})();

window.onload = function () {
    var game = new SimpleGame();
};
//# sourceMappingURL=app.js.map
