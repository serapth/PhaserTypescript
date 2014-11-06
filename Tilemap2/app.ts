/// <reference path="phaser.d.ts"/>
class SimpleGame {
    game: Phaser.Game;
    map: Phaser.Tilemap;
    player: Phaser.Sprite;
    
    constructor() {
        this.game = new Phaser.Game(640, 480, Phaser.AUTO, 'content', {
            create: this.create, preload:
            this.preload, render: this.render
        });
    }
    preload() {
        this.game.load.tilemap("ItsTheMap", "map.json", null, Phaser.Tilemap.TILED_JSON);
        this.game.load.image("Tiles", "castle_0.png");
        this.game.load.image("Decepticon", "decepticonLarge.png");
    }
    render() {

    }
    create() {
        this.map = this.game.add.tilemap("ItsTheMap", 32, 32, 50, 20);
        this.map.addTilesetImage("castle_0", "Tiles");

        this.map.createLayer("Background").resizeWorld();
        this.map.createLayer("Midground");
        this.map.createLayer("Foreground");

        this.player = new Phaser.Sprite(this.game,200,50,"Decepticon");

        var index: number;
        this.game.world.forEach((child) => {
            index++;
            if (child.layer.name = "Foreground")
                index = child.index;
        }, this, false);
        this.game.world.addAt(this.player, index);
    }
}

window.onload = () => {
    var game = new SimpleGame();
};
