//Poop prefab
class Poop extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, speed, fallSpeed) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.moveSpeed = speed;
        this.gravity = fallSpeed;
    }

    update() {
        // moves left
        this.x -= this.moveSpeed;
        this.y += this.gravity;

        if (this.y > scene.height/2) {
            this.destroy();
        }
    }

    reset() {
        this.x = game.config.width;
    }
}