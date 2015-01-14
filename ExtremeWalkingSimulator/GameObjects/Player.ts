module GameFromScratch {
    export enum PlayerState { IDLE, WALKING }

    export class Player extends Phaser.Sprite {
        game: Phaser.Game;
        playerState: PlayerState;
        RIGHT_ARROW: Phaser.Key;
        LEFT_ARROW: Phaser.Key;
        ESCAPE: Phaser.Key;
        walkingSpeed: number;

        public static MAX_SPEED: number = 30;

        constructor(game: Phaser.Game, x: number, y: number) {
            this.game = game;

            
            this.walkingSpeed = 0;

            //Wire up input handlers
            this.RIGHT_ARROW = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
            this.RIGHT_ARROW.onDown.add(Player.prototype.MoveRight, this);

            this.LEFT_ARROW = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
            this.LEFT_ARROW.onDown.add(Player.prototype.MoveLessRight, this);

            this.ESCAPE = this.game.input.keyboard.addKey(Phaser.Keyboard.ESC);
            this.ESCAPE.onDown.add(Player.prototype.GameOver, this);
            super(game, x, y, "HERO_WALKING", 0);

            this.anchor.set(0.0, 1.0);
            this.StartIdle();
        }

        update() {
            if (this.playerState == PlayerState.WALKING) {
                this.x += (this.walkingSpeed / Player.MAX_SPEED) * (60 / this.game.time.elapsedMS);

                // This logic depends on scene being added first.
                var stageWidth = this.game.stage.getChildAt(0).getBounds().width;
                if (this.x > stageWidth * .75)
                    this.x = stageWidth * .25;
            }
            super.update();
        }

        // Worse function name ever!
        MoveLessRight() {
            if (this.playerState != PlayerState.IDLE) {
                this.walkingSpeed--;
                if (this.walkingSpeed > 0)
                    this.animations.currentAnim.speed = this.walkingSpeed;
                else
                    this.StartIdle();
            }
        }

        MoveRight() {
            if (this.playerState == PlayerState.IDLE) {
                this.StartWalking();
            }
            else {
            if (this.walkingSpeed < Player.MAX_SPEED)
                this.walkingSpeed++;
                this.animations.currentAnim.speed = this.walkingSpeed;
            }
        }

        StartWalking() {
            this.playerState = PlayerState.WALKING;
            this.walkingSpeed = 5;
            this.loadTexture("HERO_WALKING", 0);
            this.animations.add("walk");
            this.animations.play("walk", this.walkingSpeed, true);
        }

        StartIdle() {
            this.loadTexture("HERO_IDLE", 0);
            this.playerState = PlayerState.IDLE;
            this.animations.add("Idle");
            this.animations.play("Idle",15,true);
        }

        GameOver() {
            this.game.state.start("GameOverState");
        }

    }
}