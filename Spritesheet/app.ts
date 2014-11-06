/// <reference path="phaser.d.ts"/>
class SimpleGame {
    game: Phaser.Game;
    bird: Phaser.Sprite;

    constructor() {
        this.game = new Phaser.Game(640, 480, Phaser.AUTO, 'content', {
            create: this.create, preload:
            this.preload, render: this.render
        });
    }
    preload() {
        // Load the spritesheet containing the frames of animation of our bird
        // The cells of animation are 240x314 and there are 22 of them
        this.game.load.spritesheet("ss", "robin.png", 240, 314, 22);
    }
    render() {
    }
    create() {
        this.bird = this.game.add.sprite(0, 0, "ss", 0);
        // Create an animation using all available frames
        this.bird.animations.add("fly");
        // Play the animation we just created at 10fps, looping forever
        this.bird.play("fly", 10, true);
    }
}

window.onload = () => {
    var game = new SimpleGame();
};
