const Drawable = require("../Drawable");

class Sprite extends Drawable {
    constructor(spriteImage, spriteWidth, spriteHeight, x, y, context) {
        super(x, y);

        this.image = new Image;
        this.image.src = spriteImage;
        this.maxFrames = this.image.width/spriteWidth;

        this.spriteHeight = spriteHeight;
        this.spriteWidth = spriteWidth;

        this.frame = 0;
        this.direction = 2;
        this.context = context;
        this.drawRect = this.getDrawRect();
    }

    draw() {
        this.context.drawImage(this.image,
            this.drawRect.x, this.drawRect.y, this.drawRect.width, this.drawRect.height,
            this.x, this.y, this.spriteWidth, this.spriteHeight);
    }

    update() {
        ++this.frame;
        if(this.frame >= this.maxFrames)
        {
            this.frame = 0;
        }

        this.drawRect = this.getDrawRect();
    }

    fixedUpdate() {
        this.incDirection();
    }

    getDrawRect() {
        let x = this.spriteWidth*this.frame;
        let y = this.spriteHeight*this.direction;

        return {
            x: x,
            y: y,
            height: this.spriteHeight,
            width: this.spriteWidth
        }
    }

    incDirection() {
        ++this.direction;
        if(this.direction > 3)
        {
            this.direction = 0;
        }
    }
}

module.exports = Sprite;