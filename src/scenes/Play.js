class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload() {
        // load images/spritesheets
        this.load.image('water', './assets/Water.png');
        this.load.spritesheet('ship', './assets/Whale and Ship Sprite Sheet.png', {frameWidth: 250, frameHeight: 125, startFrame: 0,
            endFrame: 5});
        
        this.load.spritesheet('bird', './assets/Seagull Sprite Sheet.png',{frameWidth: 100, frameHeight: 100, startFrame: 0,
            endFrame: 2});

        //load obstacles
        this.load.image('crate', './assets/ResizedCrate.png');

        //load Soundtrack
        this.load.audio('sfx_st', './assets/Tristan Lohengrin - Happy 8bit Loop 01.wav')
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

        this.anims.create({
            key: 'fly',
            frames: this.anims.generateFrameNumbers('bird', {start: 0, end: 2, first:0}),
            frameRate: 30
        });


        //add player
        this.p1ship = new Ship(this, game.config.width/6 + 62.5, game.config.height/2 - 60, 'ship').setOrigin(0,0);


        //add obstacles
        this.crate = new Obsticle(this, game.config.width - 50, game.config.height/2 - 30, 'crate').setOrigin(0,0);

        //add birds
        this.bird01 = new Bird(this, game.config.width - 75, 20 , 'bird').setOrigin(0, 0);

        //Play soundtrack///////(New)///////////////////////////////
        var music = this.sound.add('sfx_st');
        music.setLoop(true);
        music.play();
    }

    update() {
        this.ocean.tilePositionX += 4;
        this.p1ship.update();
    }
}