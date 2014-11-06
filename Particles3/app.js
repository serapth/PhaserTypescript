/// <reference path="phaser.d.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
// Create our own Particle class
var MyParticle = (function (_super) {
    __extends(MyParticle, _super);
    // In the constructor, randomly pick a starting frame of animation so all the
    // birds arent animated at the same rate
    function MyParticle(game, x, y, key, frame) {
        this.currentFrame = Math.floor(Math.random() * MyParticle.MAX_FRAME);
        this.elapsedTime = 0;
        this.game = game;

        // Now call Particle's constructor, passing in the spritesheet and frame to use initially
        _super.call(this, game, x, y, "ss", this.currentFrame);
    }
    MyParticle.prototype.update = function () {
        _super.prototype.update.call(this);

        // Ever 100ms move to the next frame of animation
        this.elapsedTime += this.game.time.elapsed;
        if (this.elapsedTime >= 100) {
            this.currentFrame++;
            if (this.currentFrame > MyParticle.MAX_FRAME)
                this.currentFrame = 0;
            this.frame = this.currentFrame;
            this.elapsedTime = 0;
        }
    };
    MyParticle.MAX_FRAME = 22;
    return MyParticle;
})(Phaser.Particle);

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
    };
    return SimpleGame;
})();

window.onload = function () {
    var game = new SimpleGame();
};
//# sourceMappingURL=app.js.map
