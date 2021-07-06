class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload() {
        // load images/spritesheets
        this.load.image('ship','./assets/Spaceship.png');
        this.load.image('dirt', './assets/dirt.png');
    }

    create() {
        //add background
        this.dirt = this.add.tileSprite(0,0,640,480, 'dirt').setOrigin(0,0);

        //add player
        this.p1ship = new Ship(this, game.config.width/4, game.config.height/2, 'ship', 60).setOrigin(0.5,0);
        

        //add obstacles

        //
    }

    update() {
        this.dirt.tilePositionX += 4;
        this.p1ship.update();
    }
}