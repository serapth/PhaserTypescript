/// <reference path="phaser.d.ts"/>
var SimpleGame = (function () {
    function SimpleGame() {
        this.game = new Phaser.Game(640, 480, Phaser.AUTO, 'content', { create: this.create, preload: this.preload, render: this.render });
    }
    SimpleGame.prototype.preload = function () {
        // Load the image we are going to use for our particle
        this.game.load.image("particle", "particle.png");
    };
    SimpleGame.prototype.render = function () {
    };
    SimpleGame.prototype.create = function () {
        // Now we are creating the particle emitter, centered to the world
        this.emitter = this.game.add.emitter(this.game.world.centerX, this.game.world.centerY);

        // Make the particles for the emitter to emmit.  We use the key for the particle graphic we loaded earlier
        // We want 500 particles total
        this.emitter.makeParticles('particle', 1, 500, false, false);

        // And BOOM, emit all 500 particles at once with a life span of 10 seconds.
        this.emitter.explode(10000, 500);
    };
    return SimpleGame;
})();

window.onload = function () {
    var game = new SimpleGame();
};
//# sourceMappingURL=app.js.map
