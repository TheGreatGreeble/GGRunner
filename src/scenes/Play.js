class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload() {
        // load images/spritesheets
        this.load.image('ship','./assets/Spaceship.png');
        this.load.image('obsticle1', './assets/Spaceship.png');
        this.load.image('seagull', './assets/Spaceship.png');
        this.load.image('dirt', './assets/dirt.png');
    }

    create() {
        //keys
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);

        //add background
        this.dirt = this.add.tileSprite(0,0,640,480, 'dirt').setOrigin(0,0);

        //add player
        this.p1ship = new Ship(this, game.config.width/4, game.config.height/2, 'ship', 60).setOrigin(0.5,0);


        //

        
        //set up list of obsticles and seagulls
        this.obsticles = [];
        //add wave array
        //this.waveArray = [];

        //add timer to spawn waves of obsticles
        this.clock = this.time.addEvent({
            delay: 1500,
            loop: true,
            callback: () => {

                //determine which obsticle won't spawn, then the first height to spawn an obsticle
                let spawnGap = Math.round(Math.random() * game.settings.obsPerWave);
                let spawnHeight = game.config.height/10;
                
                for (let i = 0; i < game.settings.obsPerWave; i++) {
                    //spawn the obsticle if this is not the gap
                    
                    if (i != spawnGap) {
                        this.obsticles.unshift(new Obsticle(this, game.config.width, spawnHeight, ((spawnHeight > game.config.width/2) ? 'obsticle1': 'seagull'), 0, game.settings.speed ));
                    }

                    //proportion the next spawnheight to number of objects per wave
                    spawnHeight += (game.config.height)/(game.settings.obsPerWave)

                }
                /*
                //spawn a new wave and delete old ones
                this.waveArray.unshift( new Wave(this, "wave", game.config.width, 0) );
                if (this.waveArray.length > 5) {
                    this.waveArray.pop();
                }
                */
            }
        })

        // add Score and score timer
        this.score = 0;
        this.clock = this.time.addEvent({
            delay: 1000,
            repeat: true,
            callback: () => {
                //add to the score
                this.score += 100;
            }
        })
    }

    update() {
        //update
        this.dirt.tilePositionX += game.settings.speed;
        this.p1ship.update();
        //updates all obsticles, checks collision, and then deletes objects past the screen
        this.obsticles.forEach(function(item, index, array) {

            item.update();
            /* if (checkCollision(p1ship, item)) {

            } */
            if (item.x < 0 - item.width) {
                array.pop();
            }
        });
        //this.waveArray.forEach(function(item, index, array) {
        //    item.update();
        //});
        
    }

    checkCollision(ship, obsticle) {
        if (ship.x < obsticle.x + obsticle.width &&
            ship.x + ship.width > obsticle.x &&
            ship.y < obsticle.y + obsticle.height &&
            ship.y + ship.height > obsticle.y) {
                return true;
            } else {
                return false;
            }
    }
}