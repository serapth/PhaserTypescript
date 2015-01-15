var Game;
(function (Game) {
    var ExtremeWalkingSimulator = (function () {
        function ExtremeWalkingSimulator() {
            this.game = new Phaser.Game(1280, 720, Phaser.AUTO, 'content', {
                create: this.create, preload: this.preload
            });
        }
        ExtremeWalkingSimulator.prototype.preload = function () {
            // Graphics
            this.game.load.image("title", "Graphics/TitleScreen.png");
            this.game.load.image("scene", "Graphics/scene720p.png");
            this.game.load.image("gameover", "Graphics/GameOver.png");

            //Spritesheets
            this.game.load.atlasXML("HERO_WALKING", "Graphics/Hero_Walking.png", "Graphics/Hero_Walking.xml");
            this.game.load.atlasXML("HERO_IDLE", "Graphics/Hero_Idle.png", "Graphics/Hero_Idle.xml");

            // Audio
            this.game.load.audio("TitleSong", ["Sounds/TitleSong.mp3", "Sounds/TitleSong.ogg", "Sounds/TitleSong.wav"]);
        };

        ExtremeWalkingSimulator.prototype.create = function () {
            this.game.state.add("TitleScreenState", GameFromScratch.TitleScreenState, true);
            this.game.state.add("GamePlayState", GameFromScratch.GamePlayState, false);
            this.game.state.add("GameOverState", GameFromScratch.GameOverState, false);

            this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        };
        return ExtremeWalkingSimulator;
    })();
    Game.ExtremeWalkingSimulator = ExtremeWalkingSimulator;
})(Game || (Game = {}));
window.onload = function () {
    var game = new Game.ExtremeWalkingSimulator();
};
//# sourceMappingURL=app.js.map
