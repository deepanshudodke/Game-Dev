/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');

const CANVAS_WIDHT = canvas.width = 500;
const CANVAS_HEIGHT = canvas.height = 700;

const numberOfEnemies = 50;
const enemiesArray = [];

// const enemyImage = new Image();
// enemyImage.src = 'enemy1.png';

let gameFrame = 0;
class Enemy {
    constructor() {
        this.image = new Image();
        this.image.src = 'enemy1.png';;


        this.speed = Math.random() * 4 - 2; // -2 to +2 random number
        this.spriteWidth = 293;
        this.spriteHeight = 155;
        this.width = this.spriteWidth / 2.5;
        this.x = Math.random() * (CANVAS_WIDHT - this.width);
        this.height = this.spriteHeight / 2.5;
        this.y = Math.random() * (CANVAS_HEIGHT - this.height);
        this.frame = 0;
        this.flapSpeed = Math.floor(Math.random() * 3 + 1);
    }

    update() {
        this.x += Math.random() * 5 - 2.5;
        this.y += Math.random() * 5 - 2.5;
        if (gameFrame % this.flapSpeed === 0)
            this.frame > 4 ? this.frame = 0 : this.frame++;
    }

    draw() {
        ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
    }
}

for (let i = 0; i < numberOfEnemies; i++) {
    enemiesArray.push(new Enemy());
}

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDHT, CANVAS_HEIGHT);
    enemiesArray.forEach(enemy => {
        enemy.draw();
        enemy.update();
    })
    gameFrame++;
    requestAnimationFrame(animate);
}

animate();