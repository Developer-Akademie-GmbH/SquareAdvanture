let player; // 360 | 455
let jumpForce = 0;
let movement = 0;
let ground;
let platform;

function setup() {
    createCanvas(720, 480);
    player = createVector(width / 2, height - 50);
    platform = createVector(560, 370);
    ground = height - 50;
}

function draw() {
    background('DeepSkyBlue');
    rectMode(CENTER);
    fill('white');
    rect(player.x, player.y, 50, 50);
    fill('green');
    rect(platform.x, platform.y, 150, 20);

    player.y += jumpForce;
    player.x += movement;

    if (player.y >= ground) {
        jumpForce = 0;
    } else if (
        player.x + 25 >= platform.x - 75 &&
        player.x - 25 <= platform.x + 75 &&
        player.y + 25 >= platform.y - 10 &&
        player.y + 25 <= platform.y + 10
    ) {
        jumpForce = 0;
        player.y = platform.y - 35;
    } else {
        jumpForce += 0.5;
    }

    if (keyIsDown(32) && (player.y >= ground || player.y == platform.y - 35)) {
        jumpForce = -12;
    }


    if (keyIsDown(LEFT_ARROW)) {
        movement = -5;
    } else if (keyIsDown(RIGHT_ARROW)) {
        movement = +5;
    } else {
        movement = 0;
    }


}


