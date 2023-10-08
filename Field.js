class Field {
    constructor({x, y, width, height, sX, sY, sWidth, sHeight, sprite, ctx}){
        this.x = x
        this.y = y
        this.width = width
        this.height = height

        this.sX = sX
        this.sY = sY
        this.sWidth =  sWidth
        this.sHeight = sHeight 

        this.sprite = sprite
        this.ctx = ctx
    }
    draw() {
        ctx.drawImage(sprite, this.x, this.y, this.width, this.height, this.sX, this.sHeight - this.height, this.width, this.height)
        ctx.drawImage(sprite, this.x, this.y, this.width, this.height, this.sX + this.width, this.sHeight - this.height, this.width, this.height)
    }
}