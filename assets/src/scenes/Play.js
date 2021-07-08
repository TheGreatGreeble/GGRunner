class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload() {
        // load images/spritesheets
        this.load.image('ship','./assets/Spaceship.png');
        this.load.image('water', './assets/loopingBackground.png');

    }

    create() {
        //keys
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);

        //add background
        this.ocean = this.add.tileSprite(0,0,640,480, 'water').setOrigin(0,0);

        //Animation config
        this.anims.create({
            key: 'sail',
            frames: this.anims.generateFrameNumbers('ship', {start: 0, end: 5, first:0}),
            frameRate: 30
        });

        //add player
        this.p1ship = new Ship(this, game.config.width/4, game.config.height/2, 'ship').setOrigin(0,0);
  


    }

    update() {
        this.ocean.tilePositionX += 4;
        this.p1ship.update();
    }
}