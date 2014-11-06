class SimpleGame {

    constructor() {
        this.game = new Phaser.Game(800, 600, Phaser.WEBGL, 'content', {
            create: this.create, update: this.update,
        render: this.render});
    }

    game: Phaser.Game;
    textValue: Phaser.Text;
    updateCount: number;

    create() {
        var style = { font: "65px Arial", fill: "#ff0000", align: "center" };
        this.textValue = this.game.add.text(0, 0, "0", style);
        this.updateCount = 0;
    }

    update() {
        this.textValue.text = (this.updateCount++).toString();
    }

    render() {
        this.game.debug.text("This is drawn in render()", 0, 80);
    }
}

window.onload = () => {
    var game = new SimpleGame();
};