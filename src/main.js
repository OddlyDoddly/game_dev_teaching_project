const Sprite = require('./objects/impl/Sprite');

// Create the canvas
let ctx = null;
let canvas = document.createElement('canvas');
canvas.width = 1280;
canvas.height = 720;

let fps = 24;

let ch = canvas.height;
let cw = canvas.width;

// Append the canvas to HTML
document.body.appendChild(canvas);

let gameObjects = [];
function gameLoop() {
    PreUpdate();
    Clear();
    Update();
    Draw();
    PostUpdate();
}

function Draw() {
    // Draw Map

    // Draw GameObjects
    gameObjects.forEach((gameObject) => {
        gameObject.draw();
    });
}

function Clear() { ctx.clearRect(0, 0, cw, ch); }
function PreUpdate() { gameObjects.forEach((gameObject) => gameObject.preUpdate()) }
function Update() { gameObjects.forEach((gameObject) => gameObject.update()); }
function PostUpdate() { gameObjects.forEach((gameObject) => gameObject.postUpdate()); }
function FixedUpdate() { gameObjects.forEach((gameObject) => gameObject.fixedUpdate()); }

if(typeof(canvas.getContext) !== undefined)
{
    ctx = canvas.getContext("2d");

    let sprite = new Sprite("data/gfx/sprites/sprite1.png", 16, 32, 10, 10, ctx);
    gameObjects.push(sprite);

    setInterval(gameLoop, 1000/fps);
    setInterval(FixedUpdate, 1000) // Runs every half second
}