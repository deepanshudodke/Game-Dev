let playerState = 'jump';
const dropdown = document.getElementById('animations');
dropdown.addEventListener('change', function (e) {
    playerState = e.target.value;
})
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
// ctx - Drawing object with multiple methods
console.log(ctx);
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image(); // To store sprite sheet
// It will create a html img element in memory 
playerImage.src = "../Assets/shadow_dog.png";

//let x = 0;

const spriteWidth = 575;
const spriteHeight = 523;

// let frameX = 0;
// let frameY = 0;
let gameFrame = 0;
const staggerFrame = 5;

const spriteAnimation = [];
const animationStates = [{
    name: 'idle',
    frames: 7,
},
{
    name: 'jump',
    frames: 7,
},
{
    name: 'fall',
    frames: 7,
},
{
    name: 'run',
    frames: 9,
},
{
    name: 'dizzy',
    frames: 11,
},
{
    name: 'sit',
    frames: 5,
},

{
    name: 'roll',
    frames: 7,
},
{
    name: 'bite',
    frames: 7,
},
{
    name: 'ko',
    frames: 12,
},
{
    name: 'getHit',
    frames: 4,
}
];

animationStates.forEach((state, index) => {
    let frames = {
        loc: [],
    }

    for (let j = 0; j < state.frames; j++) {
        let positionX = j * spriteWidth;
        let positionY = index * spriteHeight;
        frames.loc.push({ x: positionX, y: positionY });
    }

    spriteAnimation[state.name] = frames;
});

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    // Will clear the area starting with coordinate (x,y,widht,height)
    // Clear the whole area covering widht and height
    //ctx.fillRect(100, 50, 100, 100);
    let position = Math.floor(gameFrame / staggerFrame) % spriteAnimation[playerState].loc.length;
    let frameX = spriteWidth * position;
    let frameY = spriteAnimation[playerState].loc[position].y;
    ctx.drawImage(playerImage, frameX, frameY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
    //x++;
    // if (gameFrame % staggerFrame == 0) {
    //     if (frameX < 6) frameX++;
    //     else frameX = 0;
    // }

    gameFrame++;
    requestAnimationFrame(animate); // Call same function infinte
}

animate();