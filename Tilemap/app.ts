/// <reference path="phaser.d.ts"/>
class SimpleGame {
    game: Phaser.Game;
    map: Phaser.Tilemap;
    
    constructor() {
        this.game = new Phaser.Game(640, 480, Phaser.AUTO, 'content', {
            create: this.create, preload:
            this.preload, render: this.render
        });
    }
    preload() {
        this.game.load.tilemap("ItsTheMap", "map.json", null, Phaser.Tilemap.TILED_JSON);
        this.game.load.image("Tiles", "castle_0.png");
    }
    render() {

    }
    create() {
        this.map = this.game.add.tilemap("ItsTheMap", 32, 32, 50, 20);
        this.map.addTilesetImage("castle_0", "Tiles");

        this.map.createLayer("Background").resizeWorld();
        this.map.createLayer("Midground");
        this.map.createLayer("Foreground");
        
        
        this.game.camera.x = this.map.layers[0].widthInPixels / 2;
        this.game.camera.y = 0;

        this.game.add.tween(this.game.camera).to({ x: 0 }, 3000).to({ x: this.map.layers[0].widthInPixels }, 3000).loop().start();
    }
}

window.onload = () => {
    var game = new SimpleGame();
};
