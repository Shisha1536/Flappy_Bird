class GameOver {
    constructor({x, y, w, h, sX, sY, sW, sH, sprite, ctx, state, record, value}){
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
    draw(record, value){
        if (this.state.current == this.state.over) {
            ctx.drawImage(sprite, this.x, this.y, this.w, this.h, this.sX, this.sY, this.w, this.h)
            this.ctx.fillStyle = "#FFF";
            this.ctx.font = '25px Serif'
            this.ctx.fillText(value, 225, 176);
            this.ctx.fillText(record, 225, 218);

        }
    }
}