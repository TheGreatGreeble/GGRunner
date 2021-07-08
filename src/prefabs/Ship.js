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
        this.shouldGrav = true; //should gravity be on
        this.gravity = 4; // gravity magnitude
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

        //take in initial action inputs
        if (Phaser.Input.Keyboard.JustDown(keyUP) && this.action == this.SKIM) {
            this.action = this.JUMP;
        } else if (Phaser.Input.Keyboard.JustDown(keyDOWN) && this.action == this.SKIM) {
            this.action = this.DIVE;
        }

        //d
        if (this.action == this.JUMP) {
            if (Phaser.Input.Keyboard.JustUp(keyUP)) {
                this.hasControl = false;

                //adds time in air so player doesn't go down immediatly
                this.shouldGrav = false;
                this.clock = this.scene.time.addEvent({
                    delay: 500,
                    callback: () => {
                        this.shouldGrav = true;
                    }       
                })
            }
            if (keyUP.isDown && this.hasControl) {
                velocity -= this.moveSpeed;    
            }
        } else if (this.action == this.DIVE) {
            if (Phaser.Input.Keyboard.JustUp(keyDOWN)) {
                this.hasControl = false;
                this.shouldGrav = false;
                this.clock = this.scene.time.addEvent({
                    delay: 500,
                    callback: () => {
                        this.shouldGrav = true;
                    }       
                })
            }
            if (keyDOWN.isDown && this.hasControl) {
                velocity += this.moveSpeed;    
            }
        }

        //stops the player from flying off screen
        if (this.y < 0 || this.y > this.startHeight*2) {
            this.hasControl = false;
        }



        //adds gravity to velocity
        //halfs gravity if the key is down
        if (this.y > this.startHeight && this.shouldGrav) {
            velocity -= (keyDOWN.isDown ? (this.gravity/3) : (this.gravity));
        } else if (this.y < this.startHeight && this.shouldGrav) {
            velocity += (keyUP.isDown ? (this.gravity/3) : (this.gravity));
        }

        //moves player by velocity
        this.y += velocity;

        //resets controls if at sea level
        if (this.y < this.startHeight + 5 && this.y > this.startHeight - 5) {
            this.y = this.startHeight;
            this.action = this.SKIM;
            this.hasControl = true;
        }
    }
}