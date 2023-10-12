class Pipes {
    constructor({bottom, top, w, h, gap, sX, sY, sWidth, sHeight, sprite, ctx, dx, state}){
        this.bottom = bottom
        this.top = top
        this.w = w
        this.h = h

        this.sX = sX
        this.sY = sY
        this.sWidth =  sWidth
        this.sHeight = sHeight 

        this.sprite = sprite
        this.ctx = ctx
        this.dx = dx
        this.state = state
    }
    draw() {
        ctx.drawImage(sprite, this.x, this.y, this.width, this.height, this.sX, this.sHeight - this.height, this.width, this.height)
        ctx.drawImage(sprite, this.x, this.y, this.width, this.height, this.sX + this.width, this.sHeight - this.height, this.width, this.height)
    }
    update() {
        if (this.state.current == this.state.game) {
            this.sX = (this.sX - this.dx)%(this.width/2);
        }
    }
}