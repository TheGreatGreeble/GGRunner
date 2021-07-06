// Rocket Prefab
class Ship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, maxHeight) {
        super(scene, x, y, texture, frame);
        //this.sfxRocket = scene.sound.add('sfx_digup');
        //add object to scene
        scene.add.existing(this);
        this.hasControl = true;

        this.maxHeight = maxHeight
        this.moveSpeed = 3;
        this.gravity = 1;
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
        if (this.y < this.startHeight - this.maxHeight || this.y > this.startHeight + this.maxHeight) {
            this.hasControl = false;
        } else if (this.y = this.startHeight) {
            this.hasControl = true;
        }

        let velocity = 0;
        console.log(velocity);

        if (keyDOWN.isDown && this.hasControl) {
            velocity += this.moveSpeed;
        } else if (keyUP.isDown && this.hasControl) {
            velocity -= this.moveSpeed;
        }

        if (this.y > this.startHeight) {
            console.log("gravity");
            velocity -= this.gravity;
        } else if (this.y < this.startHeight) {
            velocity += this.gravity;
            console.log("gravity");
        }

        this.y += velocity;
        /*
        //left/right movement
        if (!this.isFiring) {
            if (keyLEFT.isDown && this.x >= borderUISize + this.width) {
                this.x -= this.moveSpeed;
            } else if (keyRIGHT.isDown && this.x <= game.config.width - borderUISize - this.width) {
                this.x += this.moveSpeed;
            }
        }

        //fire button
        if(Phaser.Input.Keyboard.JustDown(keyF) && !this.isFiring) {
            this.isFiring = true;
            this.sfxRocket.play();
            this.anims.remove('mole_side');
            this.anims.create({
                key: 'mole_up',
                frames: this.anims.generateFrameNumbers(this.molesheet,{start: 4, end: 7, first: 4}),
                frameRate: 4,
                repeat: -1
            });
            this.anims.play('mole_up');
        }
        //if fired, move up
        if(this.isFiring && this.y >= borderUISize * 3 + borderPadding) {
            this.y -= this.moveSpeed;
        }
        // reset on miss
        if(this.y <= borderUISize * 3 + borderPadding) {
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
        */
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