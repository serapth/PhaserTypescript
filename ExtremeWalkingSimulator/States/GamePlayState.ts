module GameFromScratch {
    export class GamePlayState extends Phaser.State {
        game: Phaser.Game;
        player: GameFromScratch.Player;
        myScene: GameFromScratch.MyScene;

        constructor() {
            super();
        }

        preload() {
        }
        create() {
            this.myScene = new MyScene(this.game, 0, 0);
            this.player = new Player(this.game, 0, this.game.height - 50);

            this.game.add.existing(this.myScene);
            this.game.add.existing(this.player);

            this.game.world.setBounds(0,0,this.myScene.width * 2, this.myScene.height);
            this.game.camera.follow(this.player);
        }
    }
}