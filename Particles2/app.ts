/// <reference path="phaser.d.ts"/>

class SimpleGame {
    game: Phaser.Game;
    sound: Phaser.Sound;
    emitter: Phaser.Particles.Arcade.Emitter;
    sprite: Phaser.Sprite;

    constructor() {
        this.game = new Phaser.Game(640, 480, Phaser.AUTO, 'content', {
            create: this.create, preload: this.preload,
            update: this.update
        });
    }
    preload() {
        // This time we have 3 different particle graphics to use
        this.game.load.image("particle", "particle.png");
        this.game.load.image("particle2", "particle2.png");
        this.game.load.image("particle3", "particle3.png");

        this.game.load.image("logo", "gfslogo.png");
    }
    update() {
        // This checks for and handles collisions between our sprite and particles from the emitter
        this.game.physics.arcade.collide(this.sprite, this.emitter);
    }
    create() {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
            if ((new Date().getTime() - start) > 10000) {
                break;
            }
        }
        this.emitter = this.game.add.emitter(0, 0);
        // As you can see, you can pass in an array of keys to particle graphics
        this.emitter.makeParticles(['particle', 'particle2', 'particle3'], 1, 500, false, false);
        // Instead of exploding, you can also release particles as a stream
        // This one lasts 10 seconds, releases 20 particles of a total of 500
        // Which of the 3 graphics will be randomly chosen by the emitter
        this.emitter.start(false, 10000, 20, 500, true);

        // This line of code illustrates that you can move a particle emitter.  In this case, left to right across
        // The top of the screen.  Ignore details tweening for now if it's new, we will discuss later
        this.game.add.tween(this.emitter).to({ x: this.game.width }, 10000,null,true,0,1,true).start();

        // Let's create a sprite in the center of the screen
        this.sprite = this.game.add.sprite((this.game.width / 2) - 100, (this.game.height / 2) - 100, "logo");
        // We want it to be part of the physics of the world to give something for particles to respond to
        // Note, we will cover physics in more detail later ( after tweening perhaps... ;) )
        this.game.physics.enable(this.sprite);
        this.sprite.body.immovable = true;
    }
}

window.onload = () => {
    var game = new SimpleGame();
};
