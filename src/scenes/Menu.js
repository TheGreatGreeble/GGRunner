class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        // load audio
        //this.load.audio('sfx_select', './assets/sfx_select.wav');
        this.load.image('background', './assets/completed_main.png');
    }

    create() {
        this.add.image(0,0, 'background').setOrigin(0, 0);

        // define keys
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyF)) {
          // easy mode
          game.settings = {
            obsPerWave: 4,
            speed: 4
          }
          //this.sound.play('sfx_select');
          this.scene.start('playScene');    
        }
    }
}