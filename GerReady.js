class GetReady {
    constructor({x, y, w, h, sX, sY, sW, sH, sprite, ctx}){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.sX = sX
        this.sY = sY
        this.sW = sW
        this.sH = sH
        this.sprite = sprite
        this.ctx = ctx
    }
    draw(){
        ctx.drawImage(sprite, this.x, this.y, this.w, this.h, this.sX, this.sY, this.w, this.h)
    }
}