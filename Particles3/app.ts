/// <reference path="phaser.d.ts"/>


// Create our own Particle class
class MyParticle extends Phaser.Particle {
    elapsedTime: number;
    currentFrame: number;
    static MAX_FRAME: number = 22;
    game: Phaser.Game;

    // In the constructor, randomly pick a starting frame of animation so all the 
    // birds arent animated at the same rate
    constructor(game: Phaser.Game, x: number, y: number, key?: any, frame?: any) {
        this.currentFrame = Math.floor(Math.random() * MyParticle.MAX_FRAME);
        this.elapsedTime = 0;
        this.game = game;

        // Now call Particle's constructor, passing in the spritesheet and frame to use initially
        super(game, x, y, "ss", this.currentFrame);
    }

    update() {
        super.update();

        // Ever 100ms move to the next frame of animation
        this.elapsedTime += this.game.time.elapsed;
        if (this.elapsedTime >= 100) {
            this.currentFrame++;
            if (this.currentFrame > MyParticle.MAX_FRAME) this.currentFrame = 0;
            this.frame = this.currentFrame;
            this.elapsedTime = 0;
        }
    }
}

class SimpleGame {
    game: Phaser.Game;
    sound: Phaser.Sound;
    emitter: Phaser.Particles.Arcade.Emitter;

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
        // Now we are creating the particle emitter, centered to the world
        this.emitter = this.game.add.emitter(this.game.world.centerX, this.game.world.centerY);

        this.emitter.particleClass = MyParticle;
        this.emitter.makeParticles();
        
        // In this case, we dont want gravity affecting the birds and we dont want them to rotate
        this.emitter.gravity = 0;
        this.emitter.minRotation = 0;
        this.emitter.maxRotation = 0;

        // Now start emitting particles.  Total life of 1000 seconds, create one per 500ms ( 2/sec )
        // and create a total of 100 birds.
        this.emitter.start(false, 100000, 500, 100, true);
    }
}

window.onload = () => {
    var game = new SimpleGame();
};
