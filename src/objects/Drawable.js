"use strict";

const GameObject = require("./GameObject");

class Drawable extends GameObject {
    constructor (x, y) {
        super(x,y);
    }
    draw(){}
    update() {}
}

module.exports = Drawable;