/// <reference path="phaser.d.ts"/>
class SimpleGame {
    game: Phaser.Game;
    sprite: Phaser.Sprite;
    
    constructor() {
        this.game = new Phaser.Game(640, 480, Phaser.AUTO, 'content', {
            create: this.create, preload:
            this.preload, render: this.render
        });
    }
    preload() {
        this.game.load.image("decepticon", "decepticon.png");
        
    }
    render() {
    }
    create() {
        this.sprite = this.game.add.sprite(0, 0, "decepticon");
        this.game.add.tween(this.sprite).to({ x: 400 }, 5000, Phaser.Easing.Linear.None, true, 0, Number.MAX_VALUE, true);
    }
}

window.onload = () => {
    var game = new SimpleGame();
};
