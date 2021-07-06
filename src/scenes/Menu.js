class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        // load audio
        //this.load.audio('sfx_select', './assets/sfx_select.wav');
        this.load.image('background', './assets/mainMenu.png');
        this.load.image('background2', './assets/completed_main.png');
    }

    create() {
        this.add.image(0,0, 'background2').setOrigin(0, 0);

        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        /*
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'Grog Run', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2, 'Use the UP and DOWN arrows to jump and dive', menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = '#00FF00';
        menuConfig.color = '#000'
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Press /\ for Novice or \/ for Expert', menuConfig).setOrigin(0.5);
        */
        // define keys
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyF)) {
          // easy mode
          game.settings = {
            foodSpeed: 3,
            gameTimer: 60    
          }
          //this.sound.play('sfx_select');
          this.scene.start('playScene');    
        }
        if (Phaser.Input.Keyboard.JustDown(keyDOWN)) {
          // hard mode
          game.settings = {
            foodSpeed: 4,
            gameTimer: 45    
          }
          //this.sound.play('sfx_select');
          this.scene.start('playScene');    
        }
    }
}