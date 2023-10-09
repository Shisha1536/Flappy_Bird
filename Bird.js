class Bird {
    constructor({x, y, width, height, frames, sprite, ctx, frameIndex, state}){
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.frames = frames
        this.sprite = sprite
        this.ctx = ctx
        this.frameIndex = frameIndex
        this.state = state
    }
    draw() {
        ctx.drawImage(
            sprite,
            this.frames[this.frameIndex].sX,
            this.frames[this.frameIndex].sY,
            this.width,
            this.height,
            
            this.x - this.width/2,
            this.y - this.height/2,
            this.width,
            this.height)
    }
    update() {
       let period = this.state.current == this.state.getReady ? 10 : 5;
        this.frameIndex += this.frames%period == 0 ? 1: 0;
        this.frameIndex = this.frameIndex%this.frames.length;
    }
    flap() {

    } 
}   