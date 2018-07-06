class GameObject {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    preUpdate(){}
    update(){}
    postUpdate(){}
    fixedUpdate(){}

}

module.exports = GameObject;