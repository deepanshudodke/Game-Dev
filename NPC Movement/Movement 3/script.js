/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');

const CANVAS_WIDHT = canvas.width = 500;
const CANVAS_HEIGHT = canvas.height = 700;

const numberOfEnemies = 10;
const enemiesArray = [];

// const enemyImage = new Image();
// enemyImage.src = 'enemy1.png';

let gameFrame = 0;
class Enemy {
    constructor() {
        this.image = new Image();
        this.image.src = 'enemy3.png';;


        this.speed = Math.random() * 4 + 1; // -2 to +2 random number
        this.spriteWidth = 218;
        this.spriteHeight = 177;
        this.width = this.spriteWidth / 2;
        this.x = Math.random() * (CANVAS_WIDHT - this.width);
        this.height = this.spriteHeight / 2;
        this.y = Math.random() * (CANVAS_HEIGHT - this.height);
        this.frame = 0;
        this.flapSpeed = Math.floor(Math.random() * 3 + 1);
        this.angle = 0;
        this.angleSpeed = Math.random() * 1.5 + 0.5;
        this.curve = Math.random() * 200 + 50;
    }

    update() {
        this.x = canvas.width / 2 * Math.sin(this.angle * Math.PI / 90) + canvas.width / 2 - this.width / 2;
        this.y = canvas.height / 2 * Math.cos(this.angle * Math.PI / 270) + canvas.width / 2 - this.width / 2;
        this.angle += this.angleSpeed;

        if (this.x + this.width < 0) {
            this.x = canvas.width
        }
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