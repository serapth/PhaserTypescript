/// <reference path="phaser.d.ts" />
declare module GameFromScratch {
    class TitleScreenState extends Phaser.State {
        public game: Phaser.Game;
        constructor();
        public titleScreenImage: Phaser.Sprite;
        public preload(): void;
        public create(): void;
        public titleClicked(): void;
    }
    class GameRunningState extends Phaser.State {
        constructor();
        public textValue: Phaser.Text;
        public updateCount: number;
        public create(): void;
        public update(): void;
        public render(): void;
    }
    class SimpleGame {
        public game: Phaser.Game;
        constructor();
    }
}
