// Rocket Prefab
class Ship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, maxHeight) {
        super(scene, x, y, texture, frame);
        //this.sfxRocket = scene.sound.add('sfx_digup');
        //add object to scene
        scene.add.existing(this);
        this.hasControl = true;
        this.SKIM = 0;
        this.JUMP = 1;
        this.DIVE = 2;
        this.action = this.SKIM;

        this.maxHeight = maxHeight;
        this.moveSpeed = 6;
        this.gravity = 3;
        this.molesheet = texture;
        this.startHeight = y;
        /*
        this.anims.create({
            key: 'mole_side',
            frames: this.anims.generateFrameNumbers(texture,{start: 0, end: 3, first: 0}),
            frameRate: 4,
            repeat: -1
        });
        this.anims.play('mole_side');
        */
    }

    update() {

        let velocity = 0;
        console.log(velocity);

        //Input
        if (Phaser.Input.Keyboard.JustDown(keyUP) && this.action == this.SKIM) {
            this.action = this.JUMP;
        } else if (Phaser.Input.Keyboard.JustDown(keyDOWN) && this.action == this.SKIM) {
            this.action = this.DIVE;
        }

        if (this.action == this.JUMP) {
            if (Phaser.Input.Keyboard.JustUp(keyUP)) {
                this.hasControl = false;
            }
            if (keyUP.isDown && this.hasControl) {
                velocity -= this.moveSpeed;    
            }
        } else if (this.action == this.DIVE) {
            if (Phaser.Input.Keyboard.JustUp(keyDOWN)) {
                this.hasControl = false;
            }
            if (keyDOWN.isDown && this.hasControl) {
                velocity += this.moveSpeed;    
            }
        }

        if (this.y > this.startHeight) {
            console.log("gravity -");
            velocity -= this.gravity;
        } else if (this.y < this.startHeight) {
            velocity += this.gravity;
            console.log("gravity +");
        }
        this.y += velocity;

        if (this.y == this.startHeight) {
            this.action = this.SKIM;
            this.hasControl = true;
        }
    }

    //resets rocket to the ground
    reset() {
        this.isFiring = false;
        this.y = game.config.height - borderUISize - borderPadding*3;
        this.anims.remove('mole_up');
            this.anims.create({
                key: 'mole_side',
                frames: this.anims.generateFrameNumbers(this.molesheet,{start: 0, end: 3, first: 0}),
                frameRate: 4,
                repeat: -1
            });
            this.anims.play('mole_side');
    }
}