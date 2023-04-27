/*
    Athena Patronas presenting
    Rocket Patrol meets Hampsters
    approx. 3.5 hours

    mods choosen:
    5pt Tier: 
        Increment Speed of Ships after 30 seconds  
       ** Implemented the 'FIRE UI' text from the original game
       ** Track a high score that persists across scenes and display it in UI
        Create a new scrolling tile sprite for the background
    10pt Tier:
        Parallax Scrolling
        Create a new Title
       ** Display time remaining in seconds on screen
    15pt Tier:
        Create a new Spaceship type that is smaller, faster, and worth more points
       ** Implement mouse control for player movement and mouse click to fire

*/
let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [Menu,Play]
}

let game = new Phaser.Game(config);

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;
let expert = false;

// reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT;