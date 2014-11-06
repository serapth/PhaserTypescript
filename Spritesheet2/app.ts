/// <reference path="phaser.d.ts"/>
class SimpleGame {
    game: Phaser.Game;
    jet: Phaser.Sprite;

    constructor() {
        this.game = new Phaser.Game(640, 480, Phaser.AUTO, 'content', {
            create: this.create, preload:
            this.preload, render: this.render
        });
    }
    preload() {
        this.game.load.atlasXML("jet", "jet.png", "jet.xml");
    }
    render() {
    }
    create() {
        this.jet = this.game.add.sprite(0, 0, "jet", 0);
        // Make it bigger so we can see
        this.jet.scale.setMagnitude(3);
        this.jet.animations.add("fly");
        this.jet.animations.play("fly", 15,true);
    }
}

window.onload = () => {
    var game = new SimpleGame();
};
