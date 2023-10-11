class GameOver {
    constructor({x, y, w, h, sX, sY, sW, sH, sprite, ctx, state}){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.sX = sX
        this.sY = sY
        this.sprite = sprite
        this.ctx = ctx
        this.state = state
    }
    draw(){
        if (this.state.current == this.state.over) {
            ctx.drawImage(sprite, this.x, this.y, this.w, this.h, this.sX, this.sY, this.w, this.h)
        }
    }
}