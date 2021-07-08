//Seagull prefab
class Seagull extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, speed, interval) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.moveSpeed = speed;
        this.poopInterval = interval;
        /*
        this.clock = this.scene.time.addEvent({
            delay: (interval * 1000),
            callback: () => {
                //Spawn Poop

            }
        })
        */
    }

    update() {
        // moves left
        this.x -= this.moveSpeed;
    }

    reset() {
        this.x = game.config.width;
    }
}