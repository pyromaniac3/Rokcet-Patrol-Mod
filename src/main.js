/*
    Athena Patronas presenting
    Rocket Patrol meets Hampsters
    approx. 8 hours

    mods choosen:
    5pt Tier: 
        + Increment Speed of Ships after 30 seconds  
        + Create a new scrolling tile sprite for the background
        + Control Rocket After Freed
    10pt Tier:
        + Parallax Scrolling
        + Create a new Title
        + Using a texture atlas create a new animated sprite for spaceships enemies
        + Display time remaining in seconds on screen
    15pt Tier:
        + Create a new Spaceship type that is smaller, faster, and worth more points
        + Add time for each hit
        + Phaser Particle Emitter on exploded ship

    CITATIONS:
        - Phaser Examples from the phaser help center examples: specifically the particle 
          emitter explode emitter
        - Texture atlas upload help from Jonah Ryan
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