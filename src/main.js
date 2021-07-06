/*

(Evan Lake, Alex Rugama, Mel Morris) Grog Run, 7/6/21, All artwork was made by team members, including animation and sound effects with the exception of the background music

*/

let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}
let game = new Phaser.Game(config);
//HI

//reserve keyboard vars
let keyF, keyR, keyUP, keyDOWN;

//set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;