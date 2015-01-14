module GameFromScratch {
    export class GameOverState extends Phaser.State {
        game: Phaser.Game;
        gameOverSprite: Phaser.Sprite;

        constructor() {
            super();
        }

        preload() {
        }
        create() {
            this.gameOverSprite = this.add.sprite(0, 0, "gameover", 0);
            this.gameOverSprite.scale.setTo(this.game.width / this.gameOverSprite.width, this.game.height / this.gameOverSprite.height);

            this.input.onDown.add(() => {
                    this.game.state.start("TitleScreenState", true);
                },
                this);;
        }
    }
}