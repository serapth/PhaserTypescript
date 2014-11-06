var SimpleGame = (function () {
    function SimpleGame() {
        this.game = new Phaser.Game(800, 600, Phaser.WEBGL, 'content', {
            create: this.create, update: this.update,
            render: this.render });
    }
    SimpleGame.prototype.create = function () {
        var style = { font: "65px Arial", fill: "#ff0000", align: "center" };
        this.textValue = this.game.add.text(0, 0, "0", style);
        this.updateCount = 0;
    };

    SimpleGame.prototype.update = function () {
        this.textValue.text = (this.updateCount++).toString();
    };

    SimpleGame.prototype.render = function () {
        this.game.debug.text("This is drawn in render()", 0, 80);
    };
    return SimpleGame;
})();

window.onload = function () {
    var game = new SimpleGame();
};
//# sourceMappingURL=app.js.map
