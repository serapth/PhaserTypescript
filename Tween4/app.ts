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
        var tween = this.game.add.tween(this.sprite);
        tween.to({ x: 400 });

        tween.onStart.addOnce(() => {
            this.sprite.scale.setMagnitude(0.5);
        });
        tween.onComplete.addOnce(() => {
            this.game.add.tween(this.sprite).to({ x: 0 }).start();
            },this);
        tween.start();
    }
}

window.onload = () => {
    var game = new SimpleGame();
};
