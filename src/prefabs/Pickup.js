//Pickup prefab
class Pickup extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, speed) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.moveSpeed = speed;
    }

    update() {
        // moves left
        this.x -= this.moveSpeed;

        if (this.x < 0) {
            this.destroy();
        }
        
    }

    reset() {
        this.x = game.config.width;
    }
}